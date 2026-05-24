import { useState, useEffect } from "react";
import { Kolaboravis, Sport90, SalwaProperti, CreativeStudio, LuxEstate } from "../assets/images";

const teal = {
  50: "#E1F5EE",
  100: "#9FE1CB",
  400: "#1D9E75",
  600: "#0F6E56",
  800: "#085041",
};

const services = [
  {
    title: "Pembuatan Website",
    desc: "Website custom HTML/CSS/JS yang cepat, responsif, dan profesional untuk bisnis kamu.",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} stroke={teal[600]} fill="none" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "SEO & Google",
    desc: "Optimalkan website kamu agar mudah ditemukan di Google dan menarik lebih banyak pelanggan.",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} stroke={teal[600]} fill="none" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a14.5 14.5 0 0 0 0 18M12 3a14.5 14.5 0 0 1 0 18M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Branding & Logo",
    desc: "Identitas visual yang kuat — logo, warna, tipografi, dan panduan brand lengkap.",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} stroke={teal[600]} fill="none" strokeWidth={1.5}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Iklan Digital",
    desc: "Kelola iklan Google dan Meta Ads secara profesional untuk hasil yang terukur.",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} stroke={teal[600]} fill="none" strokeWidth={1.5}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Toko Online",
    desc: "Website e-commerce lengkap dengan keranjang, checkout, dan payment gateway terintegrasi.",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} stroke={teal[600]} fill="none" strokeWidth={1.5}>
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    title: "Maintenance Bulanan",
    desc: "Tenang — website kamu selalu update, aman, dan berjalan optimal setiap saat.",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} stroke={teal[600]} fill="none" strokeWidth={1.5}>
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const packages = [
  {
    name: "Starter",
    price: "Rp 1 jt",
    desc: "Untuk UMKM yang baru go online",
    features: ["Landing page 1 halaman", "Mobile-friendly", "Tombol WA & form kontak", "Pasang domain & hosting", "1x revisi"],
    featured: false,
    cta: "Pilih paket",
  },
  {
    name: "Growth",
    price: "Rp 3 jt",
    desc: "Tampil profesional + kelola sendiri",
    features: ["Company profile 5 halaman", "Dashboard admin", "Desain logo (2 konsep)", "SEO On-Page dasar", "Google Business setup", "3x revisi"],
    featured: true,
    cta: "Pilih paket",
  },
  {
    name: "Profesional",
    price: "Rp 9 jt",
    desc: "Website bisnis + toko online penuh",
    features: ["Semua fitur Growth", "Toko online & checkout", "Payment gateway", "Dashboard pesanan & stok", "Branding kit lengkap", "Revisi unlimited"],
    featured: false,
    cta: "Pilih paket",
  },
  {
    name: "Enterprise",
    price: "Rp 15 jt+",
    desc: "Solusi custom untuk bisnis yang scale",
    features: ["Semua fitur Profesional", "Fitur custom", "Multi-user admin", "Laporan & analitik", "Priority support 3 bulan"],
    featured: false,
    cta: "Konsultasi dulu",
  },
];

const steps = [
  { num: "01", title: "Konsultasi", desc: "Diskusi kebutuhan dan tujuan bisnis kamu secara gratis." },
  { num: "02", title: "Proposal", desc: "Kami kirimkan proposal harga dan timeline yang jelas." },
  { num: "03", title: "Pengerjaan", desc: "Tim kami mulai bekerja, kamu bisa pantau progresnya." },
  { num: "04", title: "Revisi", desc: "Feedback kamu kami tampung dan segera diimplementasikan." },
  { num: "05", title: "Live!", desc: "Website kamu tayang dan siap terima pelanggan online." },
];

const testimonials = [
  {
    text: "Sebelum pakai WebKM, bisnis saya cuma mengandalkan Instagram. Sekarang sudah bisa terima order lewat website sendiri. Sangat membantu!",
    name: "Andi Santoso",
    biz: "Warung Makan Pak Andi",
    initials: "AS",
  },
  {
    text: "Tim WebKM sangat responsif dan hasilnya melebihi ekspektasi. Website klinik kami sekarang tampil profesional dan mudah ditemukan di Google.",
    name: "dr. Rina Dewi",
    biz: "Klinik Sehat Bersama",
    initials: "DR",
  },
  {
    text: "Paket Profesional-nya worth it banget. Toko online kita sekarang rapi, dan dashboard admin-nya gampang dipakai bahkan oleh karyawan yang tidak melek teknologi.",
    name: "Budi Wijaya",
    biz: "Toko Bangunan Makmur",
    initials: "BW",
  },
];

const portfolios = [
  {
    title: "Kolaboravis.id",
    category: "Digital Agency",
    type: "Landing Page",
    image:Kolaboravis,
    desc: "Landing page modern untuk agensi digital, dengan desain menarik dan CTA yang jelas.",
    url: "kolaboravis.id",
    color: "#FFF7ED",
    accent: "#EA580C",
    year: "2025",
  },
  {
    title: "90PlusSportsAgency",
    category: "Agensi Olahraga",
    type: "Company Profile",
    image:Sport90,
    desc: "Website company profile untuk agensi olahraga, menampilkan layanan, portofolio, dan form kontak profesional.",
    url: "90sportsagency.com",
    color: "#F0FDF4",
    accent: "#16A34A",
    year: "2024",
  },
  {
    title: "Salwa Properti",
    category: "Construction & Properti",
    type: "Landing Page",
    image:SalwaProperti,
    desc: "Landing page untuk bisnis rental mobil, dengan fitur pemesanan online dan informasi armada yang lengkap.",
    url: "salwa-properti.webkm.id",
    color: "#EFF6FF",
    accent: "#2563EB",
    year: "2024",
  },
  {
    title: "Creative Studio",
    category: "Desain Grafis",
    type: "Landing Page",
    image: CreativeStudio,
    desc: "Landing page untuk studio kreatif, menampilkan portofolio karya desain grafis dengan tata letak yang menarik dan responsif.",
    url: "lpp-05-graphic.webkm.id",
    color: "#FDF4FF",
    accent: "#9333EA",
    year: "2025",
  },
  {
    title: "LuxEstate Properti",
    category: "Properti",
    type: "Landing Page",
    image: LuxEstate,
    desc: "Landing page untuk agen properti, dengan fitur pencarian properti, galeri foto, dan form kontak yang mudah diakses.",
    url: "lpp-03-agent-property.webkm.id",
    color: "#FFFBEB",
    accent: "#D97706",
    year: "2025",
  },
];

export default function WebKM2() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        nav ul {
          margin: 0; padding: 0; list-style: none;
          transition: max-height 0.3s ease;
        }
        nav ul li a {
          transition: color 0.3s;
        }
        nav ul li a:hover {
          color: #1D9E75;
        }
        .hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #111;
        }
        @media (max-width: 768px) {
          nav {
            flex-wrap: wrap;
            padding: 1rem 5%;
          }
          nav ul {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            max-height: 0;
            overflow: hidden;
          }
          nav ul.open {
            max-height: 500px; /* cukup untuk menampilkan semua item */
          }
          .hamburger {
            display: block;
          }
          nav a.cta {
            order: 3;
            width: 100%;
            text-align: center;
            margin-top: 0.75rem;
          }
        }
      `}</style>

      <div style={{ fontFamily: "'Inter', sans-serif", color: "#111", background: "#fff", minHeight: "100vh" }}>

        {/* Navbar */}
        <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.1rem 5%", position: "sticky", top: 0, zIndex: 100,
        background: "#fff",
        borderBottom: scrolled ? "0.5px solid #e5e5e5" : "0.5px solid transparent",
        transition: "border-color 0.2s",
      }}>
        <div style={{ fontSize: 20, fontWeight: 500, letterSpacing: -0.5 }}>
          web<span style={{ color: "#1D9E75" }}>km</span>.id
        </div>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={menuOpen ? "open" : ""} style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
          {["Layanan", "Paket", "Proses", "Kontak"].map((item) => (
            <li key={item}>
              <a href="#" style={{ fontSize: 14, color: "#666", textDecoration: "none" }}>{item}</a>
            </li>
          ))}
        </ul>

        <a href="#" className="cta" style={{
          background: "#111", color: "#fff", padding: "8px 20px",
          borderRadius: 6, fontSize: 14, fontWeight: 500, textDecoration: "none",
          whiteSpace: "nowrap",
        }}>
          Konsultasi Gratis
        </a>
      </nav>

        {/* Hero */}
        <section className="hero" style={{ padding: "6rem 5% 3rem", textAlign: "center" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div style={{
              display: "inline-block", background: teal[50], color: teal[600],
              fontSize: 12, fontWeight: 500, padding: "4px 14px", borderRadius: 20, marginBottom: "1.5rem",
            }}>
              Agency Digital untuk UMKM Indonesia
            </div>
            <h1 style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.15, letterSpacing: -1.5, marginBottom: "1.2rem" }}>
              Website profesional untuk bisnis yang{" "}
              <span style={{ color: teal[400] }}>berkembang</span>
            </h1>
            <p style={{ fontSize: 17, color: "#666", lineHeight: 1.7, marginBottom: "2rem" }}>
              Kami bantu UMKM Indonesia tampil profesional di dunia digital — dari website, branding, SEO, hingga iklan online.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#pricing" style={{
                background: "#111", color: "#fff", padding: "12px 28px",
                borderRadius: 8, fontSize: 15, fontWeight: 500, textDecoration: "none",
                whiteSpace: "nowrap",
              }}>Lihat Paket Harga</a>
              <a href="#" style={{
                border: "0.5px solid #aaa", color: "#111", padding: "12px 28px",
                borderRadius: 8, fontSize: 15, textDecoration: "none",
                whiteSpace: "nowrap",
              }}>Hubungi Kami</a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="stats-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px",
          background: "#e5e5e5", border: "0.5px solid #e5e5e5", borderRadius: 12,
          overflow: "hidden", margin: "0 5% 4rem",
        }}>
          {[["50+", "Client aktif"], ["98%", "Kepuasan client"], ["3 hari", "Rata-rata pengerjaan"]].map(([num, label]) => (
            <div key={label} style={{ background: "#fff", padding: "2rem", textAlign: "center" }}>
              <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: -1 }}>{num}</div>
              <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <section style={{ padding: "4rem 5%" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: 1, color: teal[400], marginBottom: 8 }}>Layanan</div>
            <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: -0.8, marginBottom: 8 }}>Semua yang bisnis kamu butuhkan</h2>
            <p style={{ fontSize: 16, color: "#666", lineHeight: 1.6, maxWidth: 480 }}>Satu tempat untuk semua kebutuhan digital UMKM kamu.</p>
          </div>
          <div className="services-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1px", background: "#e5e5e5", border: "0.5px solid #e5e5e5",
            borderRadius: 12, overflow: "hidden",
          }}>
            {services.map((s) => (
              <div key={s.title} style={{ background: "#fff", padding: "1.75rem" }}>
                <div style={{
                  width: 40, height: 40, background: teal[50], borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem",
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing"  style={{ padding: "4rem 5%", background: "#f8f8f7" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: 1, color: teal[400], marginBottom: 8 }}>Paket Harga</div>
            <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: -0.8, marginBottom: 8 }}>Transparan, tanpa biaya tersembunyi</h2>
            <p style={{ fontSize: 16, color: "#666", lineHeight: 1.6, maxWidth: 480 }}>Pilih paket yang sesuai kebutuhan bisnis kamu saat ini.</p>
          </div>
          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 16 }}>
            {packages.map((pkg) => (
              <div key={pkg.name} style={{
                background: "#fff",
                border: pkg.featured ? `2px solid ${teal[400]}` : "0.5px solid #e5e5e5",
                borderRadius: 12, padding: "1.75rem",
              }}>
                {pkg.featured && (
                  <div style={{
                    display: "inline-block", background: teal[50], color: teal[600],
                    fontSize: 11, fontWeight: 500, padding: "3px 10px", borderRadius: 20, marginBottom: "0.75rem",
                  }}>
                    Paling populer
                  </div>
                )}
                <div style={{ fontSize: 14, fontWeight: 500, color: "#888", marginBottom: 4 }}>{pkg.name}</div>
                <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: -1, marginBottom: 4 }}>{pkg.price}</div>
                <div style={{
                  fontSize: 12, color: "#888", marginBottom: "1.25rem",
                  paddingBottom: "1.25rem", borderBottom: "0.5px solid #e5e5e5",
                }}>{pkg.desc}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: 10 }}>
                  {pkg.features.map((f) => (
                    <li key={f} style={{ fontSize: 13, color: "#555", display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: teal[400], fontWeight: 500, flexShrink: 0 }}>+</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#" style={{
                  display: "block", textAlign: "center", padding: "10px",
                  borderRadius: 6, fontSize: 14, fontWeight: 500, textDecoration: "none",
                  background: pkg.featured ? teal[400] : "transparent",
                  color: pkg.featured ? "#fff" : "#111",
                  border: pkg.featured ? `1px solid ${teal[400]}` : "0.5px solid #aaa",
                }}>
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section style={{ padding: "4rem 5%" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: 1, color: teal[400], marginBottom: 8 }}>Cara kerja</div>
            <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: -0.8, marginBottom: 8 }}>Proses yang mudah & terstruktur</h2>
            <p style={{ fontSize: 16, color: "#666", lineHeight: 1.6, maxWidth: 480 }}>Dari konsultasi hingga website live, kami dampingi setiap langkahnya.</p>
          </div>
          <div className="process-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1px", background: "#e5e5e5", border: "0.5px solid #e5e5e5",
            borderRadius: 12, overflow: "hidden",
          }}>
            {steps.map((s) => (
              <div key={s.num} style={{ background: "#fff", padding: "1.5rem" }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: teal[400], marginBottom: "0.75rem" }}>{s.num}</div>
                <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ padding: "4rem 5%", background: "#f8f8f7" }}>
          <div style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: 1, color: teal[400], marginBottom: 8 }}>Testimoni</div>
          <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: -0.8, marginBottom: "2.5rem" }}>Dipercaya UMKM Indonesia</h2>
          <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{
                background: "#fff", border: "0.5px solid #e5e5e5",
                borderRadius: 12, padding: "1.5rem",
              }}>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#555", marginBottom: "1.25rem" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%", background: teal[50],
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, fontWeight: 500, color: teal[600], flexShrink: 0,
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>{t.biz}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Carousel */}
        <section style={{ padding: "4rem 5%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: 1, color: teal[400], marginBottom: 8 }}>Portofolio</div>
              <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: -0.8, marginBottom: 8 }}>Karya yang sudah kami buat</h2>
              <p style={{ fontSize: 16, color: "#666", lineHeight: 1.6, maxWidth: 420 }}>Setiap proyek dibuat dengan penuh perhatian terhadap detail dan kebutuhan bisnis client.</p>
            </div>
            {/* Buttons hidden on mobile */}
            <div className="portfolio-buttons" style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => setActiveSlide((p) => Math.max(0, p - 1))}
                disabled={activeSlide === 0}
                style={{
                  width: 40, height: 40, borderRadius: 8, border: "0.5px solid #e5e5e5",
                  background: activeSlide === 0 ? "#f8f8f7" : "#fff",
                  cursor: activeSlide === 0 ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: activeSlide === 0 ? "#ccc" : "#111",
                }}
              >
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => setActiveSlide((p) => Math.min(portfolios.length - 3, p + 1))}
                disabled={activeSlide >= portfolios.length - 3}
                style={{
                  width: 40, height: 40, borderRadius: 8, border: "0.5px solid #e5e5e5",
                  background: activeSlide >= portfolios.length - 3 ? "#f8f8f7" : "#fff",
                  cursor: activeSlide >= portfolios.length - 3 ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: activeSlide >= portfolios.length - 3 ? "#ccc" : "#111",
                }}
              >
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Slider track */}
          <div style={{ overflow: "hidden", borderRadius: 12 }}>
            <div
              className="portfolio-slider"
              style={{
                display: "flex", gap: 16,
                transform: `translateX(calc(-${activeSlide} * (33.333% + 5.5px)))`,
                transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}>
              {portfolios.map((p, i) => (
                <div
                  key={i}
                  onClick={() => window.open(`https://${p.url}`, "_blank")}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                  style={{
                    minWidth: "calc(33.333% - 11px)", flexShrink: 0,
                    border: "0.5px solid #e5e5e5", borderRadius: 12, overflow: "hidden",
                    cursor: "pointer", transition: "box-shadow 0.2s, transform 0.2s",
                  }}>
                  {/* Mock browser preview */}
                  {/* Ganti bagian mock browser preview yang lama dengan ini */}
<div style={{ 
  height: 200, 
  overflow: "hidden", 
  background: p.color,
  position: "relative"
}}>
  <img
    src={p.image}
    alt={p.title}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top",
      transition: "transform 0.5s ease",
    }}
    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
  />
  <div style={{
    position: "absolute", inset: 0,
    background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.08))"
  }} />
</div>
                  {/* Card info */}
                  <div style={{ padding: "1.25rem", background: "#fff" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <div style={{ display: "flex", gap: 6 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 500, padding: "3px 8px", borderRadius: 20,
                          background: p.color, color: p.accent,
                        }}>{p.category}</span>
                        <span style={{
                          fontSize: 11, padding: "3px 8px", borderRadius: 20,
                          background: "#f5f5f5", color: "#666",
                        }}>{p.type}</span>
                      </div>
                      <span style={{ fontSize: 11, color: "#aaa" }}>{p.year}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>{p.title}</h3>
                    <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: "1.5rem" }}>
            {Array.from({ length: portfolios.length - 2 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  border: "none",
                  background: activeSlide === i ? teal[400] : "#ddd",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
