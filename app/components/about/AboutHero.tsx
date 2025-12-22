import React from "react";
import { Button } from "~/components/ui/Button";
import { useTranslation } from "react-i18next";

const AboutHero = () => {
    const { t } = useTranslation();
    return (
        <section className="relative min-h-[90vh] overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero/fournos-hero.jpg')" }}
                aria-hidden="true"
            />

            {/* Dark overlay (optional αλλά βοηθάει πολύ) */}
            <div className="absolute inset-0 bg-black/15" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 min-h-[90vh] mx-auto flex items-center justify-between gap-6 px-4 py-4 md:px-8 lg:px-20 max-w-8xl">
                <div className="max-w-xl">
                    <h1 className="text-white font-extrabold leading-[0.95] text-[clamp(44px,6vw,92px)]">
                        <span className="block decoration-[6px] underline-offset-[10px]">Η καλύτερη</span>
                        <span className="mt-3 block decoration-[6px] underline-offset-[10px]">πίτσα</span>
                        <span className="mt-3 block decoration-[6px] underline-offset-[10px]">της πόλης!</span>
                    </h1>

                    <div className="mt-10">
                        <Button className="bg-primary-500 px-4 py-2 rounded-md text-lg font-semibold shadow-lg">{t("see_more")}</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
