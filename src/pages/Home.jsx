import React from "react";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/Home/HeroSection";
import ModelSpotlight from "../components/Home/ModelSpotlight";
import HeritageSection from "../components/Home/HeritageSection";
import HighlightsSection from "../components/Home/HighlightsSection";

const Home = () => {
  return (
    <main>
      <HeroSection styles={styles} />
      <ModelSpotlight styles={styles} />
      <HeritageSection styles={styles} />
      <HighlightsSection styles={styles} />
    </main>
  );
};

export default Home;
