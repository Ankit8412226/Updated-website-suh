"use client";

import React from "react";

import Image from "next/image";
import Button from "../../components/ui/button"; // adjust path if needed
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const heroImagePath = "/download (2) 1.svg";

export default function AboutSection() {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push("/industries");
  };

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 lg:px-24 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Image (moved before text so image sits on left at lg+) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-2 hidden"
          >
            {/* placeholder - real text block moved below */}
          </motion.div>

          {/* RIGHT on small, LEFT on large: Image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center order-1 lg:order-1"
          >
            {/* Card container to keep image and overlay elements (no decorative background) */}
            <div className="relative w-full max-w-[400px] aspect-square rounded-3xl overflow-hidden">
              <Image
                src={heroImagePath}
                alt="about hero"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT: Text content (moved after image so it appears on right at lg+) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-2"
          >
            <p className="uppercase text-xs tracking-[0.4em] text-blue-500 dark:text-blue-600 mb-4">About Us</p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
              Driven by
              <br />
              <span className="block">Innovation. Powered</span>
              <span className="block">by People.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8">
              With years of hands-on experience in SaaS development, cloud architecture, and enterprise IT
              services, we empower businesses to adapt to changing technologies, scale operations seamlessly,
              and thrive in an increasingly competitive digital world.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={handleLearnMore}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 group-hover:text-black transition-colors">
                  Learn More
                </span>
              </button>
              <div className="hidden sm:block" />
            </div>
          </motion.div>
        </div>
        {/* Divider + Stats row (inline on md+) */}
        <div className="my-12 flex flex-col md:flex-row items-center md:items-stretch gap-8">
      

          <div className="flex-1 flex flex-wrap justify-between items-center gap-8">
            <div className="flex-1 min-w-[140px] text-center">
              <div className="text-6xl md:text-7xl font-extrabold leading-none">90%</div>
              <div className="mt-4 text-gray-500 dark:text-gray-400">Client satisfaction</div>
            </div>

            <div className="hidden md:flex items-center">
              <div className="w-px bg-gray-200 dark:bg-gray-800 h-20 mx-6" />
            </div>

            <div className="flex-1 min-w-[140px] text-center">
              <div className="text-6xl md:text-7xl font-extrabold leading-none">40%</div>
              <div className="mt-4 text-gray-500 dark:text-gray-400">satisfaction</div>
            </div>

            <div className="hidden md:flex items-center">
              <div className="w-px bg-gray-200 dark:bg-gray-800 h-20 mx-6" />
            </div>

            <div className="flex-1 min-w-[140px] text-center">
              <div className="text-6xl md:text-7xl font-extrabold leading-none">180+</div>
              <div className="mt-4 text-gray-500 dark:text-gray-400">Project Successfully Done</div>
            </div>

            <div className="hidden md:flex items-center">
              <div className="w-px bg-gray-200 dark:bg-gray-800 h-20 mx-6" />
            </div>

            <div className="flex-1 min-w-[140px] text-center">
              <div className="text-6xl md:text-7xl font-extrabold leading-none">10K+</div>
              <div className="mt-4 text-gray-500 dark:text-gray-400">Overall Revenue Raised</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
