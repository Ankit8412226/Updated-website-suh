"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { title: "Requirement Analysis", subtitle: "Step 1", description: "We understand your vision and goals deeply.", image: "/images/Requirement Analysis.png" },
  { title: "Solution planning", subtitle: "Step 2", description: "Beautiful, intuitive UI/UX crafted with care.", image: "/images/Solution planning.png" },
  { title: "Design", subtitle: "Step 3", description: "Solid foundation with scalable tech stack.", image: "/images/Designing.png" },
  { title: "Development", subtitle: "Step 4", description: "Clean, tested, production-ready code.", image: "/images/Development.png" },
  { title: "Testing", subtitle: "Step 5", description: "Bulletproof quality assurance process.", image: "/images/Testing.png" },
  { title: "Deployment", subtitle: "Step 6", description: "Smooth launch with zero downtime.", image: "/images/Deployment.png" },
  { title: "Maintenance", subtitle: "Step 7", description: "Continuous improvement and scaling.", image: "/images/Maintenance.png" },
];

export default function ProcessSection() {
  // YEHI LINE FIX KI HAI
  const containerRef = useRef(null); // ya phir useRef<HTMLDivElement>(null) agar TS use kar raha hai

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    document.querySelectorAll("[data-index]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden py-32">
      {/* Baaki sab same rahega */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-20">
          <p className="text-blue-500 dark:text-blue-400 text-sm tracking-widest uppercase mb-4">Our Process</p>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">How We Build</h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Scroll through our battle-tested process. Watch the 3D preview transform in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Steps */}
          <div className="space-y-24 lg:space-y-32">
            {steps.map((step, i) => (
              <motion.article
                key={i}
                data-index={i}
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: activeIndex === i ? 1 : 0.5 }}
                viewport={{ once: false, margin: "-40%" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className={`text-8xl font-black transition-all duration-700 ${
                      activeIndex === i ? "text-purple-500 dark:text-purple-400" : "text-gray-200 dark:text-gray-800"
                    }`}>
                      {(i + 1).toString().padStart(2, "0")}
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <span className="inline-block px-4 py-2 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
                      {step.subtitle}
                    </span>
                    <h3 className={`text-4xl font-bold mb-4 transition-colors ${
                      activeIndex === i ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-lg leading-relaxed ${
                      activeIndex === i ? "text-gray-700 dark:text-gray-300" : "text-gray-500 dark:text-gray-600"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right 3D Fixed Card */}
          <div className="hidden lg:flex justify-center items-center sticky top-32 self-start">
            <motion.div
              className="relative"
              animate={{
                rotateY: activeIndex % 2 === 0 ? -15 : 15,
                rotateX: 5,
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}
            >
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-black rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ rotateY: 90, opacity: 0, scale: 0.9 }}
                    animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl overflow-hidden"
                    style={{ transform: "translateZ(80px)", width: 600, height: 500 }}
                  >
                    <Image
                      src={steps[activeIndex].image}
                      alt={steps[activeIndex].title}
                      fill
                      className="object-cover"
                      priority
                      sizes="600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm opacity-80">Currently viewing</p>
                      <p className="text-2xl font-bold">{steps[activeIndex].title}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}






