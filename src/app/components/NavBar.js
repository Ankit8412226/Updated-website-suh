"use client";

import { useState, useEffect } from "react";
import { X, Menu, ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "../../components/ui/button";
import ModeToggle from "@/components/ModeToggle";
import Image from "next/image";
import Logo from "../../../public/icons/suhlogo.svg"
import Logo2 from "../../../public/icons/SUH_TECH_WEBHeader_LOGO (11).svg"
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { theme, resolvedTheme } = useTheme();

  // Handle mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if a nav item is active based on the current pathname
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const navItems = [
    // { name: "Home", href: "/" },
    { name: "About Us", href: "/industries" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleNavItemClick = (item) => {
    if (menu) setMenu(false);
    router.push(item.href);
  };

  const handleButtonClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-3xl border-b border-gray-200/80 dark:border-gray-800/80"
          : "bg-white/60 dark:bg-gray-900/70 backdrop-blur-3xl border-b border-gray-100/30 dark:border-gray-800/30"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-24 flex justify-between items-center h-16 md:h-20">
          {/* Logo (no animation) */}
          <div className="relative h-18 w-34 flex items-center">
            <Link href="/" className="block relative w-24 h-10 md:w-36 md:h-12">
              {mounted && (
                <Image
                  src={(resolvedTheme === 'dark' || theme === 'dark') ? Logo : Logo2}
                  alt="logo"
                  className="drop-shadow-md transition-all duration-300 object-contain"
                  fill
                  sizes="(max-width: 768px) (min-width:200px) 100px, 150px"
                  priority
                />
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <p
                  className={`cursor-pointer font-semibold py-1 px-2 transition-colors duration-150 ${isActive(item.href)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-100"
                  }`}
                  onClick={() => handleNavItemClick(item)}
                >
                  {item.name}
                </p>

                {/* Active indicator */}
                {isActive(item.href) && (
                  <div className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 absolute -bottom-1 left-0 w-full" />
                )}
              </div>
            ))}

            <div>
              <ModeToggle />
            </div>

            <div className="w-4 md:w-6 lg:w-8 xl:w-10"></div>

            <div className="">
              <button
                onClick={handleButtonClick}
                className="w-full h-12 rounded-full bg-gray-100 dark:bg-gray-800 text-slate-900 dark:text-white font-medium flex items-center justify-center gap-3 border-2 border-transparent hover:shadow-md transition px-6"
              >
                <span className="text-base">Book Demo</span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 text-white">
                  <ArrowRight size={14} color="white" />
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <div>
              <ModeToggle />
            </div>
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-white focus:outline-none p-2 rounded-full bg-gray-100/70 dark:bg-gray-800/50 backdrop-blur-sm transition-colors duration-300"
              aria-label={menu ? "Close menu" : "Open menu"}
            >
              {menu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU (no motion) */}
      {menu && (
        <div className="fixed inset-0 bg-white/95 dark:bg-gray-900/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center overflow-y-auto pt-20 pb-12">
          <div className="w-full max-w-md px-6 sm:px-8 py-4 flex flex-col items-center">
            {navItems.map((item) => (
              <div key={item.href} className="mb-6 w-full text-center relative" onClick={() => handleNavItemClick(item)}>
                <div className={`cursor-pointer w-full text-xl sm:text-2xl font-semibold py-3 ${isActive(item.href)
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-100"
                }`}>
                  <span>{item.name}</span>

                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600" />
                  )}
                </div>
              </div>
            ))}

            <div className="mt-8 w-full flex justify-center">
              <Button
                onClick={handleButtonClick}
                text={<div className="flex items-center justify-center gap-2 px-1"><span>Book Demo</span><ArrowRight size={16} /></div>}
                width="w-full max-w-xs"
                height="h-12"
                className="flex items-center justify-center shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 dark:from-blue-600 dark:to-purple-500 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
