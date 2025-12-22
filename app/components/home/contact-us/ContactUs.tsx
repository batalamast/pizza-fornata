import * as React from "react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/Button";

export type ContactMapSectionProps = {
    /** Background pattern/image */
    backgroundSrc: string;
    /** Optional: adds a dark overlay on the top portion like the mock */
    topOverlay?: boolean;

    eyebrow?: string; // e.g. "CONTACT US"
    title: string; // e.g. "Που βρισκόμαστε;"
    description?: string;

    rightCity: string; // e.g. "Θεσσαλονίκη"
    rightAddress: string; // e.g. "Κων/νου Παλαιολόγου 25, 555 35"
    phoneLabel?: string; // e.g. "Phone Number"
    phone: string; // e.g. "231 032 8320"

    ctaLabel: string; // e.g. "Επικοινωνήστε μαζί μας"
    onCtaClick?: () => void;
    ctaHref?: string;

    mapEmbedUrl?: string;

    className?: string;
};

export function ContactMapSection({
    backgroundSrc,
    topOverlay = true,
    eyebrow = "CONTACT US",
    title,
    description,
    rightCity,
    rightAddress,
    phoneLabel = "Phone Number",
    phone,
    className
}: ContactMapSectionProps) {
    return (
        <section className={cn("relative overflow-hidden", className)}>
            {/* Background image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundSrc})` }} aria-hidden="true" />

            {/* Top dark overlay */}
            {topOverlay ? <div className="absolute inset-x-0 top-0 h-[360px] bg-black/55" aria-hidden="true" /> : null}

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl pb-28 pt-16">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {/* Left */}
                    <div className="text-white">
                        <div className="text-[13px] font-semibold tracking-[0.18em] opacity-90">{eyebrow}</div>
                        <h2 className="mt-3 text-4xl font-extrabold leading-tight">{title}</h2>
                        {description ? <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">{description}</p> : null}

                        <Button className="bg-primary-500 mt-5 px-4 py-2 text-black text-lg rounded-md font-bold">
                            Επικοινωνήστε μαζί μας
                        </Button>
                    </div>

                    {/* Right */}
                    <div className="text-white lg:pt-10">
                        <div className="space-y-5">
                            <div>
                                <div className="font-semibold">{rightCity}</div>
                                <div className="mt-1 text-white/80 text-sm">{rightAddress}</div>
                            </div>

                            <div>
                                <div className="font-semibold">{phoneLabel}</div>
                                <div className="mt-1 text-white/80 text-sm">{phone}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map card */}
                <div className="mt-14">
                    <img src="/images/contact/map.png" alt="map" />
                    {/*<div className="mx-auto overflow-hidden rounded-2xl bg-white shadow-[0_22px_40px_rgba(0,0,0,0.22)]">*/}
                    {/*    <div className="h-[420px] w-full">*/}
                    {/*        <iframe*/}
                    {/*            title="Map"*/}
                    {/*            src={mapEmbedUrl}*/}
                    {/*            loading="lazy"*/}
                    {/*            referrerPolicy="no-referrer-when-downgrade"*/}
                    {/*            className="h-full w-full border-0"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
}
