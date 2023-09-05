import Image from "next/image";
import Navbar from "../../components/Navbar";
import orderImg from "../../public/assets/images/order.svg";
import check from "../../public/assets/icons/check.svg"
import Footer from "../../components/Footer";
import { Questions } from "../subscription/page";
import Button from "../../components/Button";

const ConfirmOrder: React.FC = () => {
  return (
    <main className="overflow-x-hidden flex flex-col min-h-screen justify-start items-center bg-bodyPurple pt-[80px]">
      <Navbar />
      <section className="hero w-full flex justify-center items-center">
        <section className="h-[60%] w-full flex justify-center items-start">
          <section className="h-full w-[45%] flex flex-col justify-start items-center">
            <h1 className="font-bold text-[50px]">Confirm your order</h1>
            <p className="text-[#9747FF]">Change and cancel anytime you want</p>
          </section>

          <section className="h-full w-[45%] flex justify-start items-center">
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
        <section className="border-[1px] border-darkerPurple rounded-[12px] w-[40%] py-[85px] flex justify-center items-center">
          <section className="max-w-[70%] flex flex-col justify-start items-start">
            <section className="flex items-center font-bold text-[24px] mb-[20px]">
              <span className="text-[#101828] opacity-[30%]">
                Chosen Package
              </span>
              <span className="text-[#000] mt-[3px]">:&nbsp;Basic Plan</span>
            </section>
            <p className="text-[#6934CD]">Free 7 Days trial for users to get a feel of the tool.</p>
            <span className="font-bold text-[25px] mt-[25px] text-[#43184E]">$0</span>
            <section className="w-full flex flex-col justify-start items-center mt-[40px]">
                <span className="font-bold mb-[50px]">Features</span>
                <section className="flex flex-col justify-start items-start mb-[45px]">
                    <section className="flex justify-start items-center text-[#752989] font-bold">
                        <figure className="relative w-[25px] h-[25px] mr-[12px]">
                            <Image src={check} alt={"Check image"} fill/>
                        </figure>
                        <span>5 Domain Appraisals</span>
                    </section>

                    <section className="flex justify-start items-center text-[#752989] font-bold mt-[20px]">
                        <figure className="relative w-[25px] h-[25px] mr-[12px]">
                            <Image src={check} alt={"Check image"} fill/>
                        </figure>
                        <span>Basic Appraisal Report</span>
                    </section>
                </section>
                <Button text={"Start Free Trial"}/>
            </section>
          </section>
        </section>

        <section className="border-[1px] mt-[55px] w-[40%] border-darkerPurple rounded-[12px] flex flex-col justify-start items-center py-[40px]">
            <section className="w-fit">
            <p className="font-bold text-[20px] mb-[30px]">Choose payment method</p>
            <Button text={'Subscribe'} fillWidth={true}/>
            </section>
        </section>
      </section>
      <Questions />
      <Footer />
    </main>
  );
};

export default ConfirmOrder;
