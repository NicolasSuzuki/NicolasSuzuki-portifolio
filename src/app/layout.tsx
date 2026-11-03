import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicolas Suzuki — Front-end Engineer",
  description: "Portfólio de Nicolas Suzuki. Engenharia frontend com React, Next.js e TypeScript, arquitetura de interfaces e visão de produto.",
  robots: { index: false, follow: false },
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Nicolas Suzuki — Front-end Engineer",
    description: "Interfaces bem construídas. Produtos que fazem sentido.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#111211" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
