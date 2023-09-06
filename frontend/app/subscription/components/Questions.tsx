"use client"
import Link from "next/link";

export const Questions: React.FC = () => {
    return (
      <section className="text-center mt-[40px] mb-[100px]">
        <h1 className="font-bold">Still have questions?</h1>
        <p>
          Have a look at our{" "}
          <Link href={"/"}>
            <span className="ml-[3px] text-[#9747FF]">FAQ</span>
          </Link>
        </p>
      </section>
    );
  };