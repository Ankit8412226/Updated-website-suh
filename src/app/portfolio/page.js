"use client";

import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import OurProject from "../../app/components/ourProjects";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <NavBar />
      
      <div className="mt-16 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-24">
        <OurProject />
      </div>

      <FooterSection />
    </main>
  );
}
