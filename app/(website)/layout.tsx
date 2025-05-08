import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"
import PageTransition from "@/components/page-transition"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PROJECT CRANE SERVICES | Specialist in Heavy Lifting",
  description:
    "Professional crane services from 25 to 700 tonnes. Offering bare rental, operated crane hire, and full project management solutions in Qatar and worldwide.",
  keywords:
    "crane services, heavy lifting, project management, construction, Qatar, bare rental cranes, crane hire, lift management, spare parts, long-term lease",
  authors: [{ name: "PROJECT CRANE SERVICES" }],
  creator: "PROJECT CRANE SERVICES",
  publisher: "PROJECT CRANE SERVICES",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },

  metadataBase: new URL("https://projectcraneservices.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/ar",
    },
  },
  
  openGraph: {
    title: "PROJECT CRANE SERVICES | Specialist in Heavy Lifting",
    description:
      "Professional crane services from 25 to 700 tonnes. Offering bare rental, operated crane hire, and full project management solutions in Qatar and worldwide.",
    url: "https://projectcraneservices.com",
    siteName: "PROJECT CRANE SERVICES",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PROJECT CRANE SERVICES - Specialist in Heavy Lifting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROJECT CRANE SERVICES | Specialist in Heavy Lifting",
    description:
      "Professional crane services from 25 to 700 tonnes. Offering bare rental, operated crane hire, and full project management solutions.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PROJECT CRANE SERVICES",
              url: "https://projectcraneservices.com",
              logo: "https://projectcraneservices.com/images/logo.png",
              description:
                "Professional crane services from 25 to 700 tonnes. Offering bare rental, operated crane hire, and full project management solutions.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Birkat Al Awamer, Building No. 24, Street No.3020, Zone No. 91",
                addressLocality: "Doha",
                postalCode: "31249",
                addressCountry: "QA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+974 1234 5678",
                contactType: "customer service",
                email: "info@projectcraneservices.com",
              },
              sameAs: [
                "https://www.linkedin.com/company/project-crane-services",
                "https://www.facebook.com/projectcraneservices",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
