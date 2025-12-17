"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const CareersSection = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setJobs(data.jobs || []);
      } catch (error) {
        console.error("Error loading jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  const openings = loading
    ? []
    : jobs.filter((job) => job.isActive !== false).map((job) => ({
        title: job.title,
        type: job.type || "Remote • Full time",
        summary: job.description || "",
        location: job.location || "Remote",
      }));

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
          {loading ? (
            <p className="text-gray-500 text-sm col-span-full">
              Loading job openings...
            </p>
          ) : openings.length === 0 ? (
            <p className="text-gray-500 text-sm col-span-full">
              No current openings. Check back soon!
            </p>
          ) : (
            openings.map((job, index) => (
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
                  {job.type} • {job.location}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                  {job.summary}
                </p>
                <button
                  onClick={() =>
                    window.open(
                      `mailto:hr@suhtech.top?subject=Application for ${job.title}&body=Hi,%0D%0A%0D%0AI am interested in applying for the ${job.title} position.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards`,
                      "_self"
                    )
                  }
                  className="mt-2 px-6 py-2.5 rounded-full bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 hover:border-blue-700 dark:hover:border-blue-400 transition-all duration-300 font-semibold text-sm"
                >
                  Apply Now
                </button>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;

