import { MongoClient, type Db } from "mongodb";
import dotenv from "dotenv";

// In development, attempt to load environment variables from .env files
if (!process.env.MONGODB_URI && process.env.NODE_ENV !== "production") {
  dotenv.config({ path: ".env.local" });
  dotenv.config();
}

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI environment variable is required");
}

const dbName = process.env.MONGODB_DB || "devloop";

const globalForMongo = globalThis as typeof globalThis & {
  __mongoClient?: MongoClient;
  __mongoClientPromise?: Promise<MongoClient>;
};

/** Cached MongoClient — reused across hot reloads in development. */
function getClientPromise(): Promise<MongoClient> {
  if (globalForMongo.__mongoClientPromise) {
    return globalForMongo.__mongoClientPromise;
  }

  const client = new MongoClient(uri as string);
  const promise = client
    .connect()
    .catch((err) => {
      // Surface connection errors with helpful context
      // so logs show why the DB connection failed.
      // Re-throw so callers still receive the error.
      // eslint-disable-next-line no-console
      console.error("[db] MongoClient.connect() failed:", err);
      throw err;
    });

  // Cache the promise (and client) to avoid creating multiple connections
  // during hot reloads in development.
  if (process.env.NODE_ENV !== "production") {
    globalForMongo.__mongoClient = client;
    globalForMongo.__mongoClientPromise = promise;
  }

  return promise;
}

/** Returns the application database instance. */
export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}
