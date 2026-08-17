import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zilla | Travel Beyond the Ordinary",
  description: "Zilla — plan and discover unforgettable travel experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
