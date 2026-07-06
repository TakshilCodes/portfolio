"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-cream/10 px-5 py-4 backdrop-blur-xl transition-colors duration-300 md:px-8 lg:px-10",
        scrolled ? "bg-background/94" : "bg-background/70",
      )}
    >
      <nav className="flex items-center justify-between gap-4">
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="font-hand text-3xl leading-none text-cream transition-colors hover:text-cyan"
        >
          Takshil Pandya
        </a>

        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan after:transition-all after:duration-300 hover:text-cream hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 bg-cream/5 text-muted transition-colors hover:text-cream md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="grid gap-3 border-t border-cream/10 pt-4 text-sm text-muted md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 transition-colors hover:bg-cream/5 hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
