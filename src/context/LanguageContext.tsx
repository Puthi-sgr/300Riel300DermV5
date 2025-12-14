import React, { createContext, useContext, useState, ReactNode } from "react";
import { resources } from "../lang/resources";
import type { Language } from "../lang/types";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

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
      resources[language][key as keyof (typeof resources)["en"]] || key
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
