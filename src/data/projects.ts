export type ProjectVisual =
  | {
      type: "image";
      src: string;
      label: string;
    }
  | {
      type: "placeholder";
      label: string;
      eyebrow: string;
    };

export type Project = {
  name: string;
  slug: string;
  description: string;
  tech: string[];
  accent: "cyan" | "green" | "purple" | "yellow" | "red";
  visuals: ProjectVisual[];
  buttons: {
    label: string;
    href: string;
    variant: "primary" | "secondary";
  }[];
};

export const projects: Project[] = [
  {
    name: "Kartografer",
    slug: "kartografer",
    description:
      "AI travel planner that turns a rough travel idea into an editable trip workspace with day-wise itinerary, budget estimates, AI-assisted changes, public sharing, and PDF export.",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Gemini AI",
      "NextAuth",
    ],
    accent: "cyan",
    visuals: [
      {
        type: "image",
        src: "/images/kartografer/landing-page.png",
        label: "Landing page",
      },
      {
        type: "image",
        src: "/images/kartografer/explore.png",
        label: "Explore trips",
      },
      {
        type: "image",
        src: "/images/kartografer/edit-workspace.png",
        label: "Trip workspace",
      },
      {
        type: "image",
        src: "/images/kartografer/trip-detail.png",
        label: "Itinerary details",
      },
      {
        type: "image",
        src: "/images/kartografer/pdf-export.png",
        label: "PDF export",
      },
    ],
    buttons: [
      {
        label: "Live Site",
        href: "https://kartografer.com",
        variant: "primary",
      },
      {
        label: "Source Code",
        href: "https://github.com/TakshilCodes/kartografer",
        variant: "secondary",
      },
    ],
  },
  {
    name: "LedgerOS",
    slug: "ledgeros",
    description:
      "Personal finance dashboard for tracking expenses, subscriptions, budgets, recurring payments, and spending insights in one clean workspace.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "NextAuth",
    ],
    accent: "green",
    visuals: [
      {
        type: "image",
        src: "/images/ledgeros/dashboard.png",
        label: "Dashboard overview",
      },
      {
        type: "image",
        src: "/images/ledgeros/expenses.png",
        label: "Expenses",
      },
      {
        type: "image",
        src: "/images/ledgeros/subscriptions.png",
        label: "Subscriptions",
      },
      {
        type: "image",
        src: "/images/ledgeros/budgets.png",
        label: "Budgets",
      },
      {
        type: "image",
        src: "/images/ledgeros/insights.png",
        label: "Insights",
      }
    ],
    buttons: [
      {
        label: "Live Site",
        href: "https://ledgeros.takshil.in",
        variant: "primary",
      },
      {
        label: "Source Code",
        href: "https://github.com/TakshilCodes/ledgeros",
        variant: "secondary",
      },
    ],
  },
  {
    name: "LinkDeck",
    slug: "linkdeck",
    description:
      "Creator link-page platform with customizable public profiles, dashboard management, responsive previews, and simple performance insights.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
    ],
    accent: "purple",
    visuals: [
      {
        type: "image",
        src: "/images/linkdeck/landing.png",
        label: "Landing page",
      },
      {
        type: "image",
        src: "/images/linkdeck/links.png",
        label: "Links dashboard",
      },
      {
        type: "image",
        src: "/images/linkdeck/design.png",
        label: "Profile design",
      },
      {
        type: "image",
        src: "/images/linkdeck/insights.png",
        label: "Insights",
      },
    ],
    buttons: [
      {
        label: "Live Site",
        href: "https://linkdeck.in",
        variant: "primary",
      },
      {
        label: "Source Code",
        href: "https://github.com/TakshilCodes/linkdeck",
        variant: "secondary",
      },
    ],
  },
  {
    name: "ShopKart",
    slug: "shopkart",
    description:
      "E-commerce project with a storefront, shopping cart, admin dashboard, product management, and product editing flow.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    accent: "red",
    visuals: [
      {
        type: "image",
        src: "/images/shopkart/shopkart-home.png",
        label: "Storefront",
      },
      {
        type: "image",
        src: "/images/shopkart/shopkart-dashboard.png",
        label: "Admin dashboard",
      },
      {
        type: "image",
        src: "/images/shopkart/shopkart-cart.png",
        label: "Shopping cart",
      },
      {
        type: "image",
        src: "/images/shopkart/shopkart-admin-products.png",
        label: "Product management",
      },
      {
        type: "image",
        src: "/images/shopkart/shopkart-admin-products-edit.png",
        label: "Edit product",
      },
    ],
    buttons: [
      {
        label: "Live Site",
        href: "https://shopkartsite.vercel.app/",
        variant: "primary",
      },
      {
        label: "Source Code",
        href: "https://github.com/TakshilCodes/shopkart-ecom",
        variant: "secondary",
      },
    ],
  },
];