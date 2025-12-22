import { statisticItems } from "~/mock/statistics";
import { StatisticsCard } from "~/components/home/statistics/StatisticsCard";

const StatisticsSection = () => {
    return (
        <section
            className="bg-gradient-to-r from-[#EAB67B] to-[#F4D8B8] py-14"
            aria-labelledby="why-fornata-title"
            aria-describedby="why-fornata-desc"
        >
            <div className="mx-auto px-4 md:px-8 lg:px-20 max-w-8xl">
                <p id="why-fornata-desc" className="text-center text-success-600 uppercase text-sm tracking-wider">
                    Why Pizza Fornata
                </p>

                <h2 id="why-fornata-title" className="text-center w-full md:w-[600px] mx-auto mt-3 font-bold text-[30px] leading-tight">
                    Εδώ θα μπορούσε να μπει κάποιος πιασάρικος τίτλος για να κρατήσει την προσοχή του επισκέπτη!
                </h2>

                {/* List semantics for cards */}
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8" role="list">
                    {statisticItems.map(item => (
                        <li key={item.id}>
                            <StatisticsCard item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default StatisticsSection;
