import { ArrowUpRight } from "lucide-react";
import { plantArt } from "../assets/illustrations";
import { plantGroups, WA as wa } from "../constants";

export default function Plants() {
  return (
    <>
{/* plants */}
      <section className="bz-sec tint" id="plants">
        <div className="bz-wrap">
          <div className="bz-head center reveal">
            <span className="bz-kick"><span className="ln" /> Our plants</span>
            <h2 className="bz-h2">The right plant for the right spot.</h2>
            <p className="bz-sub">Browse the collection by type. Every plant is tagged with where it grows best — indoors, in the garden, along a driveway or by the pool.</p>
          </div>

          {plantGroups.map((g) => (
            <div className="pl-group reveal" key={g.id}>
              <div className="pl-ghead">
                <h3>{g.title} <span className="cnt">· {g.items.length}</span></h3>
                <p>{g.note}</p>
              </div>
              <div className="pl-grid">
                {g.items.map((pl) => (
                  <div className="pl-card bz-tilt" key={pl.slug}>
                    <div className="pl-photo">
                      <div className="pl-ph">{plantArt[pl.type]}</div>
                      <img
                        src={import.meta.env.BASE_URL + "plants/" + pl.slug + ".jpg"}
                        alt={pl.name}
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                      <span className="pl-badge">{g.title}</span>
                    </div>
                    <div className="pl-body">
                      <h4>{pl.name}</h4>
                      <div className="pl-bot">{pl.bot}</div>
                      <div className="pl-tags">
                        {pl.where.map((w) => <span className="pl-tag" key={w}>{w}</span>)}
                        {pl.cond.map((c) => <span className="pl-cond" key={c}>{c}</span>)}
                      </div>
                      <p>{pl.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bz-viewall">
            <a href={wa} className="bz-btn lime">Ask about a plant on WhatsApp <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>
    </>
  );
}
