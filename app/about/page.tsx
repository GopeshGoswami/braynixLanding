import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../components/About/Hero";
import Mission from "../components/About/Mission";
import Founder from "../components/About/Founder";

const page = () => {
  return (
    <main className="w-full max-w-7xl mx-auto border space-y-32">
      <Hero />
      <Mission />
      <Founder />
    </main>
  );
};

export default page;
