"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState([]);

  const handleTouch = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && window.innerWidth <= 768) {
        const scrollY = window.scrollY;
        // Start scaling after 100px scroll for delay
        const effectiveScroll = Math.max(0, scrollY - 100);
        const scale = 1 + effectiveScroll / 1500; // Slower scaling
        imageRef.current.style.transform = `scale(${Math.min(scale, 5)})`; // Much larger max scale
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div onTouchStart={handleTouch} style={{ position: 'relative', overflow: 'hidden' }}>
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="ripple"
          style={{ left: ripple.x - 50, top: ripple.y - 50 }}
        />
      ))}
      <div className="logo-container">
        <Image 
          src="/logo.jpg" 
          alt="Morrison Jr. Capital Logo" 
          className="logo"
          width={120}
          height={120}
        />
      {/* <h1>Morrison Jr. Capital</h1> */}
      </div>
      <main>
        <section>
          {/* <h2 className="text-2xl font-bold mb-4">About Us</h2> */}
          <p className="mb-5 text-[1.1em]">
            Morrison Jr. Group marks the continuation of a multi-generational family legacy originating in the Dominican Republic. Founded in 2025, it expands upon a journey that began with hands-on entrepreneurship and has evolved through the transformative core of financial technology, bridging traditional roots with global innovation.
          </p>
          <div className="image-container" ref={imageRef}>
            <Image
              src="/pexels-skyriusmarketing-2224861.jpg"
              alt="Futuristic financial technology landscape"
              width={800}
              height={600}
              className="dramatic-image"
            />
          </div>
          <div style={{ height: '200vh' }}></div> {/* Spacer for more scroll */}
        </section>

      </main>

      {/* <hr className="my-10 border-t border-gray-700" /> */}

    

      <footer className="mt-16 pt-8 border-t border-gray-700">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-400">
            Morrison Jr. Group, LLC
          </p>
          <p className="text-sm text-gray-400 mt-1">
            The Trump Building,<br />
            40 Wall Street,<br />
            New York
          </p>
          <p className="text-sm text-gray-400 mt-1">
            media@morrisonjrgroup.com
          </p>
          <p className="text-sm text-gray-400 mt-1">
            www.morrisonjrgroup.com
          </p>
          <p className="text-sm text-gray-400 mt-1">
            © 2026 All rights reserved
          </p>
        </div>
      </footer>

    </div>
  );
}
