import type { Metadata } from "next";
import { Caveat, DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://takshil.in";
const siteName = "Takshil Pandya";
const title = "Takshil Pandya | Full-Stack Developer";
const description =
  "Takshil Pandya is a full-stack developer based in Ahmedabad, India, building SaaS products, AI tools, and practical web apps.";
const ogImage = "/og-image.png";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  weight: "400",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Takshil Pandya",
    "Full-Stack Developer",
    "Ahmedabad, India",
    "Next.js",
    "TypeScript",
    "SaaS",
    "AI tools",
  ],
  authors: [{ name: "Takshil Pandya", url: siteUrl }],
  creator: "Takshil Pandya",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Takshil Pandya - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Takshil Pandya",
      jobTitle: "Full-Stack Developer",
      url: siteUrl,
      image: `${siteUrl}/images/profile_pic.png`,
      homeLocation: {
        "@type": "Place",
        name: "Ahmedabad, India",
      },
      sameAs: ["https://github.com/TakshilCodes"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      creator: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} ${caveat.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}