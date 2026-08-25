export type Destination = {
  slug: string;
  code: string;
  name: string;
  region: string;
  description: string;
  longDescription: string;
  highlights: string[];
  imageSrc: string;
};

export const destinations: Destination[] = [
  {
    slug: "udupi",
    code: "KA·01",
    name: "Udupi",
    region: "Coastal Karnataka",
    description:
      "Temple courtyards, filter coffee, and a coastline that empties out past sunset.",
    longDescription:
      "Udupi is where the trip slows down on purpose. Mornings start at Krishna Matha, where centuries-old ritual still runs on schedule. Afternoons drift toward the coast — quiet fishing villages, filter coffee that outclasses anything you've had, and a stretch of Malpe beach that empties out completely by evening. It's a gentle introduction to district-level travel: unhurried, well-fed, and deeply local.",
    highlights: ["Krishna Matha", "Malpe coast", "Udupi cuisine", "Temple architecture"],
    imageSrc: "/images/destinations/udupi.jpg",
  },
  {
    slug: "thanjavur",
    code: "TN·02",
    name: "Thanjavur",
    region: "Delta Tamil Nadu",
    description:
      "A Chola-era capital where bronze casting and Tanjore painting are still practiced daily.",
    longDescription:
      "Thanjavur was a capital once, and it still carries itself like one. The Brihadeeswarar Temple — a UNESCO World Heritage Site — anchors the town, but the real story is in its workshops: bronze casters working in techniques over a thousand years old, and Tanjore painters layering gold leaf the same way their guilds always have. This is a trip for people who want to see craft, not just architecture.",
    highlights: ["Brihadeeswarar Temple", "Bronze workshops", "Tanjore art", "Chola heritage"],
    imageSrc: "/images/destinations/thanjavur.jpg",
  },
  {
    slug: "kannur",
    code: "KL·03",
    name: "Kannur",
    region: "Malabar Coast, Kerala",
    description:
      "Theyyam rituals at dawn, quiet handloom towns, and beaches off the postcard trail.",
    longDescription:
      "Kannur doesn't perform for tourists — which is exactly the point. Theyyam, the ritual dance-possession practiced here, happens because the community believes in it, not because anyone's watching. Around it are handloom villages that still weave the way they did generations ago, and long stretches of coastline — Muzhappilangad among them — that haven't made it onto anyone's postcard yet.",
    highlights: ["Theyyam ritual", "Handloom villages", "Muzhappilangad beach", "Malabar cuisine"],
    imageSrc: "/images/destinations/kannur.jpg",
  },
  {
    slug: "hampi",
    code: "KA·04",
    name: "Hampi",
    region: "Deccan Plateau, Karnataka",
    description:
      "Boulder hills and Vijayanagara ruins along the Tungabhadra, best seen on foot at dawn.",
    longDescription:
      "Hampi is best walked, and best walked early — before the heat, before the light gets hard, before the boulder hills lose their shadows. The ruins of the Vijayanagara Empire spread across a landscape that looks staged even though it isn't. We keep this leg unhurried: mornings on foot through the ruins, afternoons by the Tungabhadra, and enough slack in the schedule to just sit somewhere and look at it.",
    highlights: ["Virupaksha Temple", "Boulder landscape", "Tungabhadra river", "Vijayanagara ruins"],
    imageSrc: "/images/destinations/hampi.jpg",
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
