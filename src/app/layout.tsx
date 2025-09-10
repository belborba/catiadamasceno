import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nunitoFont = localFont({
  src: "../fonts/nunitosans.woff2",
  variable: "--font-nunito",
  fallback: ["sans-serif"],
  display: "swap",
});

const parisFont = localFont({
  src: "../fonts/paris2024.woff2",
  variable: "--font-title",
  fallback: ["sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pompolimpíadas - Cátia Damasceno",
  description:
    "Superaula online e gratuita com Cátia Damasceno: aprenda exercícios de Ginástica Íntima e fortaleça sua intimidade.",

  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Pompolimpíadas - Cátia Damasceno",
    description:
      "Superaula online e gratuita com Cátia Damasceno: aprenda exercícios de Ginástica Íntima e fortaleça sua intimidade.",
    url: "https://",
    type: "website",
    images: [
      {
        url: "/images/backgrounds/bg-desktop-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pompolimpíadas - Superaula de Ginástica Íntima",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${nunitoFont.variable} ${parisFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
