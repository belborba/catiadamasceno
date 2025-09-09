import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Pompolimpíadas - Cátia Damasceno",
  description:
    "Superaula online e gratuita com Cátia Damasceno: aprenda exercícios de Ginástica Íntima e fortaleça sua intimidade.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunitoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
