"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, CreditCard } from "lucide-react"
import CraneLogo from "./crane-logo"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.company"), href: "/company" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.gallery"), href: "/gallery" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 h-20 flex items-center justify-between relative">
        {/* Left Side - Controls or Logo (depending on language) */}
        <div className="flex items-center">
          {language === "en" ? (
            /* Logo in English mode */
            <Link href="/" className="block">
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, -2, 0],
                  transition: { duration: 0.5 },
                }}
                className="drop-shadow-xl"
              >
                <CraneLogo className="h-20 w-auto" />
              </motion.div>
              <span className="sr-only">PROJECT CRANE SERVICES</span>
            </Link>
          ) : (
            /* Mobile Controls in Arabic mode */
            <div className="flex md:hidden items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          )}

          {/* Desktop Controls (only in Arabic mode) */}
          {language === "ar" && (
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Button asChild className="bg-red-800 hover:bg-red-700 text-white">
                  <Link href="/pay-now">
                    <CreditCard className="ml-2 h-4 w-4" />
                    {t("nav.payNow")}
                  </Link>
                </Button>
              </div>
              <LanguageSwitcher />
            </div>
          )}
        </div>

        {/* Center - Navigation (Desktop only) */}
        <div className="hidden md:flex justify-center items-center absolute left-1/2 -translate-x-1/2">
          <nav className="flex items-center justify-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-red-800"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side - Controls or Logo (depending on language) */}
        <div className="flex items-center">
          {language === "ar" ? (
            /* Logo in Arabic mode */
            <Link href="/" className="block">
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, -2, 0],
                  transition: { duration: 0.5 },
                }}
                className="drop-shadow-xl"
              >
                <CraneLogo className="h-20 w-auto" />
              </motion.div>
              <span className="sr-only">PROJECT CRANE SERVICES</span>
            </Link>
          ) : (
            /* Controls in English mode */
            <>
              {/* Desktop Controls */}
              <div className="hidden md:flex items-center space-x-4">
                <LanguageSwitcher />
                <div className="relative">
                  <Button asChild className="bg-red-800 hover:bg-red-700 text-white">
                    <Link href="/pay-now">
                      <CreditCard className="mr-2 h-4 w-4" />
                      {t("nav.payNow")}
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Mobile Controls */}
              <div className="flex md:hidden items-center">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
                  aria-expanded={isMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-20 z-50 bg-background p-4 shadow-md md:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-medium transition-colors hover:text-red-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Add Language Switcher in mobile menu */}
              <motion.div
                className="py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              >
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-3">{t("nav.language")}:</span>
                  <LanguageSwitcher />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 + 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <Button asChild className="bg-red-800 hover:bg-red-700 text-white w-full justify-center">
                  <Link href="/pay-now">
                    <CreditCard className={`${language === "ar" ? "ml-2" : "mr-2"} h-4 w-4`} />
                    {t("nav.payNow")}
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
