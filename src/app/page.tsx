"use client";

import { ClassContent } from "./_components/classcontent";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClassContent />
      <Footer />
    </main>
  );
}
