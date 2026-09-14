import type { Metadata } from "next";
import "./globals.css";
import { LocationProvider } from "@/components/location/location-provider";
import { LanguageProvider } from "@/components/i18n/language-provider";
import { RegisterServiceWorker } from "@/components/pwa/register-service-worker";
import { Suspense } from "react";

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
      <body className="antialiased"><RegisterServiceWorker/><LanguageProvider><Suspense fallback={children}><LocationProvider>{children}</LocationProvider></Suspense></LanguageProvider></body>
    </html>
  );
}
