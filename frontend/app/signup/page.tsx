"use client";
import Navbar from "../../components/Navbar";
import signupImg from "../../public/assets/images/signup.svg";
import googleIcon from "../../public/assets/images/google.svg";
import Image from "next/image";
import AuthWrapper from "../../components/AuthWrapper";
import Link from "next/link";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  NavModalContext,
  NavModalContextValue,
} from "../../context/NavModalContext";
import { NavModal } from "../page";

const Signup: React.FC = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { modalOpen, setModalOpen } = useContext(
    NavModalContext
  ) as NavModalContextValue;

  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-center bg-bodyPurple pb-[100px] pt-[80px]">
      <Navbar
        homepage={true}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
           {modalOpen && <NavModal setModalOpen={setModalOpen} />}

      <section className="relative w-full h-full flex flex-col desktopLG:flex-row desktopLG:justify-between items-center desktopLG:pl-[100px] mt-[50px]">
        <figure className="relative w-[45%] h-[40vh] desktopLG:hidden">
          <Image src={signupImg} alt={"Login image"} fill />
        </figure>
        <AuthWrapper>
          <section className="w-full flex flex-col justify-start items-center">
            <h1 className="text-[#B253CB] font-bold">Create an account</h1>
            <span className="mb-[80px]">
              Already have an account?
              <Link href={"/"} color="red">
                <span className="text-[#6934CD] ml-[6px]">Sign in</span>
              </Link>
            </span>

            <section className="w-full flex flex-col justify-start">
              <TextInput
                label={"Firstname"}
                value={firstname}
                setValue={setFirstname}
              />
              <TextInput
                label={"Lastname"}
                value={lastname}
                setValue={setLastname}
              />
              <TextInput label={"Email"} value={email} setValue={setEmail} />
              <TextInput
                label={"Password"}
                value={password}
                setValue={setPassword}
              />
            </section>

            <section className="w-full flex flex-col justify-start items-center mt-[35px] mb-[80px]">
              <section className="flex items-start justify-start">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] cursor-pointer"
                />
                <span className="mb-[20px]">
                  You acknowledge that you have read and agreed to our
                  <Link href={"/"}>
                    <span className="text-[#9747FF] mx-[5px]">
                      Terms of service
                    </span>
                  </Link>
                  and our
                  <Link href={"/"}>
                    <span className="text-[#9747FF] mx-[5px]">
                      Privacy Policy
                    </span>
                  </Link>
                </span>
              </section>
              <Button text={"Sign in"} authBtn={true} boldText={true} />
            </section>
          </section>
        </AuthWrapper>

        <figure className="relative w-[45%] desktopLG:h-[70vh] h-[40vh] hidden desktopLG:block">
          <Image src={signupImg} alt={"Login image"} fill />
        </figure>
      </section>
    </main>
  );
};

export default Signup;
