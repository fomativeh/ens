import Link from "next/link";

type FooterLinkProps = {
  title: string;
  links: string[];
};

const FooterLinks: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <section className="flex flex-col justify-start items-start m-[20px]">
      <p className="text-[#98A2B3] font-bold my-[14px]">{title}</p>
      {links.length > 0 &&
        links.map((eachLink) => {
          return (
            <span className="text-[#667085] text-[14px] desktopLG:text-[18px] font-semibold my-[10px] cursor-pointer">
              <Link href={"/"}>{eachLink}</Link>
            </span>
          );
        })}
    </section>
  );
};

export default FooterLinks;
