import { Button } from "~/components/ui/Button";

const DeliverySection = () => {
    return (
        <section className="py-14 bg-gray-100 relative" aria-labelledby="delivery-title" aria-describedby="delivery-desc">
            {/* Decorative image */}
            <img
                src="/images/delivery/motorbike.png"
                alt="motorbike"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                width={400}
                height={400}
                className="absolute top-2/3 left-27 transform -translate-y-2/3 pointer-events-none select-none"
            />

            <div className="mx-auto px-4 md:px-8 lg:px-20 max-w-7xl">
                <h2 id="delivery-title" className="text-center text-[40px]">
                    Delivery
                </h2>

                <p id="delivery-desc" className="text-center">
                    Επέλεξε τον <span className="text-primary-700 font-semibold">τρόπο </span> που θέλεις
                    <span className="text-primary-700 font-semibold"> να παραγγείλεις!</span>
                </p>

                <div className="bg-primary-500 rounded-xl mt-10 py-10 px-4">
                    <h3 className="text-[40px] text-center font-bold">
                        Delivery <span className="text-white">από εμάς</span>
                    </h3>

                    <p className="text-center text-xl font-bold text-black">
                        Με <span className="text-white">καλύτερες τιμές</span> και <span className="text-white">άμεση εξυπυρέτηση!</span>
                    </p>

                    <div className="text-center">
                        <Button
                            className="bg-white rounded-md mt-10 text-primary-500 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                            aria-label="Παρήγγειλε τώρα από εμάς"
                        >
                            Παρήγγειλε Τώρα!
                        </Button>
                    </div>
                </div>

                {/* Delivery partners list */}
                <ul className="grid grid-cols-1 lg:grid-cols-3 mt-7 gap-6" role="list" aria-label="Delivery partners">
                    <li className="bg-[#00C2E8] rounded-xl h-[250px] flex flex-col items-center justify-end shadow-lg shadow-[#00C2E8]">
                        <div className="mb-4">
                            <img src="/images/wolt.png" alt="Wolt" width="180" height="60" loading="lazy" decoding="async" />
                        </div>
                        <div className="text-center">
                            <Button
                                className="bg-white rounded-md text-primary-500 px-4 py-3 mb-7 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                aria-label="Παρήγγειλε τώρα μέσω Wolt"
                            >
                                Παρήγγειλε Τώρα!
                            </Button>
                        </div>
                    </li>

                    <li className="bg-[#EF4848] rounded-xl h-[250px] flex flex-col items-center justify-end shadow-lg shadow-[#EF4848]">
                        <div className="mb-4">
                            <img src="/images/efood.png" alt="efood" width="180" height="60" loading="lazy" decoding="async" />
                        </div>
                        <div className="text-center">
                            <Button
                                className="bg-white rounded-md text-primary-500 px-4 py-3 mb-7 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                aria-label="Παρήγγειλε τώρα μέσω efood"
                            >
                                Παρήγγειλε Τώρα!
                            </Button>
                        </div>
                    </li>

                    <li className="bg-[#FC7F01] rounded-xl h-[250px] flex flex-col items-center justify-end shadow-lg shadow-[#FC7F01]">
                        <div className="mb-4">
                            <img src="/images/wolt.png" alt="Wolt" width="180" height="60" loading="lazy" decoding="async" />
                        </div>
                        <div className="text-center">
                            <Button
                                className="bg-white rounded-md text-primary-500 px-4 py-3 mb-7 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                aria-label="Παρήγγειλε τώρα μέσω Wolt"
                            >
                                Παρήγγειλε Τώρα!
                            </Button>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default DeliverySection;
