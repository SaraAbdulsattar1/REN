import React from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";

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

      {/* القسم التالي بعد السلايدر */}
      <section id="after-hero" className="next-section" style={{ padding: "100px 20px", backgroundColor: "#f5f5f5" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>مرحبا بك في القسم التالي</h2>
          <p style={{ fontSize: "1.1rem", color: "#444" }}>
            هذا مكان مخصص لأي محتوى إضافي بعد السلايدر: نصوص، روابط، صور، أقسام أخرى.
          </p>
        </div>
      </section>
    </main>
  );
}
