const entries = [
  { code: "KA·01", name: "Udupi" },
  { code: "TN·02", name: "Thanjavur" },
  { code: "KL·03", name: "Kannur" },
  { code: "KA·04", name: "Hampi" },
];

export default function DestinationLedger() {
  return (
    <div className="border-y border-line-dark bg-sand">
      <div className="mx-auto flex max-w-7xl flex-wrap divide-y divide-line-dark sm:flex-nowrap sm:divide-y-0 sm:divide-x">
        {entries.map((entry) => (
          <a
            key={entry.code}
            href={`#${entry.name.toLowerCase()}`}
            className="group flex flex-1 items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-ink/5 sm:justify-start sm:px-8"
          >
            <span className="font-display text-sm tracking-wide text-clay-dark">
              {entry.code}
            </span>
            <span className="text-sm font-medium text-ink/80 transition-colors group-hover:text-ink">
              {entry.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
