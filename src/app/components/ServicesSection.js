"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Briefcase,
  Cloud,
  Code2,
  Layers,
  LifeBuoy,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Composable websites, portals, and platforms built with React, Next.js, and headless CMS for SEO speed.",
    icon: Code2,
    slug: "web-development",
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps with offline-first UX, analytics hooks, and app store optimization baked in.",
    icon: Smartphone,
    slug: "mobile-apps",
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, and GCP modernization plus GitHub Actions, ArgoCD, and Kubernetes automation.",
    icon: Cloud,
    slug: "cloud-and-devops",
  },
  {
    title: "AI & Automation",
    description:
      "LLM copilots, intelligent search, RPA workflows, and AI-enabled analytics dashboards.",
    icon: Bot,
    slug: "ai-and-automation",
  },
  {
    title: "Cybersecurity",
    description:
      "Security assessments, zero-trust architecture, DevSecOps pipelines, and continuous compliance.",
    icon: ShieldCheck,
    slug: "cybersecurity",
  },
  {
    title: "IT Consulting",
    description:
      "Architecture reviews, digital transformation roadmaps, and fractional CTO advisory.",
    icon: Briefcase,
    slug: "it-consulting",
  },
  {
    title: "SaaS Development",
    description:
      "Multi-tenant SaaS platforms with billing, provisioning, and usage analytics ready for scale.",
    icon: Layers,
    slug: "saas-development",
  },
  {
    title: "Maintenance & Support",
    description:
      "24/7 monitoring, performance tuning, feature upgrades, and level 2/3 support pods.",
    icon: LifeBuoy,
    slug: "maintenance-and-support",
  },
];

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 3);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full py-20 lg:py-28" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">

        {/* Top Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-16"
        >
          <div>
            <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
              Services
            </p>

            <h2 className="
              text-4xl md:text-6xl font-medium leading-tight
              bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent
              dark:from-purple-400 dark:to-blue-300
            ">
              From Discovery to Scale
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mt-10">
            Dedicated pods keep design, engineering, DevOps, and growth in sync.
            Pick the capability you need or run a managed roadmap across all 8 tracks.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-10"
        >
          {visibleServices.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                variants={fadeIn}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="
                  p-10 h-[400px] flex flex-col justify-between rounded-3xl transition-all
                  bg-white border border-gray-200 shadow-sm text-gray-900
                  dark:bg-gray-900/40 dark:border-gray-800 dark:backdrop-blur-xl
                  dark:text-white dark:shadow-lg dark:hover:shadow-blue-900/10
                  hover:border-blue-400 dark:hover:border-blue-500/40
                "
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 flex items-center justify-center mb-10">
                  <Icon size={24} />
                </div>

                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300 font-medium group"
                >
                  Read More
                  <ArrowUpRight className="group-hover:translate-x-1 transition" size={16} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-start"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              px-8 py-3 rounded-full font-medium transition-all
              bg-white border border-blue-500 text-blue-600 shadow-sm
              hover:bg-blue-50 hover:border-blue-600

              dark:bg-blue-900/30 dark:border-blue-800/40 dark:text-blue-300
              dark:hover:bg-blue-900/50 dark:hover:border-blue-600/60
            "
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
