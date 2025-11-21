"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingSection() {
  const [plan, setPlan] = useState("yearly");
  const [activeCard, setActiveCard] = useState("pro");

  const yearly = plan === "yearly";

  const defaultHeight = 480;
  const activeHeight = 540;

  const cards = [
    {
      id: "basic",
      name: "Basic",
      priceYearly: "39.99",
      priceMonthly: "4.99",
      bullets: ["Income Tracking", "Expense Tracking", "Event Categorization"],
    },
    {
      id: "pro",
      name: "Pro",
      featured: true,
      priceYearly: "66.99",
      priceMonthly: "8.99",
      oldPrice: "116.99",
      bullets: [
        "Smart AI Assistant",
        "Income Tracking",
        "Expense Tracking",
        "Warranty Tracking",
        "Subscription Tracking",
      ],
    },
    {
      id: "starter",
      name: "Starter",
      priceYearly: "36.99",
      priceMonthly: "3.99",
      bullets: [
        "Income Tracking",
        "Expense Tracking",
        "Warranty Tracking",
        "Subscription Tracking",
        "Event Categorization",
      ],
    },
  ];

  return (
    <section id="pricing" className="w-full relative overflow-hidden py-24 lg:py-28">

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="inline-block px-6 py-1 rounded-full text-base font-medium border border-gray-700/40 dark:border-gray-300/40 text-gray-700 dark:text-gray-300 mb-4">
            Pricing
          </p>

          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white leading-tight mb-4">
            Choose the Plan That Fits You
          </h2>

          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300">
            Find the perfect plan for your needs, whether you're just getting started or looking for advanced tools.
          </p>
        </div>

        {/* YEARLY / MONTHLY SWITCH */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <div className="relative inline-flex items-center gap-4">

            {/* YEARLY BUTTON */}
            <div className="relative">
              <button
                onClick={() => setPlan("yearly")}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-all
                  ${yearly ? "text-white" : "text-gray-400 dark:text-gray-300"}
                `}
              >
                Yearly
              </button>

              {yearly && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white text-[11px] font-semibold text-gray-900 px-2 py-1 shadow-sm">
                  20% Off
                </div>
              )}

              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute inset-0 rounded-full ${
                  yearly
                    ? "bg-gradient-to-r from-purple-600 to-blue-500"
                    : "bg-gray-800/30 dark:bg-gray-700/30"
                }`}
                style={{ margin: 2, opacity: yearly ? 1 : 0.28 }}
              />
            </div>

            {/* MONTHLY BUTTON */}
            <div className="relative">
              <button
                onClick={() => setPlan("monthly")}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-all
                  ${!yearly ? "text-white" : "text-gray-400 dark:text-gray-300"}
                `}
              >
                Monthly
              </button>

              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute inset-0 rounded-full ${
                  !yearly
                    ? "bg-gradient-to-r from-purple-600 to-blue-500"
                    : "bg-gray-800/30 dark:bg-gray-700/30"
                }`}
                style={{ margin: 2, opacity: !yearly ? 1 : 0.28 }}
              />
            </div>

          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">

          {cards.map((c) => {
            const isActive = activeCard === c.id;
            const price = yearly ? c.priceYearly : c.priceMonthly;

            return (
              <motion.div
                key={c.id}
                layout
                onMouseEnter={() => setActiveCard(c.id)}
                onMouseLeave={() => setActiveCard("pro")}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="
                  relative rounded-3xl overflow-hidden flex flex-col justify-between
                  p-7 md:p-8 border backdrop-blur-xl cursor-pointer

                  /* LIGHT MODE */
                  bg-white/40 border-gray-300 text-gray-800 shadow-[0_8px_24px_rgba(0,0,0,0.05)]

                  /* DARK MODE */
                  dark:bg-gray-900/50 dark:border-gray-800 dark:text-white
                "
                style={{
                  minHeight: isActive ? activeHeight : defaultHeight,
                  boxShadow: isActive
                    ? "0 32px 70px -15px rgba(0,0,0,0.55)"
                    : "0 12px 25px -10px rgba(0,0,0,0.25)",
                }}
              >

                {/* TOP SPOTLIGHT */}
                {(c.featured || isActive) && (
                  <div className="pointer-events-none absolute inset-x-0 -top-10 h-44">
                    <div
                      style={{
                        background:
                          "radial-gradient(450px 160px at 50% 0%, rgba(124,58,237,0.26), rgba(59,130,246,0.15) 25%, transparent 60%)",
                        filter: "blur(32px)",
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                )}

                {/* CONTENT */}
                <div className="z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {c.name}
                    </h3>

                    {c.featured && (
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-600 text-white">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* PRICE */}
                  <div className="mt-6 mb-4">
                    {c.oldPrice && (
                      <div className="text-sm line-through text-gray-500 dark:text-gray-400">
                        ${c.oldPrice}
                      </div>
                    )}

                    <div className="flex items-end gap-3">
                      <div className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        ${price}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                        {yearly ? "/yr" : "/mo"}
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      one-time payment + Local Taxes
                    </div>
                  </div>

                  {/* BUY BUTTON */}
                  <div className="mt-2">
                    <Link
                      href="#"
                      className={`
                        relative inline-flex items-center justify-center w-full px-6 py-3 
                        rounded-lg font-semibold transition-all overflow-hidden
                        ${
                          isActive
                            ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                            : "bg-white border border-gray-300 text-gray-800 dark:bg-transparent dark:border-gray-600/40 dark:text-white"
                        }
                      `}
                    >
                      {!isActive && (
                      <div
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        style={{
                          background: `
                            radial-gradient(450px 160px at 50% 0%, rgba(124,58,237,0.26), rgba(59,130,246,0.15) 25%, transparent 60%)
                          `,
                          opacity: 0.9,
                          mixBlendMode: "screen",
                          filter: "blur(18px)"
                        }}
                      />
                    )}

                      <span className="relative z-10 flex items-center">
                        Buy now →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* BULLETS */}
                <div className="mt-2 md:mt-3 pb-4">
                  <ul className="space-y-2.5 md:space-y-3">
                    {c.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 dark:text-gray-200 text-[15px]">
                        <Check size={16} className="text-blue-400 mt-1" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BOTTOM PURPLE GRADIENT */}
                <div
                  className="pointer-events-none absolute -left-20 -bottom-20 w-72 h-72 rounded-full blur-3xl opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.18), rgba(59,130,246,0.10) 40%, transparent 70%)",
                  }}
                />
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}




// "use client";

// import { motion } from "framer-motion";

// const plans = [
//   {
//     name: "Sprint Pod",
//     price: "From $12k / month",
//     description: "Design + engineering pod for roadmap acceleration.",
//     highlight: true,
//     features: [
//       "PM + Product Designer + 2 Engineers + QA",
//       "Two-week sprint cadence",
//       "CI/CD setup + analytics instrumentation",
//       "Weekly stakeholder reviews",
//     ],
//   },
//   {
//     name: "Project-Based",
//     price: "Fixed scope",
//     description: "Best for MVPs, rebrands, or cloud migrations.",
//     features: [
//       "Discovery workshop & architecture",
//       "Milestone-based billing",
//       "Joint QA and UAT sign-offs",
//       "30-day hypercare support",
//     ],
//   },
//   {
//     name: "Dedicated DevOps",
//     price: "From $8k / month",
//     description: "Managed pipelines, infrastructure, and SRE on call.",
//     features: [
//       "24/7 monitoring and alerting",
//       "Infrastructure as Code",
//       "Security and compliance automation",
//       "Release governance playbooks",
//     ],
//   },
//   {
//     name: "Growth & SEO",
//     price: "From $6k / month",
//     description: "Content ops, technical SEO, and CRO experimentation.",
//     features: [
//       "Topic clusters & pillar pages",
//       "Schema, Core Web Vitals, and accessibility fixes",
//       "A/B tests every sprint",
//       "Editorial design & CMS automation",
//     ],
//   },
// ];

// const PricingSection = () => {
//   return (
//     <section id="pricing" className="w-full py-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
//             Pricing
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Scale with Transparent Models
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Pods launch within 2 weeks. Cancel anytime with 30-day notice.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//           {plans.map((plan) => (
//             <motion.div
//               key={plan.name}
//               whileHover={{
//                 y: -6,
//                 boxShadow: "0px 25px 40px rgba(15, 23, 42, 0.12)",
//               }}
//               className={`rounded-3xl border ${
//                 plan.highlight
//                   ? "border-blue-500 shadow-lg shadow-blue-500/10"
//                   : "border-gray-100 dark:border-gray-800"
//               } bg-white/90 dark:bg-gray-900/60 p-6 flex flex-col gap-4`}
//             >
//               <div className="flex items-center justify-between">
//                 <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
//                   {plan.name}
//                 </h3>
//                 {plan.highlight && (
//                   <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
//                     Popular
//                   </span>
//                 )}
//               </div>
//               <p className="text-lg font-semibold text-gray-900 dark:text-white">
//                 {plan.price}
//               </p>
//               <p className="text-gray-600 dark:text-gray-300 text-sm">
//                 {plan.description}
//               </p>
//               <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 flex-1">
//                 {plan.features.map((feature) => (
//                   <li key={feature} className="flex gap-2">
//                     <span className="text-blue-600">•</span>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <button className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition">
//                 Book this plan
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;

