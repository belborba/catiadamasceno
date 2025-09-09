"use client";

import { ClassContent } from "./_components/classcontent";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Profile } from "./_components/profile";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClassContent />
      <Profile />
      <Footer />
    </main>
  );
}
