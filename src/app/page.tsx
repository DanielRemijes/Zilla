import Link from "next/link";

const destinations = [
  {
    id: "udupi",
    code: "KA·01",
    name: "Udupi",
    region: "Coastal Karnataka",
    imageSrc: "/images/destinations/udupi.jpg",
  },
  {
    id: "thanjavur",
    code: "TN·02",
    name: "Thanjavur",
    region: "Delta Tamil Nadu",
    imageSrc: "/images/destinations/thanjavur.jpg",
  },
  {
    id: "kannur",
    code: "KL·03",
    name: "Kannur",
    region: "Malabar Coast, Kerala",
    imageSrc: "/images/destinations/kannur.jpg",
  },
  {
    id: "hampi",
    code: "KA·04",
    name: "Hampi",
    region: "Deccan Plateau, Karnataka",
    imageSrc: "/images/destinations/hampi.jpg",
  },
];

const stats = [
  { value: "15+", label: "Years combined guide experience" },
  { value: "4", label: "Districts, and counting" },
  { value: "100%", label: "Locally led trips" },
  { value: "Low-impact", label: "Sustainable by design" },
];

const steps = [
  {
    title: "Pick a district",
    body: "Not a city, not a state — a district. Small enough to actually get to know in a few days.",
  },
  {
    title: "Meet your local host",
    body: "Every trip is planned and led by someone who grew up there, not a rotating guide.",
  },
  {
    title: "Travel in a small group",
    body: "We cap group size on purpose, so it never feels like a tour bus.",
  },
  {
    title: "Take the slow route home",
    body: "Fewer stops, more time in each one. You'll leave with stories, not just photos.",
  },
];

const whyPoints = [
  {
    title: "Small groups, by design",
    body: "We cap every trip small enough that conversations stay real — with each other, and with the places we're in.",
  },
  {
    title: "Led by people who live there",
    body: "Every district is guided by someone from that district. Their routes, their relationships, their stories.",
  },
  {
    title: "Built with the community, not around it",
    body: "We plan alongside the towns we visit, so the trip actually benefits the people who make it worth taking.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home_page_hero_banner.jpg"
          alt="Landscape view of one of Zilla's districts"
          className="absolute inset-0 h-full w-full object-cover object-[30%_center] sm:object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/30 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-10">
          <h1
            className="animate-fade-up mt-5 max-w-2xl font-display text-5xl leading-[1.12] text-paper sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.08s" }}
          >
            Experience India,{" "}
            <span className="italic text-sand">district by district.</span>
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-md text-base leading-relaxed text-white sm:text-lg"
            style={{ animationDelay: "0.16s" }}
          >
            Immersive journeys into India’s lesser-known regions - crafted with care, connection, and community.
          </p>
          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <Link
              href="#destinations"
              className="rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              See where we go
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-paper/30 bg-paper/10 px-7 py-3.5 text-sm font-semibold text-paper backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink"
            >
              Why Zilla
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <div className="border-y border-line-dark bg-paper-dim">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4 sm:px-10 sm:py-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-ink sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs leading-snug text-ink/55 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- DESTINATIONS ---------- */}
      <section id="destinations" className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral-dark">
              Where we go
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Four districts, each worth a trip of its own.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {destinations.map((d) => (
              <div key={d.id} className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-ink-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.imageSrc}
                    alt={`${d.name}, ${d.region}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-paper/100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-coral backdrop-blur-sm">
                    {d.code}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[11px] font-medium uppercase tracking-wide text-white">
                      {d.region}
                    </p>
                    <h3 className="mt-0.5 font-display text-xl text-paper">
                      {d.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
              How it works
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-paper sm:text-5xl">
              A different kind of trip, from the first message.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-line bg-ink-soft/60 p-6"
              >
                <span className="font-display text-5xl text-coral/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl text-paper">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY ZILLA ---------- */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
            <div className="relative h-[350px] sm:h-[600px] w-full w-full overflow-hidden rounded-2xl bg-ink-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about.jpg"
                alt="A Zilla guide with travelers"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral-dark">
                Why Zilla
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Fewer stops. More time in each one.
              </h2>

              <div className="mt-10 space-y-8">
                {whyPoints.map((p, i) => (
                  <div key={p.title} className="border-t border-line-dark pt-5">
                    <h3 className="font-display text-xl text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CLOSING BANNER ---------- */}
      <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home_page_bottom_banner.jpg"
          alt="A district waiting to be explored"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-6 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
            Start planning
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-paper sm:text-5xl">
            Your district is waiting.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white">
            Tell us which district you&apos;re drawn to and roughly when
            you&apos;d like to travel — we&apos;ll handle the rest.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Get in touch
            </Link>
            <Link
              href="#destinations"
              className="rounded-full border border-paper/30 bg-paper/10 px-7 py-3.5 text-sm font-semibold text-paper backdrop-blur-xs transition-colors hover:bg-paper hover:text-ink"
            >
              See destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}