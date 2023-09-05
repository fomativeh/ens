import Image from "next/image";
import check from "../../public/assets/icons/check.svg";

export type PlanProps = {
  title: string;
  description: string;
  price: string;
  features: string[];
};

export const FeaturesDetails: React.FC<{ feature: string, dashboard?:Boolean }> = ({ feature, dashboard }) => {
  return (
    <section className={`border-darkPink border-[1px] rounded-[10px] mb-[14px] bg-[#F0EBFA] ${dashboard? `w-fit`:`w-[80%]`} py-[10px] px-[10px] flex justify-start items-center`}>
      <figure className="relative w-[20px] h-[20px] mr-[10px]">
        <Image src={check} alt={"Feature icon"} fill />
      </figure>
      <span className={`text-darkPink text-[13px] ${dashboard? `w-[170px]`:`max-w-[70%]`}`}>{feature}</span>
    </section>
  );
};

const PlanWrapper: React.FC<PlanProps> = ({
  title,
  description,
  price,
  features,
}) => {
  return (
    <section className="w-[24%] bg-[#A484E1] rounded-[12px] flex flex-col justify-start items-center pb-[30px] pt-[50px]">
      <span className="text-[#fff] font-bold text-[20px] mb-[20px]">
        {title}
      </span>
      <span className="text-[#fff] mb-[20px] max-w-[70%] text-center">
        {description}
      </span>
      <span className="text-[#fff] font-bold text-[25px] mb-[20px]">
        {price}
      </span>
      <section className="mt-[20px] relative w-[85%] rounded-[8px] bg-[#fff] pt-[55px] flex flex-col justify-start items-center pb-[80px] h-[600px]">
        <section className="absolute flex justify-center items-center w-full top-[-20px]">
          <span className="bg-[#6934CD] py-[17px] px-[30px] rounded-[8px] cursor-pointer text-[#fff]">
            Select Plan
          </span>
        </section>
        <span className="text-darkPink font-bold text-[20px] mb-[20px]">
          Features
        </span>
        {features.length > 0 &&
          features.map((feature, i) => {
            return <FeaturesDetails key={i} feature={feature} />;
          })}
      </section>
    </section>
  );
};

export default PlanWrapper;
