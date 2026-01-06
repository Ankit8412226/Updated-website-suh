import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";
import ServicesBanner from "./ServicesBanner";
import ServicesCards from "./ServicesCards";
import ServicesHero from "./ServicesHero";

export const metadata = {
  title: "IT Services - Website Development & DevOps Solutions | SUH Tech",
  description:
    "Comprehensive IT services across India - Website Development, Mobile Apps, Cloud & DevOps, AI Automation, Cybersecurity, and IT Consulting. Serving Mumbai, Bangalore, Delhi, Hyderabad, Chennai, Pune & 20+ cities. 500+ successful projects delivered.",
  keywords: [
    "it services company india",
    "website development services",
    "web development company",
    "mobile app development",
    "cloud services india",
    "devops services",
    "ai automation services",
    "cybersecurity services",
    "it consulting services",
    "saas development",
    "website development mumbai",
    "website development bangalore",
    "website development delhi",
    "website development hyderabad",
    "website development chennai",
    "website development pune",
    "it services provider india",
    "custom software development",
    "digital transformation services",
    "enterprise it solutions",
  ],
  openGraph: {
    title: "IT Services - Website Development & DevOps Solutions | SUH Tech",
    description: "Comprehensive IT services across India - Website Development, Mobile Apps, Cloud & DevOps, AI Automation. Serving 20+ major cities.",
    url: "https://www.suhtech.top/services",
  },
  alternates: {
    canonical: "https://www.suhtech.top/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />

      {/* Header */}
      <section className="pt-12 pb-12 mt-16 md:mt-20 lg:mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4 text-center">
            Services
          </p>

          <div className="pt-24">
            {/* 🔥 IMAGE SECTION */}
            <ServicesHero />
          </div>
        </div>
      </section>



      {/* Cards */}
      <ServicesCards className="pt-24" />

      <ServicesBanner />

      <FooterSection />
    </main>
  );
}
