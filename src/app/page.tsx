export default function Home() {
  return (
    <div>
      <p>Morrison Jr. Capital</p>
      <p>Morrison Jr. Capital is a private investment firm focused on technology.

Drawing on a family legacy of over a century, the firm invests at the intersection of artificial intelligence, quantitative finance, and cybersecurity.</p>
      
      <p>Active Investments:</p>
      <ul className="list-disc pl-6">
        <li>
          <p>youOS: a personal AI sanctuary for clarity, gentle growth, and human agency</p>
        </li>
        <li>
          <p>Fangoo: a ecommerce platform for emerging markets</p>
        </li>
        <li>
          <p>Quantris Global: an AI consulting firm for mid to large enterprise</p>
        </li>
        <li>
          <p>Graphvote: a tool for politicians and governments to monitor digital engagement</p>
        </li>
      </ul>
      <hr />
      <p>
        <a
          href="mailto:contact@morrisonjrgroup.com"
          className="underline text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        >
          contact@morrisonjrgroup.com
        </a>
        {" | "}
        <a
          href="https://www.instagram.com/morrisonjrcapital/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        >
          Instagram
        </a>
      </p>
    </div>
  );
}
