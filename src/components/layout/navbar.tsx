"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { buttonClasses } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-ink-900/10 bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        className="site-container flex h-18 items-center justify-between"
        aria-label="Main navigation"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-ink-900/5 text-ink-900"
                      : "text-ink-600 hover:bg-ink-900/5 hover:text-ink-900"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={buttonClasses("primary", "sm", "hidden sm:inline-flex")}
          >
            Book a free call
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-ink-900/15 text-ink-900 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden border-t border-ink-900/10 bg-cream lg:hidden"
          >
            <ul className="site-container flex flex-col gap-1 py-6">
              {[...site.nav, { label: "Contact", href: "/contact" }].map(
                (item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-xl px-3 py-3 font-display text-2xl font-medium text-ink-900 transition-colors hover:bg-ink-900/5"
                    >
                      {item.label}
                      <ArrowUpRight className="size-5 text-brand-600" aria-hidden />
                    </Link>
                  </motion.li>
                )
              )}
              <li className="mt-4 px-3">
                <Link
                  href="/contact"
                  className={buttonClasses("primary", "lg", "w-full")}
                >
                  Book a free call
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
