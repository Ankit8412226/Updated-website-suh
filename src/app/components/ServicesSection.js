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

const ServicesSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="services"
      className="w-full py-16 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
            From Discovery to Scale
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dedicated pods keep design, engineering, DevOps, and growth in sync.
            Pick the capability you need or run a managed roadmap across all 8
            tracks.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                variants={fadeIn}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0px 20px 30px rgba(15, 23, 42, 0.08)",
                }}
                className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm flex-1">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300 font-semibold hover:gap-3 transition-all text-sm"
                >
                  Learn more
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

