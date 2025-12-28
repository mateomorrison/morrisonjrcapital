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
            Morrison Jr. Group was founded in 2025 as the synthesis of a unique journey—one that began with hands-on entrepreneurship and evolved through the core of global financial technology infrastructure.
          </p>
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
