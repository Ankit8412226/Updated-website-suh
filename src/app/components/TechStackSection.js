"use client";

import { motion } from "framer-motion";

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "Docker",
  "Terraform",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "TensorFlow",
  "LangChain",
];

const TechStackSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="tech" className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Proven Platforms & Tooling
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Cloud-native, AI-ready, and performance tuned from day one. Your
            project lands on the same stack we maintain for fintech, health, and
            SaaS leaders globally.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              variants={fadeIn}
              transition={{ delay: index * 0.03 }}
              whileHover={{
                y: -4,
                backgroundColor: "rgba(59,130,246,0.08)",
              }}
              className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 px-5 py-4 text-center text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wide"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;

