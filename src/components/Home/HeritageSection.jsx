import React from "react";

const milestones = [
  { year: "1916", label: "A culture of precision begins in Munich." },
  { year: "1936", label: "The BMW 328 defines sporting elegance." },
  { year: "1972", label: "BMW M turns competition into road-going emotion." },
  { year: "Today", label: "Electric performance opens the next chapter." },
];

const HeritageSection = ({ styles }) => {
  return (
    <section
      className={styles.heritage}
      role="region"
      aria-labelledby="home-heritage-title"
    >
      <div className={`${styles.heritageHeader} container`}>
        <div>
          <p className={styles.sectionEyebrow}>A century in motion</p>
          <h2 id="home-heritage-title">Legacy, without looking back.</h2>
        </div>
        <div className={styles.heritageIntroCopy}>
          <span>1916—Today</span>
          <p>Since 1916, BMW has transformed engineering discipline into a deeply human driving experience. Every generation moves the idea forward.</p>
        </div>
      </div>

      <div className={`${styles.heritageShowcase} container`}>
        <div className={styles.heritageVisual}>
          <img
            src="/assets/showcase/x5-premium.webp"
            alt="Luxury performance SUV framed by modern alpine architecture"
            loading="lazy"
            decoding="async"
          />
          <div className={styles.heritageCaption}>
            <span>Munich · Germany</span>
            <strong>Precision becomes emotion.</strong>
          </div>
        </div>

        <ol className={styles.heritageTimeline} aria-label="BMW milestones">
          {milestones.map((milestone) => (
            <li key={milestone.year}>
              <span>{milestone.year}</span>
              <p>{milestone.label}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HeritageSection;
