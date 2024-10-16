"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const TrustedBy = () => {
  const trustedData = [
    "/images/pawzibleLogoBig.svg",
    "/images/pawzibleLogoBig.svg",
    "/images/pawzibleLogoBig.svg",
    "/images/pawzibleLogoBig.svg",
    "/images/pawzibleLogoBig.svg",
    "/images/pawzibleLogoBig.svg",
  ];
  return (
    <section className="space-y-24">
      <h2 className="text-6xl max-w-7xl mx-auto">Trusted By</h2>

      {/* Company Logos */}
      <div>
        <Swiper
          spaceBetween={32}
          slidesPerView={5}
          loop={true}
          speed={5000}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {trustedData.map((data, index) => (
            <SwiperSlide key={index}>
              <Image src={data} height={40} width={150} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Company Logos End */}
    </section>
  );
};

export default TrustedBy;
