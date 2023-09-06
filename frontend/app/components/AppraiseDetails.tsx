import Image from "next/image";
import check from "../../public/assets/icons/check.svg"

type AppraiseDetailsProps = {
  title: string;
  description: string;
};

const AppraiseDetails: React.FC<AppraiseDetailsProps> = ({
  title,
  description,
}) => {
  return (
    <section className="w-full flex justify-between items-start desktop:items-center my-[40px]">
      <figure className="relative tablet:w-[60px] tablet:h-[60px] w-[25px] h-[25px]">
        <Image src={check} alt={"Appraise detail icon"} fill />
      </figure>

      <section className="w-[90%] tablet:w-[70%]">
        <h1 className="text-[#752989] m-0 mb-[20px]">{title}</h1>
        <span className="text-[#857A7A] block max-w-[250px]">{description}</span>
      </section>
    </section>
  );
};

export default AppraiseDetails;
