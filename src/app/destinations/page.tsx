import Link from "next/link";
import { destinations } from "@/lib/destinations";

export default function DestinationsPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 pt-36 pb-16 sm:px-10 sm:pt-44 sm:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
            Where we go
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.15] text-paper sm:text-5xl">
            Four districts, each worth a trip of its own.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/70">
            More are on the way — these are the ones ready to book right now.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {destinations.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="group overflow-hidden rounded-2xl border border-line-dark bg-paper transition-shadow hover:shadow-lg hover:shadow-ink/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.imageSrc}
                    alt={`${d.name}, ${d.region}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-paper backdrop-blur-sm">
                    {d.code}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">
                    {d.region}
                  </p>
                  <h2 className="mt-1.5 font-display text-2xl text-ink">
                    {d.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {d.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-coral-dark group-hover:text-coral">
                    See the district →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
