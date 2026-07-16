import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BMW_CARS } from "../data/bmwCars";
import "../styles/studio.css";

const COLORS = [
  { name: "Carbon Black", value: "#101820", rgb: [0.063, 0.094, 0.125] },
  { name: "Portimao Blue", value: "#145a9c", rgb: [0.078, 0.353, 0.612] },
  { name: "Toronto Red", value: "#a6192e", rgb: [0.651, 0.098, 0.18] },
  { name: "Frozen Silver", value: "#b8bdc3", rgb: [0.722, 0.741, 0.765] },
];

const SKETCHFAB_UID = "4e5b1490982c411c82e05c54e5e4efd1";
const NON_PAINT_MATERIAL = /glass|window|tire|tyre|wheel|rim|light|lamp|interior|seat|brake|chrome|rubber|number|plate/i;

const parsePrice = (price) => Number(price.replace(/[^0-9]/g, "")) || 0;
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const ExperienceStudio = () => {
  const [searchParams] = useSearchParams();
  const initialId = searchParams.get("model");
  const initialModel = BMW_CARS.find((car) => car.id === initialId) ?? BMW_CARS[0];
  const [modelId, setModelId] = useState(initialModel.id);
  const [color, setColor] = useState(COLORS[1]);
  const [rotation, setRotation] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [downPayment, setDownPayment] = useState(20);
  const [term, setTerm] = useState(60);
  const [apr, setApr] = useState(5.9);
  const viewerFrameRef = useRef(null);
  const viewerApiRef = useRef(null);
  const paintMaterialsRef = useRef([]);
  const cameraRef = useRef({ radius: 7, height: 2.1, target: [0, 0.7, 0] });
  const [viewerReady, setViewerReady] = useState(false);

  const car = BMW_CARS.find((item) => item.id === modelId) ?? BMW_CARS[0];
  const price = parsePrice(car.price);

  useEffect(() => {
    let cancelled = false;
    const connectViewer = () => {
      if (cancelled || !window.Sketchfab || !viewerFrameRef.current) return;
      const client = new window.Sketchfab("1.12.1", viewerFrameRef.current);
      client.init(SKETCHFAB_UID, {
        autostart: 1,
        preload: 1,
        transparent: 1,
        ui_controls: 0,
        ui_infos: 0,
        ui_watermark: 0,
        success(api) {
          viewerApiRef.current = api;
          api.start();
          api.addEventListener("viewerready", () => {
            if (cancelled) return;
            api.getMaterialList((error, materials) => {
              if (error || !materials) return;
              const namedPaint = materials.filter((material) => /paint|body|bodywork|carrosserie|exterior/i.test(material.name));
              const likelyPaint = materials.filter((material) => !NON_PAINT_MATERIAL.test(material.name));
              paintMaterialsRef.current = namedPaint.length ? namedPaint : likelyPaint.slice(0, 1);
              setViewerReady(true);
            });
          });
        },
      });
    };

    if (window.Sketchfab) connectViewer();
    else {
      const script = document.createElement("script");
      script.src = "https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js";
      script.async = true;
      script.onload = connectViewer;
      document.head.appendChild(script);
    }
    return () => { cancelled = true; viewerApiRef.current = null; };
  }, []);

  useEffect(() => {
    if (!viewerReady || !viewerApiRef.current) return;
    paintMaterialsRef.current.forEach((material) => {
      viewerApiRef.current.setMaterial({
        ...material,
        channels: {
          ...material.channels,
          AlbedoPBR: {
            ...material.channels.AlbedoPBR,
            color: color.rgb,
            enable: true,
          },
        },
      });
    });
  }, [color, viewerReady]);

  const setCameraAngle = (angle, duration = 0.7) => {
    const api = viewerApiRef.current;
    if (!api) return;
    const radians = (angle * Math.PI) / 180;
    const { radius, height, target } = cameraRef.current;
    api.setCameraLookAt(
      [target[0] + Math.sin(radians) * radius, height, target[2] + Math.cos(radians) * radius],
      target,
      duration,
    );
    setRotation(((angle % 360) + 360) % 360);
  };

  useEffect(() => {
    if (!isAutoRotating || !viewerReady) return undefined;
    const timer = window.setInterval(() => {
      setRotation((current) => {
        const next = (current + 3) % 360;
        const radians = (next * Math.PI) / 180;
        const { radius, height, target } = cameraRef.current;
        viewerApiRef.current?.setCameraLookAt(
          [target[0] + Math.sin(radians) * radius, height, target[2] + Math.cos(radians) * radius],
          target,
          0.12,
        );
        return next;
      });
    }, 120);
    return () => window.clearInterval(timer);
  }, [isAutoRotating, viewerReady]);

  const finance = useMemo(() => {
    const down = price * (downPayment / 100);
    const principal = Math.max(price - down, 0);
    const rate = apr / 100 / 12;
    const monthly = rate === 0
      ? principal / term
      : (principal * rate * (1 + rate) ** term) / ((1 + rate) ** term - 1);
    return { down, principal, monthly, total: down + monthly * term };
  }, [apr, downPayment, price, term]);

  return (
    <main className="studio-page">
      <header className="studio-header container">
        <div>
          <p>Interactive ownership studio</p>
          <h1>See it. Shape it. Plan it.</h1>
        </div>
        <span>Explore your preferred model and build a realistic monthly estimate in one place.</span>
      </header>

      <section className="viewer-section container" aria-labelledby="viewer-title">
        <div className="viewer-toolbar">
          <div><span>01</span><h2 id="viewer-title">360° Viewer</h2></div>
          <div className="viewer-toolbar-actions">
            <button
              type="button"
              className={isAutoRotating ? "auto-rotate active" : "auto-rotate"}
              onClick={() => setIsAutoRotating((current) => !current)}
              aria-pressed={isAutoRotating}
            >
              <i aria-hidden="true" /> {isAutoRotating ? "Pause rotation" : "Auto rotate"}
            </button>
            <label>
              <span>Planning model</span>
              <select value={modelId} onChange={(event) => setModelId(event.target.value)}>
                {BMW_CARS.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
              </select>
            </label>
          </div>
        </div>

        <div className={viewerReady ? "turntable viewer-ready" : "turntable"}>
          <div className="turntable-orbit" style={{ transform: `rotate(${rotation}deg)` }} />
          <div className="studio-light studio-light-left" aria-hidden="true" />
          <div className="studio-light studio-light-right" aria-hidden="true" />
          <img className="viewer-fallback"
            src={car.imageSrc}
            alt={`${car.name} in ${color.name}`}
            draggable="false"
          />
          <iframe
            ref={viewerFrameRef}
            className="real-3d-viewer"
            title="Interactive BMW 3D viewer"
            allow="autoplay; fullscreen; xr-spatial-tracking"
          />
          <div className="turntable-copy"><span>{car.type}</span><strong>{car.name}</strong></div>
          <div className="vehicle-hud">
            <div><span>Exterior</span><strong>{color.name}</strong></div>
            <div><span>From</span><strong>{money.format(price)}</strong></div>
            <div><span>View</span><strong>{Math.round(rotation)}°</strong></div>
          </div>
          <span className="drag-label"><i aria-hidden="true">↔</i> Drag to rotate</span>
          <a className="viewer-credit" href="https://sketchfab.com/3d-models/bmw-4e5b1490982c411c82e05c54e5e4efd1" target="_blank" rel="noreferrer">3D model · g0rra · CC BY</a>
        </div>

        <div className="viewer-controls">
          <div className="angle-control">
            <span>Viewing angle</span>
            <div>
              {[{ label: "Front", angle: 0 }, { label: "Quarter", angle: 45 }, { label: "Side", angle: 90 }, { label: "Rear", angle: 180 }].map((view) => (
                <button
                  key={view.label}
                  type="button"
                  className={Math.abs(rotation - view.angle) < 3 ? "active" : ""}
                  onClick={() => { setCameraAngle(view.angle); setIsAutoRotating(false); }}
                >
                  {view.label}
                </button>
              ))}
            </div>
          </div>
          <label className="rotation-control">
            <span>Fine rotation <output>{Math.round(rotation)}°</output></span>
            <input type="range" min="0" max="359" value={rotation} onChange={(event) => { setCameraAngle(Number(event.target.value), 0.08); setIsAutoRotating(false); }} />
          </label>
          <fieldset className="color-control">
            <legend>Exterior colour</legend>
            <div>
              {COLORS.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className={color.name === item.name ? "active" : ""}
                  aria-label={item.name}
                  aria-pressed={color.name === item.name}
                  style={{ "--swatch": item.value }}
                  onClick={() => setColor(item)}
                />
              ))}
            </div>
            <output>{color.name}</output>
          </fieldset>
        </div>
      </section>

      <section className="budget-section container" aria-labelledby="budget-title">
        <div className="budget-intro">
          <p>02 · Smart planning</p>
          <h2 id="budget-title">Build your monthly estimate.</h2>
          <span>Adjust the terms to understand how your preferred model can fit your budget.</span>
        </div>
        <div className="budget-card">
          <div className="budget-inputs">
            <label><span>Vehicle price</span><strong>{money.format(price)}</strong></label>
            <label><span>Down payment <output>{downPayment}%</output></span><input type="range" min="0" max="60" step="5" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} /></label>
            <label><span>Finance term</span><select value={term} onChange={(e) => setTerm(Number(e.target.value))}><option value="36">36 months</option><option value="48">48 months</option><option value="60">60 months</option><option value="72">72 months</option></select></label>
            <label><span>Estimated APR</span><div className="apr-field"><input type="number" min="0" max="20" step="0.1" value={apr} onChange={(e) => setApr(Number(e.target.value))} /><i>%</i></div></label>
          </div>
          <div className="budget-result">
            <p>Estimated payment</p>
            <strong>{money.format(finance.monthly)}<small>/month</small></strong>
            <dl>
              <div><dt>Down payment</dt><dd>{money.format(finance.down)}</dd></div>
              <div><dt>Amount financed</dt><dd>{money.format(finance.principal)}</dd></div>
              <div><dt>Estimated total</dt><dd>{money.format(finance.total)}</dd></div>
            </dl>
            <Link className="btn" to={`/contact?model=${car.id}`}>Request a personal quote</Link>
            <small>Illustrative estimate only. Taxes, fees, insurance, and final lender terms are not included.</small>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExperienceStudio;
