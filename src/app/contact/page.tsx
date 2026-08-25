const WHATSAPP_NUMBER = "910000000000"; // TODO: replace with Zilla's real WhatsApp number

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 pt-36 pb-16 sm:px-10 sm:pt-44 sm:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
            Get in touch
          </p>
          <h1 className="mt-5 max-w-xl font-display text-4xl leading-[1.15] text-paper sm:text-5xl">
            Tell us where you want to go.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/70">
            Whatsapp is the fastest way to reach us — or use the details
            below.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:px-10 sm:py-20 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-ink">Reach us directly</h2>
            <ul className="mt-6 space-y-5 text-base text-ink/75">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">
                  Email
                </p>
                <a href="mailto:hello@zilla.in" className="hover:text-coral">
                  hello@zilla.in
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">
                  Phone
                </p>
                <a href="tel:+910000000000" className="hover:text-coral">
                  +91 00000 00000
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">
                  WhatsApp
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-coral"
                >
                  Message us on WhatsApp
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-coral-dark">
                  Based in
                </p>
                Bengaluru, India
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-line-dark bg-paper-dim p-6 sm:p-8">
            <h2 className="font-display text-2xl text-ink">
              Planning a trip?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Let us know which district you&apos;re interested in — Udupi,
              Thanjavur, Kannur, or Hampi — and roughly when you&apos;d like
              to travel. We&apos;ll get back to you with dates and details.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-coral-dark"
            >
              Start on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
