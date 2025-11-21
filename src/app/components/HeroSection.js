"use client";

import React from "react";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.98]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const handleBookDemo = () => router.push("/contact");
  const handleDiscover = () => router.push("/services");

  // right-side blue hero image (local)
  const heroImg = "/mnt/data/5833ccc9-2820-4726-8767-4ab21f938917.png";

  return (
    <section id="hero" className="w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT: now matches blue layout exactly (heading, subtitle, two pill buttons) */}
          <motion.div
            className="order-2 lg:order-1 mt-8 lg:mt-0 text-left"
            variants={fadeIn}
          >
            <motion.div className="relative max-w-2xl" variants={fadeDown}>
              {/* small rounded tag */}
              <div className="inline-block mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/10 dark:bg-white/10 backdrop-blur-sm text-sm font-medium text-gray-900 dark:text-white">
                  Our Integrated IT Solutions
                </span>
              </div>

              {/* main heading (split lines to match blue mock) */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 leading-tight"
                variants={fadeDown}
              >
                 Build Secure,
                <br />
                SEO-Ready Digital
                <br />
                Products Faster.
              </motion.h1>

              {/* sub paragraph */}
              <motion.p
                className="ext-base md:text-lg text-gray-700 dark:text-gray-300 mt-6 max-w-xl"
                variants={fadeUp}
              >
   We are an end-to-end IT partner for funded startups and digital enterprises. From UX to infrastructure, our pods ship conversion
                optimized web apps, native mobile experiences, automated CI/CD
                pipelines, and measurable SEO growth—without disrupting your
                roadmap.
              </motion.p>

              {/* Buttons — pill style matching blue image */}
              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4"
                variants={fadeUp}
              >
                {/* Primary gradient pill */}
                <div className="flex-1 max-w-xs">
                  <button
                    onClick={handleBookDemo}
                    className="w-full h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 text-white font-semibold flex items-center justify-center gap-3 shadow-lg hover:brightness-105 transition"
                    aria-label="Free Consultation"
                  >
                    <span className="text-base">Free Consultation</span>
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
                      <ArrowRight size={14} color="white" />
                    </span>
                  </button>
                </div>

                {/* Secondary white pill */}
                <div className="flex-1 max-w-xs">
                  <button
                    onClick={handleDiscover}
                    className="w-full h-12 rounded-full bg-white dark:bg-gray-800 text-slate-900 dark:text-white font-medium flex items-center justify-center gap-3 border-2 border-transparent hover:shadow-md transition"
                    aria-label="Discover More"
                  >
                    <span className="text-base">Discover More</span>
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 text-white">
                      <ArrowRight size={14} color="white" />
                    </span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: image frame (kept same as previous blue-style image container) */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center items-center"
            variants={fadeDown}
          >
            <motion.div
              className="relative rounded-xl shadow-2xl border overflow-hidden w-full max-w-xl lg:max-w-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ scale }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.18)",
                transition: { type: "spring", stiffness: 400, damping: 20 },
              }}
            >
              <div className="relative w-full pb-[85%] lg:pb-[75%]">
                <img
                  src={heroImg}
                  alt="Hero visual"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* subtle overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.35, transition: { delay: 0.25, duration: 0.6 } }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
