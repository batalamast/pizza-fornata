import { Button } from "~/components/ui/Button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import DiscountBadge from "~/components/home/delivery/DiscountBadge";
import { PHONE_NUMBER } from "~/constants/info.constants";

const DeliverySection = () => {
    const { i18n } = useTranslation();
    return (
        <section className="py-14 bg-gray-100 relative" aria-labelledby="delivery-title" aria-describedby="delivery-desc">
            <motion.div
                className="absolute end-65 top-25"
                initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
                <DiscountBadge />
            </motion.div>

            {/* Decorative image (animate in from bottom-left, late) */}
            <motion.img
                src="/images/delivery/motorbike.png"
                alt="motorbike"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                width={400}
                height={400}
                className="absolute top-2/3 left-27 transform -translate-y-2/3 pointer-events-none select-none"
                initial={{ opacity: 0, x: -140, y: -140, rotate: -8, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
            />

            <motion.div
                className="mx-auto px-4 md:px-8 lg:px-20 max-w-7xl"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.12 } }
                }}
            >
                <motion.h2
                    id="delivery-title"
                    className="text-center text-[40px]"
                    variants={{
                        hidden: { opacity: 0, y: 14 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                >
                    Delivery
                </motion.h2>

                <motion.p
                    id="delivery-desc"
                    className="text-center"
                    variants={{
                        hidden: { opacity: 0, y: 14 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                >
                    Επέλεξε τον <span className="text-primary-700 font-semibold">τρόπο </span> που θέλεις
                    <span className="text-primary-700 font-semibold"> να παραγγείλεις!</span>
                </motion.p>

                <motion.div
                    className="bg-primary-500 rounded-xl mt-10 py-10 px-4"
                    variants={{
                        hidden: { opacity: 0, y: 18 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
                    }}
                >
                    <motion.h3
                        className="text-[40px] text-center font-bold"
                        variants={{
                            hidden: { opacity: 0, y: 14 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                    >
                        Delivery <span className="text-white">από εμάς</span>
                    </motion.h3>

                    <motion.p
                        className="text-center text-xl font-bold text-black"
                        variants={{
                            hidden: { opacity: 0, y: 14 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                    >
                        Με <span className="text-white">καλύτερες τιμές</span> και <span className="text-white">άμεση εξυπυρέτηση!</span>
                    </motion.p>

                    <motion.div
                        className="text-center"
                        variants={{
                            hidden: { opacity: 0, y: 14 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                    >
                        <a href={`tel:${PHONE_NUMBER}`}>
                            <Button
                                className="bg-white rounded-md mt-10 text-primary-500 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                aria-label="Παρήγγειλε τώρα από εμάς"
                            >
                                Παρήγγειλε Τώρα!
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Delivery partners list */}
                <motion.ul
                    className="grid grid-cols-1 lg:grid-cols-3 mt-7 gap-6"
                    role="list"
                    aria-label="Delivery partners"
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.12 } }
                    }}
                >
                    <motion.li
                        className="bg-[#00C2E8] rounded-xl h-[250px] flex flex-col gap-4 items-center justify-end shadow-lg shadow-[#00C2E8]"
                        variants={{
                            hidden: { opacity: 0, y: 16 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                    >
                        <div className="mb-4">
                            <img src="/images/wolt.png" alt="Wolt" width="180" height="60" loading="lazy" decoding="async" />
                        </div>
                        <div className="text-center">
                            <a
                                href={`https://wolt.com/${i18n.language}/grc/thessaloniki/restaurant/fornata-skg?srsltid=AfmBOor7P3nxE9BSi-rRQN85oxACzfSFvtylcDctq-PsNOxyv5vXpfHJ`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    className="bg-white rounded-md text-primary-500 px-4 py-3 mb-7 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                    aria-label="Παρήγγειλε τώρα μέσω Wolt"
                                >
                                    Παρήγγειλε Τώρα!
                                </Button>
                            </a>
                        </div>
                    </motion.li>

                    <motion.li
                        className="bg-[#EF4848] rounded-xl h-[250px] flex flex-col items-center gap-4 justify-end shadow-lg shadow-[#EF4848]"
                        variants={{
                            hidden: { opacity: 0, y: 16 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                    >
                        <div className="mb-4">
                            <img src="/images/efood.png" alt="efood" width="180" height="60" loading="lazy" decoding="async" />
                        </div>
                        <div className="text-center">
                            <a href="https://www.e-food.gr/delivery/thessaloniki-pylaia/fornata" target="_blank" rel="noopener noreferrer">
                                <Button
                                    className="bg-white rounded-md text-primary-500 px-4 py-3 mb-7 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                    aria-label="Παρήγγειλε τώρα μέσω efood"
                                >
                                    Παρήγγειλε Τώρα!
                                </Button>
                            </a>
                        </div>
                    </motion.li>

                    <motion.li
                        className="bg-[#FC7F01] rounded-xl h-[250px] flex flex-col items-center justify-end shadow-lg shadow-[#FC7F01]"
                        variants={{
                            hidden: { opacity: 0, y: 16 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                    >
                        <div className="mb-4">
                            <img src="/images/box.png" alt="Wolt" loading="lazy" decoding="async" width="180" height="60" />
                        </div>
                        <div className="text-center">
                            <a href="https://box.gr/delivery/pylaia-thessalonikis/fornata" target="_blank" rel="noopener noreferrer">
                                <Button
                                    className="bg-white rounded-md text-primary-500 px-4 py-3 mb-7 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                    aria-label="Παρήγγειλε τώρα μέσω Box"
                                >
                                    Παρήγγειλε Τώρα!
                                </Button>
                            </a>
                        </div>
                    </motion.li>
                </motion.ul>
            </motion.div>
        </section>
    );
};

export default DeliverySection;
