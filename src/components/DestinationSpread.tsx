type DestinationSpreadProps = {
  id: string;
  code: string;
  name: string;
  region: string;
  description: string;
  highlights: string[];
  gradient: string;
  imageSrc?: string;
  reverse?: boolean;
};

export default function DestinationSpread({
  id,
  code,
  name,
  region,
  description,
  highlights,
  gradient,
  imageSrc,
  reverse = false,
}: DestinationSpreadProps) {
  return (
    <div
      id={id}
      className={`grid scroll-mt-24 gap-10 py-16 sm:py-20 md:grid-cols-2 md:items-center md:gap-16 ${
        reverse ? "md:[direction:rtl]" : ""
      }`}
    >
      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:[direction:ltr]"
        style={
          imageSrc
            ? { backgroundImage: `url(${imageSrc})`, backgroundSize: "cover", backgroundPosition: "center" }
            : { background: gradient }
        }
      >
        {!imageSrc && (
          <div className="absolute inset-0 flex items-end p-6">
            <span className="rounded-full bg-ink/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-paper/80 backdrop-blur-sm">
              Photo coming soon
            </span>
          </div>
        )}
      </div>

      <div className="md:[direction:ltr]">
        <span className="font-display text-sm tracking-wide text-clay">
          {code} — {region}
        </span>
        <h3 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
          {name}
        </h3>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
          {description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <li
              key={h}
              className="rounded-full border border-line-dark px-3.5 py-1.5 text-xs font-medium text-ink/70"
            >
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
