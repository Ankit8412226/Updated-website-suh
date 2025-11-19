"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import { ArrowUpRight } from "lucide-react";

const portfolioProjects = [
  {
    slug: "fintech-lending-cloud",
    title: "Fintech Lending Cloud",
    industry: "FinTech",
    client: "Leading Digital Lending Platform",
    thumbnail: "Modernized lending infrastructure for compliance and scale",
    problem:
      "Monolithic app blocked new feature releases and compliance updates.",
    solution:
      "Rebuilt as modular Next.js + Nest.js platform with Terraform-managed AWS landing zone and SOC2 ready audit trails.",
    impact: "32% faster loan approvals, 99.98% uptime, +68% organic traffic.",
    tech: ["Next.js", "Nest.js", "AWS", "Terraform", "Elastic"],
    duration: "6 months",
    team: "8 engineers + PM",
  },
  {
    slug: "ai-claims-automation",
    title: "AI Claims Automation",
    industry: "InsurTech",
    client: "Mid-Market Insurance Carrier",
    thumbnail: "LLM-powered claims processing with 8x speed improvement",
    problem:
      "Manual claim review introduced 10 day backlogs and higher error rates.",
    solution:
      "Fine-tuned LLM pipeline with document intelligence, human-in-the-loop QA, and ServiceNow integration.",
    impact: "8x faster claim triage and 27% lower operating costs.",
    tech: ["Python", "LangChain", "Azure OpenAI", "ServiceNow"],
    duration: "4 months",
    team: "5 engineers + data scientist",
  },
  {
    slug: "healthcare-marketplace",
    title: "Healthcare Marketplace",
    industry: "HealthTech",
    client: "Regional Healthcare Network",
    thumbnail: "HIPAA-compliant marketplace with native apps",
    problem:
      "Legacy PHP portal couldn't handle new locations or HIPAA compliant messaging.",
    solution:
      "Migrated to headless CMS + GraphQL API with React Native apps, encrypted messaging, and observability stack.",
    impact:
      "4 new regions launched in 6 weeks, 120% YoY bookings, zero P1 incidents.",
    tech: ["React Native", "GraphQL", "Kubernetes", "Datadog"],
    duration: "8 months",
    team: "12 engineers + designers",
  },
  {
    slug: "ecommerce-replatform",
    title: "E-Commerce Replatform",
    industry: "Retail",
    client: "Multi-Brand Fashion Retailer",
    thumbnail: "Headless commerce with personalization engine",
    problem:
      "Legacy Magento site had poor mobile performance and couldn't support personalization.",
    solution:
      "Built Next.js storefront with Shopify Plus backend, integrated recommendation engine and A/B testing framework.",
    impact: "45% mobile conversion lift, 2.1s average page load, 3x faster releases.",
    tech: ["Next.js", "Shopify Plus", "Algolia", "Vercel"],
    duration: "5 months",
    team: "6 engineers + UX designer",
  },
  {
    slug: "devops-transformation",
    title: "DevOps Transformation",
    industry: "SaaS",
    client: "B2B Analytics Platform",
    thumbnail: "Zero-downtime deployment with GitOps automation",
    problem:
      "Manual deployments caused frequent outages and slowed feature velocity.",
    solution:
      "Implemented Kubernetes with ArgoCD, Terraform IaC, automated testing pipeline, and comprehensive monitoring.",
    impact: "99.99% uptime, 12x faster deployments, 80% reduction in incidents.",
    tech: ["Kubernetes", "ArgoCD", "Terraform", "GitHub Actions"],
    duration: "3 months",
    team: "3 DevOps engineers",
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    industry: "FinTech",
    client: "Digital-First Bank",
    thumbnail: "Secure banking app with biometric authentication",
    problem:
      "Existing app had poor UX, security concerns, and couldn't support new financial products.",
    solution:
      "Built native iOS/Android apps with React Native, implemented secure authentication, real-time notifications, and modular architecture.",
    impact: "4.8 star rating, 200k+ downloads in 3 months, 92% feature adoption.",
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    duration: "7 months",
    team: "10 engineers + product designer",
  },
];

export default function PortfolioPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="mt-16 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-24">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
                Portfolio
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Case Studies with Business Impact
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We document every engagement like a product lab: baseline
                metrics, sprint-by-sprint releases, and board-ready reporting.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/portfolio/${project.slug}`}>
                    <motion.div
                      className="h-full rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl p-6 flex flex-col gap-4 cursor-pointer"
                      whileHover={{
                        y: -8,
                        boxShadow: "0px 25px 40px rgba(15, 23, 42, 0.12)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-gray-400">
                        <span>{project.industry}</span>
                        <ArrowUpRight size={20} className="text-blue-500" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {project.thumbnail}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                        {project.problem}
                      </p>
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                          {project.impact}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 4).map((item) => (
                            <span
                              key={item}
                              className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
                            >
                              {item}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                              +{project.tech.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </main>
  );
}
