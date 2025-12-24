import "swiper/css";
import "swiper/css/navigation";
import { Button } from "~/components/ui/Button";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { PHONE_NUMBER } from "~/constants/info.constants";

const EventsSection = () => {
    return (
        <section className="relative py-70 overflow-hidden" aria-labelledby="events-title" aria-describedby="events-desc">
            {/* Background image (use <img> for better discovery/perf than CSS background) */}
            <img
                src="/images/events/events.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                width="1920"
                height="1080"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-primary-500/80" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10">
                <div className="mx-auto max-w-4xl flex flex-col justify-center items-center gap-4 text-center relative px-4">
                    {/* Decorative badge */}
                    <img
                        src="/images/reviews/made-in-thessaloniki.png"
                        alt=""
                        aria-hidden="true"
                        className="absolute -end-10 -top-50 md:-top-40"
                        loading="lazy"
                        decoding="async"
                        width="220"
                        height="220"
                    />

                    <h2 id="events-title" className="text-[60px] md:text-[80px] font-extrabold uppercase w-full lg:w-[700px] leading-[1]">
                        <span className="text-white">Events</span> ON PIZZA FORNATA
                    </h2>

                    <p className="font-semibold text-[20px] md:text-[30px]">DINE IN - TAKE AWAY - DELIVERY</p>

                    <p id="events-desc" className="max-w-3xl">
                        Lorem ipsum dolor sit amet consectetur. Euismod tortor at nisi molestie gravida ipsum. Sed facilisi magna a eget ut
                        in congue. Mattis dolor eleifend donec at tellus ultrices. Gravida augue tincidunt scelerisque at lobortis ipsum
                        nibh rhoncus. Est est est varius sodales eget nisl. Varius vitae diam adipiscing cursus libero urna risus congue.
                        Faucibus a eu massa sed. Interdum enim faucibus tincidunt a elit diam leo eget. Turpis fames pharetra quisque libero
                        penatibus sed eget. A amet amet molestie commodo ut luctus etiam.
                    </p>

                    <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex"
                            aria-label="Ενημερώσου στα Social μας (ανοίγει σε νέα καρτέλα)"
                        >
                            <Button
                                className="justify-center rounded-md bg-white px-4 py-2 text-[18px] font-semibold text-primary-500 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500/80"
                                rightIcon={<FaArrowRight className="w-3 h-3 text-black ms-2" aria-hidden="true" focusable="false" />}
                            >
                                Ενημερώσου στα Social μας
                            </Button>
                        </a>

                        <a href={`tel:${PHONE_NUMBER}`} className="inline-flex" aria-label="Καλέστε μας">
                            <Button
                                className="flex items-center justify-center rounded-md bg-white px-4 py-2 text-[18px] font-semibold text-primary-500 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500/80"
                                rightIcon={<FaPhoneAlt className="w-3.5 h-3.5 text-black ms-2" aria-hidden="true" focusable="false" />}
                            >
                                Καλέστε μας
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
