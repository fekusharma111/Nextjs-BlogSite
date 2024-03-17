import MainSection from "@/components/mainSection/MainSection";
import styles from "./page.module.css";
import HeroSection from "@/components/heroSection/HeroSection";

export default function Home() {
  return (
    <>
      <section className="theme-bgcolor py-5">
        <HeroSection />
      </section>
      <section className="py-5 bg-white">
        <MainSection />
      </section>
    </>
    // <div className={styles.container}>

    // </div>
  );
}
