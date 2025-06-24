"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [currentLang, setCurrentLang] = useState({
    code: "AR",
    flag: "img/sa-flag.png",
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(event.target)
      ) {
        setDropdownOpen(false);
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* يسار: الشعار */}
<div className="navbar-left">
  <img src="img/renergy_logo_resized.png" alt="Logo" className="h-10 w-auto" />
</div>

        {/* وسط: روابط القائمة */}
        <nav className="navbar-menu">
          <a href="#" className="menu-item">الرئيسية</a>
          <a href="#" className="menu-item">عن المنصة</a>

          {/* خدماتنا مع القائمة المنسدلة */}
          <div className="relative" ref={dropdownRef}>
            <span
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="menu-item flex items-center gap-1 cursor-pointer select-none"
            >
              خدماتنا
              <i className={`fas fa-chevron-${dropdownOpen ? "up" : "down"} text-[10px]`}></i>
            </span>

            {dropdownOpen && (
              <div className="dropdown-grid-menu">
                <a href="#" className="dropdown-item">المؤتمرات والمعارض</a>
                <a href="#" className="dropdown-item">الخبراء والاستشارات</a>
                <a href="#" className="dropdown-item">الدورات التدريبية والتأهيل</a>
                <a href="#" className="dropdown-item">المواهب والابتكارات</a>
                <a href="#" className="dropdown-item">الأبحاث العلمية</a>
                <a href="#" className="dropdown-item">الاستضافات العلمية</a>
                <a href="#" className="dropdown-item">الاستيراد والتصدير</a>
                <a href="#" className="dropdown-item">المشاريع</a>
                <a href="#" className="dropdown-item">الاستثمارات</a>
              </div>
            )}
          </div>

          <a href="#" className="menu-item">الاعتمادات</a>
          <a href="#" className="menu-item">الأسئلة الشائعة</a>
          <a href="#" className="menu-item">المجلس الإداري</a>
          <a href="#" className="menu-item">تواصل معنا</a>
        </nav>

        {/* يمين: البحث وتبديل اللغة */}
        <div className="navbar-right flex items-center gap-4">
          <i
            className="fas fa-search search-icon cursor-pointer"
            onClick={() => setSearchOpen(true)}
          ></i>

          {/* اختيار اللغة */}
          <div className="relative">
            <div
              onClick={() => setLanguageOpen(!languageOpen)}
              className="lang-switch cursor-pointer flex items-center gap-1"
            >
              <img src={currentLang.flag} alt="flag" className="flag-icon" />
              <span className="lang-code">{currentLang.code}</span>
              <i className="fas fa-chevron-down text-[10px]"></i>
            </div>

            {languageOpen && (
              <div className="lang-dropdown">
                {[
                  { code: "AR", flag: "img/sa-flag.png" },
                  { code: "EN", flag: "img/uk-flag.png" },
                ].map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang);
                      setLanguageOpen(false);
                    }}
                    className="lang-item"
                  >
                    <img src={lang.flag} alt={lang.code} className="flag-icon" />
                    <span>{lang.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* نافذة البحث */}
      {searchOpen && (
        <div className="search-overlay">
          <div className="search-box">
            <i
              className="fas fa-times close-icon"
              onClick={() => setSearchOpen(false)}
            ></i>

            <div className="search-input-wrapper">
              <i className="fas fa-search search-icon-large"></i>
              <input
                type="text"
                placeholder="ابحث هنا.."
                className="search-input"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
