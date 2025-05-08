"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Sea Stallion",
      location: "Ireland",
      image: "/placeholder.svg?height=400&width=600&query=crane lifting at sea ireland",
      description: "Heavy lifting operations for offshore wind farm installation.",
    },
    {
      title: "Aviva Stadium Upgrade",
      location: "Ireland",
      image: "/placeholder.svg?height=400&width=600&query=crane at aviva stadium dublin",
      description: "Structural upgrades to the iconic Aviva Stadium in Dublin.",
    },
    {
      title: "Dublin Bay Power Plant",
      location: "Ireland",
      image: "/placeholder.svg?height=400&width=600&query=crane at power plant dublin bay",
      description: "Installation of heavy equipment at Dublin Bay Power Plant.",
    },
    {
      title: "Wind Farm Erection",
      location: "Australia",
      image: "/placeholder.svg?height=400&width=600&query=crane erecting wind turbines australia",
      description: "Installation of wind turbines for renewable energy project.",
    },
    {
      title: "Kpone Power Plant",
      location: "Ghana",
      image: "/placeholder.svg?height=400&width=600&query=crane at power plant ghana",
      description: "Construction and equipment installation at Kpone Power Plant.",
    },
    {
      title: "Qatar Gas/QAFCO Shutdowns",
      location: "Qatar",
      image: "/placeholder.svg?height=400&width=600&query=industrial crane at gas plant qatar",
      description: "Maintenance and equipment replacement during planned shutdowns.",
    },
    {
      title: "Rass Laffan Breakwater",
      location: "Qatar",
      image: "/placeholder.svg?height=400&width=600&query=crane at breakwater construction qatar",
      description: "Construction of the Rass Laffan Breakwater infrastructure.",
    },
    {
      title: "Al Mutlaa Residential City",
      location: "Kuwait",
      image: "/placeholder.svg?height=400&width=600&query=crane at residential construction kuwait",
      description: "Development of residential buildings in Al Mutlaa City.",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedProject(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Showcasing our expertise across global heavy lifting operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="cursor-pointer overflow-hidden rounded-lg shadow-sm"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.7 }}
                />
              </div>
              <motion.div
                className="bg-background p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              >
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.location}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-4xl overflow-auto rounded-lg bg-background p-4"
              >
                <motion.button
                  onClick={closeLightbox}
                  className="absolute right-4 top-4 rounded-full bg-background/80 p-2 text-foreground shadow-sm"
                  aria-label="Close lightbox"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.button>

                <div className="grid gap-4 md:grid-cols-2">
                  <motion.div
                    className="overflow-hidden rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.img
                      src={projects[selectedProject].image || "/placeholder.svg"}
                      alt={projects[selectedProject].title}
                      className="h-full w-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    />
                  </motion.div>
                  <motion.div
                    className="flex flex-col justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold">{projects[selectedProject].title}</h3>
                    <p className="mb-4 text-muted-foreground">{projects[selectedProject].location}</p>
                    <p>{projects[selectedProject].description}</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
