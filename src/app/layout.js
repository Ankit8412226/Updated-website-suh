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
  metadataBase: new URL('https://www.suhtech.top'),
  title: {
    default: "SUH Tech Private Limited | Web App Development & DevOps Services",
    template: "%s | SUH Tech Private Limited"
  },
  description:
    "SUH Tech Private Limited - Leading IT service provider specializing in web application development and DevOps solutions. Expert team delivering scalable, high-performance web apps, cloud infrastructure, CI/CD automation, and modern DevOps practices.",
  keywords: [
    "web app development",
    "web application development company",
    "devops services",
    "devops consulting",
    "CI/CD pipeline automation",
    "cloud infrastructure",
    "kubernetes deployment",
    "docker containerization",
    "aws devops",
    "azure devops",
    "react development",
    "next.js development",
    "node.js backend",
    "full stack development",
    "microservices architecture",
    "infrastructure as code",
    "terraform automation",
    "ansible automation",
    "jenkins CI/CD",
    "gitlab CI/CD",
    "github actions",
    "container orchestration",
    "cloud migration services",
    "it services company india",
    "software development company",
    "custom web application",
    "enterprise web solutions",
    "agile development",
    "scrum methodology",
    "api development",
    "restful api services",
    "graphql development",
    "database optimization",
    "performance optimization",
    "scalable web applications",
  ],
  authors: [{ name: "SUH Tech Private Limited" }],
  creator: "SUH Tech Private Limited",
  publisher: "SUH Tech Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.suhtech.top",
    siteName: "SUH Tech Private Limited",
    title: "SUH Tech Private Limited | Web App Development & DevOps Experts",
    description:
      "Expert IT services provider specializing in web application development and DevOps solutions. Build scalable, high-performance web apps with modern cloud infrastructure and automated CI/CD pipelines.",
    images: [
      {
        url: "https://www.suhtech.top/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SUH Tech Private Limited - Web App Development & DevOps Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUH Tech Private Limited | Web App Development & DevOps Services",
    description:
      "Leading IT service provider specializing in web application development and DevOps automation. Expert team delivering scalable solutions.",
    images: ["https://www.suhtech.top/og-image.jpg"],
    creator: "@suhtech",
  },
  alternates: {
    canonical: "https://www.suhtech.top",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
    shortcut: "/icons/SUHTechLogo (1).svg",
    apple: "/icons/SUHTechLogo (1).svg",
  },
  category: "Technology",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SUH Tech Private Limited",
      "url": "https://www.suhtech.top",
      "logo": "https://www.suhtech.top/icons/SUHTechLogo (1).svg",
    "description": "Leading IT service provider specializing in web application development and DevOps solutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ithums Galleria Alpha 2 Floor 8th-40",
      "addressLocality": "Noida",
      "postalCode": "201310",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8298252909",
      "contactType": "Customer Service",
      "email": "info@suhtech.top"
    },
    "sameAs": [
      "https://www.linkedin.com/company/suhtech",
      "https://twitter.com/suhtech",
      "https://www.facebook.com/suhtech"
    ],
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Application Development",
      "DevOps Services",
      "Cloud Infrastructure",
      "CI/CD Automation",
      "Software Development"
    ]
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Services",
    "provider": {
      "@type": "Organization",
      "name": "SUH Tech Private Limited"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DevOps Services"
          }
        }
      ]
    }
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable} ${inter.variable} ${poppins.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
        />
      </head>
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
