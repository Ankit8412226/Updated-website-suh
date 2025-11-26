"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo2 from "../../../public/icons/SUH_TECH_WEBHeader_LOGO (11).svg";
import Logo from "../../../public/icons/suhlogo.svg";
import { Separator } from "../../components/ui/separator";

// Tooltip Component
const SubscriptionTooltip = ({ message, type, show }) => {
  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`absolute -top-16 left-0 right-0 mx-auto max-w-xs p-3 rounded-lg shadow-xl flex items-center gap-3 backdrop-blur-md border ${type === "success"
              ? "bg-green-50/90 dark:bg-green-900/50 border-green-200 dark:border-green-800"
              : "bg-red-50/90 dark:bg-red-900/50 border-red-200 dark:border-red-800"
            }`}
        >
          {type === "success" ? (
            <CheckCircle
              className="text-green-600 dark:text-green-400 shrink-0"
              size={20}
            />
          ) : (
            <AlertCircle className="text-red-600 dark:text-red-400 shrink-0" size={20} />
          )}
          <span
            className={`text-sm font-medium ${type === "success"
                ? "text-green-800 dark:text-green-200"
                : "text-red-800 dark:text-red-200"
              }`}
          >
            {message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState({
    message: "",
    type: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (subscriptionStatus.type === "success" && subscriptionStatus.message) {
      setShowTooltip(true);
      const timer = setTimeout(() => {
        setShowTooltip(false);
        setTimeout(() => {
          setSubscriptionStatus({ message: "", type: "" });
        }, 300);
      }, 5000);
      return () => clearTimeout(timer);
    } else if (subscriptionStatus.message) {
      setShowTooltip(true);
    }
  }, [subscriptionStatus]);

  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    // { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Apps", href: "/services/mobile-apps" },
        { name: "Cloud & DevOps", href: "/services/cloud-and-devops" },
        { name: "AI & Automation", href: "/services/ai-and-automation" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "IT Consulting", href: "/services/it-consulting" },
        { name: "SaaS Development", href: "/services/saas-development" },
        { name: "Support", href: "/services/maintenance-and-support" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/portfolio" },
        { name: "Industries", href: "/industries" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/insights" },
      ],
    },
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubscriptionStatus({
        message: "Please enter a valid email address",
        type: "error",
      });
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubscriptionStatus({
        message: "Successfully subscribed to our newsletter!",
        type: "success",
      });
      setEmail("");
    } catch (error) {
      setSubscriptionStatus({
        message: "Failed to connect. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900/50 pt-20 pb-10 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              {mounted && (
                <Image
                  src={(resolvedTheme === 'dark' || theme === 'dark') ? Logo : Logo2}
                  alt="Suh Tech Logo"
                  width={180}
                  height={60}
                  className="object-contain"
                />
              )}
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We are an end-to-end IT services and product engineering studio
              helping fintech, SaaS, health, and commerce teams launch secure,
              SEO-friendly digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-gray-900 dark:text-white mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                Stay Updated
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Get the latest tech trends and company updates delivered to your inbox.
              </p>

              <form onSubmit={handleSubscribe} className="relative">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-2 top-1.5 p-1.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <ArrowRight size={18} />
                    )}
                  </button>
                </div>
                <SubscriptionTooltip
                  message={subscriptionStatus.message}
                  type={subscriptionStatus.type}
                  show={showTooltip}
                />
              </form>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-200 dark:bg-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Suh Tech Private Limited. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
