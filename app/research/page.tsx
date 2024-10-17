"use client";
import React, { useRef } from "react";
import TableContents from "../components/research/TableContents";
import {
  TCContext,
  useTCContextValues,
} from "../components/research/TCContext";
import TrackedSection from "../components/research/TrackedSection";
import Hero from "../components/research/Hero";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const { values } = useTCContextValues();
  const scrollContainerRef = useRef(null);
  return (
    <>
      <Hero />
      {/* <TCContext.Provider value={values}> */}
      <TCContext.Provider value={{ ...values, scrollContainerRef }}>
        {/* <main className="grid grid-cols-[10%_1fr_10%] lg:grid-cols-[15%_1fr_15%] my-20"> */}
        <main
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32 mt-20 max-w-7xl mx-auto max-h-[70vh] overflow-scroll"
          ref={scrollContainerRef}
        >
          <TableContents />
          <article className="min-h-screen mx-auto">
            {tableData.map((data) => (
              <TrackedSection
                sectionId={data.sectionId}
                tcTitle={data.tcTitle}
                className="mb-10 space-y-5"
                key={data.sectionId}
                tcText={data.tcText}
                isFirst={data.sectionId === 0}
                isLast={data.sectionId === tableData.length - 1}
              >
                <Image
                  src={data.img}
                  height={400}
                  width={600}
                  alt=""
                  className="rounded-3xl"
                />

                <div className="flex flex-col gap-2">
                  <h3 className="text-[#3FA7EE] text-3xl">{data.title}</h3>
                  <p className="text-base">{data.para1}</p>
                  <p className="text-base">{data.para2}</p>
                </div>
                <Link
                  href={data.link}
                  className="border border-white btn bg-transparent hover:bg-transparent text-white hover:border-white flex items-center py-3 px-[9px] w-36 md:w-48 gap-5 justify-center rounded-[50px]"
                >
                  Let&apos;s Talk
                  <Image
                    src="/images/heroKnowMore.svg"
                    height={20}
                    width={20}
                    alt=""
                  />
                </Link>
              </TrackedSection>
            ))}
          </article>
        </main>
      </TCContext.Provider>
    </>
  );
};

export default page;

const tableData = [
  {
    img: "/images/research.png",
    title: "COVID-19 Detection",
    link: "/",
    para1:
      "Hyperparameter tuning based performance optimization of deep learning models for COVID-19 detection",
    para2:
      "Hyperparameter tuning based performance optimization of deep learning models for COVID-19 detectionHyperparameter tuning based performance optimization of deep learning models for COVID-19 detectionHyperparameter tuning based performance optimization of deep learning models for COVID-19 detection",
    sectionId: 0,
    tcTitle: "Paper",
    tcText:
      "Lorem ipsum dolor sit amet consectetur. Sed at tincidunt nullam massa etiam mauris et.",
  },
  {
    img: "/images/research.png",
    title: "COVID-19 Detection2",
    link: "/",
    para1:
      "Hyperparameter tuning based performance optimization of deep learning models for COVID-19 detection",
    para2:
      "Hyperparameter tuning based performance optimization of deep learning models for COVID-19 detectionHyperparameter tuning based performance optimization of deep learning models for COVID-19 detectionHyperparameter tuning based performance optimization of deep learning models for COVID-19 detection",
    sectionId: 1,
    tcTitle: "Case Studies",
    tcText:
      "Lorem ipsum dolor sit amet consectetur. Sed at tincidunt nullam massa etiam mauris et.",
  },
  {
    img: "/images/research.png",
    title: "COVID-19 Detection3",
    link: "/",
    para1:
      "Hyperparameter tuning based performance optimization of deep learning models for COVID-19 detection",
    para2:
      "Hyperparameter tuning based performance optimization of deep learning models for COVID-19 detectionHyperparameter tuning based performance optimization of deep learning models for COVID-19 detectionHyperparameter tuning based performance optimization of deep learning models for COVID-19 detection",
    sectionId: 2,
    tcTitle: "Demo",
    tcText:
      "Lorem ipsum dolor sit amet consectetur. Sed at tincidunt nullam massa etiam mauris et.",
  },
];
