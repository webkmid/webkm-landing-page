// src/components/Footer.tsx
export const Footer = () => (
  <footer className="py-10 bg-slate-900 text-slate-300">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div><h5 className="font-bold text-white">Bastilla</h5><p className="text-sm mt-2">Template UMKM untuk Ekspor & Impor — Paket Free & Premium.</p></div>
        <div><h5 className="font-bold text-white">Produk</h5><ul className="mt-3 space-y-2 text-sm"><li><a href="#templates" className="hover:text-white">Template Free</a></li><li><a href="#templates" className="hover:text-white">Template Premium</a></li></ul></div>
        <div><h5 className="font-bold text-white">Bantuan</h5><ul className="mt-3 space-y-2 text-sm"><li><a href="#contact" className="hover:text-white">Kontak</a></li><li><a href="#" className="hover:text-white">Panduan</a></li></ul></div>
        <div><h5 className="font-bold text-white">Newsletter</h5><form onSubmit={e => e.preventDefault()} className="mt-3 flex gap-2"><input type="email" placeholder="Email Anda" className="w-full p-2 rounded-md bg-slate-800 border border-slate-700 text-sm"/><button type="submit" className="bg-indigo-600 px-3 py-2 rounded-md font-semibold text-white">Go</button></form></div>
      </div>
      <div className="mt-10 text-center text-sm border-t border-slate-800 pt-6">© {new Date().getFullYear()} Bastilla • All rights reserved.</div>
    </div>
  </footer>
);