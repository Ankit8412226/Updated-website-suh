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

const items = [
  {
    title: "Cutting Edge Technology",
    description:
      "Our technology is designed to grow with your business, providing flexibility and performance.",
    icon: Code2,
  },
  {
    title: "Advance Security",
    description:
      "We utilize enterprise-grade security protocols, encryption, and MFA.",
    icon: ShieldCheck,
  },
  {
    title: "Exceptional Support",
    description:
      "Fast response times and personalized assistance whenever you need it.",
    icon: LifeBuoy,
  },
  {
    title: "Proven Track Record",
    description:
      "Trusted by clients to deliver scalable and reliable digital solutions.",
    icon: Briefcase,
  },
  {
    title: "Seamless Integration",
    description:
      "Smooth integration with existing tools while minimizing disruption.",
    icon: Layers,
  },
  {
    title: "Future Ready Solutions",
    description:
      "Built to evolve with modern technologies and future business needs.",
    icon: Cloud,
  },
];

export default function WhyChooseUsSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
       {/* Header */}
<div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 mb-14 items-start">
  
  {/* Left Title */}
  <h2 className="text-3xl md:text-4xl font-bold leading-tight">
    Why We Are The Best Choice For Your Cloud Journey
  </h2>

  {/* Divider */}
  <div className="hidden md:block w-px h-full" />

  {/* Right Text */}
  <p className="text-gray-600 max-w-md">
    We combine modern technology, security, and support to deliver
    future-ready digital platforms. Lorem ipsum dolor sit amet consectetur.
    We combine modern technology, security, and support to deliver
    future-ready digital platforms. Lorem ipsum dolor sit amet consectetur.
    We combine modern technology, security, and support to deliver
    future-ready digital platforms. Lorem ipsum dolor sit amet consectetur.
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
                  className={`h-full rounded-2xl p-6 bg-white flex flex-col transition-all
                    ${
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
