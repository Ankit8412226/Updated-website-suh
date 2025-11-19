"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Fintech Lending Cloud",
    industry: "FinTech",
    problem:
      "Monolithic app blocked new feature releases and compliance updates.",
    solution:
      "Rebuilt as modular Next.js + Nest.js platform with Terraform-managed AWS landing zone and SOC2 ready audit trails.",
    impact: "32% faster loan approvals, 99.98% uptime, +68% organic traffic.",
    tech: ["Next.js", "Nest.js", "AWS", "Terraform", "Elastic"],
  },
  {
    title: "AI Claims Automation",
    industry: "InsurTech",
    problem:
      "Manual claim review introduced 10 day backlogs and higher error rates.",
    solution:
      "Fine-tuned LLM pipeline with document intelligence, human-in-the-loop QA, and ServiceNow integration.",
    impact: "8x faster claim triage and 27% lower operating costs.",
    tech: ["Python", "LangChain", "Azure OpenAI", "ServiceNow"],
  },
  {
    title: "Healthcare Marketplace",
    industry: "HealthTech",
    problem:
      "Legacy PHP portal couldn’t handle new locations or HIPAA compliant messaging.",
    solution:
      "Migrated to headless CMS + GraphQL API with React Native apps, encrypted messaging, and observability stack.",
    impact:
      "4 new regions launched in 6 weeks, 120% YoY bookings, zero P1 incidents.",
    tech: ["React Native", "GraphQL", "Kubernetes", "Datadog"],
  },
];

const PortfolioSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="work" className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Case Studies with Business Impact
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We document every engagement like a product lab: baseline metrics,
            sprint-by-sprint releases, and board-ready reporting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <motion.div
              key={study.title}
              className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl p-6 flex flex-col gap-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -8,
                boxShadow: "0px 25px 40px rgba(15, 23, 42, 0.12)",
              }}
            >
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-gray-400">
                <span>{study.industry}</span>
                <span>Case Study</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {study.title}
              </h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <strong className="text-gray-900 dark:text-white">
                    Client problem:
                  </strong>{" "}
                  {study.problem}
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">
                    Our solution:
                  </strong>{" "}
                  {study.solution}
                </p>
                <p>
                  <strong className="text-gray-900 dark:text-white">
                    Business impact:
                  </strong>{" "}
                  {study.impact}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {study.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

