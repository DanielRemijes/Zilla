"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#destinations", label: "Destinations" },
  { href: "#", label: "School Trips" }, // TODO: point to real page once built
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="bg-gradient-to-b from-ink/90 via-ink/55 to-transparent pb-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-10">
          <Link href="/" className="flex items-center gap-2" aria-label="Zilla home">
            <Image
              src="/images/zilla-logo.png"
              alt="Zilla"
              width={168}
              height={76}
              priority
              className="h-10 w-auto sm:h-11 md:h-12 lg:h-14 xl:h-16"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-between pl-20 md:flex md:pl-24 lg:pl-28 xl:pl-32">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-base font-medium tracking-wide text-paper drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] transition-colors hover:text-coral lg:text-base xl:text-lg"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-coral transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full border border-paper/30 bg-paper/10 px-5 py-2 text-sm font-semibold text-paper backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink lg:px-6 lg:py-2.5 lg:text-sm xl:px-7 xl:text-base"
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/25 text-paper sm:h-10 sm:w-10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-line bg-ink px-4 py-6 sm:px-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-paper/90"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-coral px-6 py-2.5 text-base font-semibold text-ink"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}