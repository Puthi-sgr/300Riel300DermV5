import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-green-50">
          <Navigation />
          <Outlet />
          <Footer />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
