"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Requirement Analysis",
    description:
      "Stakeholder interviews, KPI mapping, and technical discovery sprint.",
  },
  {
    title: "Solution Planning",
    description:
      "Architecture blueprint, backlog creation, resourcing, and success metrics.",
  },
  {
    title: "Design",
    description:
      "Product workshops, UX/UI systems, copy, accessibility, and rapid prototypes.",
  },
  {
    title: "Development",
    description:
      "Agile pods pushing code daily with CI/CD, QA automation, and preview environments.",
  },
  {
    title: "Testing",
    description:
      "Unit, integration, security, and performance tests with visual regression suites.",
  },
  {
    title: "Deployment",
    description:
      "Blue/green or canary releases, observability dashboards, and rollback plans.",
  },
  {
    title: "Maintenance",
    description:
      "SLO monitoring, feature grooming, SEO upkeep, and monthly business reviews.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            How We Deliver
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className="relative rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 p-6 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl font-black text-gray-200 dark:text-gray-700">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <ArrowRight className="text-blue-500" size={22} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

