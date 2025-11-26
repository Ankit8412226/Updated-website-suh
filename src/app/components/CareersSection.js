"use client";

import { motion } from "framer-motion";

const openings = [
  {
    title: "Senior Product Designer",
    type: "Remote • Full time",
    summary: "Own design systems for enterprise web + mobile platforms.",
  },
  {
    title: "DevOps Engineer (Kubernetes)",
    type: "Hybrid • Pune / Remote",
    summary:
      "Manage multi-cloud pipelines, IaC modules, and observability stacks.",
  },
  {
    title: "Full-stack Engineer (React + Node)",
    type: "Remote • Contract",
    summary:
      "Lead feature squads shipping SaaS modules end-to-end with CI, QA, and docs.",
  },
  {
    title: "QA Engineer (Manual & Automation)",
    type: "Remote • Contract",
    summary:
      "Design and execute manual and automated test cases for web applications",
  },
  {
    title: "UI Designer",
    type: "Remote • Contract",
    summary:
      "Craft intuitive user interfaces that balance visual design and usability at scale.",
  },
  {
    title: "Digital Marketing Executive",
    type: "Remote • Contract",
    summary:
      "Drive brand growth through data-driven digital campaigns across web and social platforms.",
  },
];

const CareersSection = () => {
  return (
    <section id="careers" className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
            Careers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Build with a Remote-First Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer deep work culture, quarterly offsites, education budgets,
            and hardware credits. Contractors and interns welcome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {openings.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 p-5 flex flex-col gap-3"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {job.title}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-300 font-semibold">
                {job.type}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                {job.summary}
              </p>
              <button className="mt-2 px-6 py-2.5 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 hover:border-blue-700 dark:hover:border-blue-400 transition-all duration-300 font-semibold text-sm">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;

