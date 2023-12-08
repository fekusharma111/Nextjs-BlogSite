import MainSection from "@/components/mainSection/MainSection";
import  "./page.css";
import HeroSection from "@/components/heroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MainSection />
    </div>
  );
}
