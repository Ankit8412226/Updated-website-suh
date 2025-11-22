"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const defaultIcons = [
  { src: "/icons/react-svgrepo-com (1).svg", label: "React" },
  { src: "/icons/Next Js.svg", label: "Next.js" },
  { src: "/icons/node-js-svgrepo-com (2).svg", label: "Node.js" },
  { src: "/icons/python-svgrepo-com.svg", label: "Python" },
  { src: "/icons/aws-svgrepo-com (2).svg", label: "AWS" },
  { src: "/icons/mongodb (1).svg", label: "MongoDB" },
  { src: "/icons/Postgresql.svg", label: "Postgres" },
  { src: "/icons/redis.svg", label: "Redis" },
  { src: "/icons/Docker.svg", label: "Docker" },
  { src: "/icons/kubernetes.svg", label: "Kubernetes" },
  { src: "/icons/tensorflow.svg", label: "TensorFlow" },
  { src: "/icons/openai.svg", label: "OpenAI" },
];

export default function TechStackSection({ icons = defaultIcons }) {
  return (
    <section id="tech" className="w-full py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-24">
        
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="uppercase text-xs tracking-[0.4em]  text-blue-500  dark: text-blue-600  mb-4">
            Technologies
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
            Proven Platforms & Tooling
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Cloud-native, AI-ready, and performance tuned from day one.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-1"
        >
          {/* OUTER GLOW */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              boxShadow:
                "0 40px 100px rgba(139,92,246,0.15), inset 0 0 60px rgba(139,92,246,0.08)",
              filter: "blur(6px)",
            }}
          />

          {/* INNER PANEL WITH BORDER */}
          <div
            className="relative rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#050709] dark:to-[#0a0b0e] border"
            style={{
              borderColor: "rgba(139,92,246,0.2)",
              boxShadow:
                "inset 0 0 40px rgba(0,0,0,0.02), inset 0 0 15px rgba(139,92,246,0.04)",
            }}
          >
            <div className="relative p-10 md:p-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-10 justify-items-center">

                {icons.map((icon, idx) => (
                  <motion.div
                    key={icon.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.03 }}
                    whileHover={{
                      scale: 1.06,
                      y: -6,
                      boxShadow: "0 0 25px rgba(139,92,246,0.25)",
                    }}
                    className="flex flex-col items-center"
                  >
                    {/* SINGLE ICON BOX */}
                    <div
                      className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl flex items-center justify-center p-4 bg-white/50 dark:bg-white/5 border border-purple-500/20 dark:border-purple-400/20"
                      style={{
                        borderRadius: 16,
                        boxShadow:
                          "0 10px 20px rgba(0,0,0,0.08), inset 0 0 20px rgba(139,92,246,0.06)",
                      }}
                    >
                      <Image
                        src={icon.src}
                        alt={icon.label}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <p className="mt-3 text-gray-700 dark:text-gray-200 text-sm font-medium">
                      {icon.label}
                    </p>
                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


















