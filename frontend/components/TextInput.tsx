import Image from "next/image";
import showPS from "../public/assets/icons/show-ps.svg";
import hidePS from "../public/assets/icons/hide-ps.svg";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type TextInputProps = {
  label: string;
  value: string;
  placeholder?: string;
  setValue: (event: string) => void;
  type?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  placeholder,
  setValue,
  type,
}) => {
  const [fieldType, setFieldType] = useState<string>(type ? type : "text");
  const toggleField = () => {
    fieldType == "Password" ? setFieldType("text") : setFieldType("Password");
  };

  return (
    <section className="w-full flex flex-col justify-start items-start my-[10px]">
      <label className="mb-[12px] text-darkPink" htmlFor={label}>
        {label}
      </label>
      <section className="w-full border-[#D0D5DD] border-[2px] rounded-[8px] h-[45px] relative">
        <input
          type={fieldType}
          placeholder={placeholder}
          id={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`${
            type && type == "Password" ? `w-[85%]` : `w-full`
          } h-full rounded-[inherit] pl-[12px] outline-none`}
        />
        {type && type == "Password" && (
          <section
            className="absolute right-[10px] bottom-0 w-[18px] h-[45px] cursor-pointer"
            onClick={toggleField}
          >
            <figure className="relative w-full h-full">
              <Image
                src={fieldType == "text" ? hidePS : showPS}
                alt={"Password icon"}
                fill
              />
            </figure>
          </section>
        )}
      </section>
    </section>
  );
};

export default TextInput;
