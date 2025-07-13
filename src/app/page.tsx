export default function Home() {
  return (
    <div>
      <div className="logo-container">
        <img 
          src="/logo.jpg" 
          alt="Morrison Jr. Capital Logo" 
          className="logo"
        />
      </div>
      <h1>Morrison Jr. Capital</h1>
      <p>Morrison Jr. Capital is a private investment firm focused on technology.

Drawing on a family legacy of over a century, the firm invests at the intersection of artificial intelligence, quantitative finance, and cybersecurity.</p>
      
      <h2>Active Investments</h2>
      <div className="investments-grid">
        <div className="investment-card">
          <h3>youOS</h3>
          <p className="description">A personal AI sanctuary for clarity, gentle growth, and human agency</p>
          <div className="metrics">
            <div className="metric">
              <span className="label">Revenue:</span>
              <span className="value">$ N/A</span>
            </div>
            <div className="metric">
              <span className="label">Valuation:</span>
              <span className="value">$ N/A</span>
            </div>
            <div className="metric">
              <span className="label">Stage:</span>
              <span className="value">Pre-seed</span>
            </div>
          </div>
        </div>

        <div className="investment-card">
          <h3>fangoo</h3>
          <p className="description">A ecommerce platform for emerging markets</p>
          <div className="metrics">
            <div className="metric">
              <span className="label">Revenue:</span>
              <span className="value">$ N/A</span>
            </div>
            <div className="metric">
              <span className="label">Valuation:</span>
              <span className="value">$ N/A</span>
            </div>
            <div className="metric">
              <span className="label">Stage:</span>
              <span className="value">Pre-seed</span>
            </div>
          </div>
        </div>

        <div className="investment-card">
          <h3>Quantris Global</h3>
          <p className="description">An AI consulting firm for mid to large enterprise</p>
          <div className="metrics">
            <div className="metric">
              <span className="label">Revenue:</span>
              <span className="value">$ N/A</span>
            </div>
            <div className="metric">
              <span className="label">Valuation:</span>
              <span className="value">$ N/A</span>
            </div>
            <div className="metric">
              <span className="label">Stage:</span>
              <span className="value">Pre-seed</span>
            </div>
          </div>
        </div>

        <div className="investment-card">
          <h3>Graphvote</h3>
          <p className="description">A tool for politicians and governments to monitor digital engagement</p>
          <div className="metrics">
            <div className="metric">
              <span className="label">Revenue:</span>
              <span className="value">$ N/A</span>
            </div>
            <div className="metric">
              <span className="label">Valuation:</span>
              <span className="value">$ N/A</span>
            </div>
            <div className="metric">
              <span className="label">Stage:</span>
              <span className="value">Pre-seed</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p>
        <a
          href="mailto:contact@morrisonjrgroup.com"
          className="underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        >
          contact@morrisonjrgroup.com
        </a>
        {" | "}
        <a
          href="https://www.instagram.com/morrisonjrcapital/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        >
          Instagram
        </a>
      </p>
    </div>
  );
}
