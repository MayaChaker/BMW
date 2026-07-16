import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const MODELS = [
  {
    id: "m8-gran-coupe",
    shortName: "M8",
    name: "BMW M8 Gran Coupé",
    category: "Pure performance",
    image: "/assets/showcase/m8-premium.webp",
    power: "617 hp",
    acceleration: "3.0 s",
    drive: "M xDrive",
    description:
      "Motorsport character meets everyday intelligence in an icon engineered for instinctive control.",
  },
  {
    id: "i4",
    shortName: "i4",
    name: "BMW i4",
    category: "Electric dynamics",
    image: "/assets/showcase/i4-premium.webp",
    power: "536 hp",
    acceleration: "3.7 s",
    drive: "All-electric",
    description:
      "Gran Coupé elegance, immediate electric response, and quiet confidence in one progressive silhouette.",
  },
  {
    id: "x5-new",
    shortName: "X5",
    name: "BMW X5",
    category: "Elevated versatility",
    image: "/assets/showcase/x5-premium.webp",
    power: "375 hp",
    acceleration: "5.3 s",
    drive: "xDrive AWD",
    description:
      "Commanding proportions and refined capability create a luxury experience without limits.",
  },
];

const ModelSpotlight = ({ styles }) => {
  const [activeModelId, setActiveModelId] = useState(MODELS[0].id);
  const stageRef = useRef(null);
  const activeModel = MODELS.find((model) => model.id === activeModelId);

  const handlePointerMove = (event) => {
    if (!stageRef.current || event.pointerType === "touch") return;
    const bounds = stageRef.current.getBoundingClientRect();
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;
    stageRef.current.style.setProperty("--rotate-x", `${rotateX}deg`);
    stageRef.current.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const resetTilt = () => {
    stageRef.current?.style.setProperty("--rotate-x", "0deg");
    stageRef.current?.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <section
      id="model-spotlight"
      className={`${styles.spotlight} container`}
      aria-labelledby="spotlight-title"
    >
      <div className={styles.spotlightHeader}>
        <div>
          <p className={styles.sectionEyebrow}>Selected for you</p>
          <h2 id="spotlight-title">Choose your expression.</h2>
        </div>
        <p>
          Move across the vehicle to experience the dimensional showcase, then
          switch between three distinct BMW characters.
        </p>
      </div>

      <div className={styles.spotlightShell}>
        <div
          ref={stageRef}
          className={styles.modelStage}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
        >
          <div className={styles.stageGrid} aria-hidden="true" />
          <div className={styles.stageGlow} aria-hidden="true" />
          <p className={styles.stageMonogram} aria-hidden="true">
            {activeModel.shortName}
          </p>
          <img
            key={activeModel.id}
            src={activeModel.image}
            alt={`${activeModel.name} featured vehicle`}
            className={styles.modelImage}
          />
          <div className={styles.modelShadow} aria-hidden="true" />
          <span className={styles.dragHint}>Interactive 3D view</span>
        </div>

        <div className={styles.modelPanel}>
          <div className={styles.modelTabs} role="tablist" aria-label="Featured models">
            {MODELS.map((model) => (
              <button
                key={model.id}
                type="button"
                role="tab"
                aria-selected={activeModelId === model.id}
                className={activeModelId === model.id ? styles.activeTab : ""}
                onClick={() => setActiveModelId(model.id)}
              >
                {model.shortName}
              </button>
            ))}
          </div>
          <p className={styles.modelCategory}>{activeModel.category}</p>
          <h3>{activeModel.name}</h3>
          <p className={styles.modelDescription}>{activeModel.description}</p>
          <dl className={styles.modelSpecs}>
            <div><dt>Power</dt><dd>{activeModel.power}</dd></div>
            <div><dt>0–60 mph</dt><dd>{activeModel.acceleration}</dd></div>
            <div><dt>Drivetrain</dt><dd>{activeModel.drive}</dd></div>
          </dl>
          <div className={styles.modelActions}>
            <Link className="btn" to={`/cars/${activeModel.id}`}>View details</Link>
            <Link className={styles.configureLink} to={`/contact?model=${activeModel.id}`}>
              Request this model <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSpotlight;
