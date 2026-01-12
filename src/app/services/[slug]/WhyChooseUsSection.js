"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  ShieldCheck,
  LifeBuoy,
  Briefcase,
  Layers,
  Cloud,
} from "lucide-react";

/* ===============================
   HEADER CONTENT PER SERVICE
================================ */
const headerContent = {
  "web-development": {
    title: "Why Choose Us ",
    description:
      "Your Cloud Journey Deserves the Right Partner We don’t just move workloads—we build secure, scalable, and future-ready cloud platforms.Our expertise blends modern architecture, proactive security, and dedicated support to ensure your transformation is smooth, cost-efficient, and results-driven. With us, your cloud journey becomes a strategic advantage.",
  },
  "mobile-apps": {
    title: "Why Choose Us",
    description:
      "We deliver cost-effective and secure cloud environments crafted to enhance performance and reliability.Our solutions are powered by modern technology, industry-leading security standards, and expert assistance.With strategic planning and dedicated support, we create digital platforms ready for sustainable innovation.",
  },
  "cloud-and-devops": {
    title: "Why We Are the Best Choice for Your Cloud Journey",
    description:
      "We transform businesses with robust cloud strategies that deliver speed, security, and flexibility.Our solutions are powered by modern DevOps automation, strong governance, and advanced infrastructure design.We build scalable digital platforms that enhance efficiency and prepare you fortomorrow’s challenges.",
  },
  "ai-and-automation": {
    title: "Why Choose Us ",
    description:
      "Gain hands-on expertise with the latest AI and automation technologies.Our curriculum combines practical labs, industry-standard tools, and real-world projects to ensure you are job-ready.Learn from experienced instructors and master skills that scale with your career ambitions.",
  },
  cybersecurity: {
    title: "Why Choose Us ",
    description:
      "We combine advanced security technologies, proactive monitoring, and expert guidance to keep your digital assets safe.terms and real-time intelligence, we protect your business today and prepare you for future threats.",
  },
  "it-consulting": {
    title: "Why Choose Us",
    description:
      "We provide expert IT consulting that bridges business needs with technology solutions.Our strategies improve efficiency, reduce costs, and ensure your IT infrastructure supports growth.With actionable roadmaps and scalable guidance, we prepare organizations to succeed in a digital-first world.",
  },
  "saas-development": {
    title: "Why Choose Us",
    description:
      "We deliver SaaS solutions combining modern technology, enterprise-grade security, and dedicated support.Our platforms scale seamlessly from MVPs to enterprise-grade products.With robust architecture and expert guidance, we help businesses launch, grow, and optimize SaaS solutions.",
  },
  "maintenance-and-support": {
    title: "Why Choose Us ",
    description:
      "We provide expert maintenance and support services that combine modern technology, proactive monitoring, and dedicated assistance.Our approach ensures system stability, prevents downtime, and maximizes performance.With scalable support strategies and real-time issue resolution, we keep your business operations smooth and future-ready.",
  },
  "startup-solutions": {
    title: "Why Choose Us",
    description:
      "We partner with startups to build secure and scalable digital products.Our expertise helps you launch faster with the right technology stack.From MVP to growth stage, we deliver platforms engineered for success.",
  },
};

/* ===============================
   SAME CARDS (YOUR CONTENT)
================================ */
const items = [
  {
    title: "Cutting Edge Technology",
    description: "Modern cloud platforms built for speed and growth.",
    icon: Code2,
  },
  {
    title: "Advance Security",
    description: "Robust security frameworks that protect every layer.",
    icon: ShieldCheck,
  },
  {
    title: "Exceptional Support",
    description: "24/7 expert support you can rely on.",
    icon: LifeBuoy,
  },
  {
    title: "Proven Track Record",
    description: "Trusted experience in successful cloud transformations.",
    icon: Briefcase,
  },
  {
    title: "Seamless Integration",
    description: "Smooth integration with zero disruption.",
    icon: Layers,
  },
  {
    title: "Future Ready Solutions",
    description: "Scalable solutions designed for tomorrow.",
    icon: Cloud,
  },
];

export default function WhyChooseUsSection({ slug }) {
  const [active, setActive] = useState(0);

  const header = headerContent[slug] || {
    title: "Why Choose Us",
    description:
      "We deliver secure, scalable, and future-ready digital solutions.",
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 mb-14 items-start">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {header.title}
          </h2>

          <div className="hidden md:block w-px h-full bg-white" />

          <p className="text-gray-600 max-w-md">
            {header.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === active;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setActive(i)}
                className={
                  isActive
                    ? "p-[2px] rounded-2xl bg-gradient-to-b from-white via-purple-600 to-white"
                    : "rounded-2xl"
                }
              >
                <div
                  className={`h-full rounded-2xl p-6 bg-white flex flex-col transition-all ${
                    isActive
                      ? "shadow-[0_20px_45px_rgba(124,58,237,0.25)]"
                      : "border border-gray-200 shadow-sm"
                  }`}
                >
                  <div className="w-12 h-12 mb-5 rounded-full flex items-center justify-center border border-purple-600 text-purple-600">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 flex-1">
                    {item.description}
                  </p>

                  <Link
                    href="#"
                    className="group inline-flex items-center gap-2 mt-6 text-sm font-medium"
                  >
                    Read More
                    <span className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
