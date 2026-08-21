import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Trees } from "lucide-react";
import { SHOW_ICON } from "../utils/icons";

export default function Showcase({ items }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;
  const go = (d) => setI((p) => (p + d + n) % n);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 4400);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <div className="bz-show" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="bz-show-track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {items.map((it) => {
          const Ic = SHOW_ICON[it.icon] || Trees;
          return (
            <div className="bz-slide" key={it.slug}>
              <img src={import.meta.env.BASE_URL + "plants/" + it.slug + ".jpg"} alt={it.name}
                   onError={(e) => { e.currentTarget.style.opacity = 0; }} />
              <div className="bz-slide-grad" />
              <div className="bz-slide-body">
                <span className="bz-place"><Ic size={14} /> {it.cat}</span>
                <h3>{it.name}</h3>
                {it.bot && <div className="bot">{it.bot}</div>}
                <p>{it.tag}</p>
              </div>
            </div>
          );
        })}
      </div>
      <span className="bz-show-frame" />
      <button className="bz-show-btn prev" onClick={() => go(-1)} aria-label="Previous plant"><ChevronLeft size={22} /></button>
      <button className="bz-show-btn next" onClick={() => go(1)} aria-label="Next plant"><ChevronRight size={22} /></button>
      <div className="bz-dots">
        {items.map((_, d) => (
          <button key={d} className={"bz-dot" + (d === i ? " on" : "")} onClick={() => setI(d)} aria-label={"Go to slide " + (d + 1)} />
        ))}
      </div>
    </div>
  );
}
