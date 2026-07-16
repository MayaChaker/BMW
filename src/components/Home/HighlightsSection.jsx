import React from "react";
import HighlightCard from "./HighlightCard";

const HighlightsSection = ({ styles }) => {
  const highlightItems = [
    {
      number: "01",
      title: "Performance",
      description:
        "Power that feels immediate, balanced, and completely composed.",
    },
    {
      number: "02",
      title: "Craftsmanship",
      description:
        "Materials, proportion, and detail resolved with quiet confidence.",
    },
    {
      number: "03",
      title: "Technology",
      description:
        "Intelligent systems that stay intuitive, connected, and human.",
    },
  ];

  return (
    <section
      className={`${styles.highlights} container`}
      role="region"
      aria-labelledby="home-highlights-title"
    >
      <div className={styles.highlightsHeader}>
        <div>
          <p className={styles.sectionEyebrow}>The BMW character</p>
          <h2 id="home-highlights-title">Engineered around feeling.</h2>
        </div>
        <p>Three principles shape every detail—from the first line drawn to the final mile driven.</p>
      </div>
      <div className={styles.characterManifesto}>
        <img src="/assets/media/background.webp" alt="BMW signature headlights emerging from darkness" loading="lazy" decoding="async" />
        <div className={styles.characterQuote}>
          <span>Designed to be felt</span>
          <p>“True luxury is not added. It is resolved.”</p>
        </div>
      </div>
      <div
        className={styles.highlightsGrid}
        role="list"
        aria-label="BMW highlights"
      >
        {highlightItems.map((item) => (
          <HighlightCard
            key={item.title}
            styles={styles}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
