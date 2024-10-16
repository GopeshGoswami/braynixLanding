import Link from "next/link";
import React from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto space-y-10">
      <h2 className="text-6xl text-center">Got a Project ? Just Tell Us!</h2>

      <div className="flex items-center justify-center">
        <button className="bg-[#4484FF] rounded-full max-w-xs w-full py-3">
          <Link
            href="/"
            className="flex items-center gap-2 justify-between px-5 w-full "
          >
            <p className="text-2xl">Enquiry Now</p>
            <FaArrowRightLong className="text-2xl" />
          </Link>
        </button>
      </div>
    </section>
  );
};

export default CTA;
