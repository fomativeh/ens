import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  img: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  img,
}) => {
  return (
    <section className="bg-[#F0EBFA] rounded-[20px] py-[45px] px-[30px] w-[35%] min-w-[300px] flex flex-col justify-start items-center m-[20px]">
      <section className="w-full flex justify-between items-center mb-[40px]">
        <span className="font-bold text-[25px] max-w-[100px] text-[#43184E]">{title}</span>
        <figure className="relative w-[70px] h-[70px]">
            <Image src={img} alt={"Feature icon"} fill/>
        </figure>
      </section>
      <span className="w-full text-[#752989]">{description}</span>
    </section>
  );
};

export default FeatureCard;
