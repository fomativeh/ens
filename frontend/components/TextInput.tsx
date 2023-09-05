import { ChangeEvent, Dispatch, SetStateAction } from "react";

type TextInputProps = {
  label: string;
  value: string;
  placeholder?: string;
  setValue: (event: string) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  placeholder,
  setValue,
}) => {
  return (
    <section className="w-full flex flex-col justify-start items-start my-[10px]">
      <label className="mb-[12px] text-darkPink" htmlFor={label}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-[45px] border-[#D0D5DD] border-[2px] rounded-[8px] pl-[12px] outline-none"
      />
    </section>
  );
};

export default TextInput;
