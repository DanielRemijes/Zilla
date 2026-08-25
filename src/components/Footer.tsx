import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-ink-soft text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image
              src="/images/zilla-logo.png"
              alt="Zilla"
              width={168}
              height={76}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/65">
              We're a young company crafting small-group journeys into
              India&apos;s districts that don&apos;t usually make the
              itinerary — one region, one community, at a time.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/45">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm text-paper/75">
              <li>
                <Link href="/" className="hover:text-coral">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#destinations" className="hover:text-coral">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-coral">
                  About Zilla
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/45">
              Get in touch
            </p>
            <ul className="mt-5 space-y-3 text-sm text-paper/75">
              <li>
                <a href="mailto:hello@zilla.in" className="hover:text-coral">
                  hello@zilla.in
                </a>
              </li>
              <li>
                <a href="tel:+910000000000" className="hover:text-coral">
                  +91 00000 00000
                </a>
              </li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Zilla. All rights reserved.</p>
          <p>Currently exploring Udupi · Thanjavur · Kannur · Hampi</p>
        </div>
      </div>
    </footer>
  );
}
