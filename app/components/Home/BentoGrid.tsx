import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import BentoCard from "./BentoCard";
import Link from "next/link";

const BentoGrid = () => {
  return (
    <section className="max-w-7xl mx-auto space-y-10">
      <h2 className="text-6xl text-center">
        We are making bold moves, together
      </h2>

      <div className="grid grid-rows-2 gap-10">
        <div className="grid grid-cols-2 gap-10 h-full">
          <BentoCard />
          <BentoCard />
        </div>
        <div className="grid grid-cols-3 gap-10 h-full">
          <BentoCard />
          <BentoCard />
          <BentoCard />
        </div>
      </div>

      <Link
        href="/case-studies"
        className="flex items-center gap-2  text-[#4484FF]"
      >
        <p className="text-2xl">View All Case Studies</p>
        <FaArrowRightLong className="size-6" />
      </Link>
    </section>
  );
};

export default BentoGrid;
