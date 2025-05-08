"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X, Mail, MapPin, Phone, Clock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    details: "",
  })

  const [showThankYou, setShowThankYou] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))

    // Clear error when user selects
    if (errors.service) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.service
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.service) {
      newErrors.service = "Please select a service"
    }

    if (!formData.details.trim()) {
      newErrors.details = "Project details are required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you would send the form data to your server here
      console.log("Form submitted:", formData)

      // Show thank you modal
      setShowThankYou(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        details: "",
      })
    }
  }

  const closeThankYou = () => {
    setShowThankYou(false)
  }

  return (
    <div className="container py-16 md:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Get in touch for a quote or to discuss your project requirements
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border bg-background p-6 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company (optional)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Required</Label>
              <Select value={formData.service} onValueChange={handleSelectChange}>
                <SelectTrigger className={errors.service ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bare-rental">Bare Rental Cranes</SelectItem>
                  <SelectItem value="crane-hire">Crane Hire with Operators</SelectItem>
                  <SelectItem value="lift-management">Full Lift Management</SelectItem>
                  <SelectItem value="project-planning">Project Planning & Execution</SelectItem>
                  <SelectItem value="other">Other Services</SelectItem>
                  <SelectItem value="spare-parts">Spare Parts</SelectItem>
                  <SelectItem value="cranes-for-sale">Cranes for Sale</SelectItem>
                  <SelectItem value="long-term-lease">Long-Term Lease</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && <p className="text-sm text-red-500">{errors.service}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="details">Project Details</Label>
              <Textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us about your project"
                rows={5}
                className={errors.details ? "border-red-500" : ""}
              />
              {errors.details && <p className="text-sm text-red-500">{errors.details}</p>}
            </div>

            <Button type="submit" className="w-full bg-red-800 hover:bg-red-700">
              Submit
            </Button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between"
        >
          <div className="mb-8 rounded-lg border bg-background p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-red-800" />
                <div>
                  <p className="font-medium">Main Office</p>
                  <p className="text-muted-foreground">
                    Birkat Al Awamer, Building No. 24, Street No.3020, Zone No. 91, P.O. Box: 31249, Qatar
                  </p>
                  <p className="text-muted-foreground mt-1" dir="rtl">
                    بركة العوامر، مبنى رقم 24، شارع رقم 3020، منطقة رقم 91، صندوق بريد: 31249، قطر
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-red-800" />
                <div>
                  <p className="font-medium">UK Office</p>
                  <p className="text-muted-foreground">
                    77 Grove Hill Park, Gorslas, Llanelli, Wales, SA14 7LF
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-red-800" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+44 744 277 9611</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-red-800" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@projectcraneservices.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-red-800" />
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[300px] overflow-hidden rounded-lg border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.2758546261627!2d51.4394!3d25.2854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzA3LjQiTiA1McKwMjYnMjEuOCJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Map of Birkat Al Awamer, Qatar"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Thank You Modal */}
      {showThankYou && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-md rounded-lg bg-background p-6 shadow-lg"
          >
            <button
              onClick={closeThankYou}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center">
              <h3 className="mb-2 text-2xl font-bold">Thank You!</h3>
              <p className="mb-4">We've received your inquiry and will get back to you as soon as possible.</p>
              <Button onClick={closeThankYou} className="bg-red-800 hover:bg-red-700">
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
