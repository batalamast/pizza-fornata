import { statisticItems } from "~/mock/statistics";
import { StatisticsCard } from "~/components/home/statistics/StatisticsCard";
import { motion } from "framer-motion";
import { card, container, fadeUp } from "~/constants/animation.constants";

const StatisticsSection = () => {
    return (
        <section
            className="bg-gradient-to-r from-[#EAB67B] to-[#F4D8B8] py-14"
            aria-labelledby="why-fornata-title"
            aria-describedby="why-fornata-desc"
        >
            <motion.div
                className="mx-auto px-4 md:px-8 lg:px-20 max-w-8xl"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} // amount: πόσο να μπει στο viewport για να ξεκινήσει
            >
                <motion.p id="why-fornata-desc" className="text-center text-success-600 uppercase text-sm tracking-wider" variants={fadeUp}>
                    Why Pizza Fornata
                </motion.p>

                <motion.h2
                    id="why-fornata-title"
                    className="text-center w-full md:w-[600px] mx-auto mt-3 font-bold text-[30px] leading-tight"
                    variants={fadeUp}
                >
                    Εδώ θα μπορούσε να μπει κάποιος πιασάρικος τίτλος για να κρατήσει την προσοχή του επισκέπτη!
                </motion.h2>

                <motion.ul className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8" role="list" variants={container}>
                    {statisticItems.map(item => (
                        <motion.li key={item.id} variants={card}>
                            <StatisticsCard item={item} />
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </section>
    );
};

export default StatisticsSection;
