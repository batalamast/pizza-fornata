import { Link, NavLink, useLocation } from "react-router";
import { FaPhoneAlt } from "react-icons/fa";
import { PHONE_NUMBER } from "~/constants/info.constants";
import LanguageSwitcher from "~/components/ui/LanguageSwitcher";
import { Button } from "~/components/ui/Button";
import { cn } from "~/lib/utils";
import { useEffect, useId, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";

export function Navbar() {
    const [open, setOpen] = useState(false);
    const panelId = useId();
    const { pathname, search } = useLocation();

    // close on route change
    useEffect(() => {
        setOpen(false);
    }, [pathname, search]);

    // lock body scroll when menu open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    return (
        <header className="bg-white">
            <div className="mx-auto flex items-center justify-between gap-6 px-4 py-4 md:px-8 lg:px-20 max-w-8xl">
                <Link to="/" className="flex items-center" aria-label="Fornata home">
                    <h1 className="leading-none">
                        <img src="/images/logo.png" alt="Fornata" decoding="async" fetchPriority="high" width={170} height={48} />
                    </h1>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden xl:flex items-center gap-8 text-[24px] font-medium" aria-label="Primary">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            cn(
                                "hover:text-primary-600 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
                                isActive && "text-primary-600"
                            )
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/?menu_slug=dine-in"
                        className={() =>
                            cn(
                                "hover:text-primary-600 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                            )
                        }
                    >
                        Dining
                    </NavLink>

                    <NavLink
                        to="/?menu_slug=take-away-delivery"
                        className={() =>
                            cn(
                                "hover:text-primary-600 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                            )
                        }
                    >
                        Take Away
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            cn(
                                "hover:text-primary-600 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
                                isActive && "text-primary-600"
                            )
                        }
                    >
                        About
                    </NavLink>

                    <a href={`tel:${PHONE_NUMBER}`} className="inline-flex">
                        <Button
                            className="btn-primary font-medium text-[24px]"
                            rightIcon={<FaPhoneAlt className="w-5 h-5" aria-hidden="true" />}
                        >
                            Καλέστε μας
                        </Button>
                    </a>
                </nav>

                {/* Right side (desktop language + mobile hamburger) */}
                <div className="flex items-center gap-3">
                    <div className="hidden xl:block">
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className={cn(
                            "xl:hidden inline-flex items-center justify-center",
                            "h-12 w-12 rounded-xl bg-primary-500",
                            "shadow-[0_10px_20px_rgba(0,0,0,0.18)]",
                            "border-2 border-black/20",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                        )}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-controls={panelId}
                        aria-expanded={open}
                        onClick={() => setOpen(v => !v)}
                    >
                        {open ? (
                            <HiArrowLeft className="h-7 w-7 text-primary-900" aria-hidden="true" />
                        ) : (
                            <HiBars3 className="h-7 w-7 text-primary-900" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile full-screen panel */}
            <div
                id={panelId}
                className={cn("xl:hidden fixed inset-0 z-50", open ? "pointer-events-auto" : "pointer-events-none")}
                aria-hidden={!open}
            >
                {/* Backdrop */}
                <div
                    className={cn("absolute inset-0 bg-black/20 transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
                    onClick={() => setOpen(false)}
                    aria-hidden="true"
                />

                {/* Panel */}
                <div
                    className={cn(
                        "absolute inset-0 bg-primary-300",
                        "transition-transform duration-500 ease-out",
                        open ? "translate-y-0" : "-translate-y-5 opacity-0"
                    )}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation"
                >
                    {/* Top bar inside panel */}
                    <div className="mx-auto flex items-center justify-between px-4 py-4 max-w-8xl">
                        <Link to="/" className="flex items-center" aria-label="Fornata home">
                            <img src="/images/logo.png" alt="Fornata" width={170} height={48} decoding="async" />
                        </Link>

                        <button
                            type="button"
                            className={cn(
                                "inline-flex items-center justify-center",
                                "h-12 w-12 rounded-xl bg-primary-500",
                                "border-2 border-primary-800",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                            )}
                            aria-label="Close menu"
                            onClick={() => setOpen(false)}
                        >
                            <HiArrowLeft className="h-7 w-7 text-primary-900" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="mx-auto max-w-8xl px-4">
                        <nav className="mt-8" aria-label="Mobile">
                            {/* Language switcher top */}
                            <div className="flex justify-center">
                                <LanguageSwitcher />
                            </div>

                            {/* Links */}
                            <ul className="mt-14 flex flex-col items-center gap-10 text-[24px] font-semibold text-black">
                                <li>
                                    <NavLink
                                        to="/"
                                        end
                                        className={({ isActive }) =>
                                            cn(
                                                "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
                                                isActive && "text-primary-700"
                                            )
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/?menu_slug=dine-in"
                                        className={() =>
                                            cn(
                                                "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                            )
                                        }
                                    >
                                        Dining
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/?menu_slug=take-away-delivery"
                                        className={() =>
                                            cn(
                                                "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                            )
                                        }
                                    >
                                        Take Away
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            cn(
                                                "rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
                                                isActive && "text-primary-700"
                                            )
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                            </ul>

                            {/* Call button */}
                            <div className="mt-14 flex justify-center">
                                <a href={`tel:${PHONE_NUMBER}`} className="inline-flex">
                                    <Button
                                        className={cn(
                                            "bg-white rounded-xl px-8 py-4 flex justify-center items-center gap-3",
                                            "text-primary-500 text-[22px]",
                                            "shadow-[0_12px_26px_rgba(0,0,0,0.18)]",
                                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                        )}
                                        rightIcon={<FaPhoneAlt className="h-6 w-6 text-black" aria-hidden="true" />}
                                    >
                                        Καλέστε μας
                                    </Button>
                                </a>
                            </div>

                            {/* Socials */}
                            {/*<div className="mt-20 pb-10">*/}
                            {/*    <div className="text-center font-semibold text-[20px] text-black">Follow us</div>*/}

                            {/*    <div className="mt-6 flex items-center justify-center gap-8 text-black">*/}
                            {/*        <a*/}
                            {/*            href="https://facebook.com"*/}
                            {/*            target="_blank"*/}
                            {/*            rel="noopener noreferrer"*/}
                            {/*            className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"*/}
                            {/*            aria-label="Facebook"*/}
                            {/*        >*/}
                            {/*            <FaFacebookF className="h-9 w-9" aria-hidden="true" />*/}
                            {/*        </a>*/}

                            {/*        <a*/}
                            {/*            href="https://tiktok.com"*/}
                            {/*            target="_blank"*/}
                            {/*            rel="noopener noreferrer"*/}
                            {/*            className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"*/}
                            {/*            aria-label="TikTok"*/}
                            {/*        >*/}
                            {/*            <FaTiktok className="h-9 w-9" aria-hidden="true" />*/}
                            {/*        </a>*/}

                            {/*        <a*/}
                            {/*            href="https://instagram.com"*/}
                            {/*            target="_blank"*/}
                            {/*            rel="noopener noreferrer"*/}
                            {/*            className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"*/}
                            {/*            aria-label="Instagram"*/}
                            {/*        >*/}
                            {/*            <FaInstagram className="h-9 w-9" aria-hidden="true" />*/}
                            {/*        </a>*/}

                            {/*        <a*/}
                            {/*            href="https://linkedin.com"*/}
                            {/*            target="_blank"*/}
                            {/*            rel="noopener noreferrer"*/}
                            {/*            className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"*/}
                            {/*            aria-label="LinkedIn"*/}
                            {/*        >*/}
                            {/*            <FaLinkedinIn className="h-9 w-9" aria-hidden="true" />*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
