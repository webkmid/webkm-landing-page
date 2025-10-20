// src/hooks/useRevealOnScroll.ts
import { useRef, useEffect } from 'react';

export const useRevealOnScroll = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.style.opacity = '0';
    element.style.transform = 'translateY(12px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.2, 0.9, 0.2, 1)';
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.style.opacity = '1';
        element.style.transform = 'none';
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });
    observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);
  return ref;
};