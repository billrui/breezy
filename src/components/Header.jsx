import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, MessagesSquare, Leaf, Menu, X } from "lucide-react";
import { Mark } from "../assets/illustrations";
import { WA as wa } from "../constants";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
{/* top bar */}
      <div className="bz-topbar">
        <div className="bz-wrap">
          <div className="grp">
            <a className="it" href="tel:0712907911"><Phone size={14} /> 0712 907 911</a>
            <a className="it hide-sm" href="mailto:hello@breezyspecies.co.ke"><Mail size={14} /> hello@breezyspecies.co.ke</a>
            <span className="it hide-sm"><MapPin size={14} /> Mtwapa, Kenya</span>
          </div>
          <div className="soc">
            <a href="#" aria-label="Facebook"><Facebook size={13} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={13} /></a>
            <a href={wa} aria-label="WhatsApp"><MessagesSquare size={13} /></a>
          </div>
        </div>
      </div>

      {/* nav */}
      <nav className="bz-nav">
        <div className="bz-wrap">
          <a href="#" className="bz-brand">
            <Mark />
            <div className="wm"><b>THE BREEZY</b><span className="sp"><i /> SPECIES <i /></span></div>
          </a>
          <div className="bz-links">
            <a href="#journey">Journey</a>
            <a href="#services">Services</a>
            <a href="#plants">Plants</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="bz-btn solid desk"><Leaf size={17} /> Get a quote</a>
          <button className="bz-burger" onClick={() => setMenu((m) => !m)} aria-label="Menu">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        <div className={"bz-drawer" + (menu ? " open" : "")}>
          <a href="#journey" onClick={() => setMenu(false)}>Journey</a>
          <a href="#services" onClick={() => setMenu(false)}>Services</a>
          <a href="#plants" onClick={() => setMenu(false)}>Plants</a>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
          <a href="#contact" className="bz-btn solid" onClick={() => setMenu(false)}><Leaf size={17} /> Get a quote</a>
        </div>
      </nav>
    </>
  );
}
