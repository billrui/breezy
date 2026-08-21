import React from "react";
import { ArrowRight } from "lucide-react";
import { growthArt } from "../assets/illustrations";
import { journey } from "../constants";

export default function GrowthJourney() {
  return (
    <>
{/* growth journey */}
      <section className="bz-journey" id="journey">
        <div className="bz-wrap">
          <div className="bz-head center reveal">
            <span className="bz-kick"><span className="ln" /> Grown with care</span>
            <h2 className="bz-h2">From seedbed to garden<span className="bz-chip">the journey</span></h2>
            <p className="bz-sub">Every plant we deliver has been raised through each stage — so what arrives at your space is already strong, healthy and ready to thrive.</p>
          </div>
          <div className="bz-track">
            {journey.map((s, i) => (
              <React.Fragment key={s.t}>
                <div className="bz-jstep reveal">
                  <div className="bz-jart">{growthArt[s.k]}</div>
                  <div className="jn">{s.n}</div>
                  <h4>{s.t}</h4>
                  <span className="jsub">{s.sub}</span>
                </div>
                {i < journey.length - 1 && (
                  <span className="bz-arrow"><ArrowRight size={26} /></span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
