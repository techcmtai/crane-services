"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import CraneLogo from "./crane-logo"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <CraneLogo className="h-28 w-auto drop-shadow-xl" />
              </motion.div>
              <span className="sr-only">PROJECT CRANE SERVICES</span>
            </div>
            <p className="text-sm text-muted-foreground">{t("footer.specialist")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-lg font-semibold">{t("footer.contactUs")}</h3>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Main Office</p>
              <motion.div className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <MapPin className={`${language === "ar" ? "ml-2" : "mr-2"} h-4 w-4`} />
                <span>Birkat Al Awamer, Building No. 24, Street No.3020, Zone No. 91, P.O. Box: 31249, Qatar</span>
              </motion.div>
              <motion.div
                className="flex items-center mt-1 text-right"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm" dir="rtl">
                  بركة العوامر، مبنى رقم 24، شارع رقم 3020، منطقة رقم 91، صندوق بريد: 31249، قطر
                </span>
              </motion.div>
              <p className="font-medium">UK Office</p>
              <motion.div className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <MapPin className={`${language === "ar" ? "ml-2" : "mr-2"} h-4 w-4`} />
                <span>77 Grove Hill Park, Gorslas, Llanelli, Wales, SA14 7LF</span>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                
              </motion.div>

              <motion.div className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Phone className={`${language === "ar" ? "ml-2" : "mr-2"} h-4 w-4`} />
                <span>+44 744 277 9611</span>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Mail className={`${language === "ar" ? "ml-2" : "mr-2"} h-4 w-4`} />
                <span>info@projectcraneservices.com</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-lg font-semibold">{t("footer.followUs")}</h3>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>
            &copy; {new Date().getFullYear()} PROJECT CRANE SERVICES. {t("footer.allRights")}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
