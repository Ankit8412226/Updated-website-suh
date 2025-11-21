"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const defaultIcons = [
  { src: "/mnt/data/df0b0c5d-28a9-4171-a6f2-63106c1f8779.png", label: "React" },
  { src: "/mnt/data/9a1887a0-f183-49d4-a228-53d7651fb7a2.png", label: "Next.js" },
  { src: "/mnt/data/df0b0c5d-28a9-4171-a6f2-63106c1f8779.png", label: "Node.js" },
  { src: "/mnt/data/9a1887a0-f183-49d4-a228-53d7651fb7a2.png", label: "Python" },
  { src: "/mnt/data/df0b0c5d-28a9-4171-a6f2-63106c1f8779.png", label: "AWS" },
  { src: "/mnt/data/9a1887a0-f183-49d4-a228-53d7651fb7a2.png", label: "MongoDB" },
  { src: "/mnt/data/df0b0c5d-28a9-4171-a6f2-63106c1f8779.png", label: "Postgres" },
  { src: "/mnt/data/9a1887a0-f183-49d4-a228-53d7651fb7a2.png", label: "Redis" },
  { src: "/mnt/data/df0b0c5d-28a9-4171-a6f2-63106c1f8779.png", label: "Docker" },
  { src: "/mnt/data/9a1887a0-f183-49d4-a228-53d7651fb7a2.png", label: "Kubernetes" },
  { src: "/mnt/data/df0b0c5d-28a9-4171-a6f2-63106c1f8779.png", label: "TensorFlow" },
  { src: "/mnt/data/9a1887a0-f183-49d4-a228-53d7651fb7a2.png", label: "OpenAI" },
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
                "0 40px 100px rgba(16,185,129,0.18), inset 0 0 60px rgba(16,185,129,0.10)",
              filter: "blur(6px)",
            }}
          />

          {/* INNER DARK PANEL WITH NEON BORDER */}
          <div
            className="relative rounded-2xl bg-[#050709] border"
            style={{
              borderColor: "rgba(16,185,129,0.22)",
              boxShadow:
                "inset 0 0 40px rgba(0,0,0,0.7), inset 0 0 15px rgba(16,185,129,0.04)",
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
                      boxShadow: "0 0 25px rgba(16,185,129,0.35)",
                    }}
                    className="flex flex-col items-center"
                  >
                    {/* SINGLE ICON BOX */}
                    <div
                      className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl flex items-center justify-center p-4"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(16,185,129,0.18)",
                        borderRadius: 16,
                        boxShadow:
                          "0 10px 20px rgba(0,0,0,0.55), inset 0 0 20px rgba(16,185,129,0.06)",
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



























// "use client";

// import { motion } from "framer-motion";

// const techStack = [
//   "React",
//   "Next.js",
//   "Node.js",
//   "Python",
//   "AWS",
//   "Azure",
//   "GCP",
//   "Kubernetes",
//   "Docker",
//   "Terraform",
//   "PostgreSQL",
//   "MongoDB",
//   "Redis",
//   "TensorFlow",
//   "LangChain",
// ];

// const TechStackSection = () => {
//   const fadeIn = {
//     hidden: { opacity: 0, y: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <section id="tech" className="w-full py-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeIn}
//         >
//           <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
//             Tech Stack
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//             Proven Platforms & Tooling
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Cloud-native, AI-ready, and performance tuned from day one. Your
//             project lands on the same stack we maintain for fintech, health, and
//             SaaS leaders globally.
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {techStack.map((tech, index) => (
//             <motion.div
//               key={tech}
//               variants={fadeIn}
//               transition={{ delay: index * 0.03 }}
//               whileHover={{
//                 y: -4,
//                 backgroundColor: "rgba(59,130,246,0.08)",
//               }}
//               className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 px-5 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wide"
//             >
//               {tech}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TechStackSection;

