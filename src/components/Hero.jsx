import { ArrowRight, MessagesSquare, Leaf, Truck } from "lucide-react";
import { BgLeaf } from "../assets/illustrations";
import Showcase from "./Showcase";
import { featured, WA as wa } from "../constants";

export default function Hero() {
  return (
    <>
{/* hero */}
      <header className="bz-hero">
        <BgLeaf className="bz-bg-leaf l1" />
        <BgLeaf className="bz-bg-leaf l2" />
        <div className="bz-wrap">
          <div>
            <span className="bz-eyebrow"><span className="dot" /> Breathe green · Live breezy</span>
            <h1>Bring nature<br />to your <em>space</em>.</h1>
            <p className="lead">Healthy plants, expert landscaping and green spaces that inspire — grown and cared for on the Kenyan coast.</p>
            <div className="cta-row">
              <a href="#services" className="bz-btn solid">Explore our services <ArrowRight size={18} /></a>
              <a href={wa} className="bz-btn ghost"><MessagesSquare size={18} /> Order on WhatsApp</a>
            </div>
            <div className="bz-trust">
              <div className="t"><span className="num">10+</span> years growing</div>
              <div className="t"><Leaf size={18} /> Healthy, nurtured plants</div>
              <div className="t"><Truck size={18} /> Delivery across Mtwapa</div>
            </div>
          </div>
          <Showcase items={featured} />
        </div>
      </header>
    </>
  );
}
