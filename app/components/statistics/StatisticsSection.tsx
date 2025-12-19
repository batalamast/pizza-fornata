import { statisticItems } from "~/mock/statistics";
import { StatisticsCard } from "~/components/statistics/StatisticsCard";

const StatisticsSection = () => {
    return (
        <section className="bg-gradient-to-r from-[#EAB67B] to-[#F4D8B8] py-14">
            <div className={"mx-auto px-4 md:px-8 lg:px-20 max-w-8xl"}>
                <div className={"text-center text-success-600 uppercase text-sm"}>why Pizza fornata</div>
                <div className={"text-center w-full md:w-[600px] mx-auto mt-3 font-bold text-[30px] leading-tight"}>
                    Εδώ θα μπορούσε να μπει κάποιος πιασάρικος τίτλος για να κρατήσει την προσοχή του επισκέπτη!
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-3 gap-8 my-8"}>
                    {statisticItems.map((item, index) => (
                        <StatisticsCard item={item} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;
