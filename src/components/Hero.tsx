import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      {/* layered dusk gradient — swap for a real photo, see /public/images/destinations README */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 0%, #5a2f1f 0%, transparent 55%), radial-gradient(100% 80% at 85% 10%, #3c4a34 0%, transparent 50%), linear-gradient(180deg, #1c1712 0%, #221b14 55%, #16120e 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:px-10 sm:pb-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
          Now exploring four districts
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-paper sm:text-6xl md:text-7xl">
          Experiencing India,
          <br />
          <span className="italic text-sand">district by district.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
          Zilla builds small-group journeys into the districts most
          itineraries skip — led by the people who actually know them.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="#destinations"
            className="rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-clay-dark"
          >
            See where we go
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-paper/25 px-7 py-3.5 text-sm font-semibold text-paper/90 transition-colors hover:border-paper/50"
          >
            Why Zilla
          </Link>
        </div>
      </div>
    </section>
  );
}
