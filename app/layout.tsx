import type { Metadata } from "next";
import "./globals.css";
import { LocationProvider } from "@/components/location/location-provider";

export const metadata: Metadata = {
  title: { default: "Marhaba Salem Resort", template: "%s · Marhaba Salem" },
  description: "Votre compagnon digital pendant votre séjour au Marhaba Salem Resort.",
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
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased"><LocationProvider>{children}</LocationProvider></body>
    </html>
  );
}
