"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { MobileCartBar } from "@/components/MobileCartBar";

export default function Home() {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white pb-20 sm:pb-0">
      <Header onOpenCart={() => setCartOpen(true)} />
      <Hero />
      <MenuSection />
      <Footer />
      <MobileCartBar onOpenCart={() => setCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
