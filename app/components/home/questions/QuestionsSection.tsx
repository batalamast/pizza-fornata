import "swiper/css";
import "swiper/css/navigation";
import { FAQ } from "~/components/home/questions/FAQ";
import { questions } from "~/mock/questions";
import { PHONE_NUMBER } from "~/constants/info.constants";
import { motion } from "framer-motion";

const QuestionsSection = () => {
    return (
        <section className="relative py-14 bg-gray-100" aria-labelledby="faq-title" aria-describedby="faq-desc">
            <motion.div
                className="mx-auto max-w-4xl gap-4 text-center relative px-4"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                // 👇 κάνει trigger πιο νωρίς (πριν “μπει” πολύ μέσα στο viewport)
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -180px 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.div
                    className="bg-white px-5 py-10 md:p-20 rounded-3xl"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1, margin: "0px 0px -180px 0px" }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
                >
                    <motion.h2
                        id="faq-title"
                        className="text-[25px] md:text-[30px] font-extrabold uppercase"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1, margin: "0px 0px -180px 0px" }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                        Frequently Asked Questions
                    </motion.h2>

                    <motion.p
                        id="faq-desc"
                        className="text-lg my-3 text-gray-500"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1, margin: "0px 0px -180px 0px" }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
                    >
                        Can’t able to find answers you’re looking for?
                    </motion.p>

                    <motion.a
                        href={`tel:${PHONE_NUMBER}`}
                        className="text-lg text-primary-500 border-b border-primary-500 inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 leading-5"
                        aria-label="Call us"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1, margin: "0px 0px -180px 0px" }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                    >
                        Call us
                    </motion.a>

                    <motion.div
                        className="mt-6 text-left"
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // 👇 πιο “νωρίς” trigger ώστε να αρχίσει πριν φτάσει στο κέντρο
                        viewport={{ once: true, amount: 0.05, margin: "0px 0px -220px 0px" }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
                    >
                        <FAQ items={questions} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default QuestionsSection;
