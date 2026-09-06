import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/destinations";

const experiences = [
  {
    title: "Eat where locals eat",
    body: "Home kitchens and roadside spots with no sign - just a reputation.",
    icon: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img src="/images/restaurant.png" alt="Restaurant" className="h-7 w-7 object-contain opacity-80" />
    ),
  },
  {
    title: "Stay in the community",
    body: "Homestays over chain hotels. You wake up in the district, not near it.",
    icon: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img src="/images/home.png" alt="Home" className="h-7 w-7 object-contain opacity-80" />
    ),
  },
  {
    title: "Learn a craft, hands-on",
    body: "Sit with a bronze caster or a weaver. Try it, don't just watch it.",
    icon: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img src="/images/pottery.png" alt="Pottery" className="h-7 w-7 object-contain opacity-80" />
    ),
  },
  {
    title: "Move at a walking pace",
    body: "Fewer stops, longer stays. Treat it like a place, not a checklist.",
    icon: (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img src="/images/man.png" alt="Walking pace" className="h-7 w-7 object-contain opacity-80" />
    ),
  },
];

const bookingSteps = [
  {
    title: "Pick your district",
    body: "Browse our locations and find the region that calls to you.",
  },
  {
    title: "Tell us your pace",
    body: "Reach out and let us know who is traveling and what you enjoy.",
  },
  {
    title: "Get your itinerary",
    body: "We sketch out a tailored route, complete with stays and guides.",
  },
  {
    title: "Pack your bags",
    body: "You handle the packing. We handle all the logistics on the ground.",
  },
];

export default function DestinationsPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden bg-ink">
        <Image
          src="/images/home_page_hero_banner_2.png"
          alt="A district landscape waiting to be explored"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

        {/* Pushed content down using justify-end and padding-bottom */}
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-20 sm:px-6 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
            Where we go
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.15] text-paper sm:text-5xl">
            Every district tells a different story.{" "}
            <span className="italic text-sand">We help you live in it.</span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-paper/80 sm:mt-5">
            Forget the usual checklist of sights. We offer a slower way through India, told
            through local food, craft, and the people who call each district home.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#districts"
              className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105 sm:px-7"
            >
              See the districts
            </a>
          </div>
        </div>
      </section>

      {/* ---------- WHAT TO EXPECT (Sticky Layout with Icons) ---------- */}
      <section className="relative bg-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(var(--coral) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 md:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            
            {/* Left: Sticky Tall Media */}
            <div className="sticky top-24 hidden h-[80vh] min-h-[500px] w-full overflow-hidden rounded-3xl lg:block">
              <Image
                src="/images/destinations_1.png"
                alt="Local life in the district"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 0px"
                className="object-cover"
              />
            </div>

            {/* Right: Scrolling Content */}
            <div className="flex flex-col">
              <div className="mb-12">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral-dark">
                  What to expect
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
                  A journey built around the district, not just through it.
                </h2>
              </div>

              <div className="flex flex-col gap-10 sm:gap-12">
                {experiences.map((e) => (
                  <div key={e.title} className="flex gap-5 sm:gap-6">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-coral/90 text-coral-dark">
                      {e.icon}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-display text-xl text-ink sm:text-2xl">
                        {e.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">
                        {e.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- DISTRICTS (4 Column Compact Layout) ---------- */}
      <section id="districts" className="bg-paper-dim">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:px-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral-dark">
              Explore Our Portfolio
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
              Pick one. Go deep.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {destinations.map((d) => (
                <Link key={d.slug} href={`/destinations/${d.slug}`} className="group block">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line-dark bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-ink/5">
                    
                    {/* Card Image - Taller Aspect Ratio (4/5) */}
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-ink-soft">
                    <Image
                        src={d.imageSrc}
                        alt={`${d.name}, ${d.region}`}
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-coral backdrop-blur-md">
                        {d.code}
                    </span>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-coral-dark">
                        {d.region}
                        </p>
                        <h3 className="mt-1.5 font-display text-xl text-ink">
                        {d.name}
                        </h3>
                    </div>
                    
                    <div className="mt-5 flex items-center gap-2 pt-2 border-t border-line-dark">
                        <span className="text-xs font-semibold text-coral-dark transition-colors group-hover:text-coral">
                        View Details
                        </span>
                        <span className="text-coral-dark transition-transform group-hover:translate-x-1 group-hover:text-coral">
                        →
                        </span>
                    </div>
                    </div>
                </div>
                </Link>
            ))}
        </div>
        </div>
      </section>

      {/* ---------- HOW TO BOOK (Timeline Section with Numbers) ---------- */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 md:px-10">
          <div className="max-w-lg text-center mx-auto md:text-left md:mx-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
              Getting Started
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-paper sm:text-4xl">
              How to travel with us
            </h2>
          </div>

          <div className="relative mt-16 sm:mt-20">
            {/* We drastically increase the horizontal gaps here (gap-x-16 and gap-x-24) */}
            <div className="grid gap-12 md:grid-cols-4 md:gap-x-16 lg:gap-x-24">
              {bookingSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center md:items-start md:text-left"
                >
                  {/* The line calculates the exact width to cross the new, wider gaps (4rem on md, 6rem on lg) */}
                  {i < bookingSteps.length - 1 && (
                    <div className="absolute left-8 top-8 hidden h-px w-[calc(100%+4rem)] bg-coral/40 md:block lg:w-[calc(100%+6rem)]" />
                  )}

                  {/* Timeline Number Node */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-coral bg-ink font-display text-2xl text-coral shadow-[0_0_15px_rgba(232,96,44,0.15)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  
                  {/* Added pr-4 (padding-right) to give the text more breathing room horizontally */}
                  <h3 className="mt-6 font-display text-xl text-paper md:pr-4">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70 md:pr-4">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center md:text-left">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-coral px-8 py-4 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}