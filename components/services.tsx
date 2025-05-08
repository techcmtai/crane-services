"use client"

import { motion } from "framer-motion"
import { ConeIcon as Crane, Truck, ClipboardCheck, HardHat } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Crane className="h-10 w-10" />,
      title: "Bare Rental Cranes",
      description: "High-quality crane rentals from 25 to 700 tonnes without operators.",
      image: "/placeholder.svg?key=i4jwi",
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Crane Hire with Operators",
      description: "Fully operated crane services from 25 to 700 tonnes with experienced personnel.",
      image: "/placeholder.svg?key=26mri",
    },
    {
      icon: <ClipboardCheck className="h-10 w-10" />,
      title: "Full Lift Management",
      description: "Comprehensive lift planning, risk assessment, and execution services.",
      image: "/placeholder.svg?key=3wfs0",
    },
    {
      icon: <HardHat className="h-10 w-10" />,
      title: "Project Planning & Execution",
      description: "End-to-end project management for complex lifting operations.",
      image: "/placeholder.svg?key=h843s",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive crane services for all your heavy lifting needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all"
            >
              <motion.div
                className="absolute -right-10 -top-10 opacity-10"
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                  opacity: 0.2,
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt=""
                  className="h-40 w-40 object-cover"
                  aria-hidden="true"
                />
              </motion.div>
              <div className="relative z-10">
                <motion.div
                  className="mb-4 inline-block rounded-full bg-red-100 p-3 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <motion.h3
                  className="mb-2 text-xl font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
