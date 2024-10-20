import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 text-center md:text-left md:gap-20  px-4 sm:px-0">
      <div className="space-y-5 order-2 md:order-1">
        <h2 className="text-3xl md:text-5xl">Our Mission</h2>
        <p className="text-sm md:text-xl">
          To become the world&apos;s largest customer centric AI company with
          products flourishing in myriad of streams by determining the business
          requirements and developing solutions to cater its needs.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <Image
          src="/images/ourProduct.png"
          width={600}
          height={400}
          alt=""
          className="w-full rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Mission;
