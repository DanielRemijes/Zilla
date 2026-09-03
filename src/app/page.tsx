"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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

const steps = [
  {
    title: "Pick any district",
    body: "Not a city, not a state - a district. Small enough to actually get to know in a few days.",
  },
  {
    title: "Customize it",
    body: "Shape the itinerary around what you actually want - the pace, the stops, how deep you go.",
  },
  {
    title: "Invite more people",
    body: "Bring your own crew along, or join a small group - either way, it's built around you.",
  },
  {
    title: "Take the slow route home",
    body: "No rushed goodbyes. One last stop, one last meal, before you head back.",
  },
];

const whyPoints = [
  {
    title: "Small groups, by design",
    body: "We cap every trip small enough that conversations stay real - with each other, and with the places we're in.",
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

const HERO_IMAGES = [
  "/images/home_page_hero_banner_1.png",
  "/images/home_page_hero_banner_2.png",
  "/images/home_page_hero_banner_3.png",
  "/images/home_page_hero_banner_4.png",
  "/images/home_page_hero_banner_5.png",
];

const HERO_INDEX_KEY = "zilla_hero_index";

function nextHeroImage() {
  const stored = sessionStorage.getItem(HERO_INDEX_KEY);
  const currentIndex = stored ? parseInt(stored, 10) : -1;
  const nextIndex = (currentIndex + 1) % HERO_IMAGES.length;
  sessionStorage.setItem(HERO_INDEX_KEY, String(nextIndex));
  return HERO_IMAGES[nextIndex];
}

export default function Home() {
  const [heroImage, setHeroImage] = useState<string | null>(null);

  useEffect(() => {
    setHeroImage(nextHeroImage());
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        setHeroImage(nextHeroImage());
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative h-[80svh] sm:h-[80svh] md:h-[90svh] lg:h-[100svh] min-h-[520px] w-full overflow-hidden bg-ink">
        {heroImage && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={heroImage}
            alt="Landscape view of one of Zilla's districts"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 sm:px-6 md:px-10">
          <h1
            className="animate-fade-up max-w-2xl font-display text-4xl leading-[1.15] text-paper sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.08s" }}
          >
            Experience India,{" "}
            <span className="italic text-sand">district by district.</span>
          </h1>

          <p
            className="animate-fade-up mt-3 max-w-md text-sm text-paper/90 sm:mt-4 sm:text-base"
            style={{ animationDelay: "0.16s" }}
          >
            Beyond the familiar places lies a quieter world - stories waiting to be heard.
          </p>

          <div
            className="animate-fade-up mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <Link
              href="/contact"
              className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105 sm:px-7 sm:py-3.5 sm:text-base"
            >
              Get in touch
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-paper/30 bg-paper/20 px-6 py-3 text-sm font-semibold text-paper backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink sm:px-7 sm:py-3.5 sm:text-base"
            >
              Why Zilla
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- DESTINATIONS ---------- */}
      <section id="destinations" className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:py-24">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral-dark">
              Where we go
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Four districts now, <br /> 100 more to go.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
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
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-paper px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-coral sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
                    {d.code}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-white sm:text-[11px]">
                      {d.region}
                    </p>
                    <h3 className="mt-0.5 font-display text-lg text-paper sm:text-xl">
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
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:py-24">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
              How it works
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl">
              A different kind of trip, from the first message.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-line bg-ink-soft/60 p-5 sm:p-6"
              >
                <span className="font-display text-4xl text-coral/80 sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg text-paper sm:mt-4 sm:text-xl">
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
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
            <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-ink-soft sm:h-[420px] md:h-[480px] lg:h-[600px]">
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
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                Fewer stops. More time in each one.
              </h2>

              <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
                {whyPoints.map((p) => (
                  <div key={p.title} className="border-t border-line-dark pt-5">
                    <h3 className="font-display text-lg text-ink sm:text-xl">
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
    </>
  );
}