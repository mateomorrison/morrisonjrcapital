import Image from "next/image";

export default function Home() {
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
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-5 text-[1.1em]">
            Morrison Jr. Capital was founded in 2025 as the synthesis of a unique journey—one that began with hands-on entrepreneurship and evolved through the core of global financial technology infrastructure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
          <p className="mb-5 text-[1.1em]">
            The journey traces its roots to Spain and Jamaica, with early family heritage in the 1920s, and truly began in the Dominican Republic, where formative entrepreneurial experience instilled a foundational belief in applying technology to solve complex, real-world business problems. This path has since continued across the United States, with main operations now based in New York. Along the way, deep technical expertise was developed inside elite global investment firms, with a focus on the sophisticated systems that power modern finance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Investment Focus</h2>
          <p className="mb-5 text-[1.1em]">
            Morrison Jr. Capital represents the culmination of this distinctive journey, combining entrepreneurial drive with deep institutional expertise. As a private firm, we leverage this blend of experience to pursue our own <strong className="font-semibold">proprietary investments</strong>. Guided by a century-long family legacy and a forward-thinking approach, Morrison Jr. Capital invests with conviction at the intersection of <strong className="font-semibold">artificial intelligence, quantitative systems, and cybersecurity</strong>. <br /><br /> While we are actively engaged in building businesses, this does not imply that we are currently making investments.
          </p>
        </section>
      </main>

      <hr className="my-10 border-t border-gray-700" />

      
      <h2>Portfolio</h2>
      <div className="investments-grid">
        <a
          href="https://youosapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="investment-card block hover:shadow-lg transition-shadow duration-200 cursor-pointer no-underline bg-black text-white p-6 rounded-lg border border-gray-800"
        >
          <div className="investment-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 text-white">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            <h3>youOS</h3>
          </div>
          <div className="description">
            youOS is your all-in-one life platform. Track your entire life, no matter how complex, in one unified experience. Go beyond ChatGPT or Grok-style chatting: youOS helps you take real, actionable steps across every area of your life, all in one place.
            <br />
          </div>
          <div className="investment-actions">
            <span className="visit-website-btn bg-white text-black px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2">
              Visit Website
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10"/>
                <path d="M7 17 17 7"/>
              </svg>
            </span>
          </div>
        </a>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-700">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-400">
            Morrison Jr. Group, LLC dBa Morrison Jr. Capital
          </p>
          <p className="text-sm text-gray-400 mt-1">
            © 2025 All rights reserved
          </p>
        </div>
        <div className="text-xs text-gray-500 text-center">
          <p>
            The information provided on this website does not constitute an offer to, or solicitation of, any potential clients or investors for the provision by Morrison Jr. Capital of investment management, advisory, or any other related services. No material on this website is, or should be construed as, investment advice. Nothing on this website constitutes an offer to sell, or a solicitation of an offer to buy, any security or other financial instrument.
          </p>
        </div>
      </footer>

    </div>
  );
}
