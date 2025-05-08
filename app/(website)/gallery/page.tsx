"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { t, language } = useLanguage()

  const galleryImages = [
    {
      src: "/images/company/crane-tower.png",
      alt: "PROJECT CRANE SERVICES tower crane",
      category: "Equipment",
    },
    {
      src: "/images/company/mobile-crane.png",
      alt: "Mobile crane with extended boom",
      category: "Equipment",
    },
    {
      src: "/images/company/crane-base.png",
      alt: "Crane base and counterweight",
      category: "Equipment",
    },
    {
      src: "/images/company/indoor-crane.png",
      alt: "Crane in maintenance facility",
      category: "Facility",
    },
    {
      src: "/images/company/warehouse-crane.png",
      alt: "Crane in warehouse with extended boom",
      category: "Facility",
    },
    {
      src: "/images/company/truck-crane.png",
      alt: "SANY truck crane",
      category: "Equipment",
    },
    {
      src: "/images/company/forklift.png",
      alt: "Heavy equipment handler",
      category: "Equipment",
    },
    {
      src: "/images/company/lifting-operation.png",
      alt: "Crane lifting operation with trucks",
      category: "Operations",
    },
    {
      src: "/images/company/construction-site.png",
      alt: "Crane at high-rise construction site",
      category: "Projects",
    },
    {
      src: "/images/company/headquarters.png",
      alt: "PROJECT CRANE SERVICES headquarters",
      category: "Facility",
    },
    {
      src: "/placeholder.svg?key=0jc7y",
      alt: "Heavy equipment lifting",
      category: "Operations",
    },
    {
      src: "/placeholder.svg?key=hndqk",
      alt: "Night lifting operation",
      category: "Special Operations",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: number) => {
    if (selectedImage === null) return

    const newIndex = selectedImage + direction
    if (newIndex >= 0 && newIndex < galleryImages.length) {
      setSelectedImage(newIndex)
    }
  }

  return (
    <div className="container py-16 md:py-24" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{t("gallery.title")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("gallery.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute bottom-0 w-full p-4 text-white">
                <p className="font-medium">{image.alt}</p>
                <p className="text-sm opacity-80">{image.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-5xl"
            >
              <button
                onClick={closeLightbox}
                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white shadow-sm"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                className="max-h-[80vh] rounded-lg object-contain"
              />

              <div className="mt-4 text-center text-white">
                <p className="text-lg font-medium">{galleryImages[selectedImage].alt}</p>
                <p className="text-sm opacity-80">{galleryImages[selectedImage].category}</p>
              </div>

              {/* Navigation buttons */}
              {selectedImage > 0 && (
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage(-1)
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              )}

              {selectedImage < galleryImages.length - 1 && (
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage(1)
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
