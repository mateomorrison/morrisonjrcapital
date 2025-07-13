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
      </div>
      <h1>Morrison Jr. Capital</h1>
      <main>
        <p className="mb-5 text-[1.1em]">
          Morrison Jr. Capital was founded by <strong className="font-semibold">Mateo Morrison Jr.</strong> to be the synthesis of a unique journey—one that began with hands-on entrepreneurship and progressed through the core of the global financial technology infrastructure.
        </p>
        <p className="mb-5 text-[1.1em]">
          The journey began in the Dominican Republic, where early entrepreneurial experience instilled a foundational belief in applying technology to solve complex, real-world business problems. This path led to developing deep technical expertise inside elite global investment firms, with a focus on the sophisticated systems that power modern finance.
        </p>
        <p className="mb-5 text-[1.1em]">
          Morrison Jr. Capital is the culmination of this experience. It is a private firm that channels this blend of entrepreneurial grit and deep institutional knowledge into its own <strong className="font-semibold">proprietary investments</strong>. Guided by a 100-year family legacy and a forward-looking perspective, the firm invests with high conviction at the intersection of <strong className="font-semibold">artificial intelligence, quantitative systems, and cybersecurity</strong>.
        </p>
      </main>

      <hr className="my-10 border-t border-gray-700" />

      
      <h2>Active Investments</h2>
      <div className="investments-grid">
        <a
          href="https://youos-personalai.vercel.app/"
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

    </div>
  );
}
