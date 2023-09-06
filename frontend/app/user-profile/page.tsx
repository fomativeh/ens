"use client";
import DashboardSidebar from "./components/DashboardSidebar";
import avatar from "../../public/assets/images/avatar.svg";
import Image from "next/image";
import Button from "../../components/Button";
import planData from "../../utils/planData";
import { FeaturesDetails } from "../components/PlanWrapper";
import checkMark from "../../public/assets/icons/checkmark.svg";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ethIcon from "../../public/assets/images/eth.svg";
import starIcon from "../../public/assets/icons/star.svg";
import editIcon from "../../public/assets/icons/edit.svg";
import deleteIcon from "../../public/assets/icons/delete.svg";
import logo from "../../public/assets/images/logo.svg";
import menuIcon from "../../public/assets/icons/menu.svg";

const ListButton: React.FC<{ text: string; color: string }> = ({
  text,
  color,
}) => {
  return (
    <button
      className={`border-none bg-[#fff] py-[10px] px-[20px] rounded-[4px] text-[${color}]`}
    >
      {text}
    </button>
  );
};

const CheckBox: React.FC<{
  checked: Boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}> = ({ checked, setChecked }) => {
  return (
    <section
      onClick={() => setChecked(!checked)}
      className="bg-[#fff] border-[1px] border-darkerPurple rounded-[3px] w-[15px] h-[15px] cursor-pointer flex justify-center items-center"
    >
      {checked && (
        <figure className="relative w-[10px] h-[10px]">
          <Image src={checkMark} alt={"Check mark icon"} fill />
        </figure>
      )}
    </section>
  );
};

const DomainRow: React.FC = () => {
  const [checkedDomain, setCheckedDomain] = useState(false);
  return (
    <section className="w-full bg-[#fff] rounded-[8px] py-[20px] my-[5px] flex">
      <section className="desktopLG:w-[20%] w-[50%] flex items-center justify-center pl-[15px]">
        <CheckBox checked={checkedDomain} setChecked={setCheckedDomain} />
        <span className="text-darkPink inline-block w-[90%] text-center">
          clean.eth
        </span>
      </section>
      <section className="desktopLG:w-[15%] w-[50%] flex items-center justify-center">
        <span className="text-darkPink mr-[2px]">23.81</span>
        <figure className="relative w-[20px] h-[20px] ml-[5px]">
          <Image src={ethIcon} alt={"Etherum icon"} fill />
        </figure>
      </section>

      <section className="hidden desktopLG:block w-[20%] text-center text-darkPink">
        11 June 2023
      </section>
      <section className="hidden desktopLG:flex w-[20%] justify-center items-center">
        <figure className="relative w-[20px] h-[20px]">
          <Image src={starIcon} alt={"Star icon"} fill />
        </figure>

        <figure className="relative w-[20px] h-[20px]">
          <Image src={starIcon} alt={"Star icon"} fill />
        </figure>

        <figure className="relative w-[20px] h-[20px]">
          <Image src={starIcon} alt={"Star icon"} fill />
        </figure>

        <figure className="relative w-[20px] h-[20px]">
          <Image src={starIcon} alt={"Star icon"} fill />
        </figure>
      </section>
      <section className="hidden desktopLG:flex w-[12%] justify-center items-center">
        <figure className="relative w-[20px] h-[20px] cursor-pointer">
          <Image src={editIcon} alt={"Edit icon"} fill />
        </figure>
      </section>
      <section className="w-[12%] hidden desktopLG:flex justify-center items-center">
        <figure className="relative w-[20px] h-[20px] cursor-pointer">
          <Image src={deleteIcon} alt={"Delete icon"} fill />
        </figure>
      </section>
    </section>
  );
};

const CheckGroup: React.FC<{ label: string; margin?: Boolean }> = ({
  label,
  margin,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <section
      className={`flex justify-start items-center ${margin && `mr-[20px]`}`}
    >
      <CheckBox checked={isChecked} setChecked={setIsChecked} />
      <span
        onClick={() => setIsChecked(!isChecked)}
        className="text-[#fff] ml-[5px] cursor-pointer"
      >
        {label}
      </span>
    </section>
  );
};

const MobileNav: React.FC<{
  modalOpen: Boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ modalOpen, setModalOpen }) => {
  return (
    <section className="z-[2] w-full flex desktopLG:hidden bg-[#fff] justify-between items-center h-[80px] px-[35px] fixed top-0 left-0">
      <figure className="w-[100px] h-full relative">
        <Image src={logo} alt={"Logo image"} fill />
      </figure>

      {!modalOpen && (
        <figure
          className="w-[35px] h-[35px] relative cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <Image src={menuIcon} alt={"Menu icon"} fill />
        </figure>
      )}
    </section>
  );
};

const Modal: React.FC<{ setModalOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setModalOpen,
}) => {
  return (
    <section className="desktopLG:hidden px-[20px] bg-[#000000d0] z-[9] absolute top-0 left-0 w-full h-full flex justify-center items-start">
      <DashboardSidebar onModal={true} setModalOpen={setModalOpen} />
    </section>
  );
};

const UserProfile: React.FC = () => {
  const [buttonSize, setButtonSize] = useState<{
    sm: boolean;
    md: boolean;
    textSm: boolean;
  }>({
    sm: false,
    md: false,
    textSm: false,
  });

  useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 960) {
          setButtonSize({ ...buttonSize, md: true, sm: false, textSm: false });
        } else if (window.innerWidth < 960 && window.innerWidth > 390) {
          setButtonSize({ ...buttonSize, md: false, sm: true, textSm: false });
        } else {
          setButtonSize({ ...buttonSize, md: false, sm: false, textSm: true });
        }
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [buttonSize]);

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className="relative h-full w-full min-h-screen bg-bodyPurple flex justify-between items-start">
      <DashboardSidebar />
      <MobileNav modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      <section className="w-full flex-grow min-h-[100vh] flex flex-col justify-start items-center py-[150px] px-[25px] desktopLG:px-[55px]">
        <section className="w-full flex flex-col desktopLG:flex-row desktopLG:justify-between items-center">
          <section className="flex items-center desktopLG:flex-row flex-col">
            <figure className="relative w-[240px] h-[240px] desktopLG:mr-[34px]">
              <Image
                src={avatar}
                alt={"Profile picture"}
                fill
                className="rounded-[50px]"
              />
            </figure>
            <span className="text-darkPink text-[30px] font-bold mt-[100px] desktopLG:mt-0 desktopLG:mb-0 mb-[30px]">
              Sarah Athens
            </span>
          </section>
          <section className="h-fit flex flex-row items-center desktopLG:flex-col desktopLG:justify-start w-fit">
            <Button
              text={"Appraise A Domain"}
              md={buttonSize.md}
              sm={buttonSize.sm}
              textSm={buttonSize.textSm}
            />
            <button className="ml-[20px] text-[12px] py-[12px] px-[10px] desktopLG:ml-0 tablet:py-[11px] tablet:px-[17px] border-[2px] rounded-[8px] border-[#7F56D9]  desktopLG:mt-[20px]">
              Change Subscription
            </button>
          </section>
        </section>

        <section
          className="relative h-fit w-full bg-[#F8EFFA] flex flex-col items-center desktopLG:flex-row desktopLG:justify-between
         desktopLG:items-start rounded-[20px] p-[35px] mt-[55px]"
        >
          <section className="flex flex-col items-center desktopLG:items-start">
            <span className="text-[#B253CB] text-[24px] font-bold">
              You are on Plus plan!
            </span>
            <section className="flex text-darkPink items-end mt-[18px] font-bold">
              <span className="text-[20px]">$5</span>
              <span>/Month</span>
            </section>
          </section>

          <section className="absolute desktopLG:left-[35px] desktopLG:bottom-[35px] bottom-[50px]">
            <Button text={"Upgrade Plan"} md={true} />
          </section>

          <section
            className="h-fit flex flex-col justify-evenly items-center desktopLG:items-start w-full desktopLG:w-fit
          desktopLG:mb-0
           desktopLG:mt-0 mt-[40px] mb-[120px]"
          >
            {planData.length > 0 &&
              planData
                .filter((eachPlan) => eachPlan.title == "Plus Plan")[0]
                .features.map((eachFeature) => {
                  return (
                    <>
                      <FeaturesDetails feature={eachFeature} dashboard={true} />
                    </>
                  );
                })}
          </section>
        </section>

        <section className="w-full rounded-[10px] bg-[#F8EFFA] flex flex-col justify-start items-left p-[25px] mt-[120px]">
          <h1 className="text-[#B253CB] font-bold text-[20px] tablet:text-[2vw] desktopLG:text-[30px] desktopLG:text-left text-center">
            Domains You Searched For
          </h1>
          <section className="w-full flex flex-col justify-start items-center mt-[25px]">
            <section className="hidden bg-[#A484E1] desktopLG:flex justify-between items-center w-full px-[30px] py-[15px]">
              <section className="flex justify-start items-center">
                <span className="text-[#fff] mr-[35px]">Actions</span>
                <section className="flex items-center justify-start">
                  <CheckGroup label={"Edit"} margin={true} />
                  <CheckGroup label={"Delete"} margin={true} />
                  <CheckGroup label={"Add to favourites"} />
                </section>
              </section>
              <ListButton text={"Search Domain"} color={"#752989"} />
              <ListButton text={"Delete all"} color={"red"} />
            </section>
            <section className="w-full flex flex-col justify-start items-center bg-[#F0EBFA] pb-[40px]">
              <section className="hidden desktopLG:block text-[#752989] font-bold mt-[40px] mb-[20px] w-full cursor-pointer">
                <span className="inline-block w-[20%] text-center text-[20px]">
                  Domain Name
                </span>
                <span className="inline-block w-[15%] text-center text-[20px]">
                  Value
                </span>
                <span className="inline-block w-[20%] text-center text-[20px]">
                  Date
                </span>
                <span className="inline-block w-[20%] text-center text-[20px]">
                  Rating
                </span>
                <span className="inline-block w-[12%] text-center text-[20px]">
                  Edit
                </span>
                <span className="inline-block w-[12%] text-center text-[20px]">
                  Delete
                </span>
              </section>

              <section className="w-[95%] flex flex-col justify-start">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e, i) => {
                  return <DomainRow key={i} />;
                })}
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default UserProfile;
