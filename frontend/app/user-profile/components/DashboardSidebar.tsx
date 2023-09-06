"use client"
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import Button from "../../../components/Button";
import logo from "../../../public/assets/images/logo.svg";
import searchIcon from "../../../public/assets/icons/search.svg";
import bellIcon from "../../../public/assets/icons/bell.svg";
import closeIcon from "../../../public/assets/icons/close.svg";
import Link from "next/link";

const DashboardSidebar: React.FC<{
  onModal?: Boolean;
  setModalOpen?: Dispatch<SetStateAction<boolean>>;
}> = ({ onModal, setModalOpen }) => {
  if (onModal) {
    return (
      <nav
        className={`relative z-[2] flex px-[40px] py-[30px] w-full bg-[#ffffff75] pt-[80px] 
        h-fit min-h-[150vh] flex-col justify-between items-center`}
      >
        <section
          className="absolute top-[25px] right-[30px] w-full flex justify-end cursor-pointer"
          onClick={() => {
            setModalOpen !== undefined && setModalOpen(false);
          }}
        >
          <figure className="relative w-[30px] h-[30px]">
            <Image src={closeIcon} alt={"Close icon"} fill />
          </figure>
        </section>
        <section className="flex flex-col justify-start items-start w-full">
          <form className="w-full bg-[#fff] rounded-[8px]">
            <section className="px-[14px] w-full flex justify-between items-center h-fit">
              <input
                type="text"
                placeholder="Search"
                className="border-none w-[88%] h-[38px] outline-none bg-[inherit]"
              />
              <figure className="w-[15px] h-[15px] relative cursor-pointer">
                <Image src={searchIcon} alt={"Search icon"} fill />
              </figure>
            </section>
          </form>

          <ul className="bg-[#fff] w-full list-none py-[25px] px-[15px] flex justify-center rounded-[8px] mt-[50px]">
            <section className="w-[90%] flex flex-col items-start">
              <Link
                href={"/"}
                className="block w-full hover:bg-[#D39DE1] rounded-[8px] px-[20px]"
              >
                <li className="my-[15px]">Home</li>
              </Link>

              <Link
                href={"/"}
                className="block w-full hover:bg-[#D39DE1] rounded-[8px] px-[20px]"
              >
                <li className="my-[15px]">Appraisal display</li>
              </Link>
              <Link
                href={"/"}
                className="block w-full hover:bg-[#D39DE1] rounded-[8px] px-[20px]"
              >
                <li className="my-[15px]">User profile</li>
              </Link>

              <Link
                href={"/"}
                className="block w-full hover:bg-[#D39DE1] rounded-[8px] px-[20px]"
              >
                <li className="my-[15px]">Premium subscription</li>
              </Link>

              <section className="w-full text-left pl-[20px] my-[15px]">
                <span className="text-[#5D5656]">Help</span>
                <li className="ml-[16px] mt-[20px] font-bold text-[14px] cursor-pointer">
                  Add to favorites
                </li>
              </section>
            </section>
          </ul>
        </section>

        <section className="w-full border-t-[2px] border-t-[#7b61ff57] py-[35px] flex flex-col justify-start items-start mb-[40px]">
          <section className="w-full flex justify-start items-center">
            <span className="text-[#7B61FF] text-[20px] mr-[10px]">
              Notifications
            </span>
            <figure className="w-[15px] h-[15px] relative">
              <Image src={bellIcon} alt={"Bell icon"} fill />
            </figure>
          </section>
          <span className="font-bold my-[15px]">Upgrade to Pro plan</span>
          <p className="w-full text-left mt-[8px] mb-[25px]">
            Go Pro to unlock more powerful features
          </p>
          <Button text={"Upgrade now"} md={true} />
        </section>
      </nav>
    );
  }

  if (!onModal) {
    return (
      <nav
        className={`hidden desktopLG:flex desktopLG:w-[30%] px-[30px] py-[30px] max-w-[350px] bg-[#ffffffb7] min-h-[160vh] 
        h-fit flex-col justify-between items-center`}
      >
        <section className="flex flex-col justify-start items-start">
          <figure className="relative w-[100px] h-[80px] cursor-pointer">
            <Image src={logo} alt={"Logo"} fill />
          </figure>
          <form className="w-full">
            <section className="px-[14px] mt-[10px] w-full flex justify-between items-center h-fit rounded-[8px] border-[#D0D5DD] border-[2px]">
              <input
                type="text"
                placeholder="Search"
                className="border-none w-[88%] h-[38px] outline-none bg-[inherit]"
              />
              <figure className="w-[15px] h-[15px] relative">
                <Image src={searchIcon} alt={"Search icon"} fill />
              </figure>
            </section>
          </form>

          <ul className="w-full list-none py-[30px] flex justify-center rounded-[8px] border-[1px] border-[#D0D5DD] mt-[50px]">
            <section className="w-[80%] flex flex-col items-start">
              <Link href={"/"} className="block w-full">
                <li className="my-[15px]">Home</li>
              </Link>

              <Link href={"/"} className="block w-full">
                <li className="my-[15px]">Appraisal display</li>
              </Link>
              <Link href={"/"} className="block w-full">
                <li className="my-[15px]">User profile</li>
              </Link>

              <Link href={"/"} className="block w-full">
                <li className="my-[15px]">Premium subscription</li>
              </Link>

              <section className="w-full text-left my-[15px]">
                <span className="text-[#5D5656]">Help</span>
                <li className="ml-[16px] mt-[20px] font-bold text-[14px] cursor-pointer">
                  Add to favorites
                </li>
              </section>
            </section>
          </ul>
        </section>

        <section className="w-full border-t-[2px] border-t-[#7b61ff57] py-[35px] flex flex-col justify-start items-start mb-[40px]">
          <section className="w-full flex justify-start items-center">
            <span className="text-[#7B61FF] text-[20px] mr-[10px]">
              Notifications
            </span>
            <figure className="w-[15px] h-[15px] relative">
              <Image src={bellIcon} alt={"Bell icon"} fill />
            </figure>
          </section>
          <span className="font-bold my-[15px]">Upgrade to Pro plan</span>
          <p className="w-full text-left mt-[8px] mb-[25px]">
            Go Pro to unlock more powerful features
          </p>
          <Button text={"Upgrade now"} md={true} />
        </section>
      </nav>
    );
  }
};

export default DashboardSidebar;
