import "swiper/css";
import "swiper/css/navigation";
import { FAQ } from "~/components/questions/FAQ";
import { questions } from "~/mock/questions";

const QuestionsSection = () => {
    return (
        <section className="relative py-14 bg-gray-100">
            <div className="mx-auto max-w-4xl gap-4 text-center relative">
                <div className="bg-white p-20 rounded-3xl">
                    <div className="text-[30px] font-extrabold uppercase">Frequently Asked Questions</div>
                    <div className="text-lg my-3 text-gray-500">Can’t able to find answers you’re looking for?</div>
                    <a href="" className="text-lg text-primary-500 border-b border-text-primary-500">
                        Call us
                    </a>
                    <FAQ items={questions} />
                </div>
            </div>
        </section>
    );
};

export default QuestionsSection;
