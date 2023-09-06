"use client"
import { ReactNode } from "react";
export const SectionWrapper: React.FC<{
  noContent?: boolean;
  darkBG?: boolean;
  children: ReactNode;
  bottomPad?: Boolean;
}> = ({ noContent, darkBG, bottomPad, children }) => {
  if (noContent) {
    return (
      <section
        className={`h-[400px] ${darkBG && `bg-[#CD9EDA] opacity-[60%]`} w-full`}
      />
    );
  }

  return (
    <section
      className={`py-[30px] px-[35px] desktopLG:px-[120px] ${
        bottomPad && `pb-[200px]`
      } flex flex-col justify-start items-start ${
        darkBG && `bg-[#DAB5E4]`
      } w-full`}
    >
      {children}
    </section>
  );
};
