import React from "react";

const page = () => {
  return (
    <section className="flex items-center justify-center flex-col min-h-[95vh] max-w-7xl mx-auto">
      <p className="coming-soon-text text-white text-5xl md:text-9xl">
        Coming Soon
      </p>
      <div className="w-full max-w-sm md:max-w-2xl flex gap-5 mt-5">
        <input
          type="email"
          placeholder="Email ID"
          className="input input-bordered w-full bg-transparent"
        />
        <button className="btn bg-[#4394EA] text-white hover:bg-[#4394EA] hover:text-white w-32">
          Notify Me
        </button>
      </div>
    </section>
  );
};

export default page;
