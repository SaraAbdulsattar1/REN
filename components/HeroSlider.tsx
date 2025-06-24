"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/HeroSlider.css"; // تأكد أن ملف CSS موجود ومربوط

const slides = [
  {
    title: "نحو مستقبل مستدام",
    subtitle: "رؤيتنا",
    text: "أن نصبح المنصة الرقمية الأولى لربط الخبراء والمبتكرين والمستفيدين في مجالات الطاقة المتجددة والاستدامة، ونقود التغيير نحو بيئة أفضل على المستويين المحلي والعالمي.",
 image: "img/IMG_01.JPG",
      overlayColor: "rgba(0, 0, 0, 0.7)",
  },
  {
    title: "منصة موحدة للجميع",
    subtitle: "رسالتنا",
    text: "توفير بيئة رقمية موثوقة وتفاعلية تربط الأفراد والشركات والجهات التعليمية بخدمات ومبادرات الاستدامة والطاقة المتجددة، وتسهّل الوصول إلى المعرفة، الشراكات، والفرص.",
 image: "img/IMG_02.JPG",
      overlayColor: "rgba(0, 0, 0, 0.7)",
  },
  {
    title: "قيم واضحة ومسار محدد",
    subtitle: "أهدافنا",
    text: "1. تمكين المستخدمين من الوصول السريع والفعال إلى خدمات الطاقة المتجددة.\n2. دعم الابتكار والبحث العلمي في مجالات الاستدامة.\n3. خلق مجتمع تفاعلي يضم المهتمين والفاعلين في المجال.\n4. بناء شراكات استراتيجية تعزز التأثير الإيجابي.\n5. تحسين الوعي المجتمعي بالقضايا البيئية.",
 image: "img/IMG_03.JPG",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      },
];

export default function HeroSlider() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="hero-slider">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Mousewheel]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-content"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div
                style={{
                  backgroundColor: slide.overlayColor,
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                }}
              ></div>

              <div className="text-box" style={{ position: "relative", zIndex: 2 }}>
                <h4>{slide.subtitle}</h4>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <a href="#" className="read-more">المزيد ←</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-arrows">
        <div className="arrow-up" onClick={() => swiperRef.current?.slidePrev()}>↑</div>
        <div className="arrow-down" onClick={() => swiperRef.current?.slideNext()}>↓</div>
      </div>

      <div
        className="scroll-down-btn"
        onClick={() => {
          const nextSection = document.getElementById("after-hero");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <i className="fas fa-arrow-down"></i>
      </div>
    </div>
  );
}
