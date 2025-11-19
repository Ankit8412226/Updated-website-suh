"use client";

import { motion } from "framer-motion";

const industries = [
  { name: "FinTech", detail: "Payments, lending, wealth, compliance." },
  { name: "EdTech", detail: "LMS, cohort platforms, content marketplaces." },
  { name: "E-commerce", detail: "Headless storefronts, marketplaces, OMS." },
  { name: "Healthcare", detail: "HIPAA portals, telehealth, patient apps." },
  { name: "Real Estate", detail: "PropTech, CRMs, 3D tours, broker ops." },
  { name: "Logistics", detail: "Fleet tracking, WMS, route optimization." },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
            Industries
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Domain Acceleration
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 p-5"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {industry.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {industry.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

