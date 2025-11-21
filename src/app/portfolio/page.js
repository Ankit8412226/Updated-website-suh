"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";

const exampleImages = [
  "/mnt/data/1e3e0ce4-749c-4196-9c54-620fb17507c6.png",
  "/mnt/data/34b06152-d26c-4278-b47a-77edbb24d17e.png",
  "/mnt/data/1e3e0ce4-749c-4196-9c54-620fb17507c6.png",
];

const caseStudies = [
  {
    title: "Construction Company Website",
    year: "©2025 - Opndoo Studio",
    subtitle: "A responsive website for a construction brand with strong visual identity.",
    image: exampleImages[0],
  },
  {
    title: "Consulting Agency Website",
    year: "©2025 - Opndoo Studio",
    subtitle: "High-conversion marketing site for a consulting agency with case studies and team pages.",
    image: exampleImages[1],
  },
  {
    title:
      "Arog – Post-Hospital Care Platform with Extended Title to Demo Truncation",
    year: "©2025 - Opndoo Studio",
    subtitle:
      "A digital platform that helps patients navigate post-hospital care, appointment scheduling, and follow-ups. This description is intentionally long to demonstrate truncation with ellipsis in the UI.",
    image: exampleImages[2],
  },
  {
    title:
      "Arog – Post-Hospital Care Platform with Extended Title to Demo Truncation",
    year: "©2025 - Opndoo Studio",
    subtitle:
      "A digital platform that helps patients navigate post-hospital care, appointment scheduling, and follow-ups. This description is intentionally long to demonstrate truncation with ellipsis in the UI.",
    image: exampleImages[2],
  },
  {
    title:
      "Arog – Post-Hospital Care Platform with Extended Title to Demo Truncation",
    year: "©2025 - Opndoo Studio",
    subtitle:
      "A digital platform that helps patients navigate post-hospital care, appointment scheduling, and follow-ups. This description is intentionally long to demonstrate truncation with ellipsis in the UI.",
    image: exampleImages[2],
  },
];

export default function PortfolioPage() {
  const router = useRouter();
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
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
              <p className="uppercase text-xs tracking-[0.4em] text-gray-500 dark:text-gray-400 mb-4">
                Work Showcase
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
                Case Studies & Success Stories
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We build solutions that deliver results. Here's a selection of our most impactful projects.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study, idx) => (
                <motion.article
                  key={study.title + idx}
                  className="rounded-2xl bg-white dark:bg-gray-900 shadow-md dark:shadow-none overflow-hidden"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15,23,42,0.08)" }}
                >
                  {/* Image top */}
                  <div className="relative w-full aspect-[16/10] md:aspect-[12/7]">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content area */}
                  <div className="p-6 bg-white dark:bg-gray-50/0">
                    {/* small meta (year / studio) */}
                    <div className="text-xs text-gray-500 mb-2">{study.year}</div>

                    {/* Title - clamp to 2 lines with ellipsis */}
                    <h3
                      className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {study.title}
                    </h3>

                    {/* subtitle / short description - clamp to 3 lines */}
                    <p
                      className="mt-3 text-gray-600 dark:text-gray-300 text-sm"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {study.subtitle}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </main>
  );
}
