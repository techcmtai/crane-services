"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState<string | null>(null)
  const { t, language } = useLanguage()

  const projects = [
    {
      title: "Sea Stallion",
      location: "Ireland",
      category: "Marine",
      image: "/images/company/lifting-operation.png",
      description:
        "Heavy lifting operations for offshore wind farm installation. This project involved the installation of 80 wind turbines off the coast of Ireland, requiring specialized marine cranes and equipment.",
      year: "2022",
    },
    {
      title: "Aviva Stadium Upgrade",
      location: "Ireland",
      category: "Sports",
      image: "/images/company/construction-site.png",
      description:
        "Structural upgrades to the iconic Aviva Stadium in Dublin. Our cranes were used to install new roof sections and upgrade the existing structure while maintaining the integrity of this historic venue.",
      year: "2021",
    },
    {
      title: "Dubai Bay Power Plant",
      location: "UAE",
      category: "Energy",
      image: "/images/company/crane-tower.png",
      description:
        "Installation of heavy equipment at Dubai Bay Power Plant. This project involved lifting and positioning multiple 200-ton generators and associated equipment for a major power plant upgrade.",
      year: "2020",
    },
    {
      title: "Wind Farm Erection",
      location: "Australia",
      category: "Energy",
      image: "/images/company/mobile-crane.png",
      description:
        "Installation of wind turbines for renewable energy project in Western Australia. Our team deployed multiple crawler cranes to install 45 wind turbines in challenging terrain and weather conditions.",
      year: "2022",
    },
    {
      title: "Kpone Power Plant",
      location: "Ghana",
      category: "Energy",
      image: "/images/company/crane-base.png",
      description:
        "Construction and equipment installation at Kpone Power Plant. This project required precise lifting and positioning of heavy turbines and generators for a new power generation facility.",
      year: "2019",
    },
    {
      title: "Qatar Gas/QAFCO Shutdowns",
      location: "Qatar",
      category: "Industrial",
      image: "/images/company/indoor-crane.png",
      description:
        "Maintenance and equipment replacement during planned shutdowns at Qatar Gas and QAFCO facilities. Our team provided round-the-clock crane services to minimize downtime during critical maintenance periods.",
      year: "2023",
    },
    {
      title: "Rass Laffan Breakwater",
      location: "Qatar",
      category: "Infrastructure",
      image: "/images/company/warehouse-crane.png",
      description:
        "Construction of the Rass Laffan Breakwater infrastructure. This major civil engineering project required multiple heavy-lift cranes to place concrete blocks and other structural elements.",
      year: "2021",
    },
    {
      title: "Al Mutlaa Residential City",
      location: "Kuwait",
      category: "Construction",
      image: "/images/company/truck-crane.png",
      description:
        "Development of residential buildings in Al Mutlaa City. Our cranes supported the construction of multiple high-rise residential towers in this new urban development project.",
      year: "2022",
    },
  ]

  const categories = Array.from(new Set(projects.map((project) => project.category)))

  const filteredProjects = filter ? projects.filter((project) => project.category === filter) : projects

  const openLightbox = (index: number) => {
    setSelectedProject(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="container py-16 md:py-24" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{t("projects.title")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("projects.subtitle")}</p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        <Button variant={filter === null ? "default" : "outline"} onClick={() => setFilter(null)} className="mr-2">
          <Filter className="mr-2 h-4 w-4" />
          {t("projects.allProjects")}
        </Button>

        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
          >
            {t(`projects.${category.toLowerCase()}`)}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer overflow-hidden rounded-lg shadow-sm border"
            onClick={() => openLightbox(projects.indexOf(project))}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <Badge className="absolute top-2 right-2 bg-red-800">{project.category}</Badge>
            </div>
            <div className="bg-background p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold">{project.title}</h3>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
              <p className="text-sm text-muted-foreground">{project.location}</p>
            </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl overflow-auto rounded-lg bg-background p-4"
            >
              <button
                onClick={closeLightbox}
                className="absolute right-4 top-4 rounded-full bg-background/80 p-2 text-foreground shadow-sm"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={projects[selectedProject].image || "/placeholder.svg"}
                    alt={projects[selectedProject].title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">{projects[selectedProject].title}</h3>
                    <Badge className="bg-red-800">{projects[selectedProject].category}</Badge>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-muted-foreground">{projects[selectedProject].location}</p>
                    <p className="text-sm font-medium">{projects[selectedProject].year}</p>
                  </div>
                  <p className="mt-4">{projects[selectedProject].description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
