"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919940028839";
const WHATSAPP_MESSAGE_GENERAL =
  "Hi Zilla! I'd like to know more about your trips.";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const canSubmit = name.trim().length > 0 && message.trim().length > 0;

  // Dummy submit — no backend wired up yet. Once a server exists, replace
  // this with a real fetch('/api/contact', { method: 'POST', ... }) call.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setSubmitted(true);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-ink">
        <svg
          className="pointer-events-none absolute -right-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 opacity-40 sm:opacity-60"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="230" cy="150" r="45" stroke="var(--coral)" strokeWidth="1" />
          <circle cx="150" cy="250" r="70" stroke="var(--sand)" strokeWidth="1" />
          <circle cx="290" cy="270" r="30" stroke="var(--sand)" strokeWidth="1" />
          <circle cx="230" cy="150" r="3" fill="var(--coral)" />
          <circle cx="290" cy="270" r="3" fill="var(--coral)" />
        </svg>

        <div className="pointer-events-none absolute left-0 top-20 h-px w-full bg-[repeating-linear-gradient(90deg,var(--sand)_0,var(--sand)_2px,transparent_2px,transparent_10px)] opacity-40" />
        <div className="pointer-events-none absolute left-0 top-[500px] h-px w-full bg-[repeating-linear-gradient(90deg,var(--sand)_0,var(--sand)_2px,transparent_2px,transparent_10px)] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-20 sm:px-10 sm:pt-44 sm:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
            Get in touch
          </p>
          <h1 className="mt-5 max-w-xl font-display text-4xl leading-[1.15] text-paper sm:text-5xl">
            Tell us where you want to go.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/70">
            WhatsApp is the fastest way to reach us — or use the details
            below.
          </p>
        </div>
      </section>

      {/* ---------- CONTACT DETAILS ---------- */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:px-10 sm:py-20 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-ink">Reach us directly</h2>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper-dim text-coral-dark">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6l8 6 8-6M4 6v12h16V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">Email</p>
                  <a href="mailto:hello@zilla.in" className="text-base font-medium text-ink hover:text-coral-dark">
                    hello@zilla.in
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper-dim text-coral-dark">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.6c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">Phone</p>
                  <a href="tel:+910000000000" className="text-base font-medium text-ink hover:text-coral-dark">
                    +91 00000 00000
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper-dim text-coral-dark">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3 .8.8-2.9-.2-.3C3.6 14.7 3 13.4 3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">WhatsApp</p>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_GENERAL)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-base font-medium text-coral-dark underline decoration-coral-dark/40 underline-offset-4 hover:text-coral hover:decoration-coral">
                    Chat with us
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                      <path d="M7 17 17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper-dim text-coral-dark">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">Based in</p>
                  <p className="text-base font-medium text-ink">Bengaluru, India</p>
                </div>
              </li>
            </ul>
          </div>

          {/* ---------- SIMPLE FORM ---------- */}
          <div className="relative overflow-hidden rounded-2xl border border-line-dark bg-ink p-6 sm:p-8">
            <h2 className="relative font-display text-2xl text-paper">Send us a message</h2>
            <p className="relative mt-2 text-sm leading-relaxed text-paper/65">
              We&apos;ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="relative mt-6 space-y-4">
              <div>
                <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wide text-paper/45">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-lg border border-line-dark bg-paper/5 px-3 py-2.5 text-sm text-paper placeholder:text-paper/30 outline-none focus:border-coral"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-phone" className="text-xs font-semibold uppercase tracking-wide text-paper/45">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91"
                    className="mt-1.5 w-full rounded-lg border border-line-dark bg-paper/5 px-3 py-2.5 text-sm text-paper placeholder:text-paper/30 outline-none focus:border-coral"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wide text-paper/45">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="mt-1.5 w-full rounded-lg border border-line-dark bg-paper/5 px-3 py-2.5 text-sm text-paper placeholder:text-paper/30 outline-none focus:border-coral"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wide text-paper/45">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Tell us what you're planning..."
                  className="mt-1.5 w-full resize-none rounded-lg border border-line-dark bg-paper/5 px-3 py-2.5 text-sm text-paper placeholder:text-paper/30 outline-none focus:border-coral"
                />
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className={`mt-2 inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-transform ${
                  canSubmit
                    ? "bg-coral text-ink hover:scale-105"
                    : "cursor-not-allowed bg-coral/30 text-ink/40"
                }`}
              >
                Send message
              </button>
              {!canSubmit && (
                <p className="text-xs text-paper/40">Add your name and a message to continue.</p>
              )}
            </form>

            {submitted && (
              <div className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-4">
                <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper shadow-lg ring-1 ring-line-dark">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-coral">
                    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Message sent
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}