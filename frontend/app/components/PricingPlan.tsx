import planData from "../../utils/planData";
import PlanWrapper, { PlanProps } from "./PlanWrapper";

export const PricingPlans: React.FC = () => {
    return (
      <section className="mt-[70px] pt-[120px] pb-[40px] w-full bg-[#fff] flex flex-col justify-start items-center">
        <h1 className="text-darkPurple font-bold mb-[80px]">OUR PRICING PLANS</h1>
        <section className="w-[95%] flex justify-evenly flex-wrap items-start">
          {planData.length > 0 &&
            planData.map((eachPlan: PlanProps) => {
              return (
                <PlanWrapper
                  title={eachPlan.title}
                  description={eachPlan.description}
                  price={eachPlan.price}
                  features={eachPlan.features}
                />
              );
            })}
        </section>
      </section>
    );
  };