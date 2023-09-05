"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import loginImg from "../../public/assets/images/login.svg";
import googleIcon from "../../public/assets/images/google.svg";
import Image from "next/image";
import AuthWrapper from "../../components/AuthWrapper";
import Link from "next/link";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-center bg-bodyPurple pb-[100px]">
      <Navbar authPage={true} />
      <section className="w-full h-full flex justify-between items-center pr-[100px] mt-[50px]">
        <figure className="relative w-[45%] h-[70vh]">
          <Image src={loginImg} alt={"Login image"} fill />
        </figure>

        <AuthWrapper>
          <section className="w-full flex flex-col justify-start items-center">
            <h1 className="text-[#B253CB] font-bold">Log in to your account</h1>
            <span className="mb-[80px]">
              Don't have an account?
              <Link href={"/"} color="red">
                <span className="text-[#6934CD] ml-[6px]">Sign up</span>
              </Link>
            </span>

            <section className="w-full flex flex-col justify-start">
              <TextInput label={"Email"} value={email} setValue={setEmail} />
              <TextInput
                label={"Password"}
                value={password}
                setValue={setPassword}
              />
            </section>

            <section className="w-full flex flex-col justify-start items-center my-[80px]">
              <Button text={"Sign in"} authBtn={true} boldText={true} />
              <button className="border-[#D0D5DD] border-[2px] rounded-[8px] w-full py-[8px] flex justify-center items-center mt-[15px] cursor-pointer">
                <figure className="relative w-[30px] h-[30px] mr-[15px]">
                  <Image src={googleIcon} alt={"Google icon"} fill />
                </figure>
                <span className="text-[#6934CD] font-bold">
                  Continue with Google
                </span>
              </button>
            </section>
          </section>
        </AuthWrapper>
      </section>
    </main>
  );
};

export default Login;
