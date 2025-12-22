import React from "react";
import { Button } from "~/components/ui/Button";
import { PHONE_NUMBER } from "~/constants/info.constants";

const GallerySection = () => {
    return (
        <section>
            {/* Desktop mosaic */}
            <div className="grid lg:grid-cols-2">
                {/* LEFT: big image */}
                <img src="/images/about/fournos.png" alt="fournos" loading="lazy" className={"h-[850px] object-cover"} />

                {/* RIGHT: 2x2 grid */}
                <div className="grid sm:grid-cols-2 relative overflow-hidden">
                    {/* Top-left: orange info card */}
                    <div className="bg-primary-500 p-8 flex flex-col justify-center items-start">
                        {/* floating pizza decoration */}
                        <img
                            src="/images/about/pizza.webp"
                            alt="pizza-dummy"
                            className="pointer-events-none absolute left-1/2 -top-40 transform -translate-x-1/2"
                            aria-hidden="true"
                        />

                        <div className="text-[14px] font-semibold tracking-[0.18em] text-primary-900">ΠΩΣ ΞΕΚΙΝΗΣΑΜΕ</div>
                        <h3 className="mt-2 text-4xl font-extrabold">Σχετικά με μας</h3>

                        <Button type="button" className="mt-5 rounded-md bg-white px-5 py-2 text-sm text-primary-500 shadow-sm">
                            Δες περισσότερα
                        </Button>
                    </div>

                    {/* Top-right: food image */}
                    <img src="/images/about/spaghetti.png" alt="Pasta" loading="lazy" className={"h-[425px] w-full object-cover"} />

                    {/* Bottom-left: image collage (2 images) */}
                    <div className="grid">
                        <img src="/images/about/people.png" alt="Team" className={"h-[425px] w-full object-cover"} loading="lazy" />
                    </div>

                    <div className="relative bg-success-300 p-8">
                        <div className="text-xs tracking-[0.18em] text-success-600">ΕΠΙΣΚΕΦΘΕΙΤΕ ΜΑΣ</div>
                        <h3 className="mt-3 text-3xl font-extrabold leading-tight text-black">Σας περιμένουμε στον ανανεωμένο χώρο μας!</h3>

                        <a href={PHONE_NUMBER}>
                            <Button className="px-4 py-2 rounded-md bg-primary-500 font-medium mt-5">Κάνε κράτηση</Button>
                        </a>

                        {/* phone icon */}
                        <img
                            src="/images/about/phone.png"
                            alt="call us"
                            className="pointer-events-none absolute bottom-0 end-6 w-40 drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)]"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
