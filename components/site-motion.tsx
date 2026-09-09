'use client';

import { useEffect } from 'react';

export function SiteMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
    elements.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add('reveal-pending');
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach(element => element.classList.remove('reveal-pending'));
    };
  }, []);
  return null;
}
