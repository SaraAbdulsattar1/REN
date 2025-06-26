import React from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/StatsSection";

import CountUp from "react-countup";



export default function HomePage() {
  return (
    <main className="main-page" dir="rtl">
      {/* الهيدر */}
      <div className="navbar-wrapper">
        <Navbar />
      </div>

      {/* سلايدر البطل */}
      <section className="hero-section">
        <HeroSlider />

      </section>

      {/* قسم الإحصائيات */}
      <StatsSection />




    </main>
  );
}
