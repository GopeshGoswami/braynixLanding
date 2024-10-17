import React from "react";
import Hero from "../components/About/Hero";
import Mission from "../components/About/Mission";
import Founder from "../components/About/Founder";
import Stats from "../components/About/Stats";

const page = () => {
  return (
    <main className="w-full max-w-7xl mx-auto space-y-24 md:space-y-32">
      <Hero />
      <Mission />
      <Founder />
      <Stats />
    </main>
  );
};

export default page;
