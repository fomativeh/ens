"use client"
import Image from "next/image";
import Navbar from "../../components/Navbar";
import pricingImg from "../../public/assets/images/pricing.svg";
import { PricingPlans } from "../page";
import Link from "next/link";
import Footer from "../../components/Footer";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  NavModalContext,
  NavModalContextValue,
} from "../../context/NavModalContext";
import { NavModal } from "../page";

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
  const { modalOpen, setModalOpen } = useContext(
    NavModalContext
  ) as NavModalContextValue;
  return (
    <main className="overflow-x-hidden flex flex-col min-h-screen justify-start items-center bg-bodyPurple pt-[80px]">
         <Navbar
        homepage={true}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
      {modalOpen && <NavModal setModalOpen={setModalOpen} />}

      <section className="hero w-full flex justify-center items-center">
        <section
          className="h-[100vh] desktopLG:h-[60%] w-full flex border-solid flex-col justify-start items-center
          desktopLG:flex-row desktopLG:justify-center desktopLG:items-start"
        >
          <section className="desktopLG:hidden desktopLG:mt-[0px] mt-[120px] h-full w-[45%] flex justify-start items-center mb-[40px] desktopLG:mb-[0px]">
            <figure className="relative h-full w-[70%] min-w-[300px]">
              <Image src={pricingImg} alt={"Pricing image"} fill />
            </figure>
          </section>

          <section className="h-full w-full desktopLG:w-[45%] flex flex-col justify-start items-center desktopLG:mb-0 mb-[120px]">
            <h1 className="font-bold text-[30px] desktopLG:text-[50px] max-w-[350px] desktopLG:max-w-fit text-center tablet:text-[4vw]">
              Pricing and Plans
            </h1>
            <p className="text-[#9747FF]">Change and cancel anytime you want</p>
          </section>

          <section className="h-full w-[45%] justify-start items-center hidden desktopLG:flex">
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
