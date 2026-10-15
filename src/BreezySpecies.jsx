import React, { useState, useEffect } from "react";
import { Phone, MapPin, Instagram, Facebook, ArrowRight, ArrowUpRight, Sprout, Trees, Scissors, Truck, Shovel, MessagesSquare, ShieldCheck, Coins, Leaf, Menu, X, Car, Home, ChevronLeft, ChevronRight } from "lucide-react";

/* ============================================================
   THE BREEZY SPECIES — landscaping & plant nursery, Mtwapa, KE
   Palette: canopy / forest / moss / fern / sprout / paper / brass
   Type: Fraunces (display) + Instrument Sans (body)
   Signature: layered swaying botanical canopy + illustrated
   "seedbed to garden" growth journey, on frosted glass with a
   soft 3D tilt.
   ============================================================ */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Instrument+Sans:wght@400;500;600&display=swap');

:root{
  --canopy:#0E2618;
  --forest:#1C4E30;
  --moss:#2F6B41;
  --fern:#5C9463;
  --sprout:#A9D95C;
  --lime:#CDE8A0;
  --paper:#F1F6EC;
  --cream:#FBFAF2;
  --sage:#E1EAD3;
  --bark:#5E6A50;
  --brass:#C9A24B;
  --line:#D9E2CC;
}

.bz *{margin:0;padding:0;box-sizing:border-box}
.bz{
  font-family:'Instrument Sans',system-ui,sans-serif;
  background:
    radial-gradient(1100px 500px at 82% -8%, #E4EFD6 0%, rgba(228,239,214,0) 60%),
    radial-gradient(900px 480px at -6% 22%, #E9F2DC 0%, rgba(233,242,220,0) 55%),
    var(--paper);
  color:var(--canopy);
  line-height:1.55;
  -webkit-font-smoothing:antialiased;
}
.bz img{max-width:100%;display:block}
.bz a{text-decoration:none;color:inherit}
.bz-serif{font-family:'Fraunces',Georgia,serif}
.bz-wrap{max-width:1200px;margin:0 auto;padding:0 24px}

/* soft 3D tilt on hover */
.bz-tilt{transition:transform .4s cubic-bezier(.15,.9,.25,1.12),box-shadow .4s ease,border-color .3s ease;transform-style:preserve-3d;will-change:transform}

/* ---------- top bar ---------- */
.bz-topbar{background:transparent;color:#DCE7D2;font-size:13px;position:relative;z-index:101}
.bz-topbar .bz-wrap{display:flex;align-items:center;justify-content:space-between;height:40px;gap:16px}
.bz-topbar .grp{display:flex;align-items:center;gap:22px;flex-wrap:wrap}
.bz-topbar .it{display:flex;align-items:center;gap:7px;color:#C7D6BA}
.bz-topbar .it svg{color:var(--sprout)}
.bz-topbar a.it:hover{color:#fff}
.bz-topbar .soc{display:flex;gap:12px}
.bz-topbar .soc a{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#ffffff14;color:#DCE7D2;transition:.2s}
.bz-topbar .soc a:hover{background:var(--sprout);color:var(--canopy)}
@media(max-width:760px){.bz-topbar .hide-sm{display:none}}

/* ---------- nav (frosted glass) ---------- */
.bz-nav{position:sticky;top:0;z-index:100;background:#F6FAF1;border-bottom:1px solid var(--line);box-shadow:0 8px 24px -20px rgba(14,38,24,.5)}
.bz-nav .bz-wrap{display:flex;align-items:center;justify-content:space-between;height:76px;gap:20px}
.bz-brand{display:flex;align-items:center;gap:12px}
.bz-mark{width:46px;height:46px;flex:none;filter:drop-shadow(0 8px 16px rgba(14,38,24,.4))}
.bz-brand .wm{line-height:1.05}
.bz-brand .wm b{font-family:'Fraunces',serif;font-weight:600;font-size:20px;letter-spacing:.16em;color:var(--forest);display:block}
.bz-brand .wm .sp{display:inline-flex;align-items:center;gap:7px;margin-top:3px;font-size:10px;font-weight:600;letter-spacing:.34em;text-transform:uppercase;color:var(--brass)}
.bz-brand .wm .sp i{display:block;height:1px;width:16px;background:var(--brass);opacity:.7}
.bz-links{display:flex;align-items:center;gap:30px}
.bz-links a{font-size:15px;font-weight:500;color:var(--canopy);position:relative;padding:6px 0;transition:.18s}
.bz-links a::after{content:"";position:absolute;left:0;bottom:0;width:0;height:2px;background:var(--moss);transition:.22s}
.bz-links a:hover{color:var(--moss)}
.bz-links a:hover::after{width:100%}
.bz-links a.active{color:var(--forest)}
.bz-links a.active::after{width:100%}
.bz-btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15px;border-radius:100px;padding:12px 24px;cursor:pointer;border:none;transition:.2s;white-space:nowrap}
.bz-btn.solid{background:var(--forest);color:#fff}
.bz-btn.solid:hover{background:var(--moss);transform:translateY(-2px);box-shadow:0 12px 24px -12px rgba(28,78,48,.6)}
.bz-btn.lime{background:var(--sprout);color:var(--canopy)}
.bz-btn.lime:hover{background:var(--lime);transform:translateY(-2px)}
.bz-btn.ghost{background:transparent;color:var(--forest);border:1.5px solid var(--line)}
.bz-btn.ghost:hover{border-color:var(--fern);background:#fff}
.bz-burger{display:none;background:none;border:none;color:var(--forest);cursor:pointer}
@media(max-width:900px){
  .bz-links,.bz-nav .bz-btn.desk{display:none}
  .bz-burger{display:block}
}
.bz-drawer{display:none}
.bz-drawer.open{position:fixed;inset:0;z-index:120;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:4px;background:rgba(246,250,241,.98);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);animation:drawer-in .25s ease}
.bz-drawer-close{position:absolute;top:18px;right:18px;background:rgba(255,255,255,.9);border:1px solid var(--line);color:var(--forest);width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 8px 20px -12px rgba(28,78,48,.5);transition:.18s}
.bz-drawer-close:hover{background:#fff;transform:rotate(90deg)}
@keyframes drawer-in{from{opacity:0}to{opacity:1}}
.bz-drawer a{display:block;padding:16px 28px;font-family:'Fraunces',serif;font-weight:600;font-size:26px;letter-spacing:.02em;color:var(--canopy);border:none;transition:.18s}
.bz-drawer a:hover{color:var(--moss)}
.bz-drawer .bz-btn{margin-top:22px;width:auto;font-size:17px;padding:14px 32px}

/* ---------- hero ---------- */
.bz-hero{position:relative;padding:70px 0 84px;overflow:hidden;perspective:1600px;
  display:flex;flex-direction:column;justify-content:center;
  background:
    linear-gradient(to bottom, rgba(6,20,12,.55) 0, rgba(6,20,12,.12) 150px, rgba(6,20,12,0) 320px),
    url("./hero-bg.jpg");
  background-size:cover;background-position:center}
.bz-hero .bz-wrap{display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center;position:relative;z-index:2}
.bz-hero-name{display:table;min-height:1.2em;white-space:nowrap;font-family:'Fraunces',serif;font-weight:700;font-size:clamp(15px,1.5vw,20px);letter-spacing:.26em;text-transform:uppercase;color:var(--forest);background:rgba(255,255,255,.9);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.7);padding:9px 20px;border-radius:100px;margin-bottom:18px;box-shadow:0 10px 24px -16px rgba(28,78,48,.5)}
.tw-caret{display:inline-block;margin-left:1px;color:var(--moss);font-weight:400;animation:tw-blink 1s step-end infinite}
@keyframes tw-blink{0%,100%{opacity:1}50%{opacity:0}}
.bz-eyebrow{display:inline-flex;align-items:center;gap:9px;font-size:13px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--canopy);background:rgba(255,255,255,.9);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.7);padding:8px 16px;border-radius:100px;box-shadow:0 10px 24px -16px rgba(0,0,0,.5)}
.bz-eyebrow .dot{width:7px;height:7px;border-radius:50%;background:var(--sprout)}
.bz-hero h1{font-family:'Fraunces',serif;font-weight:700;font-size:clamp(50px,7.2vw,92px);line-height:1.0;letter-spacing:-.02em;margin:22px 0 0;color:#fff;text-shadow:0 6px 34px rgba(0,0,0,.5)}
.bz-hero h1 em{font-style:italic;color:#D7F18A}
.bz-hero .lead{font-size:22px;color:#FFFFFF;max-width:500px;margin:24px 0 32px;text-shadow:0 2px 10px rgba(0,0,0,.75),0 1px 3px rgba(0,0,0,.6)}
.bz-hero .cta-row{display:flex;gap:14px;flex-wrap:wrap}
.bz-hero .cta-row .bz-btn.ghost{color:#fff;border-color:rgba(255,255,255,.55);background:rgba(255,255,255,.1)}
.bz-hero .cta-row .bz-btn.ghost:hover{background:rgba(255,255,255,.2);border-color:#fff}

/* services section background */
#services{
  background:url("./services-bg.jpg");
  background-size:cover;background-position:center}
#services .bz-kick{color:#D7F18A}
#services .bz-h2{color:#fff;text-shadow:0 2px 14px rgba(0,0,0,.6)}
#services .bz-sub{color:#EAF3D9;text-shadow:0 2px 10px rgba(0,0,0,.55)}

/* stats band (light) */
.bz-stats{background:#F3F6EE;border-bottom:1px solid var(--line)}
.bz-stats .bz-wrap{display:grid;grid-template-columns:repeat(4,1fr);gap:0;padding-top:34px;padding-bottom:34px}
.bz-stats .st{display:flex;align-items:center;gap:16px;padding:6px 28px;position:relative}
.bz-stats .st + .st::before{content:"";position:absolute;left:0;top:10%;bottom:10%;width:1px;background:var(--line)}
.bz-stats .ic{flex:none;width:58px;height:58px;border-radius:50%;background:var(--sage);color:var(--forest);display:grid;place-items:center}
.bz-stats .st b{display:block;font-family:'Fraunces',serif;font-size:17px;font-weight:600;color:var(--canopy)}
.bz-stats .st span{display:block;font-size:13.5px;color:var(--bark);margin-top:3px;line-height:1.4}
@media(max-width:900px){.bz-stats .bz-wrap{grid-template-columns:1fr 1fr;gap:22px 0}}
@media(max-width:520px){.bz-stats .bz-wrap{grid-template-columns:1fr}.bz-stats .st + .st::before{display:none}.bz-stats .st{padding:6px 0;border-top:1px solid var(--line);padding-top:18px}}

.bz-bg-leaf{position:absolute;opacity:.5;z-index:0}
.bz-bg-leaf.l1{top:-40px;right:-60px;width:280px;color:#CFE0B4}
.bz-bg-leaf.l2{bottom:-70px;left:-70px;width:230px;color:#D5E4BC;transform:rotate(160deg)}

/* ---------- hero showcase (sliding window) ---------- */
.bz-show{position:relative;height:540px;border-radius:30px;overflow:hidden;transform:translateZ(30px);
  box-shadow:0 55px 90px -38px rgba(14,38,24,.7), 0 0 0 1px rgba(255,255,255,.35)}
.bz-show-frame{position:absolute;inset:0;border-radius:30px;pointer-events:none;z-index:6;
  box-shadow:inset 0 0 0 1.5px rgba(201,162,75,.6), inset 0 0 70px rgba(14,38,24,.28)}
.bz-show-track{display:flex;height:100%;transition:transform .9s cubic-bezier(.7,0,.2,1)}
.bz-slide{position:relative;min-width:100%;height:100%;overflow:hidden;background:#0E2618}
.bz-slide img{width:100%;height:100%;object-fit:cover;transform:scale(1.06);animation:kb 10s ease-in-out infinite alternate}
@keyframes kb{from{transform:scale(1.03)}to{transform:scale(1.13)}}
.bz-slide-grad{position:absolute;inset:0;background:linear-gradient(to top, rgba(9,28,17,.88) 0%, rgba(9,28,17,.4) 40%, rgba(9,28,17,0) 68%)}
.bz-slide-body{position:absolute;left:28px;right:28px;bottom:30px;color:#fff;z-index:3}
.bz-place{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--canopy);background:var(--sprout);padding:6px 15px;border-radius:100px;box-shadow:0 12px 26px -12px rgba(0,0,0,.55)}
.bz-place svg{color:var(--canopy)}
.bz-slide-body h3{font-family:'Fraunces',serif;font-weight:600;font-size:31px;line-height:1.05;margin:14px 0 5px;text-shadow:0 4px 22px rgba(0,0,0,.55)}
.bz-slide-body .bot{font-style:italic;font-size:14px;color:#CFE0B4;text-shadow:0 2px 12px rgba(0,0,0,.5)}
.bz-slide-body p{font-size:15px;color:#E7F0DC;max-width:350px;margin-top:8px;text-shadow:0 2px 12px rgba(0,0,0,.55)}
.bz-show-btn{position:absolute;top:50%;transform:translateY(-50%);z-index:5;width:46px;height:46px;border-radius:50%;
  border:1px solid rgba(255,255,255,.45);background:rgba(255,255,255,.18);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
  color:#fff;display:grid;place-items:center;cursor:pointer;transition:.2s}
.bz-show-btn:hover{background:rgba(255,255,255,.36);transform:translateY(-50%) scale(1.08)}
.bz-show-btn.prev{left:16px}
.bz-show-btn.next{right:16px}
.bz-dots{position:absolute;left:0;right:0;bottom:16px;z-index:5;display:flex;gap:8px;justify-content:center}
.bz-dot{width:8px;height:8px;border-radius:50%;border:none;background:rgba(255,255,255,.5);cursor:pointer;transition:.25s;padding:0}
.bz-dot.on{background:var(--sprout);width:24px;border-radius:6px}
@media(max-width:760px){.bz-show{height:360px}}
@media(max-width:420px){.bz-show{height:300px}}
@media(prefers-reduced-motion:reduce){.bz-slide img{animation:none;transform:scale(1.04)}.bz-show-track{transition:none}}

/* ---------- section shell ---------- */
.bz-sec{padding:88px 0;min-height:100vh;display:flex;flex-direction:column;justify-content:center}
.bz-sec.tint{background:rgba(251,250,242,.6)}
.bz-sec.dark{background:var(--canopy);color:#E7F0DC}
.bz-head{max-width:640px}
.bz-head.center{margin:0 auto;text-align:center}
.bz-kick{display:inline-flex;align-items:center;gap:9px;font-size:13px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--moss)}
.bz-kick .ln{width:26px;height:1.5px;background:var(--brass)}
.bz-sec.dark .bz-kick{color:var(--sprout)}
.bz-h2{font-family:'Fraunces',serif;font-weight:600;font-size:clamp(30px,4vw,46px);line-height:1.08;letter-spacing:-.01em;margin:14px 0 0}
.bz-sub{font-size:17px;color:var(--bark);margin-top:16px}
.bz-sec.dark .bz-sub{color:#B7C9A8}
.bz-chip{display:inline-block;font-family:'Fraunces',serif;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#fff;background:var(--forest);padding:4px 14px;border-radius:100px;vertical-align:middle;margin-left:12px;box-shadow:0 8px 18px -8px rgba(28,78,48,.6)}

/* ---------- growth journey ---------- */
.bz-journey{padding:84px 0 84px;min-height:100vh;display:flex;flex-direction:column;justify-content:center;position:relative;
  background:
    linear-gradient(rgba(8,24,15,.74), rgba(8,24,15,.74)),
    url("./journey-bg.jpg");
  background-size:cover;background-position:center}
.bz-journey .bz-kick{color:var(--sprout)}
.bz-journey .bz-h2{color:#fff}
.bz-journey .bz-sub{color:#CDE3C4}
.bz-track{display:flex;align-items:stretch;justify-content:center;gap:12px;margin-top:52px;flex-wrap:wrap;perspective:1500px}
.bz-jstep{flex:1 1 180px;max-width:230px;text-align:center;padding:30px 20px 24px;border-radius:28px;
  background:rgba(255,255,255,.95);backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);
  border:1px solid rgba(255,255,255,.9);
  box-shadow:0 34px 54px -24px rgba(0,0,0,.55), inset 0 0 0 1px rgba(255,255,255,.5);
  transition:transform .4s cubic-bezier(.15,.9,.25,1.15),box-shadow .4s ease,border-color .3s ease;transform-style:preserve-3d}
.bz-jstep:hover{transform:rotateX(3deg) rotateY(6deg) translateZ(34px);box-shadow:0 50px 70px -26px rgba(28,78,48,.6);border-color:#a8cf9e}
.bz-jart{width:98px;height:98px;margin:0 auto 16px;border-radius:50%;display:grid;place-items:center;
  background:radial-gradient(circle at 50% 38%,#EFF6E1,#DBEAC1);box-shadow:inset 0 -6px 16px rgba(28,78,48,.12);transition:transform .4s ease}
.bz-jstep:hover .bz-jart{transform:translateZ(20px) scale(1.05)}
.bz-jstep .jn{font-family:'Fraunces',serif;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#000000;font-weight:700}
.bz-jstep h4{font-family:'Fraunces',serif;font-size:20px;font-weight:600;margin:5px 0 10px;color:var(--canopy)}
.bz-jstep .jsub{display:inline-block;font-size:12px;font-weight:600;color:var(--moss);background:var(--sage);padding:4px 13px;border-radius:100px}
.bz-arrow{flex:none;align-self:center;color:var(--fern);opacity:.55}
@media(max-width:820px){.bz-track{flex-direction:column;align-items:center}.bz-jstep{width:100%;max-width:320px}.bz-arrow{transform:rotate(90deg)}}

/* ---------- services ---------- */
.bz-serv{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:52px;perspective:1500px}
.bz-card{background:rgba(255,255,255,.58);backdrop-filter:blur(12px) saturate(160%);-webkit-backdrop-filter:blur(12px) saturate(160%);border:1px solid rgba(255,255,255,.6);border-radius:22px;padding:30px 26px;position:relative;overflow:hidden;box-shadow:0 24px 44px -30px rgba(28,78,48,.4), inset 0 0 0 1px rgba(255,255,255,.3)}
.bz-card:hover{transform:rotateX(2.5deg) rotateY(5deg) translateZ(26px);border-color:var(--fern);box-shadow:0 40px 60px -30px rgba(28,78,48,.55)}
.bz-card .ic{width:56px;height:56px;border-radius:16px;background:var(--sage);color:var(--forest);display:grid;place-items:center;transition:.25s}
.bz-card:hover .ic{background:var(--sprout);transform:translateZ(16px)}
.bz-card h3{font-family:'Fraunces',serif;font-size:21px;font-weight:600;margin:20px 0 8px}
.bz-card p{font-size:15px;color:var(--bark)}
.bz-card .idx{position:absolute;top:22px;right:26px;font-family:'Fraunces',serif;font-size:14px;color:var(--line)}

/* ---------- plants catalogue ---------- */
.pl-group{margin-top:54px}
.pl-ghead{display:flex;align-items:baseline;gap:16px;flex-wrap:wrap;padding-bottom:14px;border-bottom:1px solid var(--line);margin-bottom:26px}
.pl-ghead h3{font-family:'Fraunces',serif;font-size:25px;font-weight:600;color:var(--forest)}
.pl-ghead .cnt{font-family:'Fraunces',serif;font-size:14px;color:var(--brass)}
.pl-ghead p{font-size:15px;color:var(--bark);margin-left:auto;max-width:420px;text-align:right}
.pl-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;perspective:1600px}
.pl-card{background:rgba(255,255,255,.62);backdrop-filter:blur(12px) saturate(160%);-webkit-backdrop-filter:blur(12px) saturate(160%);border:1px solid rgba(255,255,255,.6);border-radius:22px;overflow:hidden;box-shadow:0 22px 40px -28px rgba(28,78,48,.4), inset 0 0 0 1px rgba(255,255,255,.3)}
.pl-card:hover{transform:rotateX(2deg) rotateY(4deg) translateZ(22px);border-color:var(--fern);box-shadow:0 40px 60px -30px rgba(28,78,48,.55)}
.pl-photo{position:relative;aspect-ratio:4/3;background:radial-gradient(circle at 50% 38%,#EAF3D9,#D6E6BE);display:grid;place-items:center;overflow:hidden}
.pl-photo .pl-ph{display:grid;place-items:center;transform:scale(1.25);opacity:.9}
.pl-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.pl-badge{position:absolute;left:12px;top:12px;z-index:2;font-size:11px;font-weight:600;letter-spacing:.03em;color:var(--forest);background:rgba(255,255,255,.85);backdrop-filter:blur(4px);padding:4px 11px;border-radius:100px;box-shadow:0 6px 14px -8px rgba(28,78,48,.5)}
.pl-body{padding:18px 18px 20px}
.pl-body h4{font-family:'Fraunces',serif;font-size:19px;font-weight:600;line-height:1.15}
.pl-bot{font-style:italic;font-size:13px;color:var(--fern);margin:3px 0 12px}
.pl-tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}
.pl-tag{font-size:11px;font-weight:600;color:#fff;background:var(--moss);padding:3px 10px;border-radius:100px}
.pl-cond{font-size:11px;font-weight:600;color:var(--bark);background:transparent;border:1px solid var(--line);padding:3px 10px;border-radius:100px}
.pl-body p{font-size:13.5px;color:var(--bark);line-height:1.5}
.pl-enquire{display:inline-flex;align-items:center;gap:8px;margin-top:14px;width:100%;justify-content:center;font-size:13.5px;font-weight:600;color:#fff;background:#25D366;padding:10px 14px;border-radius:100px;transition:.2s;box-shadow:0 12px 24px -14px rgba(37,211,102,.9)}
.pl-enquire:hover{background:#1ebe5a;transform:translateY(-2px)}
.pl-enquire svg{flex:none}
.bz-viewall{display:flex;justify-content:center;margin-top:48px}
@media(max-width:1080px){.pl-grid{grid-template-columns:repeat(3,1fr)}.pl-ghead p{margin-left:0;text-align:left}}
@media(max-width:820px){.pl-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:520px){.pl-grid{grid-template-columns:1fr}}

/* ---------- process ---------- */
.bz-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:56px}
.bz-step{padding:0 34px;position:relative}
.bz-step + .bz-step::before{content:"";position:absolute;left:0;top:8px;bottom:12px;width:1px;background:#ffffff1f}
.bz-step .n{font-family:'Fraunces',serif;font-size:15px;font-weight:600;color:var(--sprout);letter-spacing:.1em}
.bz-step h3{font-family:'Fraunces',serif;font-size:24px;font-weight:600;margin:14px 0 10px}
.bz-step p{color:#B7C9A8;font-size:15px}
@media(max-width:820px){.bz-steps{grid-template-columns:1fr;gap:34px}.bz-step + .bz-step::before{display:none}.bz-step{padding:0}}

/* ---------- about ---------- */
.bz-about{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.bz-statcard{background:var(--forest);color:#EAF3D9;border-radius:28px;padding:40px;position:relative;overflow:hidden;box-shadow:0 40px 60px -34px rgba(28,78,48,.7)}
.bz-statcard .big{font-family:'Fraunces',serif;font-size:84px;font-weight:600;line-height:.9;color:var(--sprout)}
.bz-statcard .cap{font-size:20px;font-weight:600;margin-top:8px}
.bz-statcard .qt{margin-top:28px;padding-top:26px;border-top:1px solid #ffffff26;font-style:italic;font-family:'Fraunces',serif;font-size:18px;color:#DCE7D2}
.bz-statcard .who{margin-top:16px;display:flex;align-items:center;gap:12px}
.bz-statcard .who .av{width:44px;height:44px;border-radius:50%;background:var(--sprout);color:var(--canopy);display:grid;place-items:center;font-family:'Fraunces',serif;font-weight:600;font-size:18px}
.bz-statcard .who b{display:block;font-size:15px;color:#fff}
.bz-statcard .who span{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass)}
.bz-statcard .leaf-bg{position:absolute;right:-30px;bottom:-40px;width:220px;color:#ffffff10}
.bz-statcard .founder{display:flex;align-items:center;gap:20px;position:relative;z-index:2}
.bz-statcard .founder img{width:118px;height:148px;object-fit:cover;object-position:center top;border-radius:18px;border:2px solid var(--brass);box-shadow:0 16px 30px -14px rgba(0,0,0,.6);flex:none}
.bz-statcard .founder-tag .role{font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--brass)}
.bz-statcard .founder-tag b{display:block;font-family:'Fraunces',serif;font-size:26px;font-weight:600;color:#fff;line-height:1.1;margin-top:4px}
.bz-statcard .founder-tag em{font-style:italic;color:#CFE0B4;font-size:15px}
.bz-statcard .founder-contact{margin-top:24px;padding-top:22px;border-top:1px solid #ffffff26;display:flex;flex-wrap:wrap;gap:10px;position:relative;z-index:2}
.bz-statcard .founder-contact a{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:600;color:var(--canopy);background:var(--sprout);padding:9px 16px;border-radius:100px;transition:.2s}
.bz-statcard .founder-contact a:hover{background:var(--lime);transform:translateY(-2px)}
.bz-vals{display:flex;flex-direction:column;gap:18px;margin-top:30px}
.bz-val{display:flex;gap:16px;align-items:flex-start}
.bz-val .vi{flex:none;width:46px;height:46px;border-radius:13px;background:var(--sage);color:var(--forest);display:grid;place-items:center}
.bz-val h4{font-family:'Fraunces',serif;font-size:18px;font-weight:600}
.bz-val p{font-size:14px;color:var(--bark)}

/* ---------- cta band ---------- */
.bz-band{background:var(--sprout);border-radius:30px;padding:46px 48px;display:flex;align-items:center;justify-content:space-between;gap:30px;flex-wrap:wrap;position:relative;overflow:hidden;box-shadow:0 40px 60px -34px rgba(28,78,48,.5)}
.bz-band h3{font-family:'Fraunces',serif;font-size:clamp(26px,3.4vw,38px);font-weight:600;color:var(--canopy);max-width:520px;line-height:1.08}
.bz-band .acts{display:flex;gap:12px;flex-wrap:wrap}
.bz-band .leaf-bg{position:absolute;right:-24px;top:-30px;width:200px;color:#0e261815}

/* ---------- footer ---------- */
.bz-foot{background:var(--canopy);color:#B7C9A8;padding:70px 0 26px}
.bz-fgrid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1.4fr;gap:44px}
.bz-foot h5{font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:var(--sprout);margin-bottom:18px}
.bz-foot a{display:block;padding:5px 0;color:#B7C9A8;font-size:14px;transition:.18s}
.bz-foot a:hover{color:#fff}
.bz-foot .fbrand-lock{display:flex;align-items:center;gap:12px;margin-bottom:6px}
.bz-foot .fbrand-lock .bz-mark{width:48px;height:48px}
.bz-foot .fbrand .wm2 b{font-family:'Fraunces',serif;font-size:20px;font-weight:600;letter-spacing:.16em;color:#fff;display:block;line-height:1.05}
.bz-foot .fbrand .wm2 .sp{display:inline-flex;align-items:center;gap:7px;margin-top:3px;font-size:10px;font-weight:600;letter-spacing:.34em;text-transform:uppercase;color:var(--brass)}
.bz-foot .fbrand .wm2 .sp i{display:block;height:1px;width:16px;background:var(--brass);opacity:.7}
.bz-foot .fbrand p{margin-top:14px;font-size:14px;max-width:260px}
.bz-fsoc{display:flex;gap:10px;margin-top:20px}
.bz-fsoc a{width:38px;height:38px;border-radius:50%;background:#ffffff12;display:grid;place-items:center;padding:0}
.bz-fsoc a:hover{background:var(--sprout);color:var(--canopy)}
.bz-fbot{border-top:1px solid #ffffff1a;margin-top:44px;padding-top:22px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:13px;color:#8fa382}

/* ---------- responsive ---------- */
@media(max-width:960px){
  .bz-serv{grid-template-columns:repeat(2,1fr)}
  .bz-plants{grid-template-columns:repeat(3,1fr)}
  .bz-about{grid-template-columns:1fr;gap:38px}
  .bz-fgrid{grid-template-columns:1fr 1fr}
}
@media(max-width:760px){
  .bz-hero{padding:34px 0 40px}
  .bz-hero .bz-wrap{grid-template-columns:1fr;gap:26px}
  .bz-hero h1{font-size:clamp(40px,11vw,60px);margin-top:16px}
  .bz-hero .lead{font-size:18px;margin:16px 0 24px;max-width:100%}
  .bz-hero-name{margin-bottom:14px}
  .cta-row .bz-btn{flex:1 1 auto;justify-content:center}
  .bz-serv{grid-template-columns:1fr}
  .bz-plants{grid-template-columns:repeat(2,1fr)}
  .bz-fgrid{grid-template-columns:1fr}
  .bz-sec{padding:64px 0}
  .bz-journey{padding:60px 0}
  .bz-band{padding:34px 26px}
}
@media(max-width:380px){
  .bz-wrap{padding:0 16px}
  .bz-nav .bz-wrap{gap:10px}
  .bz-mark{width:38px;height:38px}
  .bz-brand{gap:9px;min-width:0}
  .bz-brand .wm b{font-size:16px;letter-spacing:.1em}
  .bz-brand .wm .sp{letter-spacing:.2em;font-size:9px}
  .bz-brand .wm .sp i{width:12px}
  .bz-hero-name{letter-spacing:.2em;font-size:14px;gap:8px;flex-wrap:wrap}
  .bz-eyebrow{font-size:12px;letter-spacing:.1em;white-space:normal}
  .bz-hero h1{font-size:40px}
  .bz-hero .lead{font-size:18px}
  .bz-plants{grid-template-columns:1fr}
}

.reveal{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}
.reveal.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){
  .reveal{opacity:1;transform:none;transition:none}
  .bz-jstep:hover{transform:translateY(-4px)}
}

/* nursery gallery */
.nz-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:40px 0 34px}
.nz-chip{font-size:13px;font-weight:600;padding:8px 16px;border-radius:100px;border:1px solid var(--line);background:#fff;color:var(--forest);cursor:pointer;transition:.2s}
.nz-chip:hover{border-color:var(--fern)}
.nz-chip.on{background:var(--forest);color:#fff;border-color:var(--forest)}
.nz-grid{columns:4 250px;column-gap:18px}
.nz-item{display:block;width:100%;margin:0 0 18px;padding:0;border:none;background:none;cursor:pointer;position:relative;border-radius:18px;overflow:hidden;break-inside:avoid;box-shadow:0 18px 34px -24px rgba(28,78,48,.5)}
.nz-item img{width:100%;display:block;border-radius:18px;transition:transform .5s ease}
.nz-item:hover img{transform:scale(1.05)}
.nz-cap{position:absolute;left:0;right:0;bottom:0;padding:26px 14px 12px;color:#fff;font-size:13px;font-weight:600;text-align:left;background:linear-gradient(to top,rgba(9,28,17,.85),transparent);opacity:0;transition:.25s}
.nz-item:hover .nz-cap{opacity:1}
.nz-light{position:fixed;inset:0;z-index:999;background:rgba(9,20,13,.93);backdrop-filter:blur(6px);display:grid;place-items:center;padding:30px}
.nz-fig{max-width:92vw;max-height:88vh;margin:0;text-align:center}
.nz-fig img{max-width:92vw;max-height:80vh;border-radius:14px;box-shadow:0 40px 80px -30px #000}
.nz-fig figcaption{color:#E7F0DC;font-family:'Fraunces',serif;font-size:18px;margin-top:14px}
.nz-close{position:absolute;top:20px;right:22px;width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.14);color:#fff;display:grid;place-items:center;cursor:pointer;transition:.2s}
.nz-close:hover{background:rgba(255,255,255,.3)}
.nz-nav{position:absolute;top:50%;transform:translateY(-50%);width:50px;height:50px;border-radius:50%;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.14);color:#fff;display:grid;place-items:center;cursor:pointer;transition:.2s}
.nz-nav:hover{background:rgba(255,255,255,.3)}
.nz-nav.prev{left:18px}
.nz-nav.next{right:18px}
@media(max-width:600px){.nz-grid{columns:2 140px;column-gap:12px}.nz-item{margin-bottom:12px}}

`;

/* ---------- brand mark ---------- */
/* ---------- brand mark: gold-ringed leaf crest ---------- */
function Mark() {
  return (
    <svg className="bz-mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#0E2618" />
      <circle cx="32" cy="32" r="30" stroke="#C9A24B" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="24.5" stroke="#C9A24B" strokeOpacity="0.45" strokeWidth="0.8" />
      <path d="M32 15 C 23 24, 23 40, 32 49 C 41 40, 41 24, 32 15 Z" fill="#5C9463" />
      <path d="M32 30 C 26 27, 21 28, 18 32 C 24 34, 28 33, 32 30 Z" fill="#2F6B41" />
      <path d="M32 34 C 38 31, 43 32, 46 36 C 40 38, 36 37, 32 34 Z" fill="#2F6B41" />
      <path d="M32 49 L 32 15" stroke="#C9A24B" strokeWidth="1" strokeOpacity="0.95" />
    </svg>
  );
}


/* ---------- typewriter effect for the hero name ---------- */
function Typewriter({ text, speed = 42 }) {
  const [n, setN] = useState(0);
  const ref = React.useRef(null);
  const reduce = typeof window !== "undefined" && window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Replay the animation every time the name enters view:
  // covers page load/reload, scrolling back to the top, and clicking "Home".
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) { setN(text.length); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setN(0); }),
      { threshold: 0.6 }
    );
    io.observe(el);
    const onHash = () => {
      const h = window.location.hash;
      if (h === "" || h === "#top") setN(0);
    };
    window.addEventListener("hashchange", onHash);
    return () => { io.disconnect(); window.removeEventListener("hashchange", onHash); };
  }, [text, reduce]);

  // Type one character at a time.
  useEffect(() => {
    if (reduce) { setN(text.length); return; }
    if (n >= text.length) return;
    const t = setTimeout(() => setN((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [n, text, speed, reduce]);

  return (
    <span ref={ref}>
      {text.slice(0, n)}
      <span className="tw-caret" aria-hidden="true">|</span>
    </span>
  );
}

/* ---------- WhatsApp brand glyph (lucide has none) ---------- */
function WhatsApp({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.75-.72 2-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35z"/>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.19 3.03 14.7 2 12.04 2zm0 18.13h-.01c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23z"/>
    </svg>
  );
}

/* ---------- big background leaf ---------- */
function BgLeaf({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
      <path d="M100 8 C40 40 24 120 40 190 C 90 168 160 150 176 70 C 150 92 120 96 100 100 C 120 80 132 46 100 8 Z" />
      <path d="M100 100 C 92 130 84 160 60 182" stroke="#0E2618" strokeOpacity="0.1" strokeWidth="2.4" fill="none" />
    </svg>
  );
}

/* ---------- growth-journey illustrations ---------- */
const growthArt = {
  seed: (
    <svg viewBox="0 0 120 120" width="70" aria-hidden="true">
      <path d="M14 96 Q60 80 106 96 L106 106 Q60 92 14 106 Z" fill="#7a5a34" />
      <ellipse cx="60" cy="93" rx="7" ry="4.5" fill="#5b4423" />
      <path d="M60 93 C 60 84 60 78 60 71" stroke="#4E8C5A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="51" cy="70" rx="10" ry="5.4" fill="#6BA96E" transform="rotate(-30 51 70)" />
      <ellipse cx="69" cy="70" rx="10" ry="5.4" fill="#5C9463" transform="rotate(30 69 70)" />
    </svg>
  ),
  sprout: (
    <svg viewBox="0 0 120 120" width="70" aria-hidden="true">
      <path d="M16 98 Q60 88 104 98 L104 106 Q60 98 16 106 Z" fill="#7a5a34" />
      <path d="M60 98 C 60 80 60 66 60 50" stroke="#3E7A4B" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="47" cy="72" rx="12" ry="6" fill="#5C9463" transform="rotate(-32 47 72)" />
      <ellipse cx="73" cy="64" rx="12" ry="6" fill="#6BA96E" transform="rotate(32 73 64)" />
      <ellipse cx="60" cy="49" rx="6" ry="11" fill="#4E8C5A" />
    </svg>
  ),
  sapling: (
    <svg viewBox="0 0 120 120" width="72" aria-hidden="true">
      <path d="M18 86 L102 86" stroke="#8a6a3a" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M60 86 C 52 96 46 100 42 110 M60 86 C 60 100 60 104 60 112 M60 86 C 68 96 74 100 78 110"
        stroke="#8a6a3a" strokeWidth="2.4" fill="none" opacity="0.55" strokeLinecap="round" />
      <path d="M58 86 L58 52 L62 52 L62 86 Z" fill="#7a5a34" />
      <circle cx="60" cy="44" r="17" fill="#2F6B41" />
      <circle cx="45" cy="51" r="11" fill="#5C9463" />
      <circle cx="75" cy="51" r="11" fill="#4E8C5A" />
      <circle cx="60" cy="35" r="12" fill="#6BA96E" />
    </svg>
  ),
  planted: (
    <svg viewBox="0 0 120 120" width="74" aria-hidden="true">
      <ellipse cx="60" cy="100" rx="42" ry="9" fill="#DCEAC4" />
      <ellipse cx="60" cy="99" rx="26" ry="5.5" fill="#c9b48a" />
      <path d="M56 99 C 58 80 59 74 60 60 C 61 74 62 80 64 99 Z" fill="#7a5a34" />
      {[-60, -30, 0, 30, 60].map((r, i) => (
        <path key={i} transform={`rotate(${r} 60 58)`}
          d="M60 58 C 54 38 54 20 60 8 C 66 20 66 38 60 58 Z" fill={i % 2 ? "#2F6B41" : "#5C9463"} />
      ))}
    </svg>
  ),
};

/* ---------- tiny plant illustrations for cards ---------- */
const plantArt = {
  palm: (
    <svg viewBox="0 0 90 96" width="70" aria-hidden="true">
      <path d="M45 84 L38 60 L52 60 Z" fill="#7a5a34" />
      {[-60, -30, 0, 30, 60].map((r, i) => (
        <path key={i} transform={`rotate(${r} 45 58)`}
          d="M45 58 C 40 40 40 22 45 12 C 50 22 50 40 45 58 Z" fill={i % 2 ? "#2F6B41" : "#5C9463"} />
      ))}
    </svg>
  ),
  banana: (
    <svg viewBox="0 0 90 96" width="70" aria-hidden="true">
      {[-38, -12, 12, 38].map((r, i) => (
        <path key={i} transform={`rotate(${r} 45 82)`}
          d="M45 82 C 30 60 28 30 45 10 C 62 30 60 60 45 82 Z" fill={i % 2 ? "#2F6B41" : "#4E8C5A"} />
      ))}
      <line x1="45" y1="82" x2="45" y2="16" stroke="#0E2618" strokeOpacity="0.15" strokeWidth="2" />
    </svg>
  ),
  dracaena: (
    <svg viewBox="0 0 90 96" width="66" aria-hidden="true">
      <rect x="42" y="46" width="6" height="40" rx="3" fill="#7a5a34" />
      {[-52, -26, 0, 26, 52].map((r, i) => (
        <path key={i} transform={`rotate(${r} 45 48)`}
          d="M45 48 C 43 30 43 14 45 4 C 47 14 47 30 45 48 Z" fill={i % 2 ? "#3E7A4B" : "#5C9463"} />
      ))}
    </svg>
  ),
  tree: (
    <svg viewBox="0 0 90 96" width="72" aria-hidden="true">
      <rect x="42" y="58" width="6" height="30" rx="3" fill="#7a5a34" />
      <circle cx="45" cy="38" r="24" fill="#2F6B41" />
      <circle cx="30" cy="46" r="15" fill="#4E8C5A" />
      <circle cx="60" cy="46" r="15" fill="#4E8C5A" />
      <circle cx="45" cy="30" r="16" fill="#5C9463" />
    </svg>
  ),
  succulent: (
    <svg viewBox="0 0 90 96" width="66" aria-hidden="true">
      <path d="M30 86 L60 86 L56 66 L34 66 Z" fill="#B98A4E" opacity="0.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((r, i) => (
        <path key={i} transform={`rotate(${r} 45 56)`}
          d="M45 56 C 41 42 41 30 45 24 C 49 30 49 42 45 56 Z" fill={i % 2 ? "#3E7A4B" : "#6BA96E"} />
      ))}
      <circle cx="45" cy="56" r="6" fill="#A9D95C" />
    </svg>
  ),
  feather: (
    <svg viewBox="0 0 90 96" width="72" aria-hidden="true">
      <path d="M45 90 L41 52 L49 52 Z" fill="#7a5a34" />
      {[-74, -44, -16, 16, 44, 74].map((r, i) => (
        <path key={i} transform={`rotate(${r} 45 50)`}
          d="M45 50 C 43 32 39 18 45 6 C 51 18 47 32 45 50 Z" fill={i % 2 ? "#2F6B41" : "#5C9463"} />
      ))}
    </svg>
  ),
  cycad: (
    <svg viewBox="0 0 90 96" width="70" aria-hidden="true">
      <ellipse cx="45" cy="80" rx="17" ry="6" fill="#B98A4E" opacity="0.5" />
      {[-76, -52, -30, -10, 10, 30, 52, 76].map((r, i) => (
        <path key={i} transform={`rotate(${r} 45 74)`}
          d="M45 74 C 44 50 44 26 45 10 C 46 26 46 50 45 74 Z" fill={i % 2 ? "#2F6B41" : "#4E8C5A"} />
      ))}
    </svg>
  ),
};

/* ---------- hero showcase: auto-sliding, placement-labelled ---------- */
const SHOW_ICON = { car: Car, home: Home, shield: ShieldCheck, trees: Trees };

function Showcase({ items }) {
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


const NURSERY_DATA = [{"name": "Ashoka", "slug": "ashoka", "images": ["ashoka-1.jpg", "ashoka-2.jpg"]}, {"name": "Bales", "slug": "bales", "images": ["bales-1.jpg", "bales-2.jpg", "bales-3.jpg", "bales-4.jpg", "bales-5.jpg", "bales-6.jpg", "bales-7.jpg", "bales-8.jpg", "bales-9.jpg", "bales-10.jpg", "bales-11.jpg"]}, {"name": "Chinese Smooth Cycad", "slug": "chinese-smooth-cycad", "images": ["chinese-smooth-cycad-1.jpg", "chinese-smooth-cycad-2.jpg", "chinese-smooth-cycad-3.jpg"]}, {"name": "Christmas Palm", "slug": "christmas-palm", "images": ["christmas-palm-1.jpg", "christmas-palm-2.jpg", "christmas-palm-3.jpg", "christmas-palm-4.jpg", "christmas-palm-5.jpg"]}, {"name": "Croton", "slug": "croton", "images": ["croton-1.jpg", "croton-2.jpg", "croton-3.jpg", "croton-4.jpg", "croton-5.jpg", "croton-6.jpg"]}, {"name": "Dancing Lady palms", "slug": "dancing-lady-palms", "images": ["dancing-lady-palms-1.jpg", "dancing-lady-palms-2.jpg", "dancing-lady-palms-3.jpg", "dancing-lady-palms-4.jpg", "dancing-lady-palms-5.jpg", "dancing-lady-palms-6.jpg", "dancing-lady-palms-7.jpg", "dancing-lady-palms-8.jpg", "dancing-lady-palms-9.jpg", "dancing-lady-palms-10.jpg"]}, {"name": "Dwarlf betelnut", "slug": "dwarlf-betelnut", "images": ["dwarlf-betelnut-1.jpg", "dwarlf-betelnut-2.jpg", "dwarlf-betelnut-3.jpg"]}, {"name": "Dwarlf coconut", "slug": "dwarlf-coconut", "images": ["dwarlf-coconut-1.jpg", "dwarlf-coconut-2.jpg", "dwarlf-coconut-3.jpg", "dwarlf-coconut-4.jpg", "dwarlf-coconut-5.jpg", "dwarlf-coconut-6.jpg"]}, {"name": "Foxtail Palm", "slug": "foxtail-palm", "images": ["foxtail-palm-1.jpg", "foxtail-palm-2.jpg", "foxtail-palm-3.jpg", "foxtail-palm-4.jpg", "foxtail-palm-5.jpg", "foxtail-palm-6.jpg", "foxtail-palm-7.jpg", "foxtail-palm-8.jpg", "foxtail-palm-9.jpg", "foxtail-palm-10.jpg", "foxtail-palm-11.jpg", "foxtail-palm-12.jpg", "foxtail-palm-13.jpg"]}, {"name": "Golden Palms", "slug": "golden-palms", "images": ["golden-palms-1.jpg", "golden-palms-2.jpg", "golden-palms-3.jpg", "golden-palms-4.jpg", "golden-palms-5.jpg", "golden-palms-6.jpg", "golden-palms-7.jpg", "golden-palms-8.jpg", "golden-palms-9.jpg", "golden-palms-10.jpg", "golden-palms-11.jpg", "golden-palms-12.jpg", "golden-palms-13.jpg"]}, {"name": "Likwala grandis", "slug": "likwala-grandis", "images": ["likwala-grandis-1.jpg", "likwala-grandis-2.jpg"]}, {"name": "Peacock palms", "slug": "peacock-palms", "images": ["peacock-palms-1.jpg"]}, {"name": "Red Sister", "slug": "red-sister", "images": ["red-sister-1.jpg", "red-sister-2.jpg", "red-sister-3.jpg", "red-sister-4.jpg"]}, {"name": "Red bottle palm", "slug": "red-bottle-palm", "images": ["red-bottle-palm-1.jpg", "red-bottle-palm-2.jpg", "red-bottle-palm-3.jpg"]}, {"name": "Royal palms", "slug": "royal-palms", "images": ["royal-palms-1.jpg", "royal-palms-2.jpg", "royal-palms-3.jpg", "royal-palms-4.jpg", "royal-palms-5.jpg", "royal-palms-6.jpg", "royal-palms-7.jpg", "royal-palms-8.jpg", "royal-palms-9.jpg", "royal-palms-10.jpg", "royal-palms-11.jpg"]}, {"name": "Song of India", "slug": "song-of-india", "images": ["song-of-india-1.jpg", "song-of-india-2.jpg", "song-of-india-3.jpg", "song-of-india-4.jpg"]}, {"name": "Travellers Palms", "slug": "travellers-palms", "images": ["travellers-palms-1.jpg", "travellers-palms-2.jpg", "travellers-palms-3.jpg", "travellers-palms-4.jpg", "travellers-palms-5.jpg", "travellers-palms-6.jpg", "travellers-palms-7.jpg", "travellers-palms-8.jpg", "travellers-palms-9.jpg", "travellers-palms-10.jpg", "travellers-palms-11.jpg"]}];

function Nursery() {
  const [cat, setCat] = useState("all");
  const [light, setLight] = useState(null);
  const B = import.meta.env.BASE_URL;
  const shown = cat === "all" ? NURSERY_DATA : NURSERY_DATA.filter((c) => c.slug === cat);
  const flat = [];
  shown.forEach((c) => c.images.forEach((img) =>
    flat.push({ src: B + "nursery/" + c.slug + "/" + img, name: c.name })));
  const move = (d) => setLight((p) => (p + d + flat.length) % flat.length);
  return (
    <section className="bz-sec tint" id="nursery">
      <div className="bz-wrap">
        <div className="bz-head center reveal">
          <span className="bz-kick"><span className="ln" /> Our nursery</span>
          <h2 className="bz-h2">Straight from our grounds.</h2>
          <p className="bz-sub">Real plants, grown and nurtured at our nursery. Tap any photo for a closer look.</p>
        </div>
        <div className="nz-chips reveal">
          <button className={"nz-chip" + (cat === "all" ? " on" : "")} onClick={() => setCat("all")}>All</button>
          {NURSERY_DATA.map((c) => (
            <button key={c.slug} className={"nz-chip" + (cat === c.slug ? " on" : "")} onClick={() => setCat(c.slug)}>{c.name}</button>
          ))}
        </div>
        <div className="nz-grid">
          {flat.map((im, i) => (
            <button className="nz-item" key={i} onClick={() => setLight(i)}>
              <img src={im.src} alt={im.name} loading="lazy" />
              <span className="nz-cap">{im.name}</span>
            </button>
          ))}
        </div>
      </div>
      {light !== null && (
        <div className="nz-light" onClick={() => setLight(null)}>
          <button className="nz-close" aria-label="Close" onClick={() => setLight(null)}><X size={22} /></button>
          <button className="nz-nav prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); move(-1); }}><ChevronLeft size={26} /></button>
          <figure className="nz-fig" onClick={(e) => e.stopPropagation()}>
            <img src={flat[light].src} alt={flat[light].name} />
            <figcaption>{flat[light].name}</figcaption>
          </figure>
          <button className="nz-nav next" aria-label="Next" onClick={(e) => { e.stopPropagation(); move(1); }}><ChevronRight size={26} /></button>
        </div>
      )}
    </section>
  );
}

/* ============================================================ */
export default function BreezySpeciesSite() {
  const [menu, setMenu] = useState(false);
  const wa = "https://wa.me/254712907911";

  // Hero showcase — placement-led, using our own photos
  const featured = [
    { slug: "royal-palm", name: "Royal Palm", bot: "Roystonea regia", cat: "Driveways & avenues", icon: "car",
      tag: "Tall and formal — the classic choice for lining a driveway." },
    { slug: "foxtail-palm", name: "Foxtail Palm", bot: "Wodyetia bifurcata", cat: "Driveways", icon: "car",
      tag: "Neat, fast and drought-tough — a driveway favourite." },
    { slug: "ashoka", name: "Ashoka", bot: "Polyalthia longifolia", cat: "Privacy & boundaries", icon: "shield",
      tag: "Slim, dense columns — the go-to for privacy screens and walls." },
    { slug: "travellers-palm", name: "Traveller's Palm", bot: "Ravenala madagascariensis", cat: "Privacy & feature", icon: "trees",
      tag: "A bold living screen and dramatic focal point in one." },
    { slug: "licuala-grandis", name: "Licuala Grandis", bot: "Licuala grandis", cat: "Corridors & indoors", icon: "home",
      tag: "Lush ruffled fans for shaded corridors, patios and interiors." },
    { slug: "dancing-lady", name: "Dancing Lady", bot: "ornamental accent", cat: "Corridors & indoors", icon: "home",
      tag: "A graceful accent for entryways, corridors and bright rooms." },
    { slug: "bismarck-palm", name: "Bismarck Palm", bot: "Bismarckia nobilis", cat: "Lawn feature", icon: "trees",
      tag: "A silver-blue centrepiece for wide, open lawns." },
  ];

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.14 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const journey = [
    { k: "seed", n: "Stage 01", t: "Seedbed", sub: "Germination" },
    { k: "sprout", n: "Stage 02", t: "Sprout", sub: "First leaves" },
    { k: "sapling", n: "Stage 03", t: "Sapling", sub: "Strong roots" },
    { k: "planted", n: "Stage 04", t: "Planted", sub: "Thriving in your space" },
  ];

  const services = [
    { icon: Sprout, t: "Indoor & Outdoor Plants", d: "Hardy, healthy plants chosen to thrive in your light, soil and coastal climate." },
    { icon: Trees, t: "Landscaping & Garden Design", d: "From bare ground to a garden you'll actually want to live in — planned and built." },
    { icon: Scissors, t: "Plant Maintenance", d: "Pruning, feeding and routine care that keeps every leaf green through the seasons." },
    { icon: Truck, t: "Plant Supply & Delivery", d: "One plant or a full order — sourced, delivered and planted right at your place." },
    { icon: Shovel, t: "Garden Setup", d: "Complete builds: soil prep, layout, planting and the finishing touches." },
    { icon: MessagesSquare, t: "Professional Advisory", d: "Honest advice on what to plant, where to put it, and how to keep it alive." },
  ];

  // To add a photo: drop an image at  public/plants/<slug>.jpg  (e.g. public/plants/foxtail-palm.jpg)
  // It replaces the illustration automatically. Until then, the drawn fallback shows.
  const plantGroups = [
    {
      id: "fan-palms",
      title: "Fan Palms",
      note: "Bold, fan-shaped fronds — architectural focal points.",
      items: [
        { name: "Bismarck Palm", bot: "Bismarckia nobilis", type: "palm", slug: "bismarck-palm",
          where: ["Driveway", "Lawn feature"], cond: ["Full sun"],
          desc: "A silver-blue showpiece for wide lawns and grand entrances. Needs plenty of room." },
        { name: "Livingstone Palm", bot: "Livistona chinensis", type: "palm", slug: "livingstone-palm",
          where: ["Garden", "Avenue"], cond: ["Sun / part shade"],
          desc: "Glossy, elegant fan fronds — lovely as a single feature or planted in a row." },
        { name: "Licuala Grandis", bot: "Licuala grandis", type: "palm", slug: "licuala-grandis",
          where: ["Indoor", "Patio / shade"], cond: ["Bright shade"],
          desc: "Show-stopping ruffled round leaves; thrives in bright shade indoors or under trees." },
      ],
    },
    {
      id: "feather-palms",
      title: "Feather Palms",
      note: "Arching, plume-like fronds — the classic tropical look.",
      items: [
        { name: "Foxtail Palm", bot: "Wodyetia bifurcata", type: "feather", slug: "foxtail-palm",
          where: ["Driveway", "Garden"], cond: ["Full sun"],
          desc: "Fast, tidy and drought-tough, with plush foxtail fronds — a driveway favourite." },
        { name: "Golden Cane Palm", bot: "Dypsis lutescens", type: "feather", slug: "golden-palm",
          where: ["Screening", "Garden", "Indoor"], cond: ["Sun / part shade"],
          desc: "Clustering golden-stemmed palm — a fast, feathery privacy screen, or a big bright indoor pot." },
        { name: "Royal Palm", bot: "Roystonea regia", type: "feather", slug: "royal-palm",
          where: ["Avenue", "Driveway"], cond: ["Full sun"],
          desc: "The grand avenue palm: a tall, smooth grey trunk and a formal crown for big entrances." },
        { name: "Red Royal Palm", bot: "Roystonea sp.", type: "feather", slug: "red-royal-palm",
          where: ["Avenue", "Lawn feature"], cond: ["Full sun"],
          desc: "A bolder royal with warm red-toned new growth — a real statement on a lawn or avenue." },
        { name: "Christmas Palm", bot: "Adonidia merrillii", type: "feather", slug: "christmas-palm",
          where: ["Garden", "Poolside"], cond: ["Sun"],
          desc: "Compact and neat, with festive red fruit — perfect in clusters or by a pool." },
        { name: "Betel Nut Palm", bot: "Areca catechu", type: "feather", slug: "betelnut-palm",
          where: ["Garden clusters", "Screening"], cond: ["Sun / part shade"],
          desc: "Slim and upright; looks best planted in groups for a tall tropical screen." },
        { name: "Dwarf Coconut", bot: "Cocos nucifera (dwarf)", type: "feather", slug: "dwarf-coconut",
          where: ["Lawn", "Poolside", "Coastal"], cond: ["Full sun"],
          desc: "Coastal charm at a friendly height — fruits low and early." },
        { name: "Fishtail Palm", bot: "Caryota mitis", type: "feather", slug: "fishtail-palm",
          where: ["Garden", "Shade"], cond: ["Filtered light"],
          desc: "Unusual ragged 'fishtail' leaves; happy in shaded corners and filtered light." },
        { name: "Bottle Palm", bot: "Hyophorbe lagenicaulis", type: "feather", slug: "bottle-palm",
          where: ["Feature", "Poolside", "Indoor"], cond: ["Bright"],
          desc: "Quirky bottle-shaped trunk; a slow, sculptural accent for pots and poolsides." },
        { name: "Round Bottom Palm", bot: "specimen palm", type: "feather", slug: "round-bottom-palm",
          where: ["Feature", "Garden"], cond: ["Sun / part shade"],
          desc: "A distinctive specimen palm with warm red-toned leaf-stems — a showpiece for a sheltered, sunny spot." },
        { name: "Peacock Palm", bot: "ornamental palm", type: "feather", slug: "peacock-palm",
          where: ["Garden", "Patio"], cond: ["Part shade"],
          desc: "A lush fan of arching fronds — a soft ornamental accent for beds and patios." },
      ],
    },
    {
      id: "cycads",
      title: "Cycads",
      note: "Ancient, architectural and famously tough.",
      items: [
        { name: "Japanese Cycad", bot: "Cycas revoluta (Sago)", type: "cycad", slug: "japanese-cycad",
          where: ["Container", "Entryway", "Indoor"], cond: ["Low water"],
          desc: "Stiff, symmetrical rosette; slow-growing and superb in pots or beside doorways." },
        { name: "Rough Cycad", bot: "Encephalartos sp.", type: "cycad", slug: "rough-cycad",
          where: ["Feature", "Rockery"], cond: ["Full sun", "Low water"],
          desc: "Prehistoric and hardy — a striking, spiky specimen for rock gardens." },
      ],
    },
    {
      id: "trees-accents",
      title: "Ornamental Trees & Accents",
      note: "Height, structure and colour beyond the palms.",
      items: [
        { name: "Ashoka", bot: "Polyalthia longifolia", type: "tree", slug: "ashoka",
          where: ["Driveway", "Boundary", "Screening"], cond: ["Full sun"],
          desc: "Slender columnar tree; ideal for lining a driveway or screening a boundary." },
        { name: "Traveller's Palm", bot: "Ravenala madagascariensis", type: "banana", slug: "travellers-palm",
          where: ["Lawn feature", "Large garden"], cond: ["Full sun"],
          desc: "An iconic fan of giant paddle-leaves — a dramatic focal point for open space." },
        { name: "Dancing Lady", bot: "ornamental accent", type: "tree", slug: "dancing-lady",
          where: ["Garden", "Patio"], cond: ["Part shade"],
          desc: "A graceful accent that brings movement and colour to beds and patios." },
      ],
    },
  ];

  const steps = [
    { n: "01", t: "Consult", d: "Tell us your space, light and budget on a call or over WhatsApp. We advise honestly — no upselling." },
    { n: "02", t: "Design & source", d: "We plan the layout and hand-pick healthy, well-nurtured plants suited to your spot." },
    { n: "03", t: "Plant & maintain", d: "We install everything and, if you'd like, keep it thriving with scheduled care visits." },
  ];

  const values = [
    { icon: ShieldCheck, t: "Quality plants", d: "Every plant is healthy, well-nurtured and ready to grow before it ever leaves us." },
    { icon: Truck, t: "Reliable service", d: "On time, every time — delivered and planted across Mtwapa and surrounding areas." },
    { icon: Coins, t: "Affordable prices", d: "Fair, transparent pricing with real value for your money. Pay by cash or M-Pesa." },
  ];

  return (
    <div className="bz">
      <style>{css}</style>

      {/* nav */}
      <nav className="bz-nav">
        <div className="bz-wrap">
          <a href="#" className="bz-brand">
            <Mark />
            <div className="wm"><b>THE BREEZY</b><span className="sp"><i /> SPECIES <i /></span></div>
          </a>
          <div className="bz-links">
            <a href="#top" className="active">Home</a>
            <a href="#journey">Journey</a>
            <a href="#services">Services</a>
            <a href="#plants">Plants</a>
            <a href="#nursery">Our Nursery</a>
            <a href="#about">About</a>
            <a href={wa}>Contact</a>
          </div>
          <a href={wa} className="bz-btn solid desk"><Leaf size={17} /> Get a quote</a>
          <button className="bz-burger" onClick={() => setMenu((m) => !m)} aria-label="Menu">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        <div className={"bz-drawer" + (menu ? " open" : "")}>
          <button className="bz-drawer-close" onClick={() => setMenu(false)} aria-label="Close menu"><X size={24} /></button>
          <a href="#top" onClick={() => setMenu(false)}>Home</a>
          <a href="#journey" onClick={() => setMenu(false)}>Journey</a>
          <a href="#services" onClick={() => setMenu(false)}>Services</a>
          <a href="#plants" onClick={() => setMenu(false)}>Plants</a>
          <a href="#nursery" onClick={() => setMenu(false)}>Our Nursery</a>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href={wa} onClick={() => setMenu(false)}>Contact</a>
          <a href={wa} className="bz-btn solid" onClick={() => setMenu(false)}><Leaf size={17} /> Get a quote</a>
        </div>
      </nav>

      {/* hero */}
      <header className="bz-hero" id="top">
        <BgLeaf className="bz-bg-leaf l1" />
        <BgLeaf className="bz-bg-leaf l2" />
        <div className="bz-wrap">
          <div>
            <a href="#top" className="bz-hero-name"><Typewriter text="The Breezy Species" /></a>
            <span className="bz-eyebrow"><span className="dot" /> Breathe green · Live breezy</span>
            <h1>Bring nature<br />to your <em>space</em>.</h1>
            <p className="lead">Healthy plants, expert landscaping and green spaces that inspire — grown and cared for on the Kenyan coast.</p>
            <div className="cta-row">
              <a href="#services" className="bz-btn solid">Explore our services <ArrowRight size={18} /></a>
              <a href={wa} className="bz-btn ghost"><WhatsApp size={18} /> Order on WhatsApp</a>
            </div>
          </div>
          <Showcase items={featured} />
        </div>
      </header>

      {/* stats band */}
      <section className="bz-stats">
        <div className="bz-wrap">
          <div className="st"><div className="ic"><Leaf size={24} /></div><div><b>10+ years growing</b><span>Trusted expertise in plant care and landscaping.</span></div></div>
          <div className="st"><div className="ic"><Sprout size={24} /></div><div><b>Healthy, nurtured plants</b><span>Quality plants for lasting green spaces.</span></div></div>
          <div className="st"><div className="ic"><Truck size={24} /></div><div><b>Delivery across Kenya</b><span>Bringing greenery to your doorstep.</span></div></div>
          <div className="st"><div className="ic"><ShieldCheck size={24} /></div><div><b>Expert support</b><span>Guidance from selection to aftercare.</span></div></div>
        </div>
      </section>

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
                      <a
                        className="pl-enquire"
                        href={wa + "?text=" + encodeURIComponent("Hi The Breezy Species, I'd like to enquire about the " + pl.name + ".")}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsApp size={16} /> Enquire about this
                      </a>
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

      <Nursery />

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

      {/* about */}
      <section className="bz-sec" id="about">
        <div className="bz-wrap">
          <div className="bz-about">
            <div className="bz-statcard reveal">
              <BgLeaf className="leaf-bg" />
              <div className="founder">
                <img src={import.meta.env.BASE_URL + "team/bonface-okello.jpg"} alt="Bonface Okello — Thee Breezy" />
                <div className="founder-tag">
                  <span className="role">Founder &amp; CEO</span>
                  <b>Bonface Okello</b>
                  <em>"Thee Breezy"</em>
                </div>
              </div>
              <div className="qt">"Plants do more than decorate — they change how a space feels, and how you feel in it. Let us make your world a greener place."</div>
              <div className="founder-contact">
                <a href="tel:0712907911"><Phone size={15} /> 0712 907 911</a>
                <a href="tel:0710790550"><Phone size={15} /> 0710 790 550</a>
              </div>
            </div>
            <div className="reveal">
              <span className="bz-kick"><span className="ln" /> About us</span>
              <h2 className="bz-h2">We create green spaces you'll love.</h2>
              <p className="bz-sub">The Breezy Species is a Mtwapa-based landscaping and plant company founded by Bonface Okello — known to everyone as "Thee Breezy". We're passionate about greenery and obsessive about healthy, well-nurtured plants — because a garden is only as good as the plants it's built from.</p>
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

      {/* cta band */}
      <section className="bz-sec" id="contact" style={{ paddingTop: 0 }}>
        <div className="bz-wrap">
          <div className="bz-band reveal">
            <BgLeaf className="leaf-bg" />
            <h3>Let's make your world a greener place.</h3>
            <div className="acts">
              <a href="tel:0712907911" className="bz-btn solid"><Phone size={18} /> Call us</a>
              <a href={wa} className="bz-btn ghost" style={{ background: "#fff" }}><MessagesSquare size={18} /> WhatsApp</a>
              <a href={wa} className="bz-btn ghost" style={{ background: "#fff" }}><MessagesSquare size={18} /> Request a quote</a>
            </div>
          </div>
        </div>
      </section>

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
              <a href={wa}>Contact</a>
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
              <a href="tel:0710790550"><Phone size={13} style={{ marginRight: 8, verticalAlign: -1 }} />0710 790 550</a>
              <a href="#"><MapPin size={13} style={{ marginRight: 8, verticalAlign: -1 }} />Mtwapa, Kenya</a>
            </div>
          </div>
          <div className="bz-fbot">
            <span>© {new Date().getFullYear()} The Breezy Species. All rights reserved.</span>
            <span>Grown with care for nature lovers in Mtwapa.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
