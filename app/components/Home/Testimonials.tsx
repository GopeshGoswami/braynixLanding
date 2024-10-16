"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Testimonials = () => {
  const swiperRef = useRef(null);
  const slides = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.",
      author: "Aaron Charles Erlan",
      role: "Photographer and Civilians",
    },

    {
      text: "Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.",
      author: "Aaron Charles Erlan",
      role: "Photographer and Civilians",
    },

    {
      text: "Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus leo in mattis sagittis facilisi adipiscing. Scelerisque scelerisque consect.",
      author: "Aaron Charles Erlan",
      role: "Photographer and Civilians",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="flex items-center gap-10">
        <h2 className="text-6xl">What people have to say</h2>
        <Image
          src="/images/testimonialLogo.svg"
          width={60}
          height={60}
          alt=""
        />
      </div>
      {/* Header End */}

      <div className="space-y-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1.5}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="bg-black text-white p-8"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="border-r border-dotted">
              {({ isActive, isNext }) => (
                // <div className="mb-8">
                <div
                  className={`pr-8 pb-8 transition-opacity duration-300 ${
                    isNext ? "opacity-50" : "opacity-100"
                  }`}
                >
                  <p className="text-lg mb-6">{slide.text}</p>
                  <div className="flex items-center">
                    <img
                      src="/images/testimonialProfile.png"
                      alt="Author"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-blue-500 font-semibold text-xl">
                        {slide.author}
                      </h3>
                      <p className="text-lg">{slide.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" bottom-4 right-4 flex space-x-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
