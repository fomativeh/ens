"use client"
import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { NavModalContext, NavModalContextValue } from "../../context/NavModalContext";
import { NavModal } from "../page";

export const SectionWrapper: React.FC<{
  noContent?: boolean;
  darkBG?: boolean;
  children: ReactNode;
  bottomPad?:Boolean
}> = ({ noContent, darkBG, bottomPad, children }) => {
  if (noContent) {
    return (
      <section
        className={`h-[400px] ${darkBG && `bg-[#CD9EDA] opacity-[60%]`} w-full`}
      />
    );
  }

  return (
    <section
      className={`py-[30px] px-[35px] desktopLG:px-[120px] ${bottomPad && `pb-[200px]`} flex flex-col justify-start items-start ${
        darkBG && `bg-[#DAB5E4]`
      } w-full`}
    >
      {children}
    </section>
  );
};

const HeadingWrapper: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="max-w-full font-bold text-[20px] my-[15px]">{text}</span>
  );
};

const TextWrap: React.FC<{ heading: string; text: string }> = ({
  heading,
  text,
}) => {
  return (
    <section className="w-full my-[15px] flex">
      <span className="font-semibold w-full">
        {heading}
        <p className="ml-[5px] font-normal inline">{text}</p>
      </span>
    </section>
  );
};

const PrivacyPolicy: React.FC = () => {
  const {modalOpen, setModalOpen } = useContext(NavModalContext) as NavModalContextValue;

  return (
    <main className="relative overflow-x-hidden flex flex-col min-h-screen justify-start items-center bg-bodyPurple pt-[80px]">
      <Navbar
        homepage={true}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
          {modalOpen && <NavModal setModalOpen={setModalOpen} />}

      
      <h1 className="font-bold mt-[60px] mb-[20px] desktopLG:my-[80px] uppercase desktopLG:max-w-fit max-w-[350px]">Privacy Policy</h1>
      <SectionWrapper>
        <HeadingWrapper text={"Privacy Policy"} />
        <HeadingWrapper text={"Introduction:"} />
        <p className="my-[10px]">
          At DomainPlug, we value your privacy and are committed to protecting
          your personal information. This policy outlines how we collect, use,
          and safeguard the information you provide while using our services.
          Please take a moment to read and understand this document.
        </p>
      </SectionWrapper>

      <SectionWrapper darkBG={true}>
        <HeadingWrapper text={"Non-Personal Identification Information:"} />
        <p className="my-[10px]">
          In addition to personal information, we may also gather non-personal
          identification information when you interact with our Site. This may
          include details like your browser type, computer specifications, and
          technical information related to your connection to our platform.
        </p>
        <HeadingWrapper text={"Web Browser Cookies:"} />
        <p className="my-[10px]">
          Our Site uses cookies to enhance your browsing experience. Cookies are
          placed on your hard drive to assist with record-keeping and to track
          certain information about your interactions with our platform. You can
          choose to disable cookies in your web browser settings, but please
          note that this might impact the functionality of certain parts of our
          Site.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <HeadingWrapper text={"How We Use Collected Information:"} />
        <p className="my-[10px]">
          DomainPlug employs the information we collect for various purposes:
        </p>
        <TextWrap
          heading={"Improving Customer Service:"}
          text={
            "Your provided information helps us respond more effectively to your inquiries and support requests."
          }
        />
        <TextWrap
          heading={"Personalizing User Experience:"}
          text={
            "We analyze aggregated data to understand how users engage with our services and resources."
          }
        />
        <TextWrap
          heading={"Enhancing Our Site:"}
          text={
            "Based on the feedback we receive, we continuously work to enhance our website offerings."
          }
        />
        <TextWrap
          heading={"Processing Transactions:"}
          text={
            " Information you provide while making an order is used solely to fulfill that order's service. We don't share this information with external parties except when necessary for service provision."
          }
        />
        <TextWrap
          heading={"Sending Periodic Emails:"}
          text={
            "If you provide your email for order processing, it will be used to share order-related information, updates, and responses to your inquiries. If you opt into our mailing list, you may receive emails with company news and related information. You can unsubscribe from these emails at any time"
          }
        />
      </SectionWrapper>

      <SectionWrapper darkBG={true}>
        <HeadingWrapper text={"Security Measures:"} />
        <p className="my-[10px]">
          DomainPlug takes data protection seriously. We implement appropriate
          security measures to prevent unauthorized access, alteration,
          disclosure, or destruction of personal and transaction information.
          Sensitive data exchange between our Site and Users occurs over an SSL
          secured communication channel, ensuring encryption and protection with
          digital signatures.
        </p>
        <HeadingWrapper text={"Third-Party Websites:"} />
        <p className="my-[10px]">
          While visiting our Site, you might encounter content or advertisements
          linking to third-party websites. These external sites have their own
          policies and practices, which we do not control. Interactions with
          these sites are subject to their respective terms and policies.
        </p>
        <HeadingWrapper text={"Advertising:"} />
        <p className="my-[10px]">
          Ads on our Site might be delivered by advertising partners, who may
          use cookies to compile non-personal identification information about
          you and your browsing habits. Our privacy policy does not cover the
          use of cookies by these advertisers.
        </p>
      </SectionWrapper>

      <SectionWrapper bottomPad={true}>
        <HeadingWrapper text={"Changes to This Privacy Policy:"} />
        <p className="my-[10px]">
          DomainPlug retains the right to update this privacy policy as needed.
          Any modifications will be reflected with an updated date at the bottom
          of the page. We encourage you to periodically review this policy to
          stay informed about how we protect your personal information.
        </p>
        <HeadingWrapper text={"Your Acceptance:"} />
        <p className="my-[10px]">
          By using our Site, you indicate your acceptance of this privacy policy
          and our terms of service. If you disagree with this policy, kindly
          refrain from using our Site. Continued use of the Site post policy
          changes will be deemed as your acceptance of those changes.
        </p>
        <HeadingWrapper text={"Contact Us:"} />
        <p className="my-[10px]">
          For any questions about this Privacy Policy or your interactions with
          our Site, please reach out to us at info@DomainPlug.com.
        </p>
      </SectionWrapper>
      <Footer/>
    </main>
  );
};

export default PrivacyPolicy;
