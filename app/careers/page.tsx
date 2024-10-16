import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-gradient bg-gradient-to-t absolute top-0 w-full h-full z-20" />
      <section className=" relative max-w-7xl mx-auto space-y-10 z-30 bg-transparent px-4 sm:px-0 overflow-hidden">
        {/* Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto mt-10">
          <h1 className="text-2xl sm:text-6xl">
            We are <span className="text-[#0098FF]">Hiring</span>
          </h1>
          <p className="text-sm sm:text-xl">
            We’re looking for smart, motivated people, No matter where you live
          </p>
        </div>
        {/* Header End */}

        {/* Content */}

        {/* Content End */}
      </section>
    </>
  );
};

export default page;
