"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// English translations
const enTranslations: Record<string, string> = {
  // Navigation
  "nav.home": "Home",
  "nav.company": "Company",
  "nav.services": "Services",
  "nav.projects": "Projects",
  "nav.gallery": "Gallery",
  "nav.contact": "Contact",
  "nav.payNow": "Pay Now",
  "nav.byVisanet": "By Visanet",
  "nav.language": "Language",

  // Hero Section
  "hero.specialist": "Specialist in Heavy Lifting",
  "hero.subtitle": "From Bare Rental to Full Project Management",
  "hero.getQuote": "Get a Quote",
  "hero.globalExpertise": "Global Expertise",
  "hero.globalSubtitle": "Serving Industries Across the World",
  "hero.ourProjects": "Our Projects",
  "hero.innovativeSolutions": "Innovative Solutions",
  "hero.innovativeSubtitle": "Tackling Complex Lifting Challenges",
  "hero.ourServices": "Our Services",

  // Services Provided Section
  "services.provided": "SERVICES PROVIDED",
  "services.bareRental": "Bare Rental Cranes from 25 to 700 tonnes",
  "services.craneHire": "Crane hire with Operators from 25 to 700 tonnes",
  "services.fullLift":
    "Full lift management packages (We plan and execute all your project lifting and shifting requirements)",
  "services.viewAll": "View All Services",

  // Additional Services Section
  "additionalServices.title": "Additional Services",
  "additionalServices.subtitle": "Supporting your operations with comprehensive solutions",
  "additionalServices.contactUs": "Contact Us",
  "additionalServices.spareParts.title": "Spare Parts",
  "additionalServices.spareParts.description":
    "We supply major components for all leading crane brands. Most items can be shipped globally within 4 weeks, while smaller components are typically available for air freight delivery within 3 days.",
  "additionalServices.cranesForSale.title": "Cranes for Sale",
  "additionalServices.cranesForSale.description":
    "We maintain a wide selection of mobile cranes available for sale. Please contact us with your inquiry for current availability and pricing.",
  "additionalServices.longTermLease.title": "Long-Term Lease",
  "additionalServices.longTermLease.description":
    "We offer crane supply services worldwide under a two-year lease agreement. For more details, please reach out to our team.",

  // Cranes Section
  "cranes.title": "Cranes Available for Hire",
  "cranes.subtitle": "Our fleet of high-quality cranes for all your lifting needs",
  "cranes.telescopicCrawler": "Telescopic Crawler Crane",
  "cranes.telescopicDesc": "Ideal for confined spaces with excellent maneuverability and lifting capacity.",
  "cranes.crawler": "Crawler Crane",
  "cranes.crawlerDesc": "Perfect for long-term projects requiring heavy lifting on challenging terrain.",
  "cranes.roughTerrain": "Rough Terrain Crane",
  "cranes.roughTerrainDesc": "Designed for off-road applications with all-wheel drive and all-wheel steering.",
  "cranes.truck": "Truck Crane",
  "cranes.truckDesc": "Highly mobile solution for projects requiring frequent relocation.",
  "cranes.allTerrain": "All Terrain Crane",
  "cranes.allTerrainDesc": "Versatile cranes combining road mobility with off-road capability.",
  "cranes.city": "City Crane",
  "cranes.cityDesc": "Compact design for urban environments with tight spaces and restricted access.",
  "cranes.requestQuote": "Request Quote",

  // Industries Section
  "industries.title": "Industries We Work With",
  "industries.subtitle": "Providing specialized lifting solutions across diverse sectors",
  "industries.oilAndGas": "Oil and Gas",
  "industries.oilAndGasDesc":
    "Supporting critical operations in oil and gas facilities with precision lifting solutions.",
  "industries.oilExploration": "Oil Exploration",
  "industries.oilExplorationDesc":
    "Facilitating exploration activities with specialized equipment for challenging environments.",
  "industries.energy": "Energy",
  "industries.energyDesc":
    "Enabling power generation projects with heavy lifting capabilities for equipment installation.",
  "industries.infrastructure": "Infrastructure",
  "industries.infrastructureDesc":
    "Building the foundations of society with reliable crane services for major infrastructure projects.",
  "industries.construction": "Construction",
  "industries.constructionDesc":
    "Elevating construction projects with versatile lifting solutions for all building phases.",
  "industries.needServices": "Need Our Services?",
  "industries.contactUs": "Contact us today to discuss your project requirements and get a customized quote.",
  "industries.requestQuote": "Request a Quote",

  // Footer
  "footer.specialist": "Specialist in Heavy Lifting. From Bare Rental to Full Project Management.",
  "footer.contactUs": "Contact Us",
  "footer.followUs": "Follow Us",
  "footer.allRights": "All rights reserved.",

  // Contact Form
  "contact.title": "Contact Us",
  "contact.subtitle": "Get in touch for a quote or to discuss your project requirements",
  "contact.name": "Name",
  "contact.email": "Email",
  "contact.company": "Company",
  "contact.companyPlaceholder": "Your company (optional)",
  "contact.serviceRequired": "Service Required",
  "contact.selectService": "Select a service",
  "contact.bareRental": "Bare Rental Cranes",
  "contact.craneHire": "Crane Hire with Operators",
  "contact.liftManagement": "Full Lift Management",
  "contact.projectPlanning": "Project Planning & Execution",
  "contact.otherServices": "Other Services",
  "contact.projectDetails": "Project Details",
  "contact.projectDetailsPlaceholder": "Tell us about your project",
  "contact.submit": "Submit",
  "contact.mainOffice": "Main Office",
  "contact.phone": "Phone",
  "contact.email": "Email",
  "contact.workingHours": "Working Hours",
  "contact.workingHoursWeekday": "Monday - Friday: 8:00 AM - 6:00 PM",
  "contact.workingHoursSaturday": "Saturday: 9:00 AM - 1:00 PM",
  "contact.thankYou": "Thank You!",
  "contact.receivedInquiry": "We've received your inquiry and will get back to you as soon as possible.",
  "contact.close": "Close",

  // Company Page
  "company.title": "Our Company",
  "company.subtitle": "Learn about PROJECT CRANE SERVICES and our commitment to excellence",
  "company.ourStory": "Our Story",
  "company.storyPart1":
    "PROJECT CRANE SERVICES was established with a vision to provide world-class crane services across the globe. With decades of combined experience in the heavy lifting industry, our founders set out to create a company that prioritizes safety, reliability, and customer satisfaction.",
  "company.storyPart2":
    "From our humble beginnings, we have grown to become a trusted partner for construction, energy, infrastructure, and industrial projects worldwide. Our commitment to excellence has earned us a reputation as a leader in the crane services industry.",
  "company.ourMission": "Our Mission",
  "company.missionPart1":
    "Our mission is to provide safe, efficient, and cost-effective crane services that exceed our clients' expectations. We are committed to maintaining the highest standards of safety, quality, and environmental responsibility in all our operations.",
  "company.missionPart2":
    "We strive to be the preferred partner for heavy lifting solutions worldwide, known for our technical expertise, innovative approach, and dedication to customer satisfaction.",
  "company.ourValues": "Our Values",
  "company.safety": "Safety",
  "company.safetyDesc": "We prioritize the safety of our employees, clients, and the public in all our operations.",
  "company.excellence": "Excellence",
  "company.excellenceDesc": "We strive for excellence in everything we do, from planning to execution.",
  "company.integrity": "Integrity",
  "company.integrityDesc": "We conduct our business with honesty, transparency, and ethical standards.",
  "company.innovation": "Innovation",
  "company.innovationDesc": "We continuously seek innovative solutions to meet our clients' evolving needs.",

  // Services Page
  "services.pageTitle": "Our Services",
  "services.pageSubtitle": "Comprehensive crane services for all your heavy lifting needs",
  "services.bareRentalTitle": "Bare Rental Cranes",
  "services.bareRentalDesc": "High-quality crane rentals from 25 to 700 tonnes without operators.",
  "services.craneHireTitle": "Crane Hire with Operators",
  "services.craneHireDesc": "Fully operated crane services from 25 to 700 tonnes with experienced personnel.",
  "services.liftManagementTitle": "Full Lift Management",
  "services.liftManagementDesc": "Comprehensive lift planning, risk assessment, and execution services.",
  "services.projectPlanningTitle": "Project Planning & Execution",
  "services.projectPlanningDesc": "End-to-end project management for complex lifting operations.",
  "services.specializedPersonnelTitle": "Specialized Personnel",
  "services.specializedPersonnelDesc": "Highly trained and certified crane operators, riggers, and supervisors.",
  "services.engineeringTitle": "Engineering & Consulting",
  "services.engineeringDesc": "Expert engineering services for complex lifting challenges.",
  "services.whyChoose": "Why Choose Our Services?",
  "services.experiencedOperators": "Experienced and certified operators",
  "services.modernEquipment": "Modern and well-maintained equipment",
  "services.safetyProtocols": "Comprehensive safety protocols",
  "services.support": "24/7 support and emergency response",
  "services.globalExperience": "Global experience across diverse industries",
  "services.serviceAreas": "Our Service Areas",
  "services.serviceAreasDesc":
    "We provide crane services across the globe, with a focus on the Middle East, Europe, Australia, and Africa. Our main operational hubs are located in:",
  "services.qatar": "Qatar - Birkat Al Awamer, Building No. 24, Street No.3020, Zone No. 91 (Headquarters)",
  "services.ireland": "Ireland - Dublin",
  "services.australia": "Australia - Perth",
  "services.kuwait": "Kuwait - Kuwait City",

  // Projects Page
  "projects.title": "Our Projects",
  "projects.subtitle": "Showcasing our expertise across global heavy lifting operations",
  "projects.allProjects": "All Projects",
  "projects.marine": "Marine",
  "projects.sports": "Sports",
  "projects.energy": "Energy",
  "projects.industrial": "Industrial",
  "projects.infrastructure": "Infrastructure",
  "projects.construction": "Construction",

  // Gallery Page
  "gallery.title": "Gallery",
  "gallery.subtitle": "Explore our crane operations through our image gallery",

  // Form Validation
  "validation.nameRequired": "Name is required",
  "validation.emailRequired": "Email is required",
  "validation.emailInvalid": "Email is invalid",
  "validation.serviceRequired": "Please select a service",
  "validation.detailsRequired": "Project details are required",
}

// Arabic translations
const arTranslations: Record<string, string> = {
  // Navigation
  "nav.home": "الرئيسية",
  "nav.company": "الشركة",
  "nav.services": "الخدمات",
  "nav.projects": "المشاريع",
  "nav.gallery": "معرض الصور",
  "nav.contact": "اتصل بنا",
  "nav.payNow": "ادفع الآن",
  "nav.byVisanet": "بواسطة فيزانت",
  "nav.language": "اللغة",

  // Hero Section
  "hero.specialist": "متخصصون في الرفع الثقيل",
  "hero.subtitle": "من التأجير المجرد إلى إدارة المشروع الكاملة",
  "hero.getQuote": "احصل على عرض سعر",
  "hero.globalExpertise": "خبرة عالمية",
  "hero.globalSubtitle": "خدمة الصناعات في جميع أنحاء العالم",
  "hero.ourProjects": "مشاريعنا",
  "hero.innovativeSolutions": "حلول مبتكرة",
  "hero.innovativeSubtitle": "معالجة تحديات الرفع المعقدة",
  "hero.ourServices": "خدماتنا",

  // Services Provided Section
  "services.provided": "الخدمات المقدمة",
  "services.bareRental": "تأجير رافعات مجردة من 25 إلى 700 طن",
  "services.craneHire": "تأجير رافعات مع مشغلين من 25 إلى 700 طن",
  "services.fullLift": "حزم إدارة الرفع الكاملة (نخطط وننفذ جميع متطلبات الرفع والنقل لمشروعك)",
  "services.viewAll": "عرض جميع الخدمات",

  // Additional Services Section
  "additionalServices.title": "خدمات إضافية",
  "additionalServices.subtitle": "دعم عملياتك بحلول شاملة",
  "additionalServices.contactUs": "اتصل بنا",
  "additionalServices.spareParts.title": "قطع غيار",
  "additionalServices.spareParts.description":
    "نقوم بتوريد المكونات الرئيسية لجميع العلامات التجارية الرائدة للرافعات. يمكن شحن معظم العناصر عالميًا في غضون 4 أسابيع، بينما تتوفر المكونات الأصغر عادةً للتسليم بالشحن الجوي في غضون 3 أيام.",
  "additionalServices.cranesForSale.title": "رافعات للبيع",
  "additionalServices.cranesForSale.description":
    "نحتفظ بمجموعة واسعة من الرافعات المتنقلة المتاحة للبيع. يرجى الاتصال بنا مع استفسارك للحصول على التوفر الحالي والأسعار.",
  "additionalServices.longTermLease.title": "إيجار طويل الأمد",
  "additionalServices.longTermLease.description":
    "نقدم خدمات توريد الرافعات في جميع أنحاء العالم بموجب اتفاقية إيجار لمدة عامين. لمزيد من التفاصيل، يرجى التواصل مع فريقنا.",

  // Cranes Section
  "cranes.title": "الرافعات المتاحة للإيجار",
  "cranes.subtitle": "أسطولنا من الرافعات عالية الجودة لجميع احتياجات الرفع الخاصة بك",
  "cranes.telescopicCrawler": "رافعة زاحفة تلسكوبية",
  "cranes.telescopicDesc": "مثالية للمساحات الضيقة مع قدرة ممتازة على المناورة والرفع.",
  "cranes.crawler": "رافعة زاحفة",
  "cranes.crawlerDesc": "مثالية للمشاريع طويلة الأمد التي تتطلب رفعًا ثقيلًا على التضاريس الصعبة.",
  "cranes.roughTerrain": "رافعة التضاريس الوعرة",
  "cranes.roughTerrainDesc": "مصممة للتطبيقات خارج الطرق مع دفع رباعي وتوجيه لجميع العجلات.",
  "cranes.truck": "رافعة شاحنة",
  "cranes.truckDesc": "حل متنقل للغاية للمشاريع التي تتطلب نقلًا متكررًا.",
  "cranes.allTerrain": "رافعة لجميع التضاريس",
  "cranes.allTerrainDesc": "رافعات متعددة الاستخدامات تجمع بين التنقل على الطرق والقدرة على السير خارج الطرق.",
  "cranes.city": "رافعة المدينة",
  "cranes.cityDesc": "تصميم مدمج للبيئات الحضرية ذات المساحات الضيقة والوصول المقيد.",
  "cranes.requestQuote": "طلب عرض سعر",

  // Industries Section
  "industries.title": "الصناعات التي نعمل معها",
  "industries.subtitle": "تقديم حلول رفع متخصصة عبر قطاعات متنوعة",
  "industries.oilAndGas": "النفط والغاز",
  "industries.oilAndGasDesc": "دعم العمليات الحرجة في منشآت النفط والغاز بحلول رفع دقيقة.",
  "industries.oilExploration": "استكشاف النفط",
  "industries.oilExplorationDesc": "تسهيل أنشطة الاستكشاف بمعدات متخصصة للبيئات الصعبة.",
  "industries.energy": "الطاقة",
  "industries.energyDesc": "تمكين مشاريع توليد الطاقة بقدرات رفع ثقيلة لتركيب المعدات.",
  "industries.infrastructure": "البنية التحتية",
  "industries.infrastructureDesc": "بناء أسس المجتمع بخدمات رافعات موثوقة لمشاريع البنية التحتية الرئيسية.",
  "industries.construction": "البناء",
  "industries.constructionDesc": "رفع مستوى مشاريع البناء بحلول رفع متعددة الاستخدامات لجميع مراحل البناء.",
  "industries.needServices": "هل تحتاج إلى خدماتنا؟",
  "industries.contactUs": "اتصل بنا اليوم لمناقشة متطلبات مشروعك والحصول على عرض سعر مخصص.",
  "industries.requestQuote": "طلب عرض سعر",

  // Footer
  "footer.specialist": "متخصصون في الرفع الثقيل. من التأجير المجرد إلى إدارة المشروع الكاملة.",
  "footer.contactUs": "اتصل بنا",
  "footer.followUs": "تابعنا",
  "footer.allRights": "جميع الحقوق محفوظة.",

  // Contact Form
  "contact.title": "اتصل بنا",
  "contact.subtitle": "تواصل معنا للحصول على عرض سعر أو لمناقشة متطلبات مشروعك",
  "contact.name": "الاسم",
  "contact.email": "البريد الإلكتروني",
  "contact.company": "الشركة",
  "contact.companyPlaceholder": "شركتك (اختياري)",
  "contact.serviceRequired": "الخدمة المطلوبة",
  "contact.selectService": "اختر خدمة",
  "contact.bareRental": "رافعات تأجير مجردة",
  "contact.craneHire": "تأجير رافعات مع مشغلين",
  "contact.liftManagement": "إدارة الرفع الكاملة",
  "contact.projectPlanning": "تخطيط وتنفيذ المشروع",
  "contact.otherServices": "خدمات أخرى",
  "contact.projectDetails": "تفاصيل المشروع",
  "contact.projectDetailsPlaceholder": "أخبرنا عن مشروعك",
  "contact.submit": "إرسال",
  "contact.mainOffice": "المكتب الرئيسي",
  "contact.phone": "الهاتف",
  "contact.email": "البريد الإلكتروني",
  "contact.workingHours": "ساعات العمل",
  "contact.workingHoursWeekday": "الاثنين - الجمعة: 8:00 صباحًا - 6:00 مساءً",
  "contact.workingHoursSaturday": "السبت: 9:00 صباحًا - 1:00 ظهرًا",
  "contact.thankYou": "شكرًا لك!",
  "contact.receivedInquiry": "لقد تلقينا استفسارك وسنرد عليك في أقرب وقت ممكن.",
  "contact.close": "إغلاق",

  // Company Page
  "company.title": "شركتنا",
  "company.subtitle": "تعرف على PROJECT CRANE SERVICES والتزامنا بالتميز",
  "company.ourStory": "قصتنا",
  "company.storyPart1":
    "تأسست PROJECT CRANE SERVICES برؤية لتقديم خدمات رافعات عالمية المستوى في جميع أنحاء العالم. مع عقود من الخبرة المشتركة في صناعة الرفع الثقيل، سعى مؤسسونا إلى إنشاء شركة تعطي الأولوية للسلامة والموثوقية ورضا العملاء.",
  "company.storyPart2":
    "من بداياتنا المتواضعة، نمونا لنصبح شريكًا موثوقًا به لمشاريع البناء والطاقة والبنية التحتية والصناعة في جميع أنحاء العالم. لقد اكتسب التزامنا بالتميز سمعة كرائد في صناعة خدمات الرافعات.",
  "company.ourMission": "مهمتنا",
  "company.missionPart1":
    "مهمتنا هي تقديم خدمات رافعات آمنة وفعالة وفعالة من حيث التكلفة تتجاوز توقعات عملائنا. نحن ملتزمون بالحفاظ على أعلى معايير السلامة والجودة والمسؤولية البيئية في جميع عملياتنا.",
  "company.missionPart2":
    "نسعى جاهدين لنكون الشريك المفضل لحلول الرفع الثقيل في جميع أنحاء العالم، المعروف بخبرتنا الفنية ونهجنا المبتكر وتفانينا في إرضاء العملاء.",
  "company.ourValues": "قيمنا",
  "company.safety": "السلامة",
  "company.safetyDesc": "نعطي الأولوية لسلامة موظفينا وعملائنا والجمهور في جميع عملياتنا.",
  "company.excellence": "التميز",
  "company.excellenceDesc": "نسعى جاهدين للتميز في كل ما نقوم به، من التخطيط إلى التنفيذ.",
  "company.integrity": "النزاهة",
  "company.integrityDesc": "نمارس أعمالنا بصدق وشفافية ومعايير أخلاقية.",
  "company.innovation": "الابتكار",
  "company.innovationDesc": "نبحث باستمرار عن حلول مبتكرة لتلبية احتياجات عملائنا المتطورة.",

  // Services Page
  "services.pageTitle": "خدماتنا",
  "services.pageSubtitle": "خدمات رافعات شاملة لجميع احتياجات الرفع الثقيل الخاصة بك",
  "services.bareRentalTitle": "رافعات تأجير مجردة",
  "services.bareRentalDesc": "تأجير رافعات عالية الجودة من 25 إلى 700 طن بدون مشغلين.",
  "services.craneHireTitle": "تأجير رافعات مع مشغلين",
  "services.craneHireDesc": "خدمات رافعات تشغيل كامل من 25 إلى 700 طن مع موظفين ذوي خبرة.",
  "services.liftManagementTitle": "إدارة الرفع الكاملة",
  "services.liftManagementDesc": "خدمات شاملة لتخطيط الرفع وتقييم المخاطر والتنفيذ.",
  "services.projectPlanningTitle": "تخطيط وتنفيذ المشروع",
  "services.projectPlanningDesc": "إدارة المشروع من البداية إلى النهاية لعمليات الرفع المعقدة.",
  "services.specializedPersonnelTitle": "موظفون متخصصون",
  "services.specializedPersonnelDesc": "مشغلو رافعات ومشغلو معدات ومشرفون مدربون ومعتمدون.",
  "services.engineeringTitle": "الهندسة والاستشارات",
  "services.engineeringDesc": "خدمات هندسية خبيرة لتحديات الرفع المعقدة.",
  "services.whyChoose": "لماذا تختار خدماتنا؟",
  "services.experiencedOperators": "مشغلون ذوو خبرة ومعتمدون",
  "services.modernEquipment": "معدات حديثة وصيانة جيدة",
  "services.safetyProtocols": "بروتوكولات سلامة شاملة",
  "services.support": "دعم على مدار الساعة واستجابة للطوارئ",
  "services.globalExperience": "خبرة عالمية عبر صناعات متنوعة",
  "services.serviceAreas": "مناطق خدمتنا",
  "services.serviceAreasDesc":
    "نقدم خدمات الرافعات في جميع أنحاء العالم، مع التركيز على الشرق الأوسط وأوروبا وأستراليا وأفريقيا. توجد مراكز عملياتنا الرئيسية في:",
  "services.qatar": "قطر - بركة العوامر، مبنى رقم 24، شارع رقم 3020، منطقة رقم 91 (المقر الرئيسي)",
  "services.ireland": "أيرلندا - دبلن",
  "services.australia": "أستراليا - بيرث",
  "services.kuwait": "الكويت - مدينة الكويت",

  // Projects Page
  "projects.title": "مشاريعنا",
  "projects.subtitle": "عرض خبرتنا عبر عمليات الرفع الثقيل العالمية",
  "projects.allProjects": "جميع المشاريع",
  "projects.marine": "بحري",
  "projects.sports": "رياضة",
  "projects.energy": "طاقة",
  "projects.industrial": "صناعي",
  "projects.infrastructure": "بنية تحتية",
  "projects.construction": "بناء",

  // Gallery Page
  "gallery.title": "معرض الصور",
  "gallery.subtitle": "استكشف عمليات الرافعات لدينا من خلال معرض الصور",

  // Form Validation
  "validation.nameRequired": "الاسم مطلوب",
  "validation.emailRequired": "البريد الإلكتروني مطلوب",
  "validation.emailInvalid": "البريد الإلكتروني غير صالح",
  "validation.serviceRequired": "الرجاء اختيار خدمة",
  "validation.detailsRequired": "تفاصيل المشروع مطلوبة",
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en")

  // Load language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)

    // Set the dir attribute on the html element
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr"

    // Add or remove the RTL class from the body
    if (newLanguage === "ar") {
      document.body.classList.add("rtl")
    } else {
      document.body.classList.remove("rtl")
    }
  }

  // Translation function
  const t = (key: string): string => {
    const translations = language === "en" ? enTranslations : arTranslations
    return translations[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
