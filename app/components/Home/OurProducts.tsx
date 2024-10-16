import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurProducts = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 place-items-center gap-10">
        <Image src="/images/ourProduct.png" width={600} height={400} alt="" />

        <div className="flex flex-col space-y-5 ">
          <p className="text-base">Our Product</p>
          <h2 className="text-6xl">
            Unleashing Our Latest Products to <br /> the World
          </h2>

          <p className="text-base">
            We have worked with various kinds of clients from more than 50
            countries around the world and we continue to strive to provide the
            best service
          </p>
          <button className="border border-white  py-3 px-5 rounded-[50px] text-sm max-w-44 w-full">
            <Link href="/" className="flex items-center gap-2 justify-center ">
              Know More
              <Image
                src="/images/heroKnowMore.svg"
                height={20}
                width={20}
                alt=""
              />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
