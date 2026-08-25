import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "@/lib/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <section className="relative">
        <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden bg-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={destination.imageSrc}
            alt={`${destination.name}, ${destination.region}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-14 sm:px-10">
            <Link
              href="/destinations"
              className="mb-6 w-fit text-sm font-medium text-paper/70 hover:text-paper"
            >
              ← All destinations
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
              {destination.code} — {destination.region}
            </p>
            <h1 className="mt-4 font-display text-5xl text-paper sm:text-6xl">
              {destination.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:px-10 sm:py-20 md:grid-cols-[1fr_260px] md:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-ink/75">
              {destination.longDescription}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-dark">
              Highlights
            </p>
            <ul className="mt-4 space-y-3">
              {destination.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-lg border border-line-dark px-4 py-2.5 text-sm font-medium text-ink/75"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-10 sm:py-20">
          <h2 className="mx-auto max-w-xl font-display text-3xl leading-tight text-paper sm:text-4xl">
            Interested in {destination.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-paper/65">
            Reach out and we&apos;ll walk you through the trip.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-coral-dark"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
