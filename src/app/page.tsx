"use client";

import { ClassContent } from "./_components/classes";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Profile } from "./_components/profile";
import { Vs } from "./_components/vs";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClassContent />
      <Vs />
      <Profile />
      <Footer />
    </main>
  );
}
