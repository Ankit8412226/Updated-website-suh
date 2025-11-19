"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "How to Stand Up a CI/CD Pipeline in 14 Days",
    category: "DevOps",
    readTime: "8 min read",
    link: "#",
  },
  {
    title: "AI Product Roadmaps: From POC to Production",
    category: "AI & Automation",
    readTime: "6 min read",
    link: "#",
  },
  {
    title: "Technical SEO Checklist for Next.js & Headless CMS",
    category: "SEO & Growth",
    readTime: "9 min read",
    link: "#",
  },
  {
    title: "Security Hardening Playbook for SaaS Startups",
    category: "Cybersecurity",
    readTime: "7 min read",
    link: "#",
  },
];

const BlogResourcesSection = () => {
  return (
    <section id="insights" className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
              Insights
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Playbooks, Tutorials & Warnings
            </h2>
          </div>
          <Link
            href="#"
            className="text-blue-600 dark:text-blue-300 font-semibold text-sm underline underline-offset-4"
          >
            View all resources
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/50 p-5 flex flex-col gap-3"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                {post.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500">{post.readTime}</p>
              <Link
                href={post.link}
                className="text-sm font-semibold text-blue-600 dark:text-blue-300"
              >
                Read article &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogResourcesSection;

