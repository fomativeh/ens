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
    <section className="w-full flex justify-between items-center my-[40px]">
      <figure className="relative w-[60px] h-[60px]">
        <Image src={check} alt={"Appraise detail icon"} fill />
      </figure>

      <section className="w-[70%]">
        <h1 className="text-[#752989]">{title}</h1>
        <span className="text-[#857A7A]">{description}</span>
      </section>
    </section>
  );
};

export default AppraiseDetails;
