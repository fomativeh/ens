"use client";
import Image from "next/image";
import plus from "../../public/assets/icons/plus.svg";
import { useState } from "react";

type AccordionProps = {
  title: string;
  description: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full flex flex-col justify-start items-center my-[12px]">
      <section className="w-full flex justify-between items-center px-[25px] py-[25px] rounded-[10px] bg-[#fff] opacity-[50%]">
        <span className="text-[#9747FF]">{title}</span>
        <figure
          className={`relative w-[15px] h-[15px] cursor-pointer ${isOpen && `rotate-45`}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={plus} alt={"Accordion icon"} fill />
        </figure>
      </section>
      <section
        className={`w-full bg-[#fff] rounded-[10px]  ${isOpen ? `h-fit p-[20px] mt-[10px]` : `h-[0px] p-[0px] mt-[0px] overflow-hidden`}`}
      >
        {description}
      </section>
    </section>
  );
};

export default Accordion;
