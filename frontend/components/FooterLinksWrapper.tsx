type FooterLinkProps = {
  title: string;
  links: string[];
};

const FooterLinks: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <section className="flex flex-col justify-start items-start m-[30px]">
      <p className="text-[#98A2B3] font-bold my-[14px]">{title}</p>
      {links.length > 0 &&
        links.map((eachLink) => {
          return (
            <span className="text-[#667085] text-[18px] font-semibold my-[10px] cursor-pointer">
              {eachLink}
            </span>
          );
        })}
    </section>
  );
};

export default FooterLinks;
