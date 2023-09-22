import Link from "next/link";
import { Dispatch, SetStateAction, useContext } from "react";
import Button from "../../components/Button";
import { UserContext } from "../../context/UserContext";
import useLogout from "../../hooks/useLogout";

const NavModal: React.FC<{
  setModalOpen: Dispatch<SetStateAction<Boolean>>;
}> = ({ setModalOpen }) => {
  const { userState, setUserState } = useContext(UserContext);
  const logout = useLogout()
  return (
    <section
      className="absolute top-[80px] left-0 w-full h-screen bg-[#000000c8] flex justify-center items-start z-[999]"
      onClick={() => setModalOpen(false)}
    >
      <section className="w-full bg-[#fff] flex flex-col justify-start items-start px-[35px]">
        <ul className="w-full list-none text-[18px]">
          <li className="font-bold cursor-pointer w-full text-left my-[35px]">
            <Link href={"/"} onClick={() => setModalOpen(false)}>
              Home
            </Link>
          </li>
          {/* <li className="font-bold cursor-pointer w-full text-left my-[35px]">
            <Link href={"/appraisal"} onClick={() => setModalOpen(false)}>
              Domain Appraisal
            </Link>
          </li> */}
          <li className="font-bold cursor-pointer w-full text-left my-[35px]">
            <Link href={"/subscription"} onClick={() => setModalOpen(false)}>
              Pricing
            </Link>
          </li>
          <li className="font-bold cursor-pointer w-full text-left my-[35px]">
            <Link href={"/"} onClick={() => setModalOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {userState.isLoggedIn ? (
          <section onClick={logout} className="w-full mb-[40px]">
            <Button text={"Logout"} fillWidth={true}/>
          </section>
        ) : (
          <>
            <Link
              href={"/signup"}
              className="w-full"
              onClick={() => setModalOpen(false)}
            >
              <Button text={"Sign up"} fillWidth={true} />
            </Link>

            <Link
              href={"/login"}
              className="w-full"
              onClick={() => setModalOpen(false)}
            >
              <button className="w-full py-[15px] px-[20px] rounded-[20px] text-[#6941C6] bg-[#F9F5FF] mt-[20px] mb-[50px]">
                Login
              </button>
            </Link>
          </>
        )}
      </section>
    </section>
  );
};

export default NavModal;
