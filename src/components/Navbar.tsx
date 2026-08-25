"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="bg-gradient-to-b from-ink/90 via-ink/55 to-transparent pb-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
          <Link href="/" className="flex items-center gap-2" aria-label="Zilla home">
            <Image
              src="/images/zilla-logo.png"
              alt="Zilla"
              width={168}
              height={76}
              priority
              className="h-11 w-auto sm:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-paper drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] transition-colors hover:text-coral"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-coral transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-full border border-paper/30 bg-paper/10 px-6 py-2.5 text-sm font-semibold text-paper backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-paper md:hidden"
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
        <div className="border-b border-line bg-ink px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-paper/90"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-coral px-6 py-2.5 text-sm font-semibold text-ink"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
