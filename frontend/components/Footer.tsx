import FooterLinksWrapper from "../components/FooterLinksWrapper";
import footerData from "../utils/footerData";
import logo from "../public/assets/images/logo.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <section className="flex flex-col w-full justify-start items-center bg-[#fff]">
      <section className="w-full flex justify-evenly flex-wrap items-start py-[40px] px-[60px]">
        {footerData.length > 0 &&
          footerData.map((eachData) => {
            return (
              <FooterLinksWrapper
                title={eachData.title}
                links={eachData.links}
              />
            );
          })}
      </section>

      <div className="mt-[20px] w-full bg-[#7d99d1] h-[1px]"></div>
      <section className="w-full flex justify-between px-[25px] desktopLG:justify-center items-center py-[30px] desktopLG:px-[80px]">
        <figure className="relative desktopLG:w-[200px] desktopLG:h-[200px] w-[120px] h-[120px] mr-[0px]">
          <Image src={logo} alt={"Footer logo"} fill />
        </figure>

        <span className="text-[#98A2B3] text-[14px] w-[45%] desktopLG:text-[16px] desktopLG:w-fit">
          © 2023 Domain plug UI. All rights reserved.
        </span>
      </section>
    </section>
  );
};

export default Footer;
