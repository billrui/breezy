import { steps } from "../constants";

export default function Process() {
  return (
    <>
{/* process */}
      <section className="bz-sec dark" id="process">
        <div className="bz-wrap">
          <div className="bz-head reveal">
            <span className="bz-kick"><span className="ln" /> How we work</span>
            <h2 className="bz-h2">Three simple steps to a greener space.</h2>
          </div>
          <div className="bz-steps">
            {steps.map((s) => (
              <div className="bz-step reveal" key={s.n}>
                <div className="n">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
