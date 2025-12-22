import { Button } from "~/components/ui/Button";
import { FaPhoneAlt } from "react-icons/fa";
import LanguageSwitcher from "~/components/ui/LanguageSwitcher";
import { Link } from "react-router";
import { PHONE_NUMBER } from "~/constants/info.constants";

const Footer = () => {
    return (
        <footer className="py-14 bg-gray-100" aria-labelledby="footer-title">
            <h2 id="footer-title" className="sr-only">
                Footer
            </h2>

            <div className="mx-auto max-w-8xl px-4 md:px-8 lg:px-20">
                <div className="flex justify-between flex-wrap gap-8">
                    <div className="flex flex-col items-start gap-4">
                        <Link to="/" className="inline-flex items-center" aria-label="Fornata home">
                            <img src="/images/logo.png" alt="Fornata" width="160" height="48" loading="lazy" decoding="async" />
                        </Link>

                        <p className="text-sm text-gray-500 max-w-2/3">©Copyright 2026 Pizzeria Fornata. All rights reserved.</p>

                        <LanguageSwitcher />
                    </div>

                    <nav className="flex flex-col gap-2" aria-label="Company">
                        <div className="font-semibold">Company</div>
                        <Link
                            to="/"
                            className="text-gray-500 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                        >
                            Home
                        </Link>
                        <Link
                            to="/?menu_slug=dine-in"
                            className="text-gray-500 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                        >
                            Dining
                        </Link>
                        <Link
                            to="/?menu_slug=take-away-delivery"
                            className="text-gray-500 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                        >
                            Take Away
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-500 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                        >
                            About us
                        </Link>
                    </nav>

                    <nav className="flex flex-col items-start gap-2" aria-label="Legal">
                        <div className="font-semibold">Legal</div>
                        <Link
                            to="/privacy"
                            className="text-gray-500 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                        >
                            Privacy Policy
                        </Link>
                    </nav>

                    <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold">Follow us</div>

                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 inline-flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                            aria-label="Facebook (opens in a new tab)"
                        >
                            <img src="/images/media/fb.png" alt="Facebook" width="28" height="28" loading="lazy" decoding="async" />
                        </a>

                        <a href={`tel:${PHONE_NUMBER}`} className="inline-flex" aria-label="Καλέστε μας">
                            <Button
                                className="px-4 py-2.5 bg-primary-500 rounded-md font-semibold flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                rightIcon={<FaPhoneAlt className="w-3.5 h-3.5" aria-hidden="true" focusable="false" />}
                            >
                                Καλέστε μας
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
