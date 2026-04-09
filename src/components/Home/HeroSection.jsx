import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ styles }) => {
  const posterSrc =
    import.meta.env.VITE_HERO_POSTER_URL ??
    "/assets/media/videoframe_9882.webp";
  const videoSrc =
    import.meta.env.VITE_HERO_VIDEO_URL ?? "/assets/media/hero.mp4";

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
        preload="auto"
        poster={posterSrc}
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
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
