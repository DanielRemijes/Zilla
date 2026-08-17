import Hero from "@/components/Hero";
import DestinationLedger from "@/components/DestinationLedger";
import DestinationSpread from "@/components/DestinationSpread";
import WhyZilla from "@/components/WhyZilla";
import Link from "next/link";

const destinations = [
  {
    id: "udupi",
    code: "KA·01",
    name: "Udupi",
    region: "Coastal Karnataka",
    description:
      "Temple courtyards, filter coffee, and a coastline that empties out past sunset. Udupi is where the trip slows down on purpose.",
    highlights: ["Krishna Matha", "Malpe coast", "Udupi cuisine"],
    gradient:
      "linear-gradient(160deg, #2b4a52 0%, #6b7f61 55%, #e8dcc6 120%)",
  },
  {
    id: "thanjavur",
    code: "TN·02",
    name: "Thanjavur",
    region: "Delta Tamil Nadu",
    description:
      "A Chola-era capital where bronze casting and Tanjore painting are still practiced the way they were a thousand years ago.",
    highlights: ["Brihadeeswarar Temple", "Bronze workshops", "Tanjore art"],
    gradient:
      "linear-gradient(160deg, #6a3324 0%, #b8613f 55%, #e8dcc6 120%)",
  },
  {
    id: "kannur",
    code: "KL·03",
    name: "Kannur",
    region: "Malabar Coast, Kerala",
    description:
      "Theyyam rituals at dawn, quiet handloom towns, and beaches that haven't made it onto the postcards yet.",
    highlights: ["Theyyam", "Handloom villages", "Muzhappilangad beach"],
    gradient:
      "linear-gradient(160deg, #1f4a44 0%, #4b5d45 55%, #e8dcc6 120%)",
  },
  {
    id: "hampi",
    code: "KA·04",
    name: "Hampi",
    region: "Deccan Plateau, Karnataka",
    description:
      "Boulder hills and Vijayanagara ruins along the Tungabhadra — best seen on foot, early, before the light gets hard.",
    highlights: ["Virupaksha Temple", "Boulder landscape", "Tungabhadra river"],
    gradient:
      "linear-gradient(160deg, #5a3a1f 0%, #b8613f 55%, #e8dcc6 120%)",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationLedger />

      <section id="destinations" className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="divide-y divide-line-dark">
          {destinations.map((d, i) => (
            <DestinationSpread key={d.id} {...d} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <WhyZilla />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-10 sm:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            More districts are on the way. Start with these four.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-ink/65">
            Reach out and we'll help you find the right trip.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-clay-dark"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
