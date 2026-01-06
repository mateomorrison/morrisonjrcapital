"use client";

import Image from "next/image";
import { useEffect, useRef } from 'react';

export default function Home() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && window.innerWidth <= 768) {
        const scrollY = window.scrollY;
        // Start scaling after 200px scroll for more delay
        const effectiveScroll = Math.max(0, scrollY - 200);
        const scale = 1 + effectiveScroll / 2000; // Even slower scaling
        imageRef.current.style.transform = `scale(${Math.min(scale, 4)})`; // Slightly less max scale for elegance
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
          MJR represents the next chapter in a multi-generational family legacy rooted in the Dominican Republic. Established in 2025, MJR expands upon a journey that began with hands-on entrepreneurship and has evolved through the transformative core of financial technology, bridging traditional roots with global innovation.
          </p>
          
          <div className="companies-section mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">companies</h2>
            <div className="investments-grid">
              <a href="https://www.youosapp.com" target="_blank" rel="noopener noreferrer" className="investment-card company-card no-underline">
                <div className="company-card-content">
                  <div className="company-title">youOS</div>
                  <div className="company-description">A minimal, intelligent system that quietly organizes your essentials.</div>
                  <div className="company-domain">www.youosapp.com</div>
                </div>
              </a>
              <a href="https://www.fangoo.do" target="_blank" rel="noopener noreferrer" className="investment-card company-card no-underline">
                <div className="company-card-content">
                  <div className="company-title">fangoo</div>
                  <div className="company-description">An e-commerce platform connecting local markets to global customers with integrated payments and shipping.</div>
                  <div className="company-domain">www.fangoo.do</div>
                </div>
              </a>
              <a href="https://www.mule.law" target="_blank" rel="noopener noreferrer" className="investment-card company-card no-underline">
                <div className="company-card-content">
                  <div className="company-title">Mulé Law</div>
                  <div className="company-description">A NYC based legal strategic partner. Pushing the limits on legal matters.</div>
                  <div className="company-domain">www.mule.law</div>
                </div>
              </a>
            </div>
          </div>

          <div className="image-container" ref={imageRef}>
            <Image
              src="/pexels-skyriusmarketing-2224861.jpg"
              alt="Futuristic financial technology landscape"
              width={800}
              height={600}
              className="dramatic-image"
            />
          </div>
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
            32nd Floor<br />
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
