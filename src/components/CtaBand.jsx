import { Phone, MessagesSquare, Mail } from "lucide-react";
import { BgLeaf } from "../assets/illustrations";
import { WA as wa } from "../constants";

export default function CtaBand() {
  return (
    <>
{/* cta band */}
      <section className="bz-sec" id="contact" style={{ paddingTop: 0 }}>
        <div className="bz-wrap">
          <div className="bz-band reveal">
            <BgLeaf className="leaf-bg" />
            <h3>Let's make your world a greener place.</h3>
            <div className="acts">
              <a href="tel:0712907911" className="bz-btn solid"><Phone size={18} /> Call us</a>
              <a href={wa} className="bz-btn ghost" style={{ background: "#fff" }}><MessagesSquare size={18} /> WhatsApp</a>
              <a href="mailto:hello@breezyspecies.co.ke" className="bz-btn ghost" style={{ background: "#fff" }}><Mail size={18} /> Request a quote</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
