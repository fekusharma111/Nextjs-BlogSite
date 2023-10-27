import MainSection from "@/components/mainSection/MainSection";
import styles from "./page.module.css";
import HeroSection from "@/components/heroSection/HeroSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <MainSection />
    </div>
  );
}
