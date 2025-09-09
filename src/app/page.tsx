"use client";

import { SectionTwo } from "./_components/sectiontwo";
import { SectionThree } from "./_components/sectionthree";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Profile } from "./_components/profile";
import { SectionFour } from "./_components/sectionfour";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Profile />
      <Footer />
    </main>
  );
}
