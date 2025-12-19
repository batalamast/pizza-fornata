import "swiper/css";
import "swiper/css/navigation";
import { Button } from "~/components/ui/Button";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const EventsSection = () => {
    return (
        <section className="relative py-70 overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/events/events.png)` }}
                aria-hidden="true"
            />

            {/* Optional overlay */}
            <div className="absolute inset-0 bg-primary-500/80" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10">
                <div className="mx-auto max-w-4xl flex flex-col justify-center items-center gap-4 text-center relative">
                    <img src="/images/reviews/made-in-thessaloniki.png" alt="made-in-thessaloniki" className="absolute -end-10 -top-40" />
                    <div className="text-[80px] font-extrabold uppercase w-full lg:w-[700px] leading-20">
                        <span className="text-white">Events</span> ON PIZZA FORNATA
                    </div>
                    <div className="font-semibold text-[30px]">DINE IN - TAKE AWAY - DELIVERY</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur. Euismod tortor at nisi molestie gravida ipsum. Sed facilisi magna a eget ut
                        in congue. Mattis dolor eleifend donec at tellus ultrices. Gravida augue tincidunt scelerisque at lobortis ipsum
                        nibh rhoncus. Est est est varius sodales eget nisl. Varius vitae diam adipiscing cursus libero urna risus congue.
                        Faucibus a eu massa sed. Interdum enim faucibus tincidunt a elit diam leo eget. Turpis fames pharetra quisque libero
                        penatibus sed eget. A amet amet molestie commodo ut luctus etiam.
                    </div>
                    <div className="mt-5  flex items-center justify-center gap-4">
                        <Button
                            className="justify-center rounded-md bg-white px-4 py-2 text-[18px] font-semibold text-primary-500 shadow-md"
                            rightIcon={<FaArrowRight className="w-3 h-3 text-black ms-2" />}
                        >
                            Ενημερώσου στα Social μας
                        </Button>
                        <Button
                            className="flex items-center justify-center rounded-md bg-white px-4 py-2 text-[18px] font-semibold text-primary-500 shadow-md"
                            rightIcon={<FaPhoneAlt className="w-3.5 h-3.5 text-black ms-2" />}
                        >
                            Καλέστε μας
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
