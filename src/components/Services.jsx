import { services } from "../constants";

export default function Services() {
  return (
    <>
{/* services */}
      <section className="bz-sec" id="services">
        <div className="bz-wrap">
          <div className="bz-head reveal">
            <span className="bz-kick"><span className="ln" /> What we do</span>
            <h2 className="bz-h2">Everything your garden needs, in one place.</h2>
            <p className="bz-sub">From a single potted palm to a full landscape, we handle the plants, the planting and the keeping-alive.</p>
          </div>
          <div className="bz-serv">
            {services.map((s, i) => (
              <div className="bz-card bz-tilt reveal" key={s.t}>
                <span className="idx">0{i + 1}</span>
                <div className="ic"><s.icon size={26} /></div>
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
