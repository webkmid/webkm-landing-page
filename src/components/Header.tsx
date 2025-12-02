// src/components/Header.tsx
import { useState } from 'react';
import { Logo } from '../assets';
import {navLinks} from '../utils/constant'


export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed w-full z-50">
      <div className="bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <img src={Logo} className='w-10 h-10 rounded-lg'/>
            <div>
              <div className="font-extrabold leading-tight">WEBKM.ID</div>
              <div className="text-xs text-slate-500 -mt-0.5">Solusi Digital UMKM</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-slate-600 hover:text-indigo-600">{link.label}</a>)}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#pricing" className="text-white bg-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-indigo-700 text-sm font-semibold">Mulai Gratis</a>
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2" aria-label="toggle menu">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map(link => <a key={link.href} href={link.href} onClick={closeMenu} className="py-2 px-2 rounded-md hover:bg-slate-50">{link.label}</a>)}
          </div>
        </div>
      )}
    </header>
  );
};