import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ styles }) => {
  const videoRef = useRef(null);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);

  const posterSrc = useMemo(() => {
    return (
      import.meta.env.VITE_HERO_POSTER_URL ??
      "/assets/media/videoframe_9882.webp"
    );
  }, []);

  const videoSrc = useMemo(() => {
    return import.meta.env.VITE_HERO_VIDEO_URL ?? "/assets/media/hero.mp4";
  }, []);

  const handleEnableVideo = useCallback(() => {
    setIsVideoEnabled(true);
  }, []);

  useEffect(() => {
    if (!isVideoEnabled) return;
    if (!videoRef.current) return;

    const timer = window.setTimeout(() => {
      videoRef.current?.play()?.catch(() => {});
    }, 0);

    return () => window.clearTimeout(timer);
  }, [isVideoEnabled]);

  return (
    <section
      className={styles.hero}
      role="region"
      aria-labelledby="home-hero-title"
    >
      <video
        ref={videoRef}
        className={styles.heroVideo}
        autoPlay={isVideoEnabled}
        muted
        loop
        playsInline
        preload="none"
        poster={posterSrc}
        aria-hidden="true"
      >
        {isVideoEnabled ? <source src={videoSrc} type="video/mp4" /> : null}
      </video>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 id="home-hero-title">Luxury Drive Studio</h1>
        <p className={styles.heroDescription}>
          Explore curated models, compare highlights, and contact our concierge
          in seconds.
        </p>
        {!isVideoEnabled ? (
          <button
            type="button"
            className={styles.heroPlayButton}
            onClick={handleEnableVideo}
          >
            Play Video
          </button>
        ) : null}
        <Link to="/cars" className="btn">
          Discover Models
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
