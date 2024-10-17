import React from "react";

const Stats = () => {
  return (
    <section className="max-w-7xl mx-auto space-y-10 h-full flex px-4 sm:px-0">
      <div className="flex g items-center justify-between w-full">
        <div className="flex flex-col gap-10 w-full">
          {/* Projects Delivered */}
          <div className="grid grid-cols-2">
            <p className="text-6xl sm:text-9xl">20+</p>
            <div className="text-sm sm:text-xl">
              <p className="">Successful Projects Delivered</p>
              <p className="text-[#767676]">in last 1year</p>
            </div>
          </div>
          {/* Projects Delivered End */}

          {/* Clients */}
          <div className="grid grid-cols-2">
            <p className="text-6xl sm:text-9xl">5+</p>
            <div className="text-sm sm:text-xl">
              <p className="">Clients</p>
              <p className="text-[#767676]">in last 1year</p>
            </div>
          </div>
          {/* Clients End */}

          {/* Countries Served */}
          <div className="grid grid-cols-2">
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
  );
};

export default Stats;
