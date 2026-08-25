import Link from "next/link";

const features = [
  {
    title: "Small Groups, Big Connection",
    body: "Our groups range from 8 to 18 guests - just enough for shared energy, never too many to lose intimacy. Small groups allow us to explore deeper, stay at locally run places, and offer experiences large groups can't access. Solo travellers are always welcome - we offer roommate pairing or private upgrades for comfort and ease.",
    imageSrc: "/images/small-groups.jpg",
  },
  {
    title: "Journeys Co-Created with Local Communities",
    body: "We believe those who live in a place should shape how it's shared. That's why each trip is co-designed with local hosts, artisans, and cultural experts - people whose voices lead the experience and whose livelihoods benefit from it. It's not scripted; it's grounded and real.",
    imageSrc: "/images/local-communities.jpg",
  },
  {
    title: "Built Responsibly from the Ground Up",
    body: "Responsibility isn't an add-on for us - it's in the design. We work with homegrown partners, track our impact, and offset emissions by planting native trees for every guest. Every detail, from where you stay to how you move, is chosen with care for community and climate in mind.",
    imageSrc: "/images/responsible.jpg",
  },
  {
    title: "The Offbeat, Made Effortless",
    body: "Going off the beaten path shouldn't feel difficult. We handle the logistics - travel, meals, permissions, everything - so you can be fully present. Each journey is led by an on-ground Zilla facilitator who travels with the group, stays with you, and is available around the clock to make things seamless.",
    imageSrc: "/images/offbeat.jpg",
  },
  {
    title: "We Take You Beyond the Usual - Mindfully",
    body: "Our journeys focus on India's overlooked districts - places rich in heritage, landscape, and life. These destinations shift attention away from over-touristed spots, offering travellers something more personal and less extractive. Even when we visit the well-known, we go with intention: in small groups, with low-impact choices, and deep respect for local life.",
    imageSrc: "/images/beyond-usual.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about_page_hero_banner.jpg"
          alt="A Zilla journey in progress"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/45 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-14 sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
            About Zilla
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.15] text-paper sm:text-5xl md:text-6xl">
            Rethinking the way India travels.
          </h1>
        </div>
      </section>

      {/* ---------- ORIGIN STORY ---------- */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 sm:py-24 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-ink/75 sm:text-lg">
            <p>
              The idea of Zilla began with a question:{" "}
              <em className="text-ink">
                what if we could explore India more mindfully - in a way that
                uplifts the places we visit, instead of overwhelming them?
              </em>
            </p>
            <p>
              As more of us take time to travel, our footsteps often return
              to the same beloved destinations - Goa, Ooty, Coorg. Beautiful,
              yes - but increasingly burdened by the weight of routine, ease,
              and repetition.
            </p>
            <p>
              Yet India is vast. Beyond the usual lies a quieter world - of
              districts rarely spoken of, stories waiting to be heard, and
              landscapes untouched by the crowds.
            </p>
            <p>
              Zilla was created to help travelers rediscover these
              overlooked regions - and, at times, revisit the familiar, but
              with fresh eyes and deeper care. We travel slower, in smaller
              groups, led by local voices. Less extraction. More connection.
            </p>
          </div>

          <div className="flex items-start md:items-center">
            <blockquote className="border-l-2 border-coral pl-6 sm:pl-8">
              <p className="font-display text-2xl italic leading-snug text-ink sm:text-3xl">
                &ldquo;The idea was never just to move people - but to move
                them toward something better.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ---------- WHY TRAVEL WITH ZILLA ---------- */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral-dark">
              Why travel with Zilla
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Not just a break from routine - a more meaningful way to move
              through the world.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              We believe travel can uplift, inspire, and connect - when done
              with intention. At Zilla, every journey is designed to help
              you slow down, look deeper, and feel part of something
              greater than yourself - while giving back to the places that
              welcome you in.
            </p>
          </div>

          <div className="mt-16 space-y-16 sm:space-y-20">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`grid gap-8 md:grid-cols-2 md:items-center md:gap-14 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink-soft md:[direction:ltr]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.imageSrc}
                    alt={f.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:[direction:ltr]">
                  <h3 className="font-display text-2xl text-ink sm:text-3xl">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink/70">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CLOSING BANNER ---------- */}
      <section className="relative h-[70vh] min-h-[360px] w-full overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about_bottom_ctc.jpg"
          alt="A district waiting to be explored"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto flex h-full max-w-2xl flex-col items-center justify-center px-6 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
            This is just the beginning
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-paper sm:text-5xl">
            The districts won&apos;t wait. Neither should you.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-paper/70">
            Four journeys are ready right now - each one built the way we
            just told you, not the way most trips are sold.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#destinations"
              className="rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Browse destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}