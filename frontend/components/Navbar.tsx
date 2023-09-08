"use client";
import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import Button from "./Button";
import menuIcon from "../public/assets/icons/menu.svg";
import closeIcon from "../public/assets/icons/close.svg";
import Link from "next/link";
import { Dispatch, SetStateAction, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { capitalizeFirstLetter } from "fomautils";
import { useRouter } from "next/navigation";
import useLogout from "../hooks/useLogout";

const Navbar: React.FC<{
  authPage?: Boolean;
  homepage?: Boolean;
  modalOpen?: Boolean;
  setModalOpen: Dispatch<SetStateAction<Boolean>>;
}> = ({ authPage, homepage, modalOpen, setModalOpen }) => {
  const router = useRouter();
  const { userState, setUserState } = useContext(UserContext);
  const logout = useLogout();
  return (
    <nav
      className={`z-[9] w-full h-[80px] ${
        authPage
          ? `bg-none justify-start top-[20px]`
          : `bg-[#fff] top-0 justify-between fixed`
      } left-0 flex  items-center justify-between py-[0px] max-tablet:pr-[20px] desktop:px-[70px] pr-[25px]`}
    >
      <section className="h-full flex items-center justify-start">
        <figure
          className="relative mr-[30px] w-[200px] h-[80%] cursor-pointer max-tablet:ml-[-35px]"
          onClick={() => window.open("/", "_self")}
        >
          <Image src={logo} alt={"Ens logo"} fill />
        </figure>
        {!authPage && (
          <ul
            className={`list-none hidden desktop:flex h-[80%] font-[Inter] ${
              homepage ? `text-[#667085]` : `text-darkerPurple`
            } font-[500]`}
          >
            <Link href={"/"}>
              <li className="mr-[25px] h-full cursor-pointer flex justify-center items-center">
                Home
              </li>
            </Link>
            <Link href={"/appraisal"}>
              <li className="mr-[25px] h-full cursor-pointer flex justify-center items-center">
                Domain appraisal
              </li>
            </Link>
            <Link href={"/subscription"}>
              <li className="mr-[25px] h-full cursor-pointer flex justify-center items-center">
                Pricing
              </li>
            </Link>
            <li className="h-full cursor-pointer flex justify-center items-center">
              Contact
            </li>
          </ul>
        )}
      </section>

      {!authPage && (
        <>
          {userState.isLoggedIn ? (
            <section className="flex items-center">
              {userState.userData?.firstname && (
                <span className="w-fit text-center font-bold max-tablet:mr-[15px] max-tablet:text-[13px] tablet:mr-[30px] text-darkPink">
                  {capitalizeFirstLetter(userState.userData?.firstname)}{" "}
                  {capitalizeFirstLetter(userState.userData?.lastname)}
                </span>
              )}
              <section className="max-tablet:hidden" onClick={logout}>
                <Button text={"Logout"} />
              </section>
            </section>
          ) : (
            <section className="hidden desktop:flex justify-start items-center h-full">
              <ul
                className={`list-none flex items-center h-[80%] font-[Inter] ${
                  homepage ? `text-[#667085]` : `text-darkerPurple`
                } font-[500]`}
              >
                <Link href={"/login"}>
                  <li className="mr-[25px] h-full cursor-pointer flex justify-center items-center">
                    Log in
                  </li>
                </Link>

                <Link href={"/signup"}>
                  {homepage ? (
                    <Button text={"Sign up"} />
                  ) : (
                    <Button text={"Sign up"} BG={true} />
                  )}
                </Link>
              </ul>
            </section>
          )}
        </>
      )}

      <figure
        className="relative w-[30px] h-[30px] desktop:hidden cursor-pointer"
        onClick={() => {
          setModalOpen(!modalOpen);
          window !== undefined && window.scrollTo(0, 0);
        }}
      >
        <Image
          src={modalOpen ? closeIcon : menuIcon}
          alt={modalOpen ? "Close icon" : "Menu icon"}
          fill
        />
      </figure>
    </nav>
  );
};

export default Navbar;
