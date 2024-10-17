"use client";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { BsBriefcase } from "react-icons/bs";

import React, { useState } from "react";

const page = () => {
  const filterItems = [
    "View All",
    "Design",
    "Development",
    "HR",
    "Sales",
    "Social Media Marketing",
  ];

  const cardData = [
    {
      id: 1,
      title: "Design",
      role: "Product Designer",
      location: "Remote",
      time: "Full-Time",
      experience: "2-3 yrs Exp.",
      tag: "Design",
    },
    {
      id: 2,
      title: "Software Development",
      role: "Engineer Manager",
      location: "Remote",
      time: "Full-Time",
      experience: "2-3 yrs Exp.",
      tag: "Development",
    },
    {
      id: 3,
      title: "HR",
      role: "Humar Resources Executive",
      location: "Remote",
      time: "Full-Time",
      experience: "2-3 yrs Exp.",
      tag: "HR",
    },
    {
      id: 4,
      title: "Sales",
      role: "Sales Executive",
      location: "Remote",
      time: "Full-Time",
      experience: "2-3 yrs Exp.",
      tag: "Sales",
    },
    {
      id: 5,
      title: "Digital Marketer",
      role: "Social Media Marketing",
      location: "Remote",
      time: "Full-Time",
      experience: "2-3 yrs Exp.",
      tag: "Social Media Marketing",
    },
  ];

  const getFilteredCards = () => {
    if (filter === "View All") return cardData;

    return cardData.filter((card) => card.tag === filter);
  };
  const [filter, setFilter] = useState("View All");
  return (
    <>
      <div className="bg-gradient bg-gradient-to-t absolute top-0 w-full h-full z-20" />
      <section className=" relative max-w-5xl mx-auto space-y-5 md:space-y-10 z-30 bg-transparent px-4 sm:px-0 overflow-hidden min-h-screen">
        {/* Header */}
        <div className="text-center space-y-5 max-w-lg mx-auto mt-10">
          <h1 className="text-2xl sm:text-6xl">
            We are <span className="text-[#0098FF]">Hiring</span>
          </h1>
          <p className="text-sm sm:text-xl md:px-0 px-10">
            We’re looking for smart, motivated people, No matter where you live
          </p>
        </div>
        {/* Header End */}

        {/* Content */}
        {/* Filter */}
        <div className="hidden md:flex justify-between">
          {filterItems.map((data, index) => (
            <div key={index}>
              <p
                onClick={() => setFilter(data)}
                className={`text-base px-3 py-2 rounded-xl ${
                  filter === data
                    ? "bg-[#4484FF21] text-[#4484FF]"
                    : "hover:bg-[#4484FF21] hover:text-[#4484FF] cursor-pointer duration-300"
                }`}
              >
                {data}
              </p>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-between items-center pt-10">
          <h2 className="text-lg font-medium">Open Position</h2>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="m-1 py-2 px-3 rounded-lg bg-[#FFFFFF12]"
            >
              <p className="text-xs">View All</p>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-[#181E3C] rounded-box z-[1] w-52 p-2 shadow"
            >
              {filterItems.map((data, index) => (
                <li onClick={() => setFilter(data)} key={index}>
                  <p>{data}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Filter End */}

        <div className="space-y-5">
          {/* Cards */}
          {getFilteredCards().map((data) => (
            <div
              className="border flex flex-col gap-5 md:gap-10 px-5 py-3 rounded-xl md:rounded-[20px]"
              key={data.id}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs md:text-xl text-[#4484FF]">
                    {data.title}
                  </p>
                  <p className="text-sm md:text-xl">{data.role}</p>
                </div>
                <Link
                  href={"/"}
                  className="flex items-center gap-2 justify-center text-[#4484FF] text-xs md:text-xl"
                >
                  View Job
                  <IoArrowForward className="text-xl -rotate-45" />
                </Link>
              </div>

              <div className="flex gap-5">
                <div className="flex items-center gap-2">
                  <CiLocationOn className="text-xs md:text-xl" />
                  <p className="text-xs md:text-xl">{data.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <CiClock2 className="text-xs md:text-xl" />
                  <p className="text-xs md:text-xl">{data.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <BsBriefcase className="text-xs md:text-xl" />
                  <p className="text-xs md:text-xl">{data.experience}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Cards End */}
        </div>
        {/* Content End */}
      </section>
    </>
  );
};

export default page;
