"use client"

import { useLanguage } from "@/contexts/language-context"

export default function CompanyPage() {
  const { t, language } = useLanguage()

  return (
    <div className="container py-16 md:py-24" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{t("company.title")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("company.subtitle")}</p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">{t("company.ourStory")}</h2>
          <p className="mb-4 text-muted-foreground">{t("company.storyPart1")}</p>
          <p className="text-muted-foreground">{t("company.storyPart2")}</p>
        </div>

        <div className="rounded-lg overflow-hidden">
          <img
            src="/images/company/headquarters.png"
            alt="PROJECT CRANE SERVICES Headquarters"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-lg overflow-hidden md:order-3">
          <img src="/images/company/lifting-operation.png" alt="Our Team" className="w-full h-full object-cover" />
        </div>

        <div className="md:order-4">
          <h2 className="mb-4 text-2xl font-bold">{t("company.ourMission")}</h2>
          <p className="mb-4 text-muted-foreground">{t("company.missionPart1")}</p>
          <p className="text-muted-foreground">{t("company.missionPart2")}</p>
        </div>

        <div className="md:col-span-2">
          <h2 className="mb-4 text-2xl font-bold text-center">{t("company.ourValues")}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-6 text-center">
              <h3 className="mb-2 text-xl font-bold">{t("company.safety")}</h3>
              <p className="text-muted-foreground">{t("company.safetyDesc")}</p>
            </div>
            <div className="rounded-lg border p-6 text-center">
              <h3 className="mb-2 text-xl font-bold">{t("company.excellence")}</h3>
              <p className="text-muted-foreground">{t("company.excellenceDesc")}</p>
            </div>
            <div className="rounded-lg border p-6 text-center">
              <h3 className="mb-2 text-xl font-bold">{t("company.integrity")}</h3>
              <p className="text-muted-foreground">{t("company.integrityDesc")}</p>
            </div>
            <div className="rounded-lg border p-6 text-center">
              <h3 className="mb-2 text-xl font-bold">{t("company.innovation")}</h3>
              <p className="text-muted-foreground">{t("company.innovationDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
