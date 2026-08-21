import { Sprout, Trees, Scissors, Truck, Shovel, MessagesSquare, ShieldCheck, Coins } from "lucide-react";

// WhatsApp link used across the site
export const WA = "https://wa.me/254712907911";

// Hero showcase slides (placement-led)
export const featured = [
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

// Plant growth journey stages
export const journey = [
    { k: "seed", n: "Stage 01", t: "Seedbed", sub: "Germination" },
    { k: "sprout", n: "Stage 02", t: "Sprout", sub: "First leaves" },
    { k: "sapling", n: "Stage 03", t: "Sapling", sub: "Strong roots" },
    { k: "planted", n: "Stage 04", t: "Planted", sub: "Thriving in your space" },
  ];

// Service cards
export const services = [
    { icon: Sprout, t: "Indoor & Outdoor Plants", d: "Hardy, healthy plants chosen to thrive in your light, soil and coastal climate." },
    { icon: Trees, t: "Landscaping & Garden Design", d: "From bare ground to a garden you'll actually want to live in — planned and built." },
    { icon: Scissors, t: "Plant Maintenance", d: "Pruning, feeding and routine care that keeps every leaf green through the seasons." },
    { icon: Truck, t: "Plant Supply & Delivery", d: "One plant or a full order — sourced, delivered and planted right at your place." },
    { icon: Shovel, t: "Garden Setup", d: "Complete builds: soil prep, layout, planting and the finishing touches." },
    { icon: MessagesSquare, t: "Professional Advisory", d: "Honest advice on what to plant, where to put it, and how to keep it alive." },
  ];

// Full plant catalogue, grouped by type
export const plantGroups = [
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

// "How we work" steps
export const steps = [
    { n: "01", t: "Consult", d: "Tell us your space, light and budget on a call or over WhatsApp. We advise honestly — no upselling." },
    { n: "02", t: "Design & source", d: "We plan the layout and hand-pick healthy, well-nurtured plants suited to your spot." },
    { n: "03", t: "Plant & maintain", d: "We install everything and, if you'd like, keep it thriving with scheduled care visits." },
  ];

// Value props (about section)
export const values = [
    { icon: ShieldCheck, t: "Quality plants", d: "Every plant is healthy, well-nurtured and ready to grow before it ever leaves us." },
    { icon: Truck, t: "Reliable service", d: "On time, every time — delivered and planted across Mtwapa and surrounding areas." },
    { icon: Coins, t: "Affordable prices", d: "Fair, transparent pricing with real value for your money. Pay by cash or M-Pesa." },
  ];
