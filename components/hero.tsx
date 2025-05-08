"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/placeholder.svg?key=cvgry')",
            filter: "brightness(0.4)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center text-white mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            PROJECT CRANE SERVICES
          </motion.h1>

          <div className="space-y-2">
            <motion.p
              className="mx-auto max-w-2xl text-xl sm:text-2xl md:text-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              Specialist in Heavy Lifting
            </motion.p>

            <motion.p
              className="mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              From Bare Rental to Full Project Management
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-red-800 text-white hover:bg-red-700" asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
