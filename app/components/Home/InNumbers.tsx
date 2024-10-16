import React from "react";

const InNumbers = () => {
  return (
    <section className="max-w-7xl mx-auto space-y-10">
      <div className="flex gap-32 items-center justify-between">
        <div className="max-w-2xl space-y-5">
          <p className="text-xl">In Number</p>
          <h3 className="text-5xl">
            At Braynix, we are dedicated to providing{" "}
            <span className="text-[#767676]">secure, reasonable products</span>{" "}
            as per your requirements.
          </h3>
        </div>

        <div>
          <p className="text-9xl">20+</p>
          <div className="text-xl">
            <p className="">Successful Projects Delivered</p>
            <p className="text-[#767676]">in last 1year</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InNumbers;
