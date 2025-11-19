"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Sprint Pod",
    price: "From $12k / month",
    description: "Design + engineering pod for roadmap acceleration.",
    highlight: true,
    features: [
      "PM + Product Designer + 2 Engineers + QA",
      "Two-week sprint cadence",
      "CI/CD setup + analytics instrumentation",
      "Weekly stakeholder reviews",
    ],
  },
  {
    name: "Project-Based",
    price: "Fixed scope",
    description: "Best for MVPs, rebrands, or cloud migrations.",
    features: [
      "Discovery workshop & architecture",
      "Milestone-based billing",
      "Joint QA and UAT sign-offs",
      "30-day hypercare support",
    ],
  },
  {
    name: "Dedicated DevOps",
    price: "From $8k / month",
    description: "Managed pipelines, infrastructure, and SRE on call.",
    features: [
      "24/7 monitoring and alerting",
      "Infrastructure as Code",
      "Security and compliance automation",
      "Release governance playbooks",
    ],
  },
  {
    name: "Growth & SEO",
    price: "From $6k / month",
    description: "Content ops, technical SEO, and CRO experimentation.",
    features: [
      "Topic clusters & pillar pages",
      "Schema, Core Web Vitals, and accessibility fixes",
      "A/B tests every sprint",
      "Editorial design & CMS automation",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Scale with Transparent Models
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pods launch within 2 weeks. Cancel anytime with 30-day notice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{
                y: -6,
                boxShadow: "0px 25px 40px rgba(15, 23, 42, 0.12)",
              }}
              className={`rounded-3xl border ${
                plan.highlight
                  ? "border-blue-500 shadow-lg shadow-blue-500/10"
                  : "border-gray-100 dark:border-gray-800"
              } bg-white/90 dark:bg-gray-900/60 p-6 flex flex-col gap-4`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                {plan.highlight && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {plan.price}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {plan.description}
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition">
                Book this plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

