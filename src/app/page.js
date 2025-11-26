import dynamic from "next/dynamic";
import Link from "next/link";
import Ecosystem from "./components/Ecosystem";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import StatsSection from "./components/StatsSection";
import WhyChooseUsSection from "./components/WhyChooseUs";

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

      <div className="px-4 md:px-8 lg:px-24 space-y-20 lg:space-y-32 pb-20">
        {/* <VideoSection /> */}
        {/* <CoreValues/> */}

        <AboutUsSection />
        <ServicesSection />
           <Ecosystem />
        {/* <TechStackSection /> */}

        {/* Portfolio CTA */}
        <section className="relative py-20 overflow-hidden rounded-3xl bg-gray-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50" />
          <div className="container mx-auto text-center px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              See Our Work in Action
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Explore detailed case studies with metrics, timelines, and
              real-world impact across industries.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Full Portfolio
            </Link>
          </div>
        </section>

        <ProcessSection />
        <PricingSection />
        <IndustriesSection />
     
        <TestimonialsPage />
        {/* <BlogResourcesSection /> */}
        {/* <CareersSection /> */}
        <WhyChooseUsSection />
        {/* <NewsletterSection /> */}

        <section id="contact">
          <ContactFormSection />
        </section>

        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
}
