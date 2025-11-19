"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import Box from "@/components/ui/box";

const TestimonialsMarquee = () => {
  const testimonials = [
    {
      id: 1,
      text: "ArtofQR rebuilt our lending platform with modular Next.js and automated compliance checks. Releases dropped from quarterly to bi-weekly without adding headcount.",
      author: "Sarah Johnson",
      role: "VP Product, Fintech Scale-up",
      rating: 5,
    },
    {
      id: 2,
      text: "Their DevOps pod migrated us to AWS with Terraform, GitHub Actions, and full observability in six weeks. Our incidents fell by 70% and audits finally pass first try.",
      author: "Michael Chen",
      role: "Head of Engineering, SaaS",
      rating: 5,
    },
    {
      id: 3,
      text: "We launched a healthcare marketplace across four regions with HIPAA-ready infrastructure. The ArtofQR team owned product, engineering, and growth experiments.",
      author: "Jessica Rodriguez",
      role: "Chief Digital Officer, Health Network",
      rating: 5,
    },
    {
      id: 4,
      text: "Their SEO and content ops squad unlocked 3x more qualified demos by rebuilding our headless site, schema, and conversion experiments.",
      author: "David Kim",
      role: "CMO, B2B SaaS",
      rating: 5,
    },
    {
      id: 5,
      text: "We use ArtofQR for dedicated maintenance and L2 support. They monitor, patch, and ship enhancements while keeping a clean documentation trail for our investors.",
      author: "Emily Wilson",
      role: "COO, Logistics Marketplace",
      rating: 5,
    },
    {
      id: 6,
      text: "The AI automation team delivered an underwriting copilot that cut review time from hours to minutes while keeping humans in the loop.",
      author: "Thomas Anderson",
      role: "Director of Operations, InsurTech",
      rating: 4,
    },
  ];

  // State to track if we're in mobile view
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect viewport size changes
  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === "undefined") return;

    // Function to update state based on window width
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Standard mobile breakpoint
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
            Teams that ship with ArtofQR
          </h1>
          <p className="text-base md:text-lg lg:text-normal text-gray-700 dark:text-gray-300 mt-4 w-full lg:w-full">
            From fintech to healthtech, our pods become an extension of your
            org—measuring success in releases, MRR, and customer trust.
          </p>
        </div>

        {isMobile ? (
          // Mobile view: Vertical stack
          <div className="flex flex-col items-center space-y-8 mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isMobile={true}
              />
            ))}
          </div>
        ) : (
          // Desktop view: Marquee animation with improved smoothness
          <div
            className="flex items-center justify-center mx-auto overflow-hidden relative py-8"
            style={{ width: "90%" }}
          >
            {/* Improved gradient fade on left - smoother and wider */}
            <div className="absolute h-full w-32 top-0 left-0 bottom-0 bg-gradient-to-r from-white to-transparent dark:from-gray-900 z-10"></div>

            <div className="w-full">
              {/* Duplicated testimonials and decreased speed for smoother animation */}
              <Marquee
                gradient={false}
                speed={25}
                className="py-4 z-0"
                pauseOnHover={true}
              >
                {/* Duplicate testimonials for smoother looping */}
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <TestimonialCard
                      key={`${testimonial.id}-${index}`}
                      testimonial={testimonial}
                      isMobile={false}
                    />
                  )
                )}
              </Marquee>
            </div>

            {/* Improved gradient fade on right - smoother and wider */}
            <div className="absolute h-full w-32 top-0 right-0 bottom-0 bg-gradient-to-l from-white to-transparent dark:from-gray-900 z-10"></div>
          </div>
        )}

        {/* Updated Box component */}
        <Box
          text="Ready for your next release window?"
          description="Book a 45-minute roadmap session with our product, engineering, and growth leads to identify quick wins and mid-term bets."
        />
      </div>
    </div>
  );
};

function TestimonialCard({ testimonial, isMobile }) {
  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden flex-shrink-0 ${
        isMobile ? "w-full mx-0" : "mx-6"
      } flex flex-col hover:shadow-xl transition-all duration-500 ease-in-out`}
      style={{
        width: isMobile ? "100%" : "350px",
        height: isMobile ? "auto" : "400px",
        maxWidth: isMobile ? "500px" : "none",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-200 dark:from-purple-900/30 dark:to-blue-800/30 opacity-50"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234F46E5' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative p-6 flex flex-col flex-grow">
        <div className="absolute -top-1 left-4 text-5xl text-blue-500 font-serif">
          &quot;
        </div>

        <div className="pt-8 pb-2 flex-grow">
          <h3 className="text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 font-bold text-xl mb-4">
            CUSTOMER STORY
          </h3>
          <div className={`${isMobile ? "" : "overflow-y-auto max-h-40"}`}>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              {testimonial.text}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-auto">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`h-5 w-5 ${
                i < testimonial.rating
                  ? "text-blue-500"
                  : "text-gray-300 dark:text-gray-600"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <div className="text-center mt-4">
          <p className="font-bold text-gray-900 dark:text-white">
            {testimonial.author}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsMarquee;
