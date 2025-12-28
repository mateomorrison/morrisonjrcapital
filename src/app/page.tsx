"use client";

import Image from "next/image";
import { useEffect, useRef } from 'react';

export default function Home() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && window.innerWidth <= 768) {
        const scrollY = window.scrollY;
        const scale = 1 + scrollY / 800; // Adjust divisor for speed
        imageRef.current.style.transform = `scale(${Math.min(scale, 2.5)})`; // Max scale for dramatic effect
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
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
            Morrison Jr. Group was founded in 2025 as the synthesis of a unique journey—one that began with hands-on entrepreneurship and evolved through the core of global financial technology infrastructure.
          </p>
          <div className="image-container" ref={imageRef}>
            <Image
              src="/pexels-vlada-karpovich-4451713.jpg"
              alt="Futuristic financial technology landscape"
              width={800}
              height={600}
              className="dramatic-image"
            />
          </div>
        </section>

      </main>

      <hr className="my-10 border-t border-gray-700" />

    

      <footer className="mt-16 pt-8 border-t border-gray-700">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-400">
            Morrison Jr. Group, LLC
          </p>
          <p className="text-sm text-gray-400 mt-1">
            © 2025 All rights reserved
          </p>
        </div>
      </footer>

    </div>
  );
}
