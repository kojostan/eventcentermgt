import type { Metadata } from "next";
import "./globals.css";
import "./details.css";
import "./finishing.css";

export const metadata: Metadata = {
  title: {default: "Asenso Hall Event Center | Celebrate & Gather", template: "%s | Asenso Hall"},
  description: "A welcoming church-owned venue in Fairfield, Ohio for weddings, celebrations, conferences, and community gatherings. Members and non-members are welcome.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
