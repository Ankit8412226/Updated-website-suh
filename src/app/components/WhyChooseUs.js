"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUsSection() {
  const [open, setOpen] = useState(0);

  const items = [
    {
      title: "Tailored Solutions",
      content:
        "We don’t believe in one-size-fits-all. Every solution we build is customized to your unique business goals, workflows, and challenges.",
    },
    {
      title: "Scalable & Future-Ready",
      content:
        "We architect systems designed to grow with your business, ensuring long-term performance and reliability.",
    },
    {
      title: "Client-Centric Approach",
      content:
        "Transparency, communication, and trust are at the heart of every project we take on.",
    },
    {
      title: "Security & Compliance First",
      content:
        "We follow leading standards, security frameworks, and compliance practices to protect your data and operations.",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-xl 
                     bg-white/80 dark:bg-gray-900/40 
                     border border-gray-200 dark:border-gray-800"
        >
          <Image
            src="/images/whyChoose.png"
            alt="Team Image"
            width={800}
            height={650}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t 
                          from-black/40 via-black/10 to-transparent 
                          opacity-60 pointer-events-none" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 dark:text-gray-300"
        >
          <p className="uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 text-sm mb-3">
            Why Choose Us
          </p>

          <h2 className="
            text-4xl md:text-5xl font-extrabold 
            bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent 
            dark:from-purple-400 dark:to-blue-300 
            leading-tight mb-8
          ">
            Built on Trust, <br /> Driven by Results
          </h2>

          {/* Accordion */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl p-5 backdrop-blur-xl transition-all

                  bg-white border border-gray-200 shadow-sm
                  dark:bg-gray-900/40 dark:border-gray-800
                "
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="
                    w-full flex items-center justify-between text-left 
                    text-gray-900 dark:text-white 
                    text-lg font-medium
                  "
                >
                  {item.title}

                  {open === index ? (
                    <ChevronUp className="text-gray-500 dark:text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 dark:text-gray-400" size={20} />
                  )}
                </button>

                {open === index && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 dark:text-gray-400 text-sm mt-3 leading-relaxed"
                  >
                    {item.content}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
