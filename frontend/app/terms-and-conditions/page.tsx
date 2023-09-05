import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const TAC = () => {
  return (
    <main className="overflow-x-hidden flex flex-col min-h-screen justify-start items-center bg-bodyPurple pt-[80px]">
      <Navbar />
      <h1 className="font-bold my-[80px] uppercase">Terms and Conditions</h1>
      <section className="w-[50%] font-bold flex flex-col justify-start pb-[120px]">
        <span className="my-[10px]">
          Please read these Terms and Conditions carefully before using
          DomainPlug’s Services.
        </span>
        <span className="my-[10px]">1. DomainPlug Terms</span>
        <span className="my-[10px]">
          1.1 A contract between you and DomainPlug must exist before you can
          use its goods programs, services, and websites - collectively referred
          to as the "Services" in this article.
        </span>
        <span className="my-[10px]">
          1.2 Your agreement with DomainPlug shall always comprise, at a
          minimum, the terms and conditions outlined in this document, unless
          otherwise agreed to in writing with DomainPlug.
        </span>
        <span className="my-[10px]">
          1.3 Your agreement with DomainPlug will also cover any Legal Notices
          that are relevant to the Services. When additional terms are
          applicable to a service, you will have access to them either inside
          the service itself or through your usage of it.
        </span>
        <span className="my-[10px]">2. Acceptance of Terms</span>
        <span className="my-[10px]">
          By accessing or using the Service, you agree to be bound by these
          Terms and any additional terms and conditions that may apply to
          specific sections of the Service. If you do not agree with any part of
          these Terms, you may not use the Service.
        </span>
        <span className="my-[10px]">3. Use of the Service</span>
        <span className="my-[10px]">
          3.1 The ENS Service: The ENS Service allows users to register, manage,
          and transfer Ethereum domain names (ENS names).
        </span>
        <span className="my-[10px]">
          3.2 Eligibility: You must be of legal age in your jurisdiction to use
          this Service. You are responsible for ensuring that your use of the
          Service complies with applicable laws and regulations in your
          jurisdiction.
        </span>
        <span className="my-[10px]">4. Scope of Services</span>
        <span className="my-[10px]">
          4.1 Provision of Services: DomainPlug offers automated domain name
          appraisal services, data services, domain registration, and a variety
          of productivity tools. All these services are provided without any
          form of warranty or guarantee.
        </span>
        <span className="my-[10px]">
          4.2 Information for Research: All the information provided is intended
          for research purposes only. Domain valuations and values should not be
          construed literally. Valuation data represents an aggregated summary
          of domain or site metrics.
        </span>
      </section>
      <Footer/>
    </main>
  );
};

export default TAC;
