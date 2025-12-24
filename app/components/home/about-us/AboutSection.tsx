import { FaArrowDown, FaArrowRightLong } from "react-icons/fa6";
import { cn } from "~/lib/utils";
import { Link } from "react-router";
import { PHONE_NUMBER } from "~/constants/info.constants";
import { motion } from "framer-motion";

const AboutSection = () => {
    const onShowMenu = () => {
        const menuSection = document.getElementById("menus");
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="about-us" className="relative overflow-hidden pb-20" aria-labelledby="about-us-title" aria-describedby="about-us-desc">
            {/* Background gradient */}
            <div className={cn("absolute inset-0", "bg-primary-500")} aria-hidden="true" />

            {/* Decorative triangle image */}
            <motion.div
                className="absolute inset-0 flex items-start justify-center -mt-5 pointer-events-none ms-10 lg:ms-0 -end-50 lg:end-0"
                aria-hidden="true"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                // 👇 trigger πιο “αργά” (πρέπει να μπει πιο κάτω στο viewport)
                viewport={{ once: true, amount: 0.35, margin: "0px 0px 0px 0px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className="relative">
                    <img
                        src="/images/about/about-triangle.png"
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative mx-auto max-w-8xl px-4 md:px-8 lg:px-20 pt-14 lg:pt-24"
                initial="hidden"
                whileInView="show"
                // 👇 trigger πιο “αργά”
                viewport={{ once: true, amount: 0.35, margin: "0px 0px 0px 0px" }}
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
                }}
            >
                <div className="relative text-start lg:text-center">
                    {/* stroke layer */}
                    <motion.h2
                        aria-hidden="true"
                        className="uppercase text-[clamp(85px,14vw,270px)] font-extrabold text-transparent leading-25 sm:leading-35 md:leading-45 lg:leading-none lg:mt-16 [--stroke:30px] md:[--stroke:50px]  lg:[--stroke:60px] [-webkit-text-stroke:var(--stroke)_#F8A442]"
                        variants={{
                            hidden: { opacity: 0, y: 18, scale: 0.98 },
                            show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        ABOUT US
                    </motion.h2>

                    {/* fill layer */}
                    <motion.h2
                        id="about-us-title"
                        className="absolute inset-0 uppercase text-white text-[clamp(85px,14vw,270px)] font-extrabold leading-25 sm:leading-35 md:leading-45 lg:leading-none"
                        variants={{
                            hidden: { opacity: 0, y: 18, scale: 0.98 },
                            show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        ABOUT US
                    </motion.h2>
                </div>

                {/* Optional sticker */}
                <motion.a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex"
                    aria-label="Καλέστε μας"
                    variants={{
                        hidden: { opacity: 0, x: 16, y: -8, rotate: 6, scale: 0.95 },
                        show: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut", delay: 0.1 } }
                    }}
                >
                    <div className="absolute top-[clamp(7.5rem,10.5vw,17.5rem)] end-[clamp(-0.75rem,3vw,6.25rem)]">
                        <img
                            src="/images/about/book-table.png"
                            alt="book-table"
                            loading="lazy"
                            decoding="async"
                            className="scale-65 sm:scale-75 md:scale-85 lg:scale-95"
                        />
                    </div>
                </motion.a>

                {/* Two columns text + buttons */}
                <div className="mt-10 grid grid-cols-1 gap-10">
                    <motion.div
                        className="w-[230px] lg:w-auto max-w-xl"
                        variants={{
                            hidden: { opacity: 0, y: 14 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
                        }}
                    >
                        <p id="about-us-desc" className="text-sm leading-relaxed text-black/80">
                            Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean Tortor
                            interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.
                        </p>

                        <div className="mt-6">
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 lg:font-semibold text-primary-500 shadow-md
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#E38F2D]
            transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
                                aria-label="Δες περισσότερα για εμάς"
                            >
                                Δες Περισσότερα <FaArrowRightLong aria-hidden="true" className="text-black" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-[230px] lg:w-auto max-w-xl justify-self-end text-end"
                        variants={{
                            hidden: { opacity: 0, y: 14 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
                        }}
                    >
                        <p className="text-sm leading-relaxed text-black/80">
                            Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean Tortor
                            interdum condimentum nunc molestie quam lectus euismod pulvinar risus.
                        </p>

                        <div className="mt-6">
                            <button
                                type={"button"}
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 lg:font-semibold text-primary-500 shadow-md cursor-pointer
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#E38F2D]
            transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
                                aria-label="Δες τον κατάλογο"
                                onClick={onShowMenu}
                            >
                                Δες τον Κατάλογο <FaArrowDown aria-hidden="true" className="text-black" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
