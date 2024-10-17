import { createContext, RefObject, useState } from "react";

export type Section = {
  id: number;
  title: string;
  text: string;
  isLast: boolean;
};

type TCContextType = {
  sections: Section[];
  registerSection: (_: Section) => void;
  activeSection: number;
  setActiveSection: (_: number) => void;
  scrollContainerRef: RefObject<HTMLElement> | undefined;
};

export const TCContext = createContext<TCContextType>({
  sections: [],
  registerSection: () => {},
  activeSection: 0,
  setActiveSection: () => {},
  scrollContainerRef: undefined,
});

export const useTCContextValues = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [sections, setSections] = useState<Section[]>([]);

  const registerSection = (section: Section) => {
    setSections((val) => val.concat([section]));
  };

  const processSections = (sections: Section[]) => {
    // Filter for duplicates and sort by id ()
    const ids = sections.map(({ id }) => id);
    const uniqueSections = sections
      .filter(({ id }, index) => !ids.includes(id, index + 1))
      .sort((a, b) => a.id - b.id);
    return uniqueSections;
  };

  return {
    values: {
      sections: processSections(sections),
      registerSection,
      activeSection,
      setActiveSection,
    },
  };
};
