"use client";
import CountUp from "react-countup";

export default function StatsSection() {
  return (
    <section className="bg-[#CBE3B8] py-16 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-right mb-12">
          من نحن في أرقام ...
        </h2>

        <div className="flex flex-wrap justify-between items-center text-white text-center gap-y-10">
          <div className="w-1/2 md:w-1/4">
            <p className="text-4xl font-extrabold mb-2">
              <CountUp end={85} duration={2} />+
            </p>
            <p className="text-lg underline">أحداث منجزة</p>
          </div>

          <div className="w-1/2 md:w-1/4">
            <p className="text-4xl font-extrabold mb-2">
              <CountUp end={100} duration={2} />K+
            </p>
            <p className="text-lg underline">مستفيدون</p>
          </div>

          <div className="w-1/2 md:w-1/4">
            <p className="text-4xl font-extrabold mb-2">
              <CountUp end={99} duration={2} />+
            </p>
            <p className="text-lg underline">شركاء نجاح</p>
          </div>

          <div className="w-1/2 md:w-1/4">
            <p className="text-4xl font-extrabold mb-2">
              <CountUp end={250} duration={2} />+
            </p>
            <p className="text-lg underline">مشاريع استدامة</p>
          </div>
        </div>
      </div>
    </section>
  );
}
