import React from "react";

const bullets = [
    { id: 1, title: "Sit mauris proin:", text: "The quam dignissim nisi gravida pellentesque porta..." },
    { id: 2, title: "Sit mauris proin:", text: "The quam dignissim nisi gravida pellentesque porta..." },
    { id: 3, title: "Sit mauris proin:", text: "The quam dignissim nisi gravida pellentesque porta..." }
];

const GetToKnowsUsSection = () => {
    return (
        <section id="get-to-know-us" className="py-16" aria-labelledby="about-section-title" aria-describedby="about-section-desc">
            <div className="mx-auto max-w-8xl px-4 md:px-8 lg:px-20">
                <div className="grid items-start gap-10 lg:grid-cols-2">
                    {/* Left */}
                    <div>
                        <p className="text-[14px] font-semibold tracking-[0.18em] text-primary-700 uppercase">About pizza fornata</p>

                        <h2 id="about-section-title" className="mt-3 text-[36px] font-extrabold leading-tight">
                            Get to know us!
                        </h2>

                        <p id="about-section-desc" className="mt-5 text-[18px] leading-relaxed text-gray-700">
                            Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum
                            dictumst eleifend venenat cras feugiat. Nunc diam risus sagittis in adipiscing nunc. Pharetra aliquam gravida
                            bibendum orci diam nisi sem id. Id commodo volutpat platea nisi, nec venenatis pulvinar neque, ac. Odio dolor id
                            potenti aliquam mi in nunc at sollicitudin. Magna felis, leo sed nec.
                        </p>

                        {bullets.length ? (
                            <ul className="mt-5 ms-5 space-y-7" role="list" aria-label="Highlights">
                                {bullets.map(b => (
                                    <li key={b.id} className="flex gap-4">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
                                        <p className="text-[18px] leading-relaxed text-gray-700">
                                            <span className="font-semibold">{b.title}</span> {b.text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        <p className="mt-8 text-[18px] leading-relaxed text-gray-700">
                            Semper vel adipiscing laoreet iaculis sed at. Ac urna nibh scelerisque congue velit. Quam eget quisque interdum
                            dictumst eleifend venenat cras feugiat. Nunc diam risus sagittis in adipiscing nunc.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="lg:pt-10">
                        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
                            <img
                                src="/images/about/get-know-us.png"
                                alt="Get to know us"
                                className="h-[360px] w-full object-cover md:h-[460px]"
                                loading="lazy"
                                decoding="async"
                                width="1200"
                                height="460"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetToKnowsUsSection;
