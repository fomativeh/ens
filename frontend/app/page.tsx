import Navbar from "../components/Navbar";
import Image from "next/image";
import heroImg from "../public/assets/images/hero.svg";
import arrow from "../public/assets/icons/arr.svg";
import af1 from "../public/assets/images/aff-1.svg";
import af2 from "../public/assets/images/aff-2.svg";
import af3 from "../public/assets/images/aff-3.svg";
import af4 from "../public/assets/images/aff-4.svg";
import l from "../public/assets/icons/lightening.svg";
import d from "../public/assets/icons/drive.svg";
import i from "../public/assets/icons/insight.svg";
import a from "../public/assets/icons/approved.svg";
import j from "../public/assets/icons/check.svg";

import appraise from "../public/assets/images/appraise.svg";
import planData from "../utils/planData";
import faqData from "../utils/faqData";
import Button from "../components/Button";
import FeatureCard from "./components/FeatureCard";
import AppraiseDetails from "./components/AppraiseDetails";
import PlanWrapper, { PlanProps } from "./components/PlanWrapper";
import Accordion from "./components/Accordion";
import Footer from "../components/Footer";

export const PricingPlans: React.FC = () => {
  return (
    <section className="my-[70px] py-[120px] w-full bg-[#fff] flex flex-col justify-start items-center">
      <h1 className="text-darkPurple font-bold mb-[80px]">OUR PRICING PLANS</h1>
      <section className="w-[95%] flex justify-evenly items-start">
        {planData.length > 0 &&
          planData.map((eachPlan: PlanProps) => {
            return (
              <PlanWrapper
                title={eachPlan.title}
                description={eachPlan.description}
                price={eachPlan.price}
                features={eachPlan.features}
              />
            );
          })}
      </section>
    </section>
  );
};

const Dot: React.FC = () => {
  return (
    <div className="w-[10px] h-[10px] bg-[#fff] rounded-[50px] mr-[15px]"></div>
  );
};

const Home: React.FC = () => {
  return (
    <main className="overflow-x-hidden flex min-h-screen flex-col items-center justify-between bg-bodyPurple">
      <Navbar homepage={true} />
      <section className="relative hero mt-[80px] w-full flex justify-start items-center pl-[200px] bg-[#766C79]">
        <section>
          <h1 className="text-bodyPurple text-[60px] font-bold max-w-[750px]">
            The Everything ENS Related
          </h1>

          <ul className="text-[#fff] font-bold text-[20px] flex items-center mb-[50px]">
            <li className="mr-[50px] flex justify-start items-center">
              <Dot />
              <span>Explore</span>
            </li>
            <li className="mr-[50px] flex justify-start items-center">
              <Dot />
              <span>Discover</span>
            </li>
            <li className="flex justify-start items-center">
              <Dot />
              <span>Appraise</span>
            </li>
          </ul>

          <section className="w-fit h-fit flex justify-start items-center rounded-[10px] py-[2px] pr-[4px] bg-[#fff] border-[#A484E1] border-[4px]">
            <input
              type="text"
              placeholder="enter your .eth domain"
              className="placeholder:text-darkPink border-none w-[250px] pl-[12px] h-[50px] mr-[20px] p-[10px] rounded-[inherit] outline-none"
            />
            <Button text={"Appraise"} img={arrow} />
          </section>
        </section>
        <section className="absolute right-0 bottom-0 w-[50vw] h-[50vh]">
          <figure className="h-full w-full relative">
            <Image src={heroImg} alt={"Hero illustration"} fill />
          </figure>
        </section>
      </section>

      <section className="my-[50px] w-[95vw] py-[50px] bg-lightPurple rounded-[12px] flex flex-col justify-start items-center">
        <span className="text-darkPink text-[30px] font-bold">
          Our Affiliates
        </span>
        <section className="w-full flex justify-evenly items-center mt-[30px]">
          <figure className="relative w-[18%] h-[100px]">
            <Image src={af1} fill alt={"Affiliates"} />
          </figure>
          <figure className="relative w-[18%] h-[100px]">
            <Image src={af2} fill alt={"Affiliates"} />
          </figure>
          <figure className="relative w-[18%] h-[100px]">
            <Image src={af3} fill alt={"Affiliates"} />
          </figure>
          <figure className="relative w-[18%] h-[100px]">
            <Image src={af4} fill alt={"Affiliates"} />
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
        <h1 className="text-darkPink font-bold mb-[60px]">
          HOW WE APPRAISE DOMAINS
        </h1>
        <section className="w-full  flex justify-between items-center pl-[70px] mb-[80px]">
          <section className="w-[40%] h-fit flex flex-col justify-start items-center relative">
            <div className="absolute top-0 left-[30px] bg-[#fff] w-[5px] h-[650px]"></div>
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

          <figure className="relative w-[50%] h-[70vh]">
            <Image alt={"Appraise image"} fill src={appraise} />
          </figure>
        </section>
      </section>
      <PricingPlans />
      <section className="w-[100vw] my-[90px] flex justify-center items-center">
        <section className="w-[80%] flex justify-between items-start">
          <section>
            <h1 className="text-[#7B61FF] font-bold">
              Frequently Asked Questions
            </h1>
            <p className="max-w-[280px]">
              Do you have a question that you want to ask? You can contact us at
              support@domainplug.com
            </p>
          </section>
          <section className="w-[55%] flex flex-col justify-start items-center">
            {faqData.length > 0 &&
              faqData.map((eachQuestion) => {
                return (
                  <Accordion
                    title={eachQuestion.title}
                    description={eachQuestion.description}
                  />
                );
              })}
          </section>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
