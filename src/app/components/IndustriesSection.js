"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  GraduationCap,
  Heart,
  Home,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useState } from "react";

const industries = [
  {
    name: "FinTech",
    detail: "Payments, lending, wealth, compliance.",
    icon: CreditCard,
    color: "text-blue-500",
  },
  {
    name: "EdTech",
    detail: "LMS, cohort platforms, content marketplaces.",
    icon: GraduationCap,
    color: "text-purple-500",
  },
  {
    name: "E-commerce",
    detail: "Headless storefronts, marketplaces, OMS.",
    icon: ShoppingBag,
    color: "text-pink-500",
  },
  {
    name: "Healthcare",
    detail: "HIPAA portals, telehealth, patient apps.",
    icon: Heart,
    color: "text-red-500",
  },
  {
    name: "Real Estate",
    detail: "PropTech, CRMs, 3D tours, broker ops.",
    icon: Home,
    color: "text-green-500",
  },
  {
    name: "Logistics",
    detail: "Fleet tracking, WMS, route optimization.",
    icon: Truck,
    color: "text-orange-500",
  },
];

const IndustryCard = ({ industry }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 p-6 flex flex-col justify-center items-center text-center group transition-colors duration-300 hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-400/30"
    >
      {/* Default State: Name Only (Centered) */}
      <motion.h3
        layout="position"
        className="text-xl font-semibold text-gray-900 dark:text-white z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
      >
        {industry.name}
      </motion.h3>

      {/* Hover State: Icon & Details */}
      <motion.div
        initial="collapsed"
        animate={isHovered ? "expanded" : "collapsed"}
        variants={{
          expanded: {
            height: "auto",
            opacity: 1,
            marginTop: 16,
            transition: {
              height: { duration: 0.3, ease: "easeOut" },
              opacity: { duration: 0.2, delay: 0.1 },
              marginTop: { duration: 0.3 },
            },
          },
          collapsed: {
            height: 0,
            opacity: 0,
            marginTop: 0,
            transition: {
              height: { duration: 0.3, ease: "easeIn" },
              opacity: { duration: 0.1 },
              marginTop: { duration: 0.3 },
            },
          },
        }}
        className="flex flex-col items-center gap-3 overflow-hidden"
      >
        <motion.div
          animate={
            isHovered
              ? { scale: 1, rotate: 0 }
              : { scale: 0.8, rotate: -10 }
          }
          transition={{ type: "spring", stiffness: 300 }}
          className={`p-3 rounded-full bg-gray-50 dark:bg-gray-800 ${industry.color}`}
        >
          <industry.icon className="w-6 h-6" />
        </motion.div>
        <p className="text-sm text-gray-600 dark:text-gray-300 max-w-[200px]">
          {industry.detail}
        </p>
      </motion.div>
    </motion.div>
  );
};

const IndustriesSection = () => {
  return (
    <section id="industries" className="w-full py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 dark:text-blue-400 mb-4">
            Industries
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
            Domain Acceleration
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

