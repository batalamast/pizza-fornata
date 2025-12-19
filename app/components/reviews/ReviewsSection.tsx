import { Stars } from "~/components/reviews/Stars";
import { reviews } from "~/mock/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ReviewsSection = () => {
    return (
        <section className="relative py-80 overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/reviews/testimonials.png)` }}
                aria-hidden="true"
            />

            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10">
                <div className="mx-auto max-w-3xl rounded-md bg-white/80 py-7 flex flex-col justify-center items-center gap-4">
                    <div className="text-[30px] font-semibold">
                        <span className="text-primary-500">Τι λένε</span> οι πελάτες μας
                    </div>

                    <div className="relative w-full">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={5}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            loop={true}
                            rewind={true}
                            watchOverflow={false}
                            loopAdditionalSlides={2}
                        >
                            {reviews.map(review => (
                                <SwiperSlide key={review.id} className="!w-full">
                                    <div className="flex flex-col justify-center items-center gap-4">
                                        <Stars value={review.stars} />
                                        <div className="w-full md:w-[500px] mx-auto text-center italic text-sm">{review.title}</div>
                                        <div className="text-xs">{review.creator}</div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
