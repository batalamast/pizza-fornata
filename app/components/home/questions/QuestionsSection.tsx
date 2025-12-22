import "swiper/css";
import "swiper/css/navigation";
import { FAQ } from "~/components/home/questions/FAQ";
import { questions } from "~/mock/questions";
import { PHONE_NUMBER } from "~/constants/info.constants";

const QuestionsSection = () => {
    return (
        <section className="relative py-14 bg-gray-100" aria-labelledby="faq-title" aria-describedby="faq-desc">
            <div className="mx-auto max-w-4xl gap-4 text-center relative px-4">
                <div className="bg-white p-10 md:p-20 rounded-3xl">
                    <h2 id="faq-title" className="text-[30px] font-extrabold uppercase">
                        Frequently Asked Questions
                    </h2>

                    <p id="faq-desc" className="text-lg my-3 text-gray-500">
                        Can’t able to find answers you’re looking for?
                    </p>

                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="text-lg text-primary-500 border-b border-primary-500 inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-sm"
                        aria-label="Call us"
                    >
                        Call us
                    </a>

                    <div className="mt-6 text-left">
                        <FAQ items={questions} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuestionsSection;
