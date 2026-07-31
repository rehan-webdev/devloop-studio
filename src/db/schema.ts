import type { ObjectId } from "mongodb";

/** The two types of inbound leads captured by forms. */
export type LeadType = "project" | "newsletter";

/** A lead document as stored in MongoDB. */
export interface Lead {
  _id?: ObjectId;
  type: LeadType;
  name: string;
  email: string;
  company: string | null;
  budget: string | null;
  projectType: string | null;
  timeline: string | null;
  message: string | null;
  createdAt: Date;
}

/** Shape used when inserting a new lead (no _id, createdAt auto-set). */
export type NewLead = Omit<Lead, "_id" | "createdAt">;

/** MongoDB collection name for leads. */
export const LEADS_COLLECTION = "leads";
