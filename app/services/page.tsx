import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-gradient bg-gradient-to-t absolute top-0 w-full h-full z-20 opacity-75" />
      <div className="sm:block hidden">
        <Image
          src="/images/servicesHero.png"
          height={700}
          width={1440}
          className="absolute top-0 w-full z-20 "
          alt=""
        />
      </div>
      <div className=" relative max-w-7xl mx-auto space-y-10 z-30 bg-transparent px-4 sm:px-0 overflow-hidden h-[35vh] sm:h-[70vh] flex flex-col items-center justify-center">
        {/* Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto mt-10">
          <h1 className="text-2xl sm:text-6xl">
            What we actually do to help <br />
            <span className="text-[#0098FF]">Our clients?</span>
          </h1>
        </div>
        {/* Header End */}
      </div>

      {/* Ai Service */}
      <div className="relative flex items-center h-[35vh] sm:h-[70vh] overflow-hidden">
        <div className="ai-service-gradient absolute top-0 z-20 h-full w-full" />
        <Image
          src="/images/aiService.png"
          height={700}
          width={1440}
          alt=""
          className="absolute inset-0 object-cover z-10 w-full h-full"
        />
        <div className="relative z-20 text-white max-w-7xl mx-auto w-full px-4 sm:px-0">
          <div className="max-w-[15rem] sm:max-w-3xl">
            <h2 className="text-3xl sm:text-7xl">AI SERVICE</h2>
            <p className="text-xs sm:text-3xl mt-4">
              We help you realize your business with application programs that
              suit with your business.
            </p>

            <button className="border border-white flex items-center py-3 px-[9px] w-48 gap-5 justify-center rounded-[50px] mt-5 btn bg-transparent text-white hover:bg-transparent hover:border-white">
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
      </div>
      {/* Ai Service End */}

      {/* In Number */}
      <section className="max-w-7xl mx-auto space-y-10 h-full sm:h-[70vh] flex px-4 sm:px-0 py-10 sm:py-0">
        <div className="flex gap-32 items-center justify-between w-full">
          <div className="max-w-2xl space-y-5 sm:block hidden">
            <p className="text-xl">In Number</p>
            <h3 className="text-5xl">
              At Braynix, we are dedicated to providing{" "}
              <span className="text-[#767676]">
                secure, reasonable products
              </span>{" "}
              as per your requirements.
            </h3>
          </div>

          <div className="flex flex-col gap-10 w-full">
            {/* Projects Delivered */}
            <div className="sm:flex sm:flex-col sm:items-start grid grid-cols-2">
              <p className="text-6xl sm:text-9xl">20+</p>
              <div className="text-sm sm:text-xl">
                <p className="">Successful Projects Delivered</p>
                <p className="text-[#767676]">in last 1year</p>
              </div>
            </div>
            {/* Projects Delivered End */}

            {/* Clients */}
            <div className="grid grid-cols-2 sm:hidden">
              <p className="text-6xl sm:text-9xl">5+</p>
              <div className="text-sm sm:text-xl">
                <p className="">Clients</p>
                <p className="text-[#767676]">in last 1year</p>
              </div>
            </div>
            {/* Clients End */}

            {/* Countries Served */}
            <div className="grid grid-cols-2 sm:hidden">
              <p className="text-6xl sm:text-9xl">5+</p>
              <div className="text-sm sm:text-xl">
                <p className="">Countries Served</p>
                <p className="text-[#767676]">in last 1year</p>
              </div>
            </div>
            {/* Countries Served End */}
          </div>
        </div>
      </section>
      {/* In Number End */}
    </>
  );
};

export default page;
