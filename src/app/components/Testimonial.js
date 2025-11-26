"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import Image from "next/image";
import Box from "@/components/ui/box";

/**
 * TestimonialsMarquee (updated card styling)
 * - Card now matches the dark glass / rounded / inner-stroke style from the first image.
 * - Kept marquee behavior, responsiveness and content identical.
 * - Uses local uploaded images for subtle decoration/texture:
 *   /mnt/data/525c9acb-a377-4d62-846d-a03122a53514.png
 *   /mnt/data/40769154-59e8-4841-94ad-429344d34379.png
 */

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
    if (typeof window === "undefined") return;
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
            Trusted by Teams Who Demand Excellence
          </h1>
          <p className="text-base md:text-lg lg:text-normal text-gray-700 dark:text-gray-300 mt-4 w-full lg:w-full">
            Hear firsthand experiences from the teams we’ve supported across industries.
          </p>
        </div>

        {isMobile ? (
          /* Mobile view: Vertical stack */
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
          /* Desktop view: Marquee animation */
          <div
            className="flex items-center justify-center mx-auto overflow-hidden relative py-8"
            style={{ width: "90%" }}
          >
            {/* left gradient fade */}
            {/* <div className="absolute h-full w-28 top-0 left-0 bottom-0 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none"></div> */}

            <div className="w-full">
              <Marquee gradient={false} speed={24} className="py-2 z-0" pauseOnHover={true}>
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <TestimonialCard
                    key={`${testimonial.id}-${index}`}
                    testimonial={testimonial}
                    isMobile={false}
                  />
                ))}
              </Marquee>
            </div>

            {/* right gradient fade */}
            {/* <div className="absolute h-full w-28 top-0 right-0 bottom-0 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none"></div> */}
          </div>
        )}
      </div>
    </div>
  );
};

function TestimonialCard({ testimonial, isMobile }) {
  return (
    <div
      className={`group relative flex-shrink-0 ${isMobile ? "w-full mx-0" : "mx-6"} transition-all duration-500 cursor-pointer`}
      style={{
        width: isMobile ? "100%" : "360px",
        height: isMobile ? "auto" : "420px",
        maxWidth: isMobile ? "520px" : "none",
      }}
    >
      {/* Card background (dark glass + subtle gradient + texture overlay) */}
      <div
        className="rounded-2xl overflow-hidden h-full transition-all duration-300 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 dark:from-purple-400/10 dark:via-transparent dark:to-blue-300/10 border border-white/20 dark:border-gray-800/40 shadow-lg dark:shadow-[0_12px_40px_rgba(6,6,12,0.6)]"
        style={{
          borderRadius: "22px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 0 4px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "";
        }}
      >
        {/* subtle decorative texture layer using uploaded image (local path) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <Image
            src="/mnt/data/525c9acb-a377-4d62-846d-a03122a53514.png"
            alt=""
            fill
            style={{ objectFit: "cover", opacity: 0.06 }}
            className="rounded-2xl"
            priority
          />
        </div>

        {/* inner soft bottom highlight to mimic the glowing bottom in reference */}
        <div
          className="absolute left-0 right-0 bottom-0 pointer-events-none"
          style={{
            height: "36%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.00) 0%, rgba(124,58,237,0.06) 30%, rgba(124,58,237,0.12) 60%, rgba(0,0,0,0.0) 100%)",
            filter: "blur(18px)",
            borderBottomLeftRadius: 22,
            borderBottomRightRadius: 22,
          }}
        />

        {/* quote mark top-left (small) */}
        {/* <div className="absolute -top-3 left-6 z-20 text-[34px] leading-none text-indigo-200/30">“</div> */}

        <div className="relative z-10 flex flex-col h-full">
          {/* content container with padding (keeps text left-aligned like reference) */}
          <div className="px-6 pt-8 pb-6 flex-grow flex flex-col">
            {/* Title similar to reference: uppercase small heading at top */}
            <h4 className="text-center text-lg font-bold tracking-wide text-purple-600 dark:text-purple-300 mb-4">
              CUSTOMER STORY
            </h4>

            {/* testimonial text (center aligned) */}
            <div className={`${isMobile ? "" : "overflow-y-auto"} mt-4`}>
              <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed text-center">
                {testimonial.text}
              </p>
            </div>

            {/* avatar circle at center below content */}
            <div className="flex items-center justify-center mt-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(180deg, rgba(124,58,237,0.18), rgba(59,130,246,0.06))",
                  boxShadow: "0 6px 20px rgba(99,102,241,0.12) inset",
                }}
              >
                {/* Placeholder initials (could be replaced with <Image> avatar) */}
                <span className="text-gray-900 dark:text-white/90 font-semibold text-sm">{testimonial.author.split(" ").map(n=>n[0]).slice(0,2).join("")}</span>
              </div>
            </div>
          </div>

          {/* footer: rating + author */}
          <div className="px-6 pb-8 pt-2">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 mx-1 ${i < testimonial.rating ? "text-blue-600 dark:text-blue-400" : "text-gray-400 dark:text-gray-700"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <div className="text-center">
              <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsMarquee;
