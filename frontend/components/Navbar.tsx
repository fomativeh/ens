import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import Button from "./Button";

const Navbar: React.FC<{ authPage?: Boolean; homepage?: Boolean }> = ({
  authPage,
  homepage,
}) => {
  return (
    <nav
      className={`z-[9] w-full h-[80px] ${
        authPage
          ? `bg-none justify-start top-[20px] relative`
          : `bg-[#fff] top-0  justify-between fixed`
      } left-0 flex  items-center py-[0px] px-[70px]`}
    >
      <section className="h-full flex items-center justify-start">
        <figure className="relative mr-[30px] w-[200px] h-[80%]">
          <Image src={logo} alt={"Ens logo"} fill />
        </figure>
        {!authPage && (
          <ul
            className={`list-none flex h-[80%] font-[Inter] ${
              homepage ? `text-[#667085]` : `text-darkerPurple`
            } font-[500]`}
          >
            <li className="mr-[25px] h-full cursor-pointer flex justify-center items-center">
              Home
            </li>
            <li className="mr-[25px] h-full cursor-pointer flex justify-center items-center">
              Domain appraisal
            </li>
            <li className="mr-[25px] h-full cursor-pointer flex justify-center items-center">
              Pricing
            </li>
            <li className="h-full cursor-pointer flex justify-center items-center">
              Contact
            </li>
          </ul>
        )}
      </section>

      {!authPage && (
        <section className="flex justify-start items-center h-full">
          <ul
            className={`list-none flex items-center h-[80%] font-[Inter] ${
              homepage ? `text-[#667085]` : `text-darkerPurple`
            } font-[500]`}
          >
            <li className="mr-[25px] h-full cursor-pointer flex justify-center items-center">
              Log in
            </li>
            {homepage ? (
              <Button text={"Sign up"} />
            ) : (
              <Button text={"Sign up"} BG={true} />
            )}
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
