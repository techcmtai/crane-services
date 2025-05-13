"use client"

import {
  ConeIcon as Crane,
  Truck,
  ClipboardCheck,
  HardHat,
  Users,
  FileText,
  Wrench,
  ShoppingCart,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: <Crane className="h-10 w-10" />,
      title: t("services.bareRentalTitle"),
      description: t("services.bareRentalDesc"),
      image: "/images/company/crane-tower.png",
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: t("services.craneHireTitle"),
      description: t("services.craneHireDesc"),
      image: "/images/company/truck-crane.png",
    },
    {
      icon: <ClipboardCheck className="h-10 w-10" />,
      title: t("services.liftManagementTitle"),
      description: t("services.liftManagementDesc"),
      image: "/images/company/lifting-operation.png",
    },
    {
      icon: <HardHat className="h-10 w-10" />,
      title: t("services.projectPlanningTitle"),
      description: t("services.projectPlanningDesc"),
      image: "/images/company/construction-site.png",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: t("services.specializedPersonnelTitle"),
      description: t("services.specializedPersonnelDesc"),
      image: "/images/company/forklift.png",
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: t("services.engineeringTitle"),
      description: t("services.engineeringDesc"),
      image: "/images/company/warehouse-crane.png",
    },
  ]

  const additionalServices = [
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
    <div className="container py-16 md:py-24" dir={language === "ar" ? "rtl" : "ltr"}>
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{t("services.pageTitle")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("services.pageSubtitle")}</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="absolute -right-10 -top-10 opacity-10">
              <img
                src={service.image || "/placeholder.svg"}
                alt=""
                className="h-40 w-40 object-cover"
                aria-hidden="true"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-4 inline-block rounded-full bg-red-100 p-3 text-red-800 dark:bg-red-900/20 dark:text-red-300">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="mb-4 text-muted-foreground">{service.description}</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">{t("cranes.requestQuote")}</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="my-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("additionalServices.title")}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{t("additionalServices.subtitle")}</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {additionalServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="absolute -right-10 -top-10 opacity-10">
              <img
                src={service.image || "/placeholder.svg"}
                alt=""
                className="h-40 w-40 object-cover"
                aria-hidden="true"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-4 inline-block rounded-full bg-red-100 p-3 text-red-800 dark:bg-red-900/20 dark:text-red-300">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="mb-4 text-muted-foreground">{service.description}</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">{t("additionalServices.contactUs")}</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-muted p-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="mb-4 text-2xl font-bold">{t("services.whyChoose")}</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2 rounded-full bg-green-500 p-1"></span>
                <span>{t("services.experiencedOperators")}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 rounded-full bg-green-500 p-1"></span>
                <span>{t("services.modernEquipment")}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 rounded-full bg-green-500 p-1"></span>
                <span>{t("services.safetyProtocols")}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 rounded-full bg-green-500 p-1"></span>
                <span>{t("services.support")}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 rounded-full bg-green-500 p-1"></span>
                <span>{t("services.globalExperience")}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">{t("services.serviceAreas")}</h2>
            <p className="mb-4 text-muted-foreground">{t("services.serviceAreasDesc")}</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2 rounded-full bg-red-800 p-1"></span>
                <span>{t("services.qatar")}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 rounded-full bg-red-800 p-1"></span>
                <span>{t("services.europe")}</span>
              </li>
               <li className="flex items-center">
                <span className="mr-2 rounded-full bg-red-800 p-1"></span>
                <span>{t("services.middleEast")}</span>
              </li>
              
               <li className="flex items-center">
                <span className="mr-2 rounded-full bg-red-800 p-1"></span>
                <span>{t("services.northAmerica")}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 rounded-full bg-red-800 p-1"></span>
                <span>{t("services.usa")}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 rounded-full bg-red-800 p-1"></span>
                <span>{t("services.ireland")}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 rounded-full bg-red-800 p-1"></span>
                <span>{t("services.australia")}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 rounded-full bg-red-800 p-1"></span>
                <span>{t("services.kuwait")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
