import FAQ from "@/components/landing-page/faq/faq";
import Features from "@/components/landing-page/features/features";
import Footer from "@/components/landing-page/footer/footer";
import Hero from "@/components/landing-page/hero/hero";
import HowItWorks from "@/components/landing-page/how-it-works/how-it-works";
import CourseCTA from "@/components/landing-page/course-cta/course-cta";
import Navbar from "@/components/landing-page/navbar/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CourseCTA />
      <FAQ />
      <Footer />
    </>
  );
}
