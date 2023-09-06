import Image from "next/image";
import Navbar from "../../components/Navbar";
import orderImg from "../../public/assets/images/order.svg";
import check from "../../public/assets/icons/check.svg";
import Footer from "../../components/Footer";
import { Questions } from "../subscription/page";
import Button from "../../components/Button";

const ConfirmOrder: React.FC = () => {
  return (
    <main className="overflow-x-hidden flex flex-col min-h-screen justify-start items-center bg-bodyPurple pt-[80px]">
      <Navbar />
      <section className="hero w-full flex justify-center items-center">
        <section
          className="h-[100vh] desktopLG:h-[60%] w-full flex border-solid flex-col justify-start items-center
          desktopLG:flex-row desktopLG:justify-center desktopLG:items-start"
        >
          <section className="desktopLG:hidden desktopLG:mt-[0px] mt-[120px] h-full w-[45%] flex justify-start items-center mb-[40px] desktopLG:mb-[0px]">
            <figure className="relative h-full w-[70%] min-w-[300px]">
              <Image src={orderImg} alt={"Order image"} fill />
            </figure>
          </section>

          <section className="h-full w-full desktopLG:w-[45%] flex flex-col justify-start items-center desktopLG:mb-0 mb-[120px]">
            <h1 className="font-bold text-[30px] desktopLG:text-[50px] max-w-[350px] desktopLG:max-w-fit text-center tablet:text-[4vw]">Confirm your order</h1>
            <p className="text-[#9747FF]">Change and cancel anytime you want</p>
          </section>

          <section className="h-full w-[45%] justify-start items-center hidden desktopLG:flex">
            <figure className="relative h-full w-[70%]">
              <Image src={orderImg} alt={"Order image"} fill />
            </figure>
          </section>
        </section>
      </section>
      <section className="w-full bg-[#fff] py-[70px] flex flex-col justify-start items-center">
        <span className="text-[#1F0F3D] font-bold text-[27px] mb-[35px]">
          Review your order
        </span>
        <section className="border-[1px] border-darkerPurple rounded-[12px] w-fit desktopLG:w-[40%] py-[85px] flex justify-center items-center">
          <section className="desktopLG:max-w-[70%] max-w-[85%] flex flex-col justify-start items-start">
            <section className="w-full text-[14px] flex items-center font-bold tablet:text-[2vw] mb-[20px] desktopLG:text-[22px]">
              <span className="text-[#101828] opacity-[30%]">
                Chosen Package
              </span>
              <span className="text-[#000] mt-[3px]">:&nbsp;Basic Plan</span>
            </section>
            <p className="text-[#6934CD]">
              Free 7 Days trial for users to get a feel of the tool.
            </p>
            <span className="font-bold text-[25px] mt-[25px] text-[#43184E]">
              $0
            </span>
            <section className="w-full flex flex-col justify-start items-center mt-[40px]">
              <span className="font-bold mb-[50px]">Features</span>
              <section className="flex flex-col justify-start items-start mb-[45px]">
                <section className="flex justify-start items-center text-[#752989] font-bold">
                  <figure className="relative w-[25px] h-[25px] mr-[12px]">
                    <Image src={check} alt={"Check image"} fill />
                  </figure>
                  <span>5 Domain Appraisals</span>
                </section>

                <section className="flex justify-start items-center text-[#752989] font-bold mt-[20px]">
                  <figure className="relative w-[25px] h-[25px] mr-[12px]">
                    <Image src={check} alt={"Check image"} fill />
                  </figure>
                  <span>Basic Appraisal Report</span>
                </section>
              </section>
              <Button text={"Start Free Trial"} />
            </section>
          </section>
        </section>

        <section className="border-[1px] mt-[55px] w-fit px-[65px] desktopLG:w-[40%] border-darkerPurple rounded-[12px] flex flex-col justify-start items-center py-[40px]">
          <section className="w-fit">
            <p className="font-bold text-[20px] mb-[30px]">
              Choose payment method
            </p>
            <Button text={"Subscribe"} fillWidth={true} />
          </section>
        </section>
      </section>
      <Questions />
      <Footer />
    </main>
  );
};

export default ConfirmOrder;
