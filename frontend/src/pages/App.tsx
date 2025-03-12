import React from "react";
import { Navbar } from "components/Navbar";
import { HeroSection } from "components/HeroSection";
import { FeaturedProducts } from "components/FeaturedProducts";
import { CategorySection } from "components/CategorySection";
import { PromoBanner } from "components/PromoBanner";
import { Footer } from "components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <CategorySection />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
}
