import dynamic from "next/dynamic";
import Link from "next/link";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FooterSection from "./components/FooterSection";
import WhyChooseUsSection from "./components/WhyChooseUs";
import CoreValues from "./components/CoreValues"
import CtaBanner from "./components/CtaBanner";
import CtaSecondaryBanner from "./components/CtaSecondaryBanner";

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
        <AboutUsSection />
        <ServicesSection />
        <TechStackSection />
        {/* <PortfolioSection /> */}
        <CtaBanner/>
        <ProcessSection />
        <PricingSection />
        <IndustriesSection />
        <TestimonialsPage />
        <CtaSecondaryBanner/>
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
