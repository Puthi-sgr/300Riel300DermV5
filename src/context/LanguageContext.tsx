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
    "hero.donate": "Donate Now",
    "hero.follow": "Follow Us",

    // Phases
    "phases.title": "Project Phases",
    "phases.subtitle": "Our journey towards sustainable impact",
    "phases.planning.title": "Planning",
    "phases.planning.description":
      "Initial planning and strategy development phase",
    "phases.planning.additionalInfo": "Additional info for Planning phase",
    "phases.fundraising.title": "Fundraising",
    "phases.fundraising.description":
      "Gathering resources and community support",
    "phases.fundraising.additionalInfo":
      "Additional info for Fundraising phase",
    "phases.implementation.title": "Implementation",
    "phases.implementation.description": "Executing the planned initiatives",
    "phases.implementation.additionalInfo":
      "Additional info for Implementation phase",
    "phases.monitoring.title": "Post-planting Monitoring",
    "phases.monitoring.description":
      "Tracking progress and ensuring sustainability",
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
      "300 Riel, 300 Derm works to fight deforestation and protect Cambodia’s coastal ecosystems by restoring mangrove forests that are needed in Trampeng Sangkae, Kampot. We seek to empower many young people and local areas through ecological education, the physical replanting of forests, and dedicated work toward long-lasting resource protection. We plan to grow ecological responsibility, strengthen biodiversity of different forms, in addition to improving existing climate resilience. Through planting a certain amount of mangrove saplings, along with building more awareness using digital tools, we will do this. Through collaboration and activism, we intently seek to gradually fashion an even greener and more resilient Cambodia by undergoing true sustainability—one mangrove at a time",
    "about.story": "Our Story",
    "about.storyText":
      "Our group will travel to Kampot Province to plant 300 mangrove trees to help nature and teach young people about the environment. We are going to work with the Trapang Sangkae Community, a local group that protects nature and promotes eco-friendly actions. Mangroves are very important because they provide homes for animals, support ecosystems, and protect coastal areas from damage. By planting the trees, our group wanted to show how valuable mangroves are and encourage young people to care for the environment. This activity is not only about restoring nature but also about inspiring others to take part in similar projects. The project will show how teamwork and small steps can create a big positive impact. Through this effort, our group hopes to spread awareness and build a greener future for everyone.",
    "about.objectives": "Our Objectives",
    "about.objective1":
      "To raise awareness of Mangrove's importance to local communities, namely the Trampeng Sangkae community, to Gen Z through a social media campaign such as Facebook and TikTok within June",
    "about.objective2":
      "To raise awareness of Mangrove's importance to local communities, namely the Trampang Sangkae community, to 50 IFL students through a workshop with invited experts in May",
    "about.objective3":
      "To collaborate and plant 300 mangrove saplings at Trampang Sangkae community to increase local biodiversity in Kampot province to enhance local biodiversity in June",
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
    "donate.complete": "Complete Donation",

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
    "hero.donate": "បរិច្ចាគឥឡូវនេះ",
    "hero.follow": "តាមដានយើង",

    // Phases
    "phases.title": "ដំណាក់កាលគម្រោង",
    "phases.subtitle": "ដំណើររបស់យើងឆ្ពោះទៅរកផលប្រយោជន៍ប្រកបដោយចីរភាព",
    "phases.planning.title": "ការរៀបចំផែនការ",
    "phases.planning.description":
      "ដំណាក់កាលនៃការរៀបចំផែនការ និងការអភិវឌ្ឍយុទ្ធសាស្ត្រដំបូង",
    "phases.planning.additionalInfo":
      "ព័ត៌មានបន្ថែមសម្រាប់ដំណាក់កាលរៀបចំផែនការ",
    "phases.fundraising.title": "ការប្រមូលមូលនិធិ",
    "phases.fundraising.description": "ការប្រមូលធនធាន និងការគាំទ្រពីសហគមន៍",
    "phases.fundraising.additionalInfo": "ព័ត៌មានបន្ថែមសម្រាប់ការប្រមូលនិធិ",
    "phases.implementation.title": "ការអនុវត្ត",
    "phases.implementation.description":
      "ការអនុវត្តគំនិតផ្តួចផ្តើមដែលបានគ្រោងទុក",
    "phases.implementation.additionalInfo": "ព័ត៌មានបន្ថែមសម្រាប់ការអនុវត្ត",
    "phases.monitoring.title": "ការតាមដានក្រោយការដាំ",
    "phases.monitoring.description": "ការតាមដានវឌ្ឍនភាព និងការធានាចីរភាព",
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
      "300រៀល 300ដើម ធ្វើឡើងដើម្បីការពារប្រព័ន្ធអេកូឡូស៊ីឆ្នេរសមុទ្រកម្ពុជាដោយការស្តារព្រៃកោងកាងដែលត្រូវការនៅតំបន់ត្រពាំងសង្កែ ខេត្តកំពត។ យើងព្យាយាមលើកទឹកចិត្តយុវជន និងតំបន់មូលដ្ឋានជាច្រើនតាមរយៈការអប់រំអេកូឡូស៊ី ការដាំព្រៃឈើឡើងវិញ និងការពារធនធានជីវចម្រុះ។ បន្ថែមពីលើការកែលម្អភាពធន់នឹងអាកាសធាតុដែលមានស្រាប់ តាមរយៈការដាំកូនឈើកោងកាងមួយចំនួន រួមជាមួយនឹងការពង្រឹងការយល់ដឹងដោយប្រើឧបករណ៍ឌីជីថល យើងនឹងធ្វើបែបនេះ តាមរយៈកិច្ចសហការ និងសកម្មភាពមួយចំនួន ពួកយើងព្យាយាមនាំយុវជនប្រទេសកម្ពុជាទៅកាន់អនាគតដែលកាន់តែបៃតង និងធន់ជាងមុន។",
    "about.story": "រឿងរ៉ាវរបស់យើង",
    "about.storyText":
      "ក្រុមរបស់យើងនឹងធ្វើដំណើរទៅកាន់ខេត្តកំពត ដើម្បីដាំដើមកោងកាងចំនួន ៣០០ដើម ដើម្បីជួយធម្មជាតិ និងបង្រៀនយុវជនអំពីបរិស្ថាន។ យើងនឹងធ្វើការជាមួយសហគមន៍ត្រពាំងសង្កែ ដែលជាក្រុមក្នុងស្រុកដែលការពារធម្មជាតិ​និងលើកកម្ពស់សកម្មភាពដែលមិនប៉ះពាល់ដល់បរិស្ថាន។ ព្រៃកោងកាងមានសារៈសំខាន់ណាស់ ព្រោះវាផ្តល់ផ្ទះសម្រាប់សត្វ គាំទ្រដល់ប្រព័ន្ធអេកូឡូស៊ី និងការពារតំបន់ឆ្នេរពីការខូចខាត។ តាមរយៈ​ការ​ដាំ​ដើម​ឈើ ក្រុម​យើង​ចង់​បង្ហាញ​ថា​ដើម​កោងកាង​មាន​តម្លៃ​ប៉ុណ្ណា និង​លើក​ទឹកចិត្ត​យុវជន​ក្នុង​ការ​ថែរក្សា​បរិស្ថាន។ សកម្មភាពនេះមិនត្រឹមតែជាការស្ដារឡើងវិញនូវធម្មជាតិប៉ុណ្ណោះទេ ថែមទាំងជាការលើកទឹកចិត្តអ្នកដទៃឱ្យចូលរួមក្នុងគម្រោងស្រដៀងគ្នានេះផងដែរ។ គម្រោងនេះនឹងបង្ហាញពីរបៀបដែលការធ្វើការងារជាក្រុម និងជំហានតូចៗអាចបង្កើតផលវិជ្ជមានដ៏ធំមួយ។ តាមរយៈកិច្ចខិតខំប្រឹងប្រែងនេះ ក្រុមរបស់យើងសង្ឃឹមថានឹងផ្សព្វផ្សាយការយល់ដឹង និងកសាងអនាគតដ៏បៃតងសម្រាប់អ្នករាល់គ្នា។",
    "about.objectives": "គោលដៅរបស់យើង",

    "about.objective1":
      "ដើម្បីលើកកម្ពស់ការយល់ដឹងអំពីសារៈសំខាន់របស់ព្រៃកោងកាងចំពោះសហគមន៍មូលដ្ឋាន គឺសហគមន៍ត្រពាំងសង្កែ ដល់ Gen Z តាមរយៈយុទ្ធនាការប្រព័ន្ធផ្សព្វផ្សាយសង្គមដូចជា Facebook និង TikTok ក្នុងខែមិថុនា។",
    "about.objective2":
      "ដើម្បីលើកកម្ពស់ការយល់ដឹងអំពីសារៈសំខាន់របស់ដើមកោងកាងចំពោះសហគមន៍មូលដ្ឋាន ពោលគឺសហគមន៍ត្រពាំងសង្កែ ដល់និស្សិត IFL ចំនួន ៥០នាក់ តាមរយៈសិក្ខាសាលាជាមួយអ្នកជំនាញដែលបានអញ្ជើញកាលពីខែឧសភា។",
    "about.objective3":
      "ដើម្បីសហការ និងដាំកូនឈើកោងកាងចំនួន ៣០០ដើម នៅសហគមន៍ត្រពាំងសង្កែ ដើម្បីបង្កើនជីវចម្រុះក្នុងខេត្តកំពត ដើម្បីបង្កើនជីវចម្រុះក្នុងមូលដ្ឋានក្នុងខែមិថុនា។",
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
    "donate.complete": "បញ្ចប់ការបរិច្ចាគ",

    // Footer Section
    "footer.about": "អំពីយើង",
    "footer.about.subtitle":
      "ពួកយើងជានិសិ្សតឆ្នាំទី៤ ដែលស្រលាញ់​ធម្មជាតិនិងជំរុញនិស្សិតជំនាន់​ក្រោយបង្កើតកម្រោងដដលផ្ដល់ប្រយោជន៍ដល់សង្គម",
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
    const newUrl = new URL(window.location.href/*current page url*/); //crate a new URL object
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
