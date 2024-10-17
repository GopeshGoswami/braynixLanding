import Image from "next/image";
import React from "react";

const Founder = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 md:gap-20 px-4 md:px-0">
      <div className="relative">
        <div className="bg-[#111111] h-full absolute w-full z-10 flex items-start justify-center text-7xl md:text-8xl bottom-0 max-h-[30rem] rounded-t-[60px]">
          <p className="capitalize text-[#FFFFFF12] pt-10">BRAYNIX AI</p>
        </div>
        <Image
          src="/images/founder.png"
          width={600}
          height={400}
          alt=""
          className="w-full z-20 relative"
        />
      </div>
      <div className="space-y-5">
        <h2 className="text-3xl md:text-5xl">Founder&apos;s Note</h2>
        <p className="text-sm md:text-xl">
          "As the founder of Braynix AI, I am proud to lead a team of talented
          individuals who are dedicated to using cutting-edge artificial
          intelligence technologies to solve real-world problems. Our mission is
          to empower businesses and organizations with the tools they need to
          improve their operations and achieve their goals. Whether you need to
          automate processes, gain new insights, or develop custom solutions,
          Braynix AI is here to help you succeed. I believe that the future is
          AI, and I am confident that our team will continue to play a major
          role in shaping that future for the better."
        </p>
        <div>
          <p className="text-[#4484FF] text-xl md:text-3xl">Amitabh Das</p>
          <p className="text-xl">CEO & Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
