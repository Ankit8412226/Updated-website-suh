"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { title: "Discovery", subtitle: "Step 1", description: "We understand your vision and goals deeply.", image: "/images/1.jpg" },
  { title: "Design", subtitle: "Step 2", description: "Beautiful, intuitive UI/UX crafted with care.", image: "/images/2.jpg" },
  { title: "Architecture", subtitle: "Step 3", description: "Solid foundation with scalable tech stack.", image: "/images/3.jpg" },
  { title: "Development", subtitle: "Step 4", description: "Clean, tested, production-ready code.", image: "/images/4.jpg" },
  { title: "Testing", subtitle: "Step 5", description: "Bulletproof quality assurance process.", image: "/images/5.jpg" },
  { title: "Deployment", subtitle: "Step 6", description: "Smooth launch with zero downtime.", image: "/images/6.jpg" },
  { title: "Growth", subtitle: "Step 7", description: "Continuous improvement and scaling.", image: "/images/7.jpg" },
];

export default function ProcessSection() {
  // YEHI LINE FIX KI HAI
  const containerRef = useRef(null); // ya phir useRef<HTMLDivElement>(null) agar TS use kar raha hai

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    document.querySelectorAll("[data-index]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden py-32">
      {/* Baaki sab same rahega */}
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-20">
          <p className="text-gray-500 dark:text-gray-400 text-sm tracking-widest uppercase mb-4">Our Process</p>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">How We Build</h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Scroll through our battle-tested process. Watch the 3D preview transform in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Steps */}
          <div className="space-y-24 lg:space-y-32">
            {steps.map((step, i) => (
              <motion.article
                key={i}
                data-index={i}
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: activeIndex === i ? 1 : 0.5 }}
                viewport={{ once: false, margin: "-40%" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className={`text-8xl font-black transition-all duration-700 ${
                      activeIndex === i ? "text-purple-500 dark:text-purple-400" : "text-gray-200 dark:text-gray-800"
                    }`}>
                      {(i + 1).toString().padStart(2, "0")}
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <span className="inline-block px-4 py-2 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
                      {step.subtitle}
                    </span>
                    <h3 className={`text-4xl font-bold mb-4 transition-colors ${
                      activeIndex === i ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-lg leading-relaxed ${
                      activeIndex === i ? "text-gray-700 dark:text-gray-300" : "text-gray-500 dark:text-gray-600"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right 3D Fixed Card */}
          <div className="hidden lg:flex justify-center items-center sticky top-20 h-screen">
            <motion.div
              className="relative"
              animate={{
                rotateY: activeIndex % 2 === 0 ? -15 : 15,
                rotateX: 5,
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}
            >
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-black rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ rotateY: 90, opacity: 0, scale: 0.9 }}
                    animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl overflow-hidden"
                    style={{ transform: "translateZ(80px)", width: 600, height: 400 }}
                  >
                    <Image
                      src={steps[activeIndex].image}
                      alt={steps[activeIndex].title}
                      fill
                      className="object-cover"
                      priority
                      sizes="600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm opacity-80">Currently viewing</p>
                      <p className="text-2xl font-bold">{steps[activeIndex].title}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}








// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const steps = [
//   {
//     title: "Requirement Analysis",
//     description:
//       "Stakeholder interviews, KPI mapping, and technical discovery sprint.",
//   },
//   {
//     title: "Solution Planning",
//     description:
//       "Architecture blueprint, backlog creation, resourcing, and success metrics.",
//   },
//   {
//     title: "Design",
//     description:
//       "Product workshops, UX/UI systems, copy, accessibility, and rapid prototypes.",
//   },
//   {
//     title: "Development",
//     description:
//       "Agile pods pushing code daily with CI/CD, QA automation, and preview environments.",
//   },
//   {
//     title: "Testing",
//     description:
//       "Unit, integration, security, and performance tests with visual regression suites.",
//   },
//   {
//     title: "Deployment",
//     description:
//       "Blue/green or canary releases, observability dashboards, and rollback plans.",
//   },
//   {
//     title: "Maintenance",
//     description:
//       "SLO monitoring, feature grooming, SEO upkeep, and monthly business reviews.",
//   },
// ];

// const ProcessSection = () => {
//   return (
//     <section id="process" className="w-full py-16 lg:py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
//             Process
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
//             How We Deliver
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {steps.map((step, index) => (
//             <motion.div
//               key={step.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ delay: index * 0.05 }}
//               className="relative rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 p-6 flex flex-col gap-3"
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-5xl font-black text-gray-200 dark:text-gray-700">
//                   {(index + 1).toString().padStart(2, "0")}
//                 </span>
//                 <ArrowRight className="text-blue-500" size={22} />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                 {step.title}
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 {step.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;

