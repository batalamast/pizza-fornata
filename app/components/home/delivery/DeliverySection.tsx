import { Button } from "~/components/ui/Button";

const DeliverySection = () => {
    return (
        <section className="py-14 bg-gray-100 relative">
            <img
                src="/images/delivery/motorbike.png"
                alt="motorbike"
                loading="lazy"
                decoding="async"
                width={400}
                height={400}
                className={"absolute top-2/3 left-27 transform -translate-y-2/3"}
            />
            <div className={"mx-auto px-4 md:px-8 lg:px-20 max-w-7xl"}>
                <div className={"text-center text-[40px] font-semibold"}>Delivery</div>
                <div className={"text-center"}>
                    Επέλεξε τον <span className="text-primary-700 font-semibold">τρόπο </span> που θέλεις
                    <span className={"text-primary-700 font-semibold"}> να παραγγείλεις!</span>
                </div>
                <div className={"bg-primary-500 rounded-xl mt-10 py-10"}>
                    <div className={"text-[40px] text-center font-bold"}>
                        Delivery <span className={"text-white"}>από εμάς</span>
                    </div>
                    <div className={"text-center text-xl font-bold text-black"}>
                        Με <span className={"text-white"}>καλύτερες τιμές</span> και{" "}
                        <span className={"text-white"}>άμεση εξυπυρέτηση!</span>
                    </div>
                    <div className={"text-center"}>
                        <Button className={"bg-white rounded-md mt-10 text-primary-500 px-4 py-3"}>Παρήγγειλε Τώρα!</Button>
                    </div>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-3 mt-7 gap-6"}>
                    <div className={"bg-[#00C2E8] rounded-xl h-[250px] flex flex-col items-center justify-end shadow-lg shadow-[#00C2E8]"}>
                        <div>
                            <img src="/images/wolt.png" alt="wolt" />
                        </div>
                        <div className={"text-center"}>
                            <Button className={"bg-white rounded-md mt-10 text-primary-500 px-4 py-3 mb-7 text-sm"}>
                                Παρήγγειλε Τώρα!
                            </Button>
                        </div>
                    </div>
                    <div className={"bg-[#EF4848] rounded-xl h-[250px] flex flex-col items-center justify-end shadow-lg shadow-[#EF4848]"}>
                        <div>
                            <img src="/images/efood.png" alt="wolt" />
                        </div>
                        <div className={"text-center"}>
                            <Button className={"bg-white rounded-md mt-10 text-primary-500 px-4 py-3 mb-7 text-sm"}>
                                Παρήγγειλε Τώρα!
                            </Button>
                        </div>
                    </div>
                    <div className={"bg-[#FC7F01] rounded-xl h-[250px] flex flex-col items-center justify-end shadow-lg shadow-[#FC7F01]"}>
                        <div>
                            <img src="/images/wolt.png" alt="wolt" />
                        </div>
                        <div className={"text-center"}>
                            <Button className={"bg-white rounded-md mt-10 text-primary-500 px-4 py-3 mb-7 text-sm"}>
                                Παρήγγειλε Τώρα!
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliverySection;
