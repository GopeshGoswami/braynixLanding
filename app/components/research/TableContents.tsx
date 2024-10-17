"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useContext } from "react";
import { TCContext } from "./TCContext";

const TableContents = () => {
  const { sections, activeSection, scrollContainerRef } = useContext(TCContext);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["2%", "100%"]);

  //   const [showTC, setShowTc] = useState(activeSection >= 0);
  //   scrollYProgress.on("change", (val) => {
  //     setShowTc(activeSection >= 0);
  //   });

  return (
    <div className="h-full px-0 md:px-4">
      <div
        className="sticky top-0 h-full md:max-h-[35vh] max-h-min flex gap-4"
        // initial={{ opacity: 0, display: "none" }}
        // animate={{ opacity: showTC ? 1 : 0, display: showTC ? "flex" : "none" }}
      >
        <div className="h-full w-1 bg-[#111111] rounded-full overflow-hidden md:block hidden">
          <motion.div
            className="bg-blue-500 w-full origin-top"
            style={{ height: progressHeight }}
          ></motion.div>
        </div>
        <div className="md:flex md:flex-col md:justify-between grid grid-cols-3 gap-0 place-items-center w-full md:gap-6 text-sm xl:text-base">
          {sections.map(({ id, title, text, isLast }) => (
            <div
              onClick={() =>
                document
                  .getElementById(`section-${id}`)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              key={id}
              className={` ${
                isLast
                  ? ""
                  : "border-r md:border-r-0 md:border-b border-[#5F5F5F] pr-2"
              }  pb-0 md:pb-10`}
            >
              <p
                className={`cursor-pointer text-xl md:text-3xl transition-colors duration-200 ${
                  activeSection === id ? "text-[#4394EA]" : "text-[#313131]"
                }`}
              >
                {title}
              </p>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={
                  activeSection === id
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.5 }}
                style={{ overflow: "hidden" }}
                className="text-xl transition-colors duration-200"
              >
                <p className={`text-xl md:block hidden`}>{text}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableContents;
