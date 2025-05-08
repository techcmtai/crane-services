"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Industries() {
  const industries = [
    "Oil & Gas",
    "Energy",
    "Infrastructure",
    "Construction",
    "Wind Farms",
    "Manufacturing",
    "Shipping",
  ]

  const cranes = [
    {
      type: "Telescopic Crawler",
      capacity: "60–220 t",
      image: "/placeholder.svg?key=t51k5",
    },
    {
      type: "Crawler Cranes",
      capacity: "55–800 t",
      image: "/placeholder.svg?key=rbpoj",
    },
    {
      type: "Rough Terrain",
      capacity: "40–110 t",
      image: "/placeholder.svg?key=6uixw",
    },
    {
      type: "Truck Crane",
      capacity: "25–110 t",
      image: "/placeholder.svg?key=bznpv",
    },
    {
      type: "All Terrain",
      capacity: "160–700 t",
      image: "/placeholder.svg?key=ea9v4",
    },
    {
      type: "City Cranes",
      capacity: "45 t",
      image: "/placeholder.svg?height=300&width=500&query=city crane side view",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = cranes.length - 1
  const carouselRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleItems > maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex - visibleItems + 1 : prevIndex - 1))
  }

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, visibleItems])

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Industries We Serve</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Providing specialized lifting solutions across diverse sectors
          </p>
        </div>

        {/* Industries List */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                className="rounded-full bg-background px-6 py-2 text-center shadow-sm cursor-pointer"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cranes Carousel */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cranes Available</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our fleet of high-quality cranes for all your lifting needs
          </p>
        </motion.div>

        <div className="relative">
          <div ref={carouselRef} className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {cranes.map((crane, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="overflow-hidden rounded-lg border bg-background shadow-sm h-full"
                    whileHover={{ y: -10, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={crane.image || "/placeholder.svg"}
                        alt={crane.type}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.7 }}
                      />
                    </div>
                    <motion.div
                      className="p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <h3 className="text-xl font-bold">{crane.type}</h3>
                      <p className="text-muted-foreground">{crane.capacity}</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows with enhanced animations */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 shadow-md"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 shadow-md"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
