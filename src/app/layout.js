import { Geist_Mono, Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Suh Tech Private Limited | Full-Stack IT Services, Product Engineering & DevOps",
  description:
    "Suh Tech Private Limited builds high-performing web and mobile apps, modernizes cloud infrastructure, automates CI/CD pipelines, and drives growth with SEO-focused digital products.",
  keywords: [
    "it services company",
    "product engineering studio",
    "devops automation partner",
    "cicd implementation",
    "cloud migration experts",
    "custom web app development",
    "mobile application development",
    "ai and automation agency",
    "managed it support",
    "technology consulting",
    "saas development team",
    "seo friendly websites",
    "kubernetes engineers",
    "react node agency",
    "aws certified partner",
  ],
  openGraph: {
    title: "Suh Tech Private Limited | Digital Product & IT Services Agency",
    description:
      "Strategy-to-scale engineering partner for web, mobile, cloud, AI, and cybersecurity programs.",
    url: "https://www.suhtech.com/",
    siteName: "Suh Tech Private Limited",
    images: [
      {
        url: "https://www.suhtech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suh Tech IT Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suh Tech Private Limited | Build Secure, Scalable Digital Products",
    description:
      "Launch fast with dedicated pods for engineering, DevOps, SEO, and support.",
    images: ["https://www.suhtech.com/og-image.jpg"],
  },
  icons: {
    icon: "/logoo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable} ${inter.variable} ${poppins.variable}`}
    >
      <head />
      <body
        className={`${geistMono.variable} ${inter.variable} ${poppins.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
