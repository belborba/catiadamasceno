"use client";

import { ClassContent } from "./_components/classes";
import { Cta } from "./_components/cta";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Profile } from "./_components/profile";
import { Vs } from "./_components/vs";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClassContent />
      <Cta />
      <Vs />
      <Profile />
      <Footer />
    </main>
  );
}
