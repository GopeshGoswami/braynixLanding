import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className=" mt-10 md:px-0 px-4">
      <div className="relative max-w-4xl mx-auto flex flex-col gap-5 z-30">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-10">
          <div className="space-y-3">
            <h1 className="capitalize text-3xl md:text-7xl text-center">
              Be more{" "}
              <span className="bg-[#4484FF] bg-clip-text text-transparent">
                {" "}
                effective <br /> build software
              </span>{" "}
              with us
            </h1>

            <p className="text-sm md:text-2xl text-center px-0 md:px-28 leading-9">
              We help you realize your business with application programs that
              suit with your business.
            </p>
          </div>

          <Link
            href="/contact"
            className="border border-white btn bg-transparent hover:bg-transparent text-white hover:border-white flex items-center py-3 px-[9px] w-36 md:w-48 gap-5 justify-center rounded-[50px]"
          >
            Let&apos;s Talk
            <Image
              src="/images/heroKnowMore.svg"
              height={20}
              width={20}
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
