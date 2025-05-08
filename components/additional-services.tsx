"use client"

import { motion } from "framer-motion"
import { Wrench, ShoppingCart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function AdditionalServices() {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: <Wrench className="h-10 w-10" />,
      title: t("additionalServices.spareParts.title"),
      description: t("additionalServices.spareParts.description"),
      image: "/images/company/crane-base.png",
    },
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: t("additionalServices.cranesForSale.title"),
      description: t("additionalServices.cranesForSale.description"),
      image: "/images/company/mobile-crane.png",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: t("additionalServices.longTermLease.title"),
      description: t("additionalServices.longTermLease.description"),
      image: "/images/company/truck-crane.png",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t("additionalServices.title")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("additionalServices.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="text-muted-foreground mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">{t("additionalServices.contactUs")}</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
