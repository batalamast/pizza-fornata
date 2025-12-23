import { FaArrowDown, FaArrowRightLong } from "react-icons/fa6";
import { cn } from "~/lib/utils";
import { Link } from "react-router";
import { PHONE_NUMBER } from "~/constants/info.constants";

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

            {/* Decorative triangle image (clip) */}
            {/*<div className="absolute inset-0 flex items-start justify-center pt-10 pointer-events-none" aria-hidden="true">*/}
            {/*    <div className="w-[520px] sm:w-[620px] md:w-[720px] lg:w-[820px] aspect-[3/4]">*/}
            {/*        <img*/}
            {/*            src="/images/about/about-triangle.jpg"*/}
            {/*            alt=""*/}
            {/*            aria-hidden="true"*/}
            {/*            className="h-full w-full object-cover"*/}
            {/*            loading="lazy"*/}
            {/*            decoding="async"*/}
            {/*            width="900"*/}
            {/*            height="1200"*/}
            {/*            style={{*/}
            {/*                clipPath: "polygon(50% 0%, 100% 0%, 78% 100%, 50% 100%, 22% 100%, 0% 0%)",*/}
            {/*                borderRadius: "28px"*/}
            {/*            }}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Content */}
            <div className="relative mx-auto max-w-8xl px-4 md:px-8 lg:px-20 pt-24">
                {/* Big title */}
                <h2
                    id="about-us-title"
                    className="text-center font-extrabold uppercase text-white text-[40px] md:text-[60px] lg:text-[270px]"
                >
                    ABOUT US
                </h2>

                {/* Optional sticker */}
                <a href={`tel:${PHONE_NUMBER}`} className="inline-flex" aria-label="Καλέστε μας">
                    <div className="absolute end-20 top-50 hidden md:block">
                        <img src="/images/about/book-table.png" alt="book-table" />
                    </div>
                </a>

                {/* Two columns text + buttons */}
                <div className="mt-10 grid grid-cols-1 gap-10">
                    <div className="max-w-xl">
                        <p id="about-us-desc" className="text-sm leading-relaxed text-black/80">
                            Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean Tortor
                            interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.
                        </p>

                        <div className="mt-6">
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-primary-500 shadow-md
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#E38F2D]
                           transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
                                aria-label="Δες περισσότερα για εμάς"
                            >
                                Δες Περισσότερα <FaArrowRightLong aria-hidden="true" className="text-black" />
                            </Link>
                        </div>
                    </div>

                    <div className="max-w-xl lg:justify-self-end">
                        <p className="text-sm leading-relaxed text-black/80">
                            Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean Tortor
                            interdum condimentum nunc molestie quam lectus euismod pulvinar risus.
                        </p>

                        <div className="mt-6">
                            <button
                                type={"button"}
                                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-primary-500 shadow-md cursor-pointer
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#E38F2D]
                           transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
                                aria-label="Δες τον κατάλογο"
                                onClick={onShowMenu}
                            >
                                Δες τον Κατάλογο <FaArrowDown aria-hidden="true" className="text-black" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
