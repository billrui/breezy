import { BgLeaf } from "../assets/illustrations";
import { values } from "../constants";

export default function About() {
  return (
    <>
{/* about */}
      <section className="bz-sec" id="about">
        <div className="bz-wrap">
          <div className="bz-about">
            <div className="bz-statcard reveal">
              <BgLeaf className="leaf-bg" />
              <div className="big">10+</div>
              <div className="cap">Years turning bare ground into gardens.</div>
              <div className="qt">"Plants do more than decorate — they change how a space feels, and how you feel in it. Let us make your world a greener place."</div>
              <div className="who">
                <div className="av">BB</div>
                <div>
                  <b>Bonnie Breezy</b>
                  <span>Managing Director & CEO</span>
                </div>
              </div>
            </div>
            <div className="reveal">
              <span className="bz-kick"><span className="ln" /> About us</span>
              <h2 className="bz-h2">We create green spaces you'll love.</h2>
              <p className="bz-sub">The Breezy Species is a Mtwapa-based landscaping and plant company. We're passionate about greenery and obsessive about healthy, well-nurtured plants — because a garden is only as good as the plants it's built from.</p>
              <div className="bz-vals">
                {values.map((v) => (
                  <div className="bz-val" key={v.t}>
                    <div className="vi"><v.icon size={22} /></div>
                    <div>
                      <h4>{v.t}</h4>
                      <p>{v.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
