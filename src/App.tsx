// src/App.tsx
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Templates } from './components/Templates';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Templates />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}