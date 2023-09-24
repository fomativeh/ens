"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";
import heroImg from "../public/assets/images/hero.svg";
import arrow from "../public/assets/icons/arr.svg";
import aff1 from "../public/assets/images/aff1.svg";
import aff2 from "../public/assets/images/aff2.svg";
import l from "../public/assets/icons/lightening.svg";
import d from "../public/assets/icons/drive.svg";
import i from "../public/assets/icons/insight.svg";
import a from "../public/assets/icons/approved.svg";
import appraise from "../public/assets/images/appraise.svg";
import planData from "../utils/planData";
import faqData from "../utils/faqData";
import Button from "../components/Button";
import FeatureCard from "./components/FeatureCard";
import AppraiseDetails from "./components/AppraiseDetails";
import PlanWrapper, { PlanProps } from "./components/PlanWrapper";
import Accordion from "./components/Accordion";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { NavModalContext } from "../context/NavModalContext";
import { useRouter } from "next/navigation";
import NavModal from "./components/NavModal";
import { PricingPlans } from "./components/PricingPlan";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import useAuth from "../hooks/useAuth";

const Dot: React.FC = () => {
  return (
    <div className="w-[7px] h-[7px] desktop:w-[10px] desktop:h-[10px] bg-[#fff] rounded-[50px] mr-[8px] desktop:mr-[15px]"></div>
  );
};

const Home: React.FC = () => {
  const { modalOpen, setModalOpen } = useContext(NavModalContext);
  const { userState, setUserState } = useContext(UserContext);
  const [domain, setDomain] = useState<string>("");
  const router = useRouter();

  const handleAppraiseRes = (data: any, loadingToast: any) => {
    if (data.statusCode == 200) {
      toast.dismiss(loadingToast);
      toast.success("Domain Appraised!");
      const appraisedData = data.data;
      setUserState({
        ...userState,
        userData: { ...userState.userData, appraisedData },
      });
      localStorage.setItem("Appraise-data", JSON.stringify(appraisedData));
      return router.push("/appraisal");
    }

    toast.dismiss(loadingToast);
    toast.error(data.message);
  };

  const callAPI = async () => {
    let res;
    // if (userState.isLoggedIn) {
    //   let token = localStorage.getItem("access_token");
    //   if (token !== undefined) {
    //     if (token !== null) {
    //       token = JSON.parse(token);
    //     }
    //   }
    //   res = await axios.post(
    //     "/api/appraisal/paid",
    //     { domainName: domain, token },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   return res;
    // }

    res = await axios.post("/api/appraisal/trial", domain, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (domain.trim() == "") {
      return toast.error("Please enter a domain name.", { duration: 3000 });
    }
    const loadingToast = toast.loading("Appraising domain. Please wait...");
    try {
      const domainAppraiseRes = await callAPI();
      handleAppraiseRes(domainAppraiseRes.data, loadingToast);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Network error. Please retry.");
    }
  };
  useAuth();

  return (
    <main className="relative overflow-x-hidden flex min-h-screen flex-col items-center justify-between bg-bodyPurple">
      {modalOpen && <NavModal setModalOpen={setModalOpen} />}
      <Toaster
        toastOptions={{ style: { background: "#43184E", color: "#fff" } }}
      />
      <Navbar
        homepage={true}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
      <section className="relative hero mt-[80px] w-full flex flex-col desktop:flex-row justify-start items-center tablet:pl-[70px] desktop:pl-[200px] bg-[#766C79] overflow-hidden">
        <section className="z-[4] w-full flex-col items-center mt-[30px] desktop:mt-[0px]">
          <h1 className="ml-[20px] mb-[60px] desktop:ml-[0px] text-bodyPurple text-[7vw] desktop:text-[60px] font-bold w-fit max-w-[70%] desktop:max-w-[750px]">
            The Everything ENS Related
          </h1>

          <ul className="ml-[20px] desktop:ml-[0px] text-[#fff] font-bold text-[16px] desktop:text-[20px] flex items-center mb-[50px]">
            <li className="mr-[25px] tablet:mr-[50px] flex justify-start items-center">
              <Dot />
              <span>Explore</span>
            </li>
            <li className="mr-[25px] tablet:mr-[50px] flex justify-start items-center">
              <Dot />
              <span>Discover</span>
            </li>
            <li className="flex justify-start items-center">
              <Dot />
              <span>Appraise</span>
            </li>
          </ul>

          <form onSubmit={(e) => handleSubmit(e)}>
            <section className="ml-[20px] desktop:ml-[0px] w-fit h-fit flex justify-start items-center rounded-[20px] desktopLG:rounded-[10px] py-[2px] pr-[2px] desktopLG:pr-[4px] bg-[#fff] border-[#A484E1] border-[4px]">
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="enter your .eth domain"
                className="placeholder:text-darkPink placeholder:text-[12px] desktopLG:placeholder:text-[16px] border-none w-[45vw] max-w-[250px] desktop:w-[250px] 
              pl-[9px]
              desktopLG:pl-[12px] h-[38px] desktop:h-[50px] mr-[20px] p-[10px] rounded-[inherit] outline-none max-tablet:text-[12px]"
              />
              <Button
                text={"Appraise"}
                img={arrow}
                //Make it a small button if the viewport is less than 960px. The line below returns a Boolean
                // sm={typeof(window) !== undefined && window.innerWidth < 960}
                homepage={true}
              />
            </section>
          </form>
        </section>
        <section className="absolute right-0 bottom-0 top-[350px] w-[70vw] mr-[0px] desktop:mr-[-200px] h-[40vh] desktop-w-[50vw] desktop:h-[50vh] z-[1]">
          <figure className="h-full w-full relative z-[-9]">
            <Image src={heroImg} alt={"Hero illustration"} fill />
          </figure>
        </section>
      </section>

      <section className="my-[50px] w-[95vw] py-[50px] bg-lightPurple rounded-[12px] flex flex-col justify-start items-center">
        <span className="text-[#49238f] text-[30px] font-bold">
          Supported By
        </span>
        <section className="w-full flex justify-evenly items-center mt-[30px]">
          <figure className="relative max-tablet:w-[30%] tablet:w-[200px] h-[100px]">
            <Image src={aff1} fill alt={"Affiliates"} />
          </figure>
          <figure className="relative max-tablet:w-[30%] tablet:w-[200px] h-[100px]">
            <Image src={aff2} fill alt={"Affiliates"} />
          </figure>
        </section>
      </section>

      <section className="w-full bg-[#fff] p-[60px] flex flex-col justify-start items-center">
        <h1 className="text-darkPurple font-bold mb-[60px]">OUR FEATURES</h1>
        <section className="flex flex-wrap justify-center items-center mb-[40px]">
          <FeatureCard
            img={l}
            title={"Unique Algorithm"}
            description={
              "Combining machine learning with real-market sales data from our vast network of collaborators"
            }
          />

          <FeatureCard
            img={a}
            title={"Compare Values"}
            description={
              "You can easily find similar domain names worth even more or ones that will compliment your collection"
            }
          />

          <FeatureCard
            img={i}
            title={"Instant Insights"}
            description={
              "Identify new trends by utilizing the industry's most comprehensive data sets and reporting technologies."
            }
          />

          <FeatureCard
            img={d}
            title={"Community Driven"}
            description={
              "All of our tools are created by collectors, for collectors - with the needs of all of us in mind."
            }
          />
        </section>
      </section>

      <section className="py-[50px] w-[95vw] flex flex-col justify-start items-center bg-lightPurple rounded-[12px] mt-[120px] mb-[150px]">
        <h1 className="text-darkPink font-bold mb-[60px] max-w-[330px] text-center">
          HOW WE APPRAISE DOMAINS
        </h1>
        <section className="w-full  flex justify-between items-center pl-[30px] tablet:pl-[70px] mb-[80px]">
          <section className="w-full tablet:w-[40%] h-fit flex flex-col justify-start items-center relative">
            <div className="absolute top-0 left-[10px] tablet:left-[30px] bg-[#fff] w-[5px] h-[650px]"></div>
            <AppraiseDetails
              title={"Machine Work"}
              description={
                "We would run it through our algorithm to most accurately determine the current valuation."
              }
            />

            <AppraiseDetails
              title={"Assembling Data"}
              description={
                "The information is then cross referenced with recent trends and news from crypto networks."
              }
            />

            <AppraiseDetails
              title={"Improving Data"}
              description={
                "We keep adding new features to the tool as we carefully focus on your ideas and input."
              }
            />
          </section>

          <figure className="relative w-[50%] h-[70vh] hidden desktop:block">
            <Image alt={"Appraise image"} fill src={appraise} />
          </figure>
        </section>
      </section>
      <PricingPlans />
      {/* <section className="w-[100vw] my-[90px] flex justify-center items-center">
        <section className="w-[80%] flex flex-col justify-start items-center desktop:flex-row desktop:justify-between desktop:items-start">
          <section>
            <h1 className="text-[#7B61FF] font-bold desktopLG:text-left text-center">
              Frequently Asked Questions
            </h1>
            <p className="max-w-[280px]">
              Do you have a question that you want to ask? You can contact us at
              support@domainplug.com
            </p>
          </section>
          <section className="w-[95%] desktopLG:w-[55%] flex flex-col justify-start items-center mt-[50px] desktop:mt-[0px]">
            {faqData.length > 0 &&
              faqData.map((eachQuestion, i) => {
                return (
                  <Accordion
                    key={i}
                    title={eachQuestion.title}
                    description={eachQuestion.description}
                  />
                );
              })}
          </section>
        </section>
      </section> */}
      <Footer />
    </main>
  );
};

export default Home;
