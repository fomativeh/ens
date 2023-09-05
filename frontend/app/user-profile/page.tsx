"use client";
import Nav from "./components/Nav";
import avatar from "../../public/assets/images/avatar.svg";
import Image from "next/image";
import Button from "../../components/Button";
import planData from "../../utils/planData";
import { FeaturesDetails } from "../components/PlanWrapper";
import checkMark from "../../public/assets/icons/checkmark.svg";
import { Dispatch, SetStateAction, useState } from "react";
import ethIcon from "../../public/assets/images/eth.svg";
import starIcon from "../../public/assets/icons/star.svg";
import editIcon from "../../public/assets/icons/edit.svg";
import deleteIcon from "../../public/assets/icons/delete.svg";

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
      <section className="w-[20%] flex items-center justify-center pl-[15px]">
        <CheckBox checked={false} setChecked={setCheckedDomain} />
        <span className="text-darkPink inline-block w-[90%] text-center">
          clean.eth
        </span>
      </section>
      <section className="w-[15%] flex items-center justify-center">
        <span className="text-darkPink mr-[2px]">23.81</span>
        <figure className="relative w-[20px] h-[20px] ml-[5px]">
          <Image src={ethIcon} alt={"Etherum icon"} fill />
        </figure>
      </section>

      <section className="w-[20%] text-center text-darkPink">
        11 June 2023
      </section>
      <section className="w-[20%] flex justify-center items-center">
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
      <section className="w-[12%] flex justify-center items-center">
        <figure className="relative w-[20px] h-[20px] cursor-pointer">
          <Image src={editIcon} alt={"Edit icon"} fill />
        </figure>
      </section>
      <section className="w-[12%] flex justify-center items-center">
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

const UserProfile: React.FC = () => {
  return (
    <main className="h-full w-full min-h-screen bg-bodyPurple flex justify-between items-start">
      <Nav />
      <section className="flex-grow min-h-[100vh] flex flex-col justify-start items-center py-[150px] px-[55px]">
        <section className="w-full flex justify-between items-center">
          <section className="flex items-center">
            <figure className="relative w-[240px] h-[240px] mr-[34px]">
              <Image
                src={avatar}
                alt={"Profile picture"}
                fill
                className="rounded-[50px]"
              />
            </figure>
            <span className="text-darkPink text-[30px] font-bold">
              Sarah Athens
            </span>
          </section>
          <section className="flex flex-col justify-start w-fit">
            <Button text={"Appraise A Domain"} md={true} />
            <button className="py-[11px] px-[17px] border-[2px] rounded-[8px] border-[#7F56D9] mt-[20px]">
              Change Subscription
            </button>
          </section>
        </section>

        <section className="relative h-fit w-full bg-[#F8EFFA] flex justify-between items-start rounded-[20px] p-[35px] mt-[55px]">
          <section>
            <span className="text-[#B253CB] text-[24px] font-bold">
              You are on Plus plan!
            </span>
            <section className="flex text-darkPink items-end mt-[18px] font-bold">
              <span className="text-[20px]">$5</span>
              <span>/Month</span>
            </section>
          </section>

          <section className="absolute left-[35px] bottom-[35px]">
            <Button text={"Upgrade Plan"} md={true} />
          </section>

          <section className="h-fit flex flex-col justify-evenly items-start w-fit">
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
          <h1 className="text-[#B253CB] font-bold">Domains You Searched For</h1>
          <section className="w-full flex flex-col justify-start items-center mt-[25px]">
            <section className="bg-[#A484E1] flex justify-between items-center w-full px-[30px] py-[15px]">
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
              <section className="text-[#752989] font-bold mt-[40px] mb-[20px] w-full cursor-pointer">
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
                {[1,2,3,4,5,6,7,8,9,0].map((e, i)=>{
                    return(
                        <DomainRow key={i}/>
                    )
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
