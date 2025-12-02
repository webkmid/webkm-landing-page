// src/components/Footer.tsx
import React from 'react';

// Data for navigation links
const quickLinks = [
  { href: "#produk", label: "Produk Pilihan" },
  { href: "#campaign", label: "Campaign" },
  { href: "#all", label: "Semua Produk" },
  { href: "#social", label: "Social Media" },
];

// Data for social media links
const socialLinks = [
  // { href: "https://shopee.co.id", src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopee_logo.svg", alt: "Shopee", className: "h-8" },
  // { href: "https://tokopedia.com", src: "https://seeklogo.com/images/T/tokopedia-logo-40654CCDD6-seeklogo.com.png", alt: "Tokopedia", className: "h-8" },
  // { href: "https://tiktok.com", src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Tiktok_icon.svg", alt: "TikTok", className: "h-6" },
  { href: "https://instagram.com", src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", alt: "Instagram", className: "h-7" },
  // { href: "https://youtube.com", src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg", alt: "YouTube", className: "h-6" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold">WEBKM.ID</h3>
          <p className="text-sky-200 text-sm mt-3 leading-relaxed">
            Kami percaya setiap UMKM memiliki potensi besar untuk berkembang.
WebKM hadir membantu bisnis tampil lebih profesional dan siap bersaing di era digital.
Website siap pakai, cepat, ringan, dan gratis untuk memulai perjalanan digital Anda.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Navigasi Cepat</h4>
          <ul className="space-y-2 text-sky-200 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact Section */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Ikuti Kami</h4>
          <div className="flex items-center gap-4 mb-4">
            {socialLinks.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer" // Good practice for security with target="_blank"
                className="hover:opacity-80"
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className={social.className} // Use className from data
                />
              </a>
            ))}
          </div>
          <p className="text-sm text-sky-200">
            WhatsApp:{" "}
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              +62 812 3456 7890
            </a>
          </p>
          <p className="text-sm text-sky-200 mt-1">
            Email:{" "}
            <a href="mailto:webkm.id@gmail.com" className="underline hover:text-white">
              webkm.id@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-sky-700 mt-10 pt-6 text-center text-sky-300 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-white">BaliRent</span>. Semua Hak Dilindungi.
        <br />
        <span className="text-sky-400">
          Powered by{" "}
          <a href="#" className="text-white font-semibold hover:underline">
            WebKM
          </a>
        </span>
      </div>
    </footer>
  );
};