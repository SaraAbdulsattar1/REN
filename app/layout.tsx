import React from "react";
import "@/app/globals.css"; // تأكد إنه يحتوي كل الكلاسات والستايلات اللي فصلناها


// Metadata — العنوان والوصف
export const metadata = {
  title: "REN",
  description: "The new face of the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-[Tajawal] bg-white text-black">
        {children}
      </body>
    </html>
  );
}
