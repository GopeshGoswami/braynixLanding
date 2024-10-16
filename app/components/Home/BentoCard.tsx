import Image from "next/image";
import React from "react";

const BentoCard = () => {
  return (
    <div className="bg-[#111111] h-[300px] flex items-end px-5 py-10 rounded-3xl">
      <div className="space-y-5 w-full">
        <p className="text-xl">Healthcare Case Study</p>
        <div className="flex justify-between items-end">
          <h3 className="text-5xl max-w-xs">
            Generative AI in the driver’s seat: BMW
          </h3>
          <Image src="/images/bentoIcon.svg" width={30} height={30} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
