import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "km";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.gallery": "Gallery",
    "nav.donate": "Donate",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "300Riel 300Derm",
    "hero.subtitle":
      "Be a part of our project to protect the environment by learning and planting mangrove trees.",
    "hero.viewProjects": "View our projects",
    "hero.follow": "Follow Us",

    // Project shared
    "project.status.completed": "បានបញ្ចប់",
    "project.status.upcoming": "កំពុងរៀបចំ",
    "project.status.inProgress": "កំពុងអនុវត្ត",
    "project.overview": "ទិដ្ឋភាពទូទៅ",
    "project.partners": "ដៃគូ",
    "project.viewReport": "មើលរបាយការណ៍",
    "project.backHome": "ត្រលប់ទៅទំព័រដើម",
    "project.stats.seedlingsPlanted": "ដាំសំណាបកោងកាង",
    "project.stats.volunteers": "អ្នកស្ម័គ្រចិត្តនិស្សិត",
    "project.stats.reach": "មនុស្សឈានដល់តាមអនឡាញ",
    "project.stats.co2Tons": "CO₂ ប៉ាន់ស្មានក្នុងរយៈពេល ២០ ឆ្នាំ",
    "project.stats.interactions": "ការចូលរួម",
    "project.highlights.title": "Project Highlights",
    "project.highlights.tagline": "Restoring Mangroves, One 300 Riel Donation at a Time",
    "project.highlights.body1":
      "In June 2025, our student-led team carried out a mangrove restoration mission in Tapaeng Sangkae, Kampot. With community support and micro-donations, we successfully planted 300 Rhizophora seedlings, strengthened local fisheries habitat, and helped stabilize an eroding coastline.",
    "project.highlights.body2":
      "Our fieldwork empowered young Cambodians to practise stakeholder negotiation, safety management, GPS mapping, and citizen-science documentation — with 42% reporting increased confidence to lead eco-projects.",
    "project.highlights.galleryPlaceholder": "Project gallery placeholder",
    "project.gallery.title": "Planting Gallery",
    "project.gallery.description": "Preview of our planting day. Replace these placeholders with your own shots.",
    "project.gallery.placeholder": "Gallery placeholder",
    "campaign.title": "Digital Awareness Campaign",
    "campaign.subtitle": "Expanding impact on Facebook and TikTok",
    "campaign.totalViews": "Total content views",
    "campaign.uniqueReach": "Unique accounts reached",
    "campaign.interactions": "Interactions (likes, comments, shares)",
    "campaign.nonFollowerShare": "Views from non-followers",
    "campaign.newFollowers": "New followers gained",
    "project.sponsors.title": "Our 2025 Sponsors & Partners",
    "project.sponsors.subtitle": "We are grateful to the partners who made this mission possible",
    "project.sponsors.bus": "Donated a private bus (≈ USD 350)",
    "project.sponsors.meals": "Provided meals & accommodation (≈ USD 260)",
    "project.sponsors.guidance": "Supported with seedlings & field guidance",

    // Impact strip
    "impact.title": "Impact at a glance",
    "impact.seedlings": "mangrove seedlings planted",
    "impact.volunteers": "student volunteers",
    "impact.reach": "people reached online",
    "impact.co2": "t CO2 projected over 20 years",

    // Phases
    "phases.title": "Project Phases",
    "phases.subtitle": "Our journey towards sustainable impact",
    "phases.planning.title": "Planning",
    "phases.planning.description":
      "This phase ensures that our initiative has the necessary approvals and backing to move forward.",
    "phases.planning.additionalInfo": "Additional info for Planning phase",
    "phases.fundraising.title": "Fundraising",
    "phases.fundraising.description":
      "This phase builds the foundation for a well-organized and impactful planting event.",
    "phases.fundraising.additionalInfo":
      "Additional info for Fundraising phase",
    "phases.implementation.title": "Implementation",
    "phases.implementation.description":
      "This is the heart of our project—where planning turns into tangible change.",
    "phases.implementation.additionalInfo":
      "Additional info for Implementation phase",
    "phases.monitoring.title": "Post-planting Monitoring",
    "phases.monitoring.description":
      "Monitor the growth and health of the newly planted mangroves.Continue engagement on social media, updating our community on the progress.By tracking results and maintaining visibility, we strengthen our commitment to sustainability and long-term environmental impact.",
    "phases.monitoring.additionalInfo": "Additional info for Monitoring phase",

    // Mangroves Section
    "mangroves.title": "Why Mangroves Matter in Cambodia",
    "mangroves.subtitle": "Protecting Nature, Preserving Communities",
    "mangroves.hero.title": "Trapeang Sangke Mangrove Forest",
    "mangroves.hero.subtitle":
      "A vital ecosystem supporting local communities and marine life",
    "mangroves.impact.title": "Impact of Mangroves",
    "mangroves.challenges.title": "Challenges & Conservation",
    "mangroves.cta.text":
      "Join us in protecting Cambodia's mangrove forests. Your support helps preserve these vital ecosystems for future generations.",
    "mangroves.cta.description":
      "Every 300Riels helps protect and restore mangrove forests in Kampot, Cambodia.",
    "mangroves.cta.button": "Support Mangrove Conservation",
    "mangroves.cta.learnMore.button": "Learn More",
    "mangroves.fact.naturalBarrier.title": "Natural Barrier",
    "mangroves.fact.naturalBarrier.description":
      "Mangroves reduce wave energy by up to 66% in the first 100m of forest width.",
    "mangroves.fact.marineNursery.title": "Marine Nursery",
    "mangroves.fact.marineNursery.description":
      "Supporting over Ca of tropical coastal fish species in their juvenile stages.",
    "mangroves.fact.carbonStorage.title": "Carbon Storage",
    "mangroves.fact.carbonStorage.description":
      "Storing up to 3-5 times more carbon per hectare than tropical forests.",
    "mangroves.threat.deforestation.title": "Deforestation",
    "mangroves.threat.deforestation.description":
      "Coastal development and aquaculture threaten mangrove ecosystems.",
    "mangroves.threat.climateChange.title": "Climate Change",
    "mangroves.threat.climateChange.description":
      "Rising sea levels and changing temperatures impact mangrove survival.",
    "mangroves.threat.conservation.title": "Conservation",
    "mangroves.threat.conservation.description":
      "Local initiatives work to protect and restore mangrove forests.",

    // About Section
    "about.title": "About Us",
    "about.mission": "Our Mission",
    "about.missionText":
      "300 Riel, 300 Derm is a youth-led movement protecting Cambodia’s coastlines by restoring mangrove ecosystems wherever they are needed. We pair environmental education, community volunteering, and long-term stewardship so blue-carbon habitats stay healthy. By nurturing young leaders and amplifying local voices, we turn small daily actions into lasting climate resilience—one mangrove at a time.",
    "about.story": "Our Story",
    "about.storyText":
      "We began as classmates who wanted to show that small groups can drive real ecological change. Today we research coastal challenges, organize awareness events, and coordinate planting trips with schools and community partners across Cambodia. Every workshop, clean-up, and seedling reminds us that collective care can rebuild healthier coasts for everyone.",
    "about.objectives": "Our Objectives",
    "about.objective1":
      "Grow nationwide awareness about mangrove benefits through storytelling, social media, and school outreach.",
    "about.objective2":
      "Equip students and community champions with practical workshops, toolkits, and mentorship so they can lead restoration activities.",
    "about.objective3":
      "Plant and care for new mangrove seedlings with local partners, then monitor their growth to expand living coastlines.",
    // Contact Section
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Have questions or want to get involved? We'd love to hear from you!",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.info": "Contact Information",
    "contact.email.label": "Email",
    "contact.phone.label": "Phone",
    "contact.location.label": "Location",
    "contact.email.value": "chethaputhi@gmail.com",
    "contact.phone.value": "+855 85 593 363",
    "contact.location.value": "Phnom Penh, Cambodia",

    // Donate Section
    "donate.title": "Support Our Cause",
    "donate.subtitle": "Your contribution helps us continue our mission",
    "donate.why": "Why Your Support Matters",

    "donate.impact.info1.header": "Plant and Maintain Mangrove Trees:",
    "donate.impact.info1": " Help us restore vital coastal ecosystems.",
    "donate.impact.info2.header": "Support Environmental Education:",
    "donate.impact.info2": "Empower communities with knowledge and skills.",
    "donate.impact.info3.header": "Empower Local Communities:",
    "donate.impact.info3":
      "Create sustainable livelihoods through conservation.",
    "donate.impact.info4.header": "Protect Vital Ecosystems",
    "donate.impact.info4": "Preserve biodiversity for future generations.",
    "donate.impact": "Your Impact",
    "donate.impact.appreciation":
      "Every contribution, regardless of size, helps us make a real difference in environmental conservation and community development. Join us in creating a sustainable future for Cambodia.",
    "donate.payment": "Payment Methods",
    "donate.mobile": "Mobile Payment",
    "donate.credit": "Credit/Debit Card",
    "donate.bank": "Bank Transfer",
    "donate.link": "Account link",

    // Footer Section
    "footer.about": "About Us",
    "footer.about.subtitle":
      "We are a year 4 students who are passionate about environmental conservation and community empowerment.",
    "footer.quickLinks": "Quick Links",
    "footer.gallery": "Gallery",
    "footer.donate": "Donate",
    "footer.contact": "Contact",

    "footer.mission": "Our Mission",
    // Update this text
    "footer.mission.subtitle": "Not yet known", // Update this text
    "footer.copyright": "© 2025 300Riel 300Derm. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    // Gallery Section
    "gallery.title": "Our latest updates and events",
    "gallery.subtitle": "Our latest updates and events",

    "gallery.viewMore": "View More on Facebook",

    // Sponsors Section
    "sponsors.title": "Our Partners",
    "sponsors.subtitle":
      "Together with our valued partners, we're making a lasting impact on environmental conservation",
    "sponsors.becomePartner": "Become a Partner",
    "sponsors.partnerWithUs": "Partner With Us",
  },
  km: {
    // Navigation
    "nav.home": "ទំព័រដើម",
    "nav.about": "អំពីយើង",
    "nav.gallery": "វិចិត្រសាល",
    "nav.donate": "បរិច្ចាគ",
    "nav.contact": "ទំនាក់ទំនង",

    // Hero
    "hero.title": "300រៀល 300ដើម",
    "hero.subtitle":
      "ចូលរួមជាមួយគម្រោងរបស់ពួកយើង ដើម្បីការពារបរិស្ថាន🌱 រៀនដាំដើមកោងកាង ដើម្បីអភិរក្សធម្មជាតិ និងការពារបរិស្ថានសម្រាប់អនាគត!",
    "hero.viewProjects": "មើលគម្រោងរបស់យើង",
    "hero.follow": "តាមដានយើង",

    // Project shared
    "project.status.completed": "Completed",
    "project.status.upcoming": "Planned",
    "project.status.inProgress": "In Progress",
    "project.overview": "Overview",
    "project.partners": "Partners",
    "project.viewReport": "View report",
    "project.backHome": "Back to home",
    "project.stats.seedlingsPlanted": "Seedlings planted",
    "project.stats.volunteers": "Student volunteers",
    "project.stats.reach": "People reached online",
    "project.stats.co2Tons": "CO₂ projected over 20 years",
    "project.stats.interactions": "Engagements",
    "project.highlights.title": "សេចក្ដីលេចធ្លោគម្រោង",
    "project.highlights.tagline": "ស្ដារ​ដើមកោងកាង ជាដំណាក់កាល ម្ចាស់ជំនួយ 300 រៀល ម្តងៗ",
    "project.highlights.body1":
      "ខែមិថុនា ២០២៥ ក្រុមនិស្សិតបានធ្វើបេសកកម្មស្ដារដើមកោងកាងនៅតាបែងសង្គែ ខេត្តកំពត។ ដោយការគាំទ្រពីសហគមន៍ និងការបរិច្ចាគតូចៗ យើងបានដាំសំណាប Rhizophora ចំនួន 300 ដើម បង្កើនទីជម្រកសត្វទឹក និងជួយធ្វើឱ្យឆ្នេរខូចខាតមានស្ថេរភាពឡើងវិញ។",
    "project.highlights.body2":
      "ការងារក្រៅវាលបានបង្កើនសមត្ថភាពយុវជនខ្មែរ ក្នុងការចរចាដៃគូ ការគ្រប់គ្រងសុវត្ថិភាព ការកំណត់ទីតាំងដោយ GPS និងការប្រមូលទិន្នន័យវិទ្យាសាស្ត្រស៊ីវិល សរុប ៤២% មានទំនុកចិត្តកាន់តែខ្ពស់ក្នុងការដឹកនាំគម្រោងបរិស្ថាន។",
    "project.highlights.galleryPlaceholder": "កន្លែងបង្ហាញរូបភាពគម្រោង",
    "project.gallery.title": "វិចិត្រសាលដាំដើមកោងកាង",
    "project.gallery.description": "មើលខ្លឹមសារថ្ងៃដាំដើម ឬជំនួសជារូបភាពផ្ទាល់ខ្លួនរបស់អ្នក។",
    "project.gallery.placeholder": "កន្លែងបំពេញវិចិត្រសាល",
    "campaign.title": "យុទ្ធនាការយល់ដឹងឌីជីថល",
    "campaign.subtitle": "ពង្រីកឥទ្ធិពលតាម Facebook និង TikTok",
    "campaign.totalViews": "ចំនួនមើលមាតិកាសរុប",
    "campaign.uniqueReach": "គណនីដើមដែលឈានដល់",
    "campaign.interactions": "អន្តរកម្ម (ចូលចិត្ត មតិយោបល់ ចែករំលែក)",
    "campaign.nonFollowerShare": "ចំនួនមើលពីអ្នកមិនតាមដាន",
    "campaign.newFollowers": "អ្នកតាមដានថ្មី",
    "project.sponsors.title": "ដៃគូ និងអ្នកឧបត្ថម្ភ ឆ្នាំ 2025",
    "project.sponsors.subtitle": "សូមអរគុណដល់ដៃគូដែលបានធ្វើឲ្យបេសកកម្មនេះអាចប្រព្រឹត្តបាន",
    "project.sponsors.bus": "បរិច្ចាគរថយន្តក្រុមហ៊ុន (ប្រហាក់ប្រហែល USD 350)",
    "project.sponsors.meals": "ផ្ដល់អាហារ និងកន្លែងស្នាក់នៅ (ប្រហាក់ប្រហែល USD 260)",
    "project.sponsors.guidance": "គាំទ្រសំណាប និងផ្ដល់ការណែនាំកន្លែងដាំ",

    // Impact strip
    "impact.title": "Impact at a glance",
    "impact.seedlings": "mangrove seedlings planted",
    "impact.volunteers": "student volunteers",
    "impact.reach": "people reached online",
    "impact.co2": "t CO2 projected over 20 years",

    // Phases
    "phases.title": "ដំណាក់កាលគម្រោង",
    "phases.subtitle": "ដំណើររបស់យើងឆ្ពោះទៅរកផលប្រយោជន៍ប្រកបដោយចីរភាព",
    "phases.planning.title": "ការរៀបចំផែនការ",
    "phases.planning.description":
      "ដំណាក់កាលនេះធានាថាគំនិតផ្តួចផ្តើមរបស់យើងមានការយល់ព្រមជាចាំបាច់ និងការគាំទ្រដើម្បីឆ្ពោះទៅមុខ។",
    "phases.planning.additionalInfo":
      "ព័ត៌មានបន្ថែមសម្រាប់ដំណាក់កាលរៀបចំផែនការ",
    "phases.fundraising.title": "ការប្រមូលមូលនិធិ",
    "phases.fundraising.description":
      "ដំណាក់កាលនេះបង្កើតមូលដ្ឋានគ្រឹះសម្រាប់ព្រឹត្តិការណ៍ដាំដំណាំប្រកបដោយការរៀបចំ និងមានឥទ្ធិពលល្អ។",
    "phases.fundraising.additionalInfo": "ព័ត៌មានបន្ថែមសម្រាប់ការប្រមូលនិធិ",
    "phases.implementation.title": "ការអនុវត្ត",
    "phases.implementation.description":
      "ដំណាក់កាលនេះគឺជាបេះដូងនៃគម្រោងរបស់យើង ដែលការធ្វើផែនការប្រែទៅជាការផ្លាស់ប្តូរពិតប្រាកដ។",
    "phases.implementation.additionalInfo": "ព័ត៌មានបន្ថែមសម្រាប់ការអនុវត្ត",
    "phases.monitoring.title": "ការតាមដានក្រោយការដាំ",
    "phases.monitoring.description":
      "តាមដានការលូតលាស់ និងសុខភាពរបស់ដើមកោងកាងដែលបានដាំ។បន្តការចូលរួមនៅលើប្រព័ន្ធផ្សព្វផ្សាយសង្គម ធ្វើបច្ចុប្បន្នភាពសហគមន៍របស់យើង។",
    "phases.monitoring.additionalInfo": "ព័ត៌មានបន្ថែមសម្រ",

    // Mangroves Section
    "mangroves.title": "ហេតុអ្វីបានជាដើមកោងកាងមានសារៈសំខាន់នៅកម្ពុជា",
    "mangroves.subtitle": "ការពារធម្មជាតិ ថែរក្សាសហគមន៍",
    "mangroves.hero.title": "ព្រៃកោងកាងត្រពាំងសង្កែ",
    "mangroves.hero.subtitle":
      "ប្រព័ន្ធអេកូឡូស៊ីដ៏សំខាន់គាំទ្រសហគមន៍មូលដ្ឋាននិងជីវិតសមុទ្រ",
    "mangroves.impact.title": "ផលប្រយោជន៍នៃដើមកោងកាង",
    "mangroves.challenges.title": "បញ្ហាប្រឈម និងការអភិរក្ស",
    "mangroves.cta.text":
      "ចូលរួមជាមួយយើងក្នុងការការពារព្រៃកោងកាងនៅកម្ពុជា។ ការគាំទ្ររបស់អ្នកជួយថែរក្សាប្រព័ន្ធអេកូឡូស៊ីដ៏សំខាន់ទាំងនេះសម្រាប់មនុស្សជំនាន់ក្រោយ។",
    "mangroves.cta.description":
      "រាល់​ ​​៣០០រៀល គឺជួយការពារ និងស្តារព្រៃកោងកាងក្នុងខេត្តកំពត, កម្ពុជា។",
    "mangroves.cta.button": "គាំទ្រការអភិរក្សព្រៃកោងកាង",
    "mangroves.cta.learnMore.button": "ស្វែងយល់បន្ថែម",
    "mangroves.fact.naturalBarrier.title": "ជញ្ជាំងធម្មជាតិ",
    "mangroves.fact.naturalBarrier.description":
      "ដើមកោងកាងបន្ថយថាមពលរលកបានដល់ទៅ 66% ក្នុង 100 ម៉ែត្រដំបូងនៃទទឹងព្រៃ។",
    "mangroves.fact.marineNursery.title": "កន្លែងចិញ្ចឹមត្រីសមុទ្រ",
    "mangroves.fact.marineNursery.description":
      "គាំទ្រដល់ជម្រកត្រីសមុទ្រដែលមានជាង 70% នៅក្នុងដំណាក់កាលក្មេង។",
    "mangroves.fact.carbonStorage.title": "ការផ្ទុកកាបូន",
    "mangroves.fact.carbonStorage.description":
      "ផ្ទុកកាបូនបានច្រើនដល់ទៅ 3-5 ដងក្នុងមួយហិកតាជាងព្រៃត្រូពិច។",
    "mangroves.threat.deforestation.title": "ការកាប់បំផ្លាញព្រៃ",
    "mangroves.threat.deforestation.description":
      "ការអភិវឌ្ឍតំបន់ឆ្នេរ និងការចិញ្ចឹមត្រីបង្កគ្រោះថ្នាក់ដល់ប្រព័ន្ធអេកូឡូស៊ីដើមកោងកាង។",
    "mangroves.threat.climateChange.title": "ការផ្លាស់ប្តូរអាកាសធាតុ",
    "mangroves.threat.climateChange.description":
      "កម្រិតទឹកសមុទ្រកើនឡើង និងសីតុណ្ហភាពផ្លាស់ប្តូរប៉ះពាល់ដល់ការរស់រាននៃដើមកោងកាង។",
    "mangroves.threat.conservation.title": "ការអភិរក្ស",
    "mangroves.threat.conservation.description":
      "គម្រោងមូលដ្ឋានធ្វើការការពារ និងស្តារព្រៃកោងកាង។",

    // About Section
    "about.title": "អំពីយើង",
    "about.mission": "បេសកកម្មរបស់យើង",
    "about.missionText":
      "៣០០រៀល ៣០០ដើម គឺជាចលនាដឹកនាំដោយយុវជនក្នុងការការពារឆ្នេរកម្ពុជា តាមរយៈការស្តារព្រៃកោងកាងគ្រប់តំបន់ដែលត្រូវការ។ យើងរួមបញ្ចូលការអប់រំបរិស្ថាន ស្ម័គ្រចិត្តសហគមន៍ និងការថែរក្សារយៈពេលវែង ដើម្បីអោយប្រព័ន្ធ blue-carbon រស់រវើក។ ដោយដាំបណ្តុះមេដឹកនាំវ័យក្មេង និងលើកស្ទួយសម្លេងសហគមន៍ យើងបម្លែងសកម្មភាពតូចៗឲ្យក្លាយជាការការពារអាកាសធាតុយូរអង្វែង។",
    "about.story": "រឿងរ៉ាវរបស់យើង",
    "about.storyText":
      "យើងចាប់ផ្តើមជាមិត្តសហសិក្សាដែលចង់បង្ហាញថាក្រុមតូចអាចបង្កើតការផ្លាស់ប្តូរអេកូឡូស៊ីពិតប្រាកដ។ បច្ចុប្បន្ននេះយើងស្រាវជ្រាវបញ្ហាឆ្នេរ រៀបចំព្រឹត្តិការណ៍លើកទឹកចិត្ត និងសម្របសម្រួលការដាំដើមជាមួយសាលារៀន និងដៃគូសហគមន៍ទូទាំងប្រទេសកម្ពុជា។ រាល់សិក្ខាសាលា កម្មវិធីសម្អាត និងកូនឈើមួយដើម បញ្ជាក់ថាការថែទាំរួមគ្នាអាចស្ដារផ្ទៃឆ្នេរឱ្យមានសុខភាពឡើងវិញសម្រាប់មនុស្សគ្រប់រូប។",
    "about.objectives": "គោលដៅរបស់យើង",

    "about.objective1":
      "លើកកម្ពស់ការយល់ដឹងជាតិអំពីអត្ថប្រយោជន៍ដើមកោងកាង តាមរយៈការនិទានរឿង បណ្តាញសង្គម និងការចូលរួមសាលារៀន។",
    "about.objective2":
      "ផ្តល់ជំនាញជាក់ស្តែងដល់និស្សិត និងមេដឹកនាំសហគមន៍ តាមរយៈសិក្ខាសាលា ឧបករណ៍ និងការណែនាំ ដើម្បីអោយពួកគេដឹកនាំសកម្មភាពស្តារឡើងវិញដោយខ្លួនឯង។",
    "about.objective3":
      "ដាំ និងថែរក្សាកូនឈើកោងកាងជាមួយដៃគូសហគមន៍ បន្ទាប់មកតាមដានការលូតលាស់របស់វា ដើម្បីបន្ថែមឆ្នេរសីរីរម្យ។",
    // Contact Section
    "contact.title": "ទាក់ទងមកយើង",
    "contact.subtitle": "មានសំណួរឬចង់ចូលរួម? យើងចង់ស្តាប់ពីអ្នក!",
    "contact.name": "ឈ្មោះ",
    "contact.email": "អ៊ីមែល",
    "contact.message": "សារ",
    "contact.send": "ផ្ញើសារ",
    "contact.info": "ព័ត៌មានទំនាក់ទំនង",
    "contact.email.label": "អ៊ីមែល",
    "contact.phone.label": "ទូរស័ព្ទ",
    "contact.location.label": "ទីតាំង",
    "contact.email.value": "chethaputhi@gmail.com",
    "contact.phone.value": "+855 85 593 363",
    "contact.location.value": "ភ្នំពេញ, កម្ពុជា",

    // Donate Section
    "donate.title": "គាំទ្រគោលបំណងរបស់យើង",
    "donate.subtitle": "ការរួមចំណែករបស់អ្នកជួយយើងបន្តបេសកកម្មរបស់យើង",
    "donate.why": "ហេតុអ្វីបានជាការគាំទ្ររបស់អ្នកមានសារៈសំខាន់",

    "donate.impact.info1.header": "ដាំ និងថែរក្សាព្រៃកោងកាង៖",
    "donate.impact.info1":
      "ការចូលរួមរបស់អ្នកជួយស្ដារបរិស្ថានឆ្នេរ និងការពារភូមិសាស្ត្រធម្មជាតិ។",
    "donate.impact.info2.header": "គាំទ្របទពិសោធន៍អប់រំបរិស្ថាន៖",
    "donate.impact.info2":
      "ផ្តល់ឱកាសដល់សហគមន៍ក្នុងការរៀន និងអភិវឌ្ឍជំនាញដើម្បីការពារបរិស្ថាន។",
    "donate.impact.info3.header": "ជួយពង្រឹងសហគមន៍ក្នុងតំបន់៖",
    "donate.impact.info3":
      "បង្កើតការងារសម្រាប់ប្រជាជនក្នុងតំបន់តាមរយៈការអភិរក្សធម្មជាតិ។",
    "donate.impact.info4.header": "ការពារបរិស្ថានសំខាន់ៗ៖",
    "donate.impact.info4":
      "រក្សាការរស់នៅរបស់សត្វសមុទ្រ និងបរិស្ថានសម្រាប់អនាគត។",
    "donate.impact": "ឥទ្ថិពលរបស់អ្នក",
    "donate.impact.appreciation":
      "ការចូលរួមរបស់អ្នក អូសបន្លាយឆ្ពោះទៅការស្តារព្រៃកោងកាង និងការអភិរក្សបរិស្ថាននៅbប្រទេសកម្ពុជា។",
    "donate.payment": "វិធីសាស្រ្តទូទាត់",
    "donate.mobile": "ទូទាត់តាមទូរស័ព្ទ",
    "donate.credit": "កាតឥណទាន/ឥណពន្ធ",
    "donate.bank": "ការផ្ទេរប្រាក់តាមធនាគារ",
    "donate.link": "តំណភ្ជាប់ទូទាត់",

    // Footer Section
    "footer.about": "អំពីយើង",
    "footer.about.subtitle":
      "ពួកយើងជានិសិ្សតឆ្នាំទី៤ ដែលស្រលាញ់​ធម្មជាតិនិងជំរុញនិស្សិតជំនាន់​ក្រោយបង្កើតកម្រោងដដលផ្ដល់ប្រយោជន៍ដល់សង្គម។",
    "footer.gallery": "វិចិត្រសាល",
    "footer.donate": "បរិច្ចាគ",
    "footer.contact": "ទំនាក់ទំនង",
    "footer.quickLinks": "តំណភ្ជាប់រហ័ស",
    "footer.mission": "បេសកកម្មរបស់យើង",
    "footer.mission.subtitle": "Not yet known in khmer",
    "footer.copyright": "© 2025 300រៀល 300ដើម. រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    "footer.privacy": "គោលការណ៍ឯកជន",
    "footer.terms": "គោលការណ៍សំខាន់",

    // Gallery Section
    "gallery.title": "ព្រិត្តការណ៍ថ្មីបំផុត",
    "gallery.subtitle": "",
    "gallery.viewMore": "មើលបន្ថែមលើហ្វេសប៊ុក",

    // Sponsors Section
    "sponsors.title": "ដៃគូរបស់យើង",
    "sponsors.subtitle":
      "ជាមួយដៃគូរដែលមានតម្លៃរបស់យើង យើងកំពុងបង្កើតផលប្រយោជន៍អចិន្រ្តៃយ៍លើការអភិរក្សបរិស្ថាន",
    "sponsors.becomePartner": "ក្លាយជាដៃគូរ",
    "sponsors.partnerWithUs": "ចូលរួមជាមួយយើង",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const getInitialLanguage = (): Language => {
    const params = new URLSearchParams(window.location.search);
    return (params.get("lang") as Language) || "km"; //grab the lang param from the url
  };
  const [language, setLanguage] = useState<Language>("km");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "km" : "en";
    setLanguage(newLang);

    //Upate url without page relaod
    const newUrl = new URL(window.location.href /*current page url*/); //crate a new URL object
    newUrl.searchParams.set("lang", newLang);
    window.history.pushState({}, "", newUrl.toString());
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
