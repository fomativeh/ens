"use client"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useEffect, useState } from "react"; // Import useEffect and useState

type ButtonProps = {
  text: string;
  img?: string | StaticImport;
  sm?: boolean;
  authBtn?: boolean;
  boldText?: boolean;
  BG?: boolean;
  fillWidth?: boolean;
  md?: boolean;
  homepage?: boolean;
  textSm?:boolean
};

const Button: React.FC<ButtonProps> = ({
  text,
  img,
  sm,
  md,
  authBtn,
  boldText,
  BG,
  fillWidth,
  homepage,
  textSm
}) => {
  // Use useState to track window width
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  // Use useEffect to update windowWidth when the component mounts and on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initialize windowWidth on mount
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button
      className={`
      ${
        fillWidth && "w-full"
      }
      
      ${!BG ? "bg-[#7F56D9]" : "bg-darkerPurple"}
      
      ${authBtn && "w-full"}
      
      text-[#fff] 
      ${textSm && `text-[12px] py-[12px] px-[10px]`}
      ${
        homepage && windowWidth && windowWidth < 960
          ? "rounded-[20px] px-[10px] py-[8px]"
          : "py-[15px] px-[20px] rounded-[10px]"
      } 
      h-fit flex justify-center items-center 
      ${
        sm && "py-[8px] px-[17px]" 
      } 
      ${md && "py-[11px] px-[17px]"} 
      ${
        !md && !sm && !textSm && `py-[15px] px-[20px]`
      } 
      cursor-pointer`}
    >
      <span
        className={`${img !== undefined && "mr-[15px]"} ${
          boldText && "font-bold"
        }`}
      >
        {text}
      </span>
      {img !== undefined && (
        <figure
          className={`relative ${
            homepage && windowWidth && windowWidth < 960 ? "w-[20px]" : "w-[40px]"
          } h-[20px]`}
        >
          <Image src={img} alt={"Button icon"} fill />
        </figure>
      )}
    </button>
  );
};

export default Button;
