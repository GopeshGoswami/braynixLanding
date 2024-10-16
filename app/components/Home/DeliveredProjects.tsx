"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const DeliveredProjects = () => {
  const cardsData = [
    {
      id: 1,
      logoSrc: "/images/pawzibleLogo.svg",
      title: "Pawzible",
      description:
        "Best Medical online service.Best Medical online service. Best Medical online service.",
      link: "/",
    },
    {
      id: 2,
      logoSrc: "/images/pawzibleLogo.svg",
      title: "Pawzible",
      description:
        "Best Medical online service.Best Medical online service. Best Medical online service.",
      link: "/",
    },
    {
      id: 3,
      logoSrc: "/images/pawzibleLogo.svg",
      title: "Pawzible",
      description:
        "Best Medical online service.Best Medical online service. Best Medical online service.",
      link: "/",
    },
    {
      id: 4,
      logoSrc: "/images/pawzibleLogo.svg",
      title: "Pawzible",
      description:
        "Best Medical online service.Best Medical online service. Best Medical online service.",
      link: "/",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto space-y-10">
      <h2 className="text-6xl text-center">
        From the Vault - Delivered Projects
      </h2>

      {/* Cards */}
      {/* <div className="flex gap-32"> */}
      <Swiper
        spaceBetween={32}
        slidesPerView={2.2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cardsData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="flex bg-[#111111] rounded-3xl max-w-xl max-h-96 overflow-hidden backdrop-blur-3xl">
              <div className="flex flex-col px-10 gap-5 justify-center">
                <Image src={data.logoSrc} height={60} width={50} alt="" />
                <div className="space-y-3">
                  <p className="text-3xl">{data.title}</p>
                  <div className="space-y-6">
                    <p className="text-lg">{data.description}</p>
                    <button className="border border-white  py-3 px-5 rounded-[50px] text-sm">
                      <Link
                        href={data.link}
                        className="flex items-center gap-2 justify-center "
                      >
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
              </div>
              <div className="grid grid-cols-2">
                <div className="-translate-y-20 flex flex-col gap-5">
                  <Image
                    src="/images/deliveredProjCard1.png"
                    height={120}
                    width={250}
                    alt=""
                  />
                  <Image
                    src="/images/deliveredProjCard2.png"
                    height={120}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="-translate-y-10 flex flex-col gap-5">
                  <Image
                    src="/images/deliveredProjCard1.png"
                    height={120}
                    width={250}
                    alt=""
                  />
                  <Image
                    src="/images/deliveredProjCard2.png"
                    height={120}
                    width={250}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
      {/* Cards End */}
    </section>
  );
};

export default DeliveredProjects;
