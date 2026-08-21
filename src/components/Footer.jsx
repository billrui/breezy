import { Facebook, Instagram, MessagesSquare, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Mark } from "../assets/illustrations";
import { WA as wa } from "../constants";

export default function Footer() {
  return (
    <>
{/* footer */}
      <footer className="bz-foot">
        <div className="bz-wrap">
          <div className="bz-fgrid">
            <div className="fbrand">
              <div className="fbrand-lock">
                <Mark />
                <div className="wm2"><b>THE BREEZY</b><span className="sp"><i /> SPECIES <i /></span></div>
              </div>
              <p>Breathe green. Live breezy. Healthy plants and thoughtful landscaping across Mtwapa and the Kenyan coast.</p>
              <div className="bz-fsoc">
                <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
                <a href={wa} aria-label="WhatsApp"><MessagesSquare size={16} /></a>
              </div>
            </div>
            <div>
              <h5>Explore</h5>
              <a href="#journey">Growth journey</a>
              <a href="#services">Services</a>
              <a href="#plants">Plants</a>
              <a href="#about">About us</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h5>Services</h5>
              <a href="#services">Landscaping & design</a>
              <a href="#services">Indoor & outdoor plants</a>
              <a href="#services">Plant maintenance</a>
              <a href="#services">Supply & delivery</a>
              <a href="#services">Garden setup</a>
            </div>
            <div>
              <h5>Get in touch</h5>
              <a href="tel:0712907911"><Phone size={13} style={{ marginRight: 8, verticalAlign: -1 }} />0712 907 911</a>
              <a href="mailto:hello@breezyspecies.co.ke"><Mail size={13} style={{ marginRight: 8, verticalAlign: -1 }} />hello@breezyspecies.co.ke</a>
              <a href="#"><MapPin size={13} style={{ marginRight: 8, verticalAlign: -1 }} />Mtwapa, Kenya</a>
              <div className="bz-news">
                <input type="email" placeholder="Email for plant care tips" aria-label="Email" />
                <button aria-label="Subscribe"><ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
          <div className="bz-fbot">
            <span>© {new Date().getFullYear()} The Breezy Species. All rights reserved.</span>
            <span>Grown with care for nature lovers in Mtwapa.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
