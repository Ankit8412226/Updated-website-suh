import dynamic from "next/dynamic";
import Link from "next/link";
import Ecosystem from "./components/Ecosystem";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import StatsSection from "./components/StatsSection";
import WhyChooseUsSection from "./components/WhyChooseUs";


export const metadata = {
  title: "Web App Development & DevOps Services | SUH Tech Private Limited",
  description:
    "SUH Tech Private Limited - Expert IT services provider specializing in web application development and DevOps solutions. We build scalable, high-performance web apps, automate CI/CD pipelines, and modernize cloud infrastructure. Trusted by businesses worldwide for reliable web development and DevOps services.",
  keywords: [
    "web app development company",
    "devops services provider",
    "web application development",
    "devops consulting services",
    "CI/CD automation",
    "cloud infrastructure services",
    "kubernetes experts",
    "docker containerization",
    "aws devops services",
    "react development company",
    "next.js development",
    "node.js backend services",
    "full stack development",
    "microservices architecture",
    "infrastructure automation",
    "terraform services",
    "jenkins CI/CD setup",
    "gitlab CI/CD implementation",
    "container orchestration",
    "cloud migration experts",
  ],
  openGraph: {
    title: "Web App Development & DevOps Services | SUH Tech Private Limited",
    description:
      "Expert IT services provider specializing in web application development and DevOps solutions. Build scalable, high-performance web apps with modern cloud infrastructure.",
    url: "https://www.suhtech.top",
    siteName: "SUH Tech Private Limited",
    images: [
      {
        url: "https://www.suhtech.top/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SUH Tech - Web App Development & DevOps Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web App Development & DevOps Services | SUH Tech",
    description:
      "Expert IT services provider specializing in web application development and DevOps automation.",
    images: ["https://www.suhtech.top/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.suhtech.top",
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

// Dynamically import non-critical components
const VideoSection = dynamic(() => import("./components/VedioSection"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});
const AboutUsSection = dynamic(() => import("./components/AboutUs"));
const ServicesSection = dynamic(() => import("./components/ServicesSection"));
const TechStackSection = dynamic(() => import("./components/TechStackSection"));
const PortfolioSection = dynamic(() => import("./components/PortfolioSection"));
const ProcessSection = dynamic(() => import("./components/ProcessSection"));
const PricingSection = dynamic(() => import("./components/PricingSection"));
const IndustriesSection = dynamic(() => import("./components/IndustriesSection"));
const TestimonialsPage = dynamic(() => import("./components/Testimonial"));
const BlogResourcesSection = dynamic(() => import("./components/BlogResourcesSection"));
const CareersSection = dynamic(() => import("./components/CareersSection"));
const NewsletterSection = dynamic(() => import("../app/components/NewsLetters"));
const ContactFormSection = dynamic(() => import("./components/ContactForm"));
const FAQSection = dynamic(() => import("./components/Faq"));
const ProjectModal = dynamic(() => import("./components/ProjectModal"));



export default function Home() {
  return (
    <main className="bg-white dark:bg-black selection:bg-purple-500/30">
      <ProjectModal />
      <NavBar />

      {/* Hero & Stats */}
      <div className="pt-20">
        <HeroSection />
        <StatsSection />
      </div>

      {/* Main Content with Consistent Spacing */}
      <div className="space-y-12 md:space-y-16 lg:space-y-20 px-4 md:px-6 lg:px-8 pb-8 md:pb-12">
        <AboutUsSection />

        <ServicesSection />

        <Ecosystem />

        {/* Portfolio CTA */}
        <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden rounded-3xl bg-gray-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50" />
          <div className="container mx-auto text-center px-6 md:px-8 lg:px-12 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              See Our Work in Action
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Explore detailed case studies with metrics, timelines, and
              real-world impact across industries.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              View Full Portfolio
            </Link>
          </div>
        </section>

        <ProcessSection />

        <PricingSection />

        <IndustriesSection />

        <TestimonialsPage />

        <WhyChooseUsSection />

        <section id="contact">
          <ContactFormSection />
        </section>

        <FAQSection />
      </div>

      {/* Footer moved outside main content container */}
      <FooterSection />
    </main>
  );
}
