
import { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          if (entry.target instanceof HTMLElement) {
            entry.target.style.opacity = '1';
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select elements to animate
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.remove('animate-slide-up');
      if (el instanceof HTMLElement) {
        el.style.opacity = '0';
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  );
};

export default Index;
