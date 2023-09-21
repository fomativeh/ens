"use client";
import Navbar from "../../components/Navbar";
import loginImg from "../../public/assets/images/login.svg";
import googleIcon from "../../public/assets/images/google.svg";
import Image from "next/image";
import AuthWrapper from "../../components/AuthWrapper";
import Link from "next/link";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { NavModalContext } from "../../context/NavModalContext";
import NavModal from "../components/NavModal";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContext } from "../../context/UserContext";

const Login: React.FC = () => {
  const { userState, setUserState } = useContext(UserContext);
  const router = useRouter();
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { modalOpen, setModalOpen } = useContext(NavModalContext);
  const validateCredentials = () => {
    if (email.trim() == "") {
      return false;
    }

    if (password.trim() == "") {
      return false;
    }

    return true;
  };

  const vibrate = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(200);
    }
  };

  const handleSigninRes = (data: any, loadingToast: any) => {
    const statusCode = data.statusCode;
    if (statusCode==200) {
      toast.dismiss(loadingToast);
      //Handle action
      toast.success("Welcome.");
      setUserState({ isLoggedIn: true, userData: data.data });
      const {access_token, refresh_token} = data.data
      localStorage.setItem("access_token", JSON.stringify(access_token));
      localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
      return router.push("/user-profile");
    }

    toast.dismiss(loadingToast);
    let errorMessage = data.message;
    //Returns error message from server, checks if it comes in an array or not
    return toast.error(errorMessage);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateCredentials()) {
      vibrate();
      return toast.error("Please fill all fields.", { duration: 3000 });
    }

    const credentials = {
      firstname,
      lastname,
      email,
      password,
      plan: "basic_plan",
    };
    const loadingToast = toast.loading("Signing in. Please wait...");

    try {
      const signinRes = await axios.post("/api/account/signin", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      handleSigninRes(signinRes.data, loadingToast);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("An error occured. Please try again.");
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-center bg-bodyPurple pb-[100px] pt-[80px]">
      <Navbar setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <Toaster
        toastOptions={{ style: { background: "#43184E", color: "#fff" } }}
      />
      {modalOpen && <NavModal setModalOpen={setModalOpen} />}
      <section className="w-full h-full flex flex-col justify-start items-center desktopLG:flex-row desktopLG:justify-between desktopLG:items-center desktopLG:pr-[100px] mt-[50px]">
        <figure className="relative w-[90vw] desktopLG:w-[45%] desktopLG:h-[70vh] h-[30vh] max-tablet:h-[50vh]">
          <Image src={loginImg} alt={"Login image"} fill />
        </figure>

        <AuthWrapper>
          <form onSubmit={(e) => handleSubmit(e)}>
            <section className="w-full flex flex-col justify-start items-center">
              <h1 className="text-[#B253CB] font-bold text-center">
                Log in to your account
              </h1>
              <span className="max-tablet:mb-[55px] max-tablet:w-[200px] mb-[80px] text-center">
                Don't have an account?
                <Link href={"/signup"} color="red">
                  <span className="text-[#6934CD] ml-[6px]">Sign up</span>
                </Link>
              </span>

              <section className="w-full flex flex-col justify-start">
                <TextInput
                  label={"Email"}
                  type="Email"
                  value={email}
                  setValue={setEmail}
                />
                <TextInput
                  label={"Password"}
                  value={password}
                  setValue={setPassword}
                  type="Password"
                />
              </section>

              <section className="w-full flex flex-col justify-start items-center max-tablet:my-[40px] my-[80px]">
                <Button text={"Sign in"} authBtn={true} boldText={true} />
                {/* <button className="border-[#D0D5DD] border-[2px] rounded-[8px] w-full py-[8px] flex justify-center items-center mt-[15px] cursor-pointer">
                <figure className="relative w-[30px] h-[30px] mr-[15px]">
                  <Image src={googleIcon} alt={"Google icon"} fill />
                </figure>
                <span className="text-[#6934CD] font-bold">
                  Continue with Google
                </span>
              </button> */}
              </section>
            </section>
          </form>
        </AuthWrapper>
      </section>
    </main>
  );
};

export default Login;
