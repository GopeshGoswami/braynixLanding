import React, { HTMLProps, useContext, useEffect, useRef } from "react";
import { TCContext } from "./TCContext";
import { useScroll } from "framer-motion";

const TrackedSection = ({
  sectionId,
  tcTitle,
  tcText,
  isFirst = false,
  isLast = false,
  ...props
}: {
  isFirst?: boolean;
  isLast?: boolean;
  sectionId: number;
  tcTitle: string;
  tcText: string;
} & HTMLProps<HTMLElement>) => {
  const { registerSection, setActiveSection, scrollContainerRef } =
    useContext(TCContext);

  useEffect(() => {
    registerSection({
      id: sectionId,
      title: tcTitle,
      text: tcText,
      isLast: isLast,
    });
  }, [isLast, sectionId, tcTitle, tcText]);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
    container: scrollContainerRef,
  });

  scrollYProgress.on("change", (value) => {
    if (value > 0 && value < 1) {
      setActiveSection(sectionId);
    }
    if ((value < 0 && isFirst) || (value > 1 && isLast)) {
      setActiveSection(-1);
    }
  });

  return (
    <section
      ref={sectionRef}
      id={`section-${sectionId}`}
      //   Need to adjust scrollMargin
      //   style={{ scrollMargin: "2vh" }}
      {...props}
    />
  );
};

export default TrackedSection;
