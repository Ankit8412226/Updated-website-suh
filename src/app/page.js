import dynamic from "next/dynamic";
import Link from "next/link";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FooterSection from "./components/FooterSection";
import WhyChooseUsSection from "./components/WhyChooseUs";
import CoreValues from "./components/CoreValues"

// Dynamically import non-critical components
const VideoSection = dynamic(() => import("./components/VedioSection"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 dark:bg-gray-800" />,
});
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

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mt-16 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-24">
        <section id="hero">
          <HeroSection />
        </section>
        {/* <VideoSection /> */}
        <CoreValues/>
        <ServicesSection />
        <TechStackSection />
        <PortfolioSection />
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl my-12">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              See Our Work in Action
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore detailed case studies with metrics, timelines, and
              real-world impact across industries.
            </p>
            <Link
              href="/portfolio"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              View Full Portfolio
            </Link>
          </div>
        </section>
        <ProcessSection />
        <PricingSection />
        <IndustriesSection />
        <TestimonialsPage />
        <BlogResourcesSection />
        <CareersSection />
        <WhyChooseUsSection />
        <NewsletterSection />
        <section id="contact">
          <ContactFormSection />
        </section>
        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
}
