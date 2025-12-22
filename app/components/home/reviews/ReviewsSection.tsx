import { Stars } from "~/components/home/reviews/Stars";
import { reviews } from "~/mock/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ReviewsSection = () => {
    return (
        <section className="relative py-80 overflow-hidden" aria-labelledby="testimonials-title">
            {/* Background image (prefer <img> over CSS background for discovery/perf) */}
            <img
                src="/images/reviews/testimonials.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                width="1920"
                height="1080"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10">
                <div className="mx-auto max-w-3xl rounded-md bg-white/80 py-7 px-4 md:px-8 flex flex-col justify-center items-center gap-4">
                    <h2 id="testimonials-title" className="text-[30px] font-semibold text-center">
                        <span className="text-primary-500">Τι λένε</span> οι πελάτες μας
                    </h2>

                    <div className="relative w-full" aria-live="polite">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={5}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            loop
                            rewind
                            watchOverflow={false}
                            loopAdditionalSlides={2}
                            a11y={{
                                enabled: true,
                                containerMessage: "Κριτικές πελατών",
                                firstSlideMessage: "Πρώτη κριτική",
                                lastSlideMessage: "Τελευταία κριτική",
                                nextSlideMessage: "Επόμενη κριτική",
                                prevSlideMessage: "Προηγούμενη κριτική",
                                slideLabelMessage: "{{index}} / {{slidesLength}}"
                            }}
                        >
                            {reviews.map(review => (
                                <SwiperSlide key={review.id} className="!w-full" role="group" aria-label={`Κριτική από ${review.creator}`}>
                                    <figure className="flex flex-col justify-center items-center gap-4">
                                        <Stars value={review.stars} aria-label={`${review.stars} στα 5`} />

                                        <blockquote className="w-full md:w-[500px] mx-auto text-center italic text-sm">
                                            {review.title}
                                        </blockquote>

                                        <figcaption className="text-xs">{review.creator}</figcaption>
                                    </figure>
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
