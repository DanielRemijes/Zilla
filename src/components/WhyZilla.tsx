const points = [
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

export default function WhyZilla() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">
            Why Zilla
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            We're early — and building this deliberately.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {points.map((p, i) => (
            <div key={p.title} className="border-t border-line pt-6">
              <span className="font-display text-sm text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/65">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
