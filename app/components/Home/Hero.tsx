import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" mt-10 h-screen max-h-[90vh]">
      <div className="relative max-w-4xl mx-auto flex flex-col gap-5 z-30">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="space-y-3">
            <h1 className="capitalize text-[84px] text-center leading-[96px]">
              Be more{" "}
              <span className="bg-[linear-gradient(91.75deg,#A100FF_47.83%,#00B3FF_94.4%)] bg-clip-text text-transparent">
                {" "}
                effective <br /> build software
              </span>{" "}
              with us
            </h1>

            <p className="text-3xl text-center px-10 leading-9">
              We help you realize your business with application programs that
              suit with your business.
            </p>
          </div>

          <button className="border border-white flex items-center py-3 px-[9px] w-48 gap-5 justify-center rounded-[50px]">
            Know More
            <Image
              src="/images/heroKnowMore.svg"
              height={20}
              width={20}
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="absolute top-[21rem] z-20">
        <div className="relative">
          <Image
            src="/images/heroImg.png"
            width={1440}
            height={810}
            alt=""
            className="w-full "
          />

          <div className="w-full h-full absolute bottom-0 bg-gradient-to-b from-transparent to-[#000000]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
