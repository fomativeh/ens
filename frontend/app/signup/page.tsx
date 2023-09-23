"use client";
import Navbar from "../../components/Navbar";
import signupImg from "../../public/assets/images/signup.svg";
import googleIcon from "../../public/assets/images/google.svg";
import Image from "next/image";
import AuthWrapper from "../../components/AuthWrapper";
import Link from "next/link";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { FormEvent, useContext, useState } from "react";
import { NavModalContext } from "../../context/NavModalContext";
import NavModal from "../components/NavModal";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/navigation";

const Signup: React.FC = () => {
  const router = useRouter();
  const { userState, setUserState } = useContext(UserContext);
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { modalOpen, setModalOpen } = useContext(NavModalContext);

  const validateCredentials = () => {
    if (firstname.trim() == "") {
      return false;
    }

    if (lastname.trim() == "") {
      return false;
    }

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

  const handleSignupRes = (data: any, loadingToast: any) => {
    const statusCode = data.statusCode;
    if (statusCode == 201) {
      toast.dismiss(loadingToast);
      //Handle action
      toast.success("Registeration successful.");
      setUserState({ isLoggedIn: true, userData: data.data });
      const { access_token,_id, refresh_token } = data.data;
      localStorage.setItem("userid", JSON.stringify(_id));
      localStorage.setItem("access_token", JSON.stringify(access_token));
      localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
      return router.push("/user-profile");
    }

    toast.dismiss(loadingToast);
    let errorMessage = data.message;
    //Returns error message from server, checks if it comes in an array or not
    toast.error(errorMessage);
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
    const loadingToast = toast.loading("Signing up. Please wait...");

    try {
      const signupRes = await axios.post("/api/account/signup", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      handleSignupRes(signupRes.data, loadingToast);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Network error. Please try again");
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-center bg-bodyPurple pb-[100px] pt-[80px]">
      <Toaster
        toastOptions={{ style: { background: "#43184E", color: "#fff" } }}
      />
      <Navbar
        homepage={true}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
      {modalOpen && <NavModal setModalOpen={setModalOpen} />}

      <section className="relative w-full h-full flex flex-col desktopLG:flex-row desktopLG:justify-between items-center desktopLG:pl-[100px] mt-[50px]">
        <figure className="relative w-[70%] h-[50vh] desktopLG:hidden">
          <Image src={signupImg} alt={"Login image"} fill />
        </figure>
        <AuthWrapper>
          <form
            className="w-full flex flex-col justify-start items-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h1 className="text-[#B253CB] font-bold text-center max-tablet:text-[25px]">
              Create an account
            </h1>
            <span className="max-tablet:mb-[30px] mb-[80px] max-tablet:text-center max-tablet:max-w-[220px]">
              Already have an account?
              <Link href={"/login"} color="red">
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
              <TextInput
                label={"Email"}
                type={"Email"}
                value={email}
                setValue={setEmail}
              />
              <TextInput
                type={"Password"}
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
              <Button text={"Sign up"} authBtn={true} boldText={true} />
            </section>
          </form>
        </AuthWrapper>

        <figure className="relative w-[45%] desktopLG:h-[70vh] h-[40vh] hidden desktopLG:block">
          <Image src={signupImg} alt={"Login image"} fill />
        </figure>
      </section>
    </main>
  );
};

export default Signup;
