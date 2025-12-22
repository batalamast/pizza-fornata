import { Button } from "~/components/ui/Button";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="py-14 bg-gray-100 ">
            <div className="mx-auto max-w-7xl">
                <div className={"flex justify-between flex-wrap gap-8"}>
                    <div className="flex flex-col items-start gap-4">
                        <img src="/images/logo.png" alt="Fornata" />
                        <div className="text-sm text-gray-500 max-w-2/3">©Copyright 2026 Pizzeria Fornata. All rights reserved.</div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <button className="shadow-md rounded-2xl">
                                    <img src="/images/flags/en.png" alt="English" className=" rounded-2xl" />
                                </button>
                                <button className="shadow-md rounded-2xl">
                                    <img src="/images/flags/el.png" alt="Ελληνικά" className="rounded-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>Company</div>
                        <div className="text-gray-500">Home</div>
                        <div className="text-gray-500">Dining</div>
                        <div className="text-gray-500">Take Away</div>
                        <div className="text-gray-500">About us</div>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <div>Legal</div>
                        <div className="text-gray-500">Privacy Policy</div>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <div>Follow us</div>
                        <div className="text-gray-500 flex-grow">
                            <img src="/images/media/fb.png" alt="facebook" />
                        </div>
                        <a href="tel:+30210xxxxxxx">
                            <Button
                                className="px-4 py-2.5 bg-primary-500 rounded-md font-semibold flex items-center justify-center gap-2"
                                rightIcon={<FaPhoneAlt className="w-3.5 h-3.5" />}
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

export default Footer;
