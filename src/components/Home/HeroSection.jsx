import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ styles }) => {
  return (
    <section
      className={styles.hero}
      role="region"
      aria-labelledby="home-hero-title"
    >
      <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/media/videoframe_9882.png"
        aria-hidden="true"
      >
        <source src="/assets/media/hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 id="home-hero-title">Luxury Drive Studio</h1>
        <p className={styles.heroDescription}>
          Explore curated models, compare highlights, and contact our concierge
          in seconds.
        </p>
        <Link to="/cars" className="btn">
          Discover Models
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
