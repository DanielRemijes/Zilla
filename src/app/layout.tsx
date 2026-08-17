import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Zilla | Experiencing India, District by District",
  description:
    "Zilla crafts small-group journeys into India's lesser-known districts — starting with Udupi, Thanjavur, Kannur, and Hampi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-paper text-ink"
        style={{
          fontFamily:
            "var(--font-sans), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <style>{`
          :root {
            --font-fraunces: 'Fraunces', serif;
            --font-inter: 'Inter', sans-serif;
          }
        `}</style>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
