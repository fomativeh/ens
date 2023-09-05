import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
// import icon from "../../../../public/assets/icons/arr.svg"

type ButtonProps = {
  text: string;
  img?: string | StaticImport;
  sm?: Boolean;
  authBtn?: Boolean;
  boldText?: Boolean;
  BG?: Boolean;
  fillWidth?: Boolean;
  md?: Boolean;
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
}) => {
  return (
    <button
      className={`${fillWidth && `w-[fill]`} ${
        !BG ? `bg-[#7F56D9]` : `bg-darkerPurple`
      } ${
        authBtn && `w-full`
      } text-[#fff] rounded-[10px] h-fit flex justify-center items-center ${
        sm && `py-[8px] px-[17px]`
      } 

      ${md && `py-[11px] px-[17px]`}

      ${!md && !sm && `py-[15px] px-[20px]`} 
      
      
      cursor-pointer`}
    >
      <span
        className={`${img !== undefined && `mr-[15px]`} ${
          boldText && `font-bold`
        }`}
      >
        {text}
      </span>
      {img !== undefined && (
        <figure className="relative w-[40px] h-[20px]">
          <Image src={img} alt={"Button icon"} fill />
        </figure>
      )}
    </button>
  );
};

export default Button;
