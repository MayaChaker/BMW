import React from "react";
import HeritageCard from "./HeritageCard";

const HeritageSection = ({ styles }) => {
  return (
    <section
      className={`${styles.heritage} container`}
      role="region"
      aria-labelledby="home-heritage-title"
    >
      <h2 id="home-heritage-title" className="section-title">
        Our Heritage
      </h2>

      <div className={styles.heritageGrid}>
        <div className={styles.heritageIntro}>
          <div className={styles.heritageFeature}>
            <div className={styles.heritageImage}>
              <img
                src="/assets/media/background.jpg"
                alt="BMW M vehicle in motion"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.heritageCopy}>
              <p>
                BMW has built premium cars and motorcycles since 1916. From
                Munich, its engineers blend performance, innovation, and design
                to shape modern mobility.
              </p>
            </div>
          </div>
        </div>

        <div
          className={styles.heritageCards}
          role="list"
          aria-label="Heritage highlights"
        >
          <HeritageCard styles={styles} title="Founders">
            <p>
              Founded in 1916 by Karl Rapp, Gustav Otto, and Franz Josef Popp.
              It started with aircraft engines and a focus on precision.
            </p>
          </HeritageCard>

          <HeritageCard styles={styles} title="Key Figures">
            <ul className={styles.legacyList}>
              <li>
                <strong>Max Friz:</strong> Built early aircraft engines and
                shaped the boxer motorcycle legacy.
              </li>
              <li>
                <strong>Eberhard von Kuenheim:</strong> Led global expansion and
                modernization (1970–1993).
              </li>
              <li>
                <strong>Paul Rosche:</strong> Key mind behind high-performance M
                powertrains.
              </li>
            </ul>
          </HeritageCard>

          <HeritageCard styles={styles} title="Journey to Excellence">
            <ul className={styles.legacyList}>
              <li>
                <strong>1930s:</strong> Entered automobiles with the BMW 328.
              </li>
              <li>
                <strong>1960s:</strong> New Class sedans set the modern BMW
                direction.
              </li>
              <li>
                <strong>Motorsport:</strong> Track wins that sharpened road cars.
              </li>
              <li>
                <strong>Future:</strong> Electric and sustainable mobility with
                the i lineup.
              </li>
            </ul>
          </HeritageCard>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
