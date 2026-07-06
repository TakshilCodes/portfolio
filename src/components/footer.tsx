import { MapPin } from "lucide-react";

const footerLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-cream/10">
      <div className="relative h-[clamp(120px,22vw,250px)] overflow-hidden">
        <h2 className="footer-word absolute bottom-[-0.16em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[clamp(6rem,22vw,18rem)] font-bold leading-none opacity-55">
          takshil
        </h2>
      </div>

      <div className="flex flex-col gap-5 border-t border-cream/[0.06] px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
        <nav className="flex flex-wrap items-center gap-5 text-sm text-muted">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-cream">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-1 font-mono text-xs text-muted md:items-end">
          <span>&copy; 2026 Takshil Pandya. Built with Next.js.</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3 w-3" />
            India
          </span>
        </div>
      </div>
    </footer>
  );
}
