import Image from "next/image";
import Navbar from "../../components/Navbar";
import pricingImg from "../../public/assets/images/pricing.svg";
import { PricingPlans } from "../page";
import Link from "next/link";
import Footer from "../../components/Footer";

export const Questions: React.FC = () => {
  return (
    <section className="text-center mt-[40px] mb-[100px]">
      <h1 className="font-bold">Still have questions?</h1>
      <p>
        Have a look at our{" "}
        <Link href={"/"}>
          <span className="ml-[3px] text-[#9747FF]">FAQ</span>
        </Link>
      </p>
    </section>
  );
};

const Subsciption: React.FC = () => {
  return (
    <main className="overflow-x-hidden flex flex-col min-h-screen justify-start items-center bg-bodyPurple pt-[80px]">
      <Navbar />
      <section className="hero w-full flex justify-center items-center">
        <section className="h-[60%] w-full flex justify-center items-start">
          <section className="h-full w-[45%] flex flex-col justify-start items-center">
            <h1 className="font-bold text-[50px]">Pricing and Plans</h1>
            <p className="text-[#9747FF]">Change and cancel anytime you want</p>
          </section>

          <section className="h-full w-[45%] flex justify-start items-center">
            <figure className="relative h-full w-[70%]">
              <Image src={pricingImg} alt={"Pricing image"} fill />
            </figure>
          </section>
        </section>
      </section>
      <PricingPlans />
      <Questions />
      <Footer />
    </main>
  );
};

export default Subsciption;
