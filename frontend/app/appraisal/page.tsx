import Image from "next/image";
import Navbar from "../../components/Navbar";
import ethIcon from "../../public/assets/images/eth.svg";
import check from "../../public/assets/icons/check.svg";
import Button from "../../components/Button";
import similarDomains from "../../utils/similarDomains";
import arrIcon from "../../public/assets/icons/arr.svg"

type SimilarDomainItemProps = {
  name: string;
  price: number;
};

const SimilarDomainItem: React.FC<SimilarDomainItemProps> = ({
  name,
  price,
}) => {
  return (
    <section className="cursor-pointer w-full rounded-[8px] border-darkPurple border-[1px] flex justify-between items-center my-[2px] py-[6px] px-[12px]">
      <span className="text-darkPink font-bold">{name}</span>
      <section className="flex items-center">
        <span className="text-darkPink font-bold">{price}</span>
        <figure className="relative w-[30px] h-[30px]">
          <Image alt={"Eth icon"} src={ethIcon} fill />
        </figure>
      </section>
    </section>
  );
};

const OtherDomainItem: React.FC<{ name: string }> = ({ name }) => {
  return (
    <section className="cursor-pointer w-full rounded-[8px] border-darkPurple border-[1px] flex justify-end items-center my-[10px] py-[8px] px-[5px]">
      <span className="text-darkPink text-[18px]">{name}</span>
     <section className="ml-[20px]">
      <Button text={"Appraise"} img={arrIcon}  sm={true}/>
     </section>
    </section>
  );
};

const Appraisal: React.FC = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden flex items-start justify-center bg-bodyPurple">
      <Navbar />
      <section className="w-[88vw] mt-[150px] flex flex-col justify-start items-center desktopLG:flex-row desktopLG:justify-between desktopLG:items-start">
        <section className=" w-[80%] min-w-fit desktopLG:w-[60%] bg-[#fff] rounded-[12px] flex flex-col justify-start items-center p-[35px]">
          <section className="w-full flex flex-col desktopLG:flex-row items-center">
            <h1 className="text-darkPink m-0 mr-[25px] font-bold text-center">
              We have Appraised Your Domain!
            </h1>
            <span className="text-[#752989] mt-[20px] desktopLG:mt-[0px]">(1 of 2 free tries left)</span>
          </section>

          <span className="w-full mt-[30px] text-darkPink desktopLG:text-left text-center">
            Your domain name <b className="font-bold">bloom.eth</b> has an
            estimated value of
          </span>

          <section className="w-full mt-[40px] px-[30px] rounded-[12px] bg-[#A484E1] h-[100px] desktopLG:h-[200px] flex justify-center items-center">
            <span className="text-[#F0EBFA] text-[28px] font-bold mr-[55px]">
              bloom.eth
            </span>

            <section className="flex items-center">
              <span className="text-[#F0EBFA] text-[28px] font-bold">
                11.23
              </span>
              <figure className="w-[30px] h-[30px] relative">
                <Image alt={"Eth icon"} src={ethIcon} fill />
              </figure>
              <span className="text-[#F0EBFA] text-[28px] font-bold">/</span>
              <span className="text-[#F0EBFA]">$16211</span>
            </section>
          </section>

          <section className="w-full flex flex-col desktopLG:flex-row desktopLG:justify-between desktopLG:items-start">
            <section className="w-full desktopLG:w-[48%] flex flex-col justify-start items-center">
              <section className="w-full flex flex-col justify-start items-center bg-[#F0EBFA] p-[20px] rounded-[12px] my-[35px]">
                <h2 className="text-[#49238F] font-bold">
                  Why is this Domain Valuable?
                </h2>
                <section className="w-full mt-[30px] flex flex-col justify-start items-start">
                  <section className="w-full flex justify-start items-start mb-[10px]">
                    <figure className="relative w-[20px] h-[20px] mr-[10px]">
                      <Image src={check} alt={"Check icon"} fill />
                    </figure>
                    <span className="text-[14px] max-w-[80%]">
                      Short : Bloom is 9 Characters or less
                    </span>
                  </section>

                  <section className="w-full flex justify-start items-start mb-[10px]">
                    <figure className="relative w-[20px] h-[20px] mr-[10px]">
                      <Image src={check} alt={"Check icon"} fill />
                    </figure>
                    <span className="text-[14px] max-w-[80%]">
                      Special Characters : Bloom contains no special characters
                    </span>
                  </section>

                  <section className="w-full flex justify-start items-start mb-[10px]">
                    <figure className="relative w-[20px] h-[20px] mr-[10px]">
                      <Image src={check} alt={"Check icon"} fill />
                    </figure>
                    <span className="text-[14px] max-w-[80%]">
                      Unique : Bloom is uncommon
                    </span>
                  </section>

                  <section className="w-full flex justify-start items-start mb-[10px]">
                    <figure className="relative w-[20px] h-[20px] mr-[10px]">
                      <Image src={check} alt={"Check icon"} fill />
                    </figure>
                    <span className="text-[14px] max-w-[80%]">
                      Memorable : Bloom is easy to remember
                    </span>
                  </section>
                </section>
              </section>
              <Button text={"Buy this domain"} />
            </section>

            <section className="w-full desktopLG:w-[48%] desktopLG:mt-[35px] flex flex-col justify-start items-center bg-[#F0EBFA] p-[20px] rounded-[12px] mt-[100px]">
              <h2 className="text-[#49238F] font-bold mb-[20px]">
                Most Similar Domains Sold
              </h2>
              {similarDomains.length > 0 &&
                similarDomains.map((eachDomain) => {
                  return (
                    <SimilarDomainItem
                      name={eachDomain.name}
                      price={eachDomain.price}
                    />
                  );
                })}
            </section>
          </section>
        </section>

        <section className="w-fit min-w-fit desktopLG:w-[35%] desktopLG:mt-0 mt-[100px] bg-[#fff] rounded-[12px] p-[30px] flex flex-col justify-start items-center">
          <h1 className="text-darkPink mb-[35px]">Other Similar Domains</h1>
          {similarDomains.length > 0 &&
                similarDomains.map((eachDomain) => {
                  return (
                    <OtherDomainItem
                      name={eachDomain.name}
                    />
                  );
                })}
        </section>
      </section>
    </main>
  );
};

export default Appraisal;
