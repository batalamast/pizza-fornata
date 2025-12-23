import * as React from "react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/Button";
import { PHONE_NUMBER } from "~/constants/info.constants";

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
        <section
            className={cn("relative overflow-hidden", className)}
            aria-labelledby="contact-hero-title"
            aria-describedby={description ? "contact-hero-desc" : undefined}
        >
            {/* Background image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundSrc})` }} aria-hidden="true" />

            {/* Top dark overlay */}
            {topOverlay ? <div className="absolute inset-x-0 top-0 h-[360px] bg-black/55" aria-hidden="true" /> : null}

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-8xl px-4 md:px-8 lg:px-20 pb-28 pt-16">
                {/* ✅ Align columns to the same top baseline */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
                    {/* Left */}
                    <div className="text-white">
                        <p className="text-[13px] font-semibold tracking-[0.18em] opacity-90">{eyebrow}</p>

                        <h2 id="contact-hero-title" className="mt-3 text-4xl font-extrabold leading-tight">
                            {title}
                        </h2>

                        {description ? (
                            <p id="contact-hero-desc" className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                                {description}
                            </p>
                        ) : null}

                        <a href={`tel:${PHONE_NUMBER}`}>
                            <Button
                                className="bg-primary-500 mt-5 px-4 py-2 text-black text-lg rounded-md font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                aria-label="Επικοινωνήστε μαζί μας"
                            >
                                Επικοινωνήστε μαζί μας
                            </Button>
                        </a>
                    </div>

                    {/* Right */}
                    <div className="text-white">
                        <div className="space-y-5">
                            <div>
                                <div className="font-semibold">{rightCity}</div>
                                <div className="mt-1 text-white/80 text-sm">{rightAddress}</div>
                            </div>

                            <div>
                                <div className="font-semibold">{phoneLabel}</div>
                                <a
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="mt-1 text-white/80 text-sm inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                    aria-label={`Καλέστε στο ${PHONE_NUMBER}`}
                                >
                                    <span dir="ltr">{phone}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map card */}
                <div className="mt-14">
                    <a
                        target="_blank"
                        href="https://www.google.com/maps/dir//%CE%9A%CF%89%CE%BD%2F%CE%BD%CE%BF%CF%85+%CE%A0%CE%B1%CE%BB%CE%B1%CE%B9%CE%BF%CE%BB%CF%8C%CE%B3%CE%BF%CF%85+25,+%CE%98%CE%B5%CF%83%CF%83%CE%B1%CE%BB%CE%BF%CE%BD%CE%AF%CE%BA%CE%B7+555+35/@40.5964064,22.9892846,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14a838bb9d9ec2d7:0x58bc7284384912fa!2m2!1d22.9876622!2d40.598573?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                    >
                        <div className="mx-auto overflow-hidden rounded-2xl bg-white shadow-[0_22px_40px_rgba(0,0,0,0.22)]">
                            <img
                                src="/images/contact/map.png"
                                alt="Χάρτης τοποθεσίας"
                                loading="lazy"
                                decoding="async"
                                className="h-[420px] w-full object-cover"
                                width="1200"
                                height="420"
                            />
                        </div>
                    </a>

                    {/*<div className="mx-auto overflow-hidden rounded-2xl bg-white shadow-[0_22px_40px_rgba(0,0,0,0.22)]">*/}
                    {/*  <div className="h-[420px] w-full">*/}
                    {/*    <iframe*/}
                    {/*      title="Map"*/}
                    {/*      src={mapEmbedUrl}*/}
                    {/*      loading="lazy"*/}
                    {/*      referrerPolicy="no-referrer-when-downgrade"*/}
                    {/*      className="h-full w-full border-0"*/}
                    {/*    />*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
}
