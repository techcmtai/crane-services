"use client"

import { useState, useEffect } from "react"
import type { Metadata } from "next"

import { motion } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Droplet,
  FlaskRoundIcon as Flask,
  Zap,
  Building2,
  HardHat,
  PhoneCall,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import AdditionalServices from "@/components/additional-services"


export default function Home() {
  const { t, language } = useLanguage()

  const carouselItems = [
    {
      image: "/images/company/construction-site.png",
      title: t("hero.specialist"),
      subtitle: t("hero.subtitle"),
      cta: t("hero.getQuote"),
      ctaLink: "/contact",
    },
    {
      image: "/images/company/lifting-operation.png",
      title: t("hero.globalExpertise"),
      subtitle: t("hero.globalSubtitle"),
      cta: t("hero.ourProjects"),
      ctaLink: "/projects",
    },
    {
      image: "/images/company/truck-crane.png",
      title: t("hero.innovativeSolutions"),
      subtitle: t("hero.innovativeSubtitle"),
      cta: t("hero.ourServices"),
      ctaLink: "/services",
    },
    {
      image: "/images/company/headquarters.png",
      title: "PROJECT CRANE SERVICES",
      subtitle: t("hero.subtitle"),
      cta: t("hero.getQuote"),
      ctaLink: "/contact",
    },
    {
      image: "/images/company/mobile-crane.png",
      title: t("hero.specialist"),
      subtitle: t("hero.subtitle"),
      cta: t("hero.ourServices"),
      ctaLink: "/services",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Pause autoplay when user interacts with controls
  const handleInteraction = () => {
    setAutoplay(false)
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => setAutoplay(true), 5000)
  }

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentSlide, autoplay])

  // Cranes available for hire
  const cranesForHire = [
    {
      title: t("cranes.telescopicCrawler"),
      capacity: "60–220 tonnes",
      description: t("cranes.telescopicDesc"),
      image: "/images/allcranes/1.jpg",
    },
    {
      title: t("cranes.crawler"),
      capacity: "55–800 tonnes",
      description: t("cranes.crawlerDesc"),
      image: "/images/allcranes/2.jpg",
    },
    {
      title: t("cranes.roughTerrain"),
      capacity: "40–110 tonnes",
      description: t("cranes.roughTerrainDesc"),
      image: "/images/allcranes/rough.jpg",
    },
    {
      title: t("cranes.truck"),
      capacity: "25–110 tonnes",
      description: t("cranes.truckDesc"),
      image: "/images/allcranes/truck.jpg",
    },
    {
      title: t("cranes.allTerrain"),
      capacity: "160–700 tonnes",
      description: t("cranes.allTerrainDesc"),
      image: "/images/allcranes/terrain.jpg",
    },
    {
      title: t("cranes.city"),
      capacity: "45 tonnes",
      description: t("cranes.cityDesc"),
      image: "/images/allcranes/city.jpg",
    },
  ]

  // Industries we work with
  const industries = [
    {
      name: t("industries.oilAndGas"),
      icon: <Droplet className="h-12 w-12" />,
      description: t("industries.oilAndGasDesc"),
    },
    {
      name: t("industries.oilExploration"),
      icon: <Flask className="h-12 w-12" />,
      description: t("industries.oilExplorationDesc"),
    },
    {
      name: t("industries.energy"),
      icon: <Zap className="h-12 w-12" />,
      description: t("industries.energyDesc"),
    },
    {
      name: t("industries.infrastructure"),
      icon: <Building2 className="h-12 w-12" />,
      description: t("industries.infrastructureDesc"),
    },
    {
      name: t("industries.construction"),
      icon: <HardHat className="h-12 w-12" />,
      description: t("industries.constructionDesc"),
    },
  ]

  // Services provided
  const servicesProvided = [
    {
      text: t("services.bareRental"),
    },
    {
      text: t("services.craneHire"),
    },
    {
      text: t("services.fullLift"),
    },
  ]

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Hero Carousel - Reduced height on mobile */}
      <div className="relative h-[70vh] md:h-screen w-full overflow-hidden">
        {/* Display current slide only */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={carouselItems[currentSlide].image || "/placeholder.svg"}
              alt="PROJECT CRANE SERVICES"
              className="h-full w-full object-cover"
              style={{ filter: "brightness(0.4)" }}
            />
          </div>

          {/* Content */}
          <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <motion.h1
              key={`title-${currentSlide}`}
              className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {carouselItems[currentSlide].title}
            </motion.h1>

            <motion.p
              key={`subtitle-${currentSlide}`}
              className="mx-auto mt-4 max-w-2xl text-lg md:text-xl sm:text-2xl md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {carouselItems[currentSlide].subtitle}
            </motion.p>

            <motion.div
              key={`cta-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 md:mt-8"
            >
              <Button size="lg" className="bg-red-800 text-white hover:bg-red-700" asChild>
                <Link href={carouselItems[currentSlide].ctaLink}>{carouselItems[currentSlide].cta}</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className={`absolute ${language === "ar" ? "right-4" : "left-4"} top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50`}
          onClick={() => {
            prevSlide()
            handleInteraction()
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className={`absolute ${language === "ar" ? "left-4" : "right-4"} top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50`}
          onClick={() => {
            nextSlide()
            handleInteraction()
          }}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index)
                handleInteraction()
              }}
              className={`h-2 w-8 rounded-full transition-all ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Services Provided Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Side */}
              <motion.div
                className={`h-full w-full ${language === "ar" ? "md:order-2" : ""}`}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/company/headquarters.png"
                  alt="PROJECT CRANE SERVICES Facility and Equipment"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Content Side */}
              <motion.div
                className={`bg-red-800 p-8 md:p-12 text-white flex flex-col justify-center ${
                  language === "ar" ? "md:order-1" : ""
                }`}
                initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t("services.provided")}
                </motion.h2>
                <ul className="space-y-6">
                  {servicesProvided.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: language === "ar" ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="flex items-start"
                    >
                      <Check className={`h-6 w-6 ${language === "ar" ? "ml-3" : "mr-3"} mt-1 flex-shrink-0`} />
                      <span className="text-lg md:text-xl">{service.text}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: servicesProvided.length * 0.2 + 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-white text-red-800 hover:bg-gray-100" asChild>
                    <Link href="/services">{t("services.viewAll")}</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <AdditionalServices />

      {/* Cranes Available for Hire Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t("cranes.title")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("cranes.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cranesForHire.map((crane, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-lg border bg-background shadow-sm transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={crane.image || "/placeholder.svg"}
                    alt={crane.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{crane.title}</h3>
                  <p className="text-sm font-medium text-red-800">{crane.capacity}</p>
                  <p className="mt-2 text-muted-foreground">{crane.description}</p>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">{t("cranes.requestQuote")}</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Work With Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t("industries.title")}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t("industries.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center rounded-lg border bg-background p-8 text-center shadow-sm transition-all"
              >
                <div className="mb-4 rounded-full bg-red-100 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-300">
                  {industry.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{industry.name}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: industries.length * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center justify-center rounded-lg bg-red-800 p-8 text-center text-white shadow-lg transition-all"
            >
              <div className="mb-4 rounded-full bg-red-700 p-4">
                <PhoneCall className="h-12 w-12" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{t("industries.needServices")}</h3>
              <p className="mb-6">{t("industries.contactUs")}</p>
              <Button size="lg" className="bg-white text-red-800 hover:bg-gray-100" asChild>
                <Link href="/contact">{t("industries.requestQuote")}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
