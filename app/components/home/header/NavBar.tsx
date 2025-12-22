import { Link, NavLink } from "react-router";
import { FaPhoneAlt } from "react-icons/fa";
import { PHONE_NUMBER } from "~/constants/info.constants";
import LanguageSwitcher from "~/components/ui/LanguageSwitcher";
import { Button } from "~/components/ui/Button";
import { cn } from "~/lib/utils";

export function Navbar() {
    return (
        <header className="bg-white">
            <div className="mx-auto flex items-center justify-between gap-6 px-4 py-4 md:px-8 lg:px-20 max-w-8xl">
                <Link to="/" className="flex items-center" aria-label="Fornata home">
                    <h1>
                        <img src="/images/logo.png" alt="Fornata" decoding="async" fetchPriority="high" />
                    </h1>
                </Link>

                {/* middle nav links */}
                <nav className="hidden md:flex items-center gap-8 text-[24px] font-medium" aria-label="Primary">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => cn('hover:text-primary-600 rounded"', isActive ? "text-primary-600" : "")}
                    >
                        Home
                    </NavLink>

                    <NavLink to="/?menu_slug=dine-in" className={() => cn('hover:text-primary-600 rounded"')}>
                        Dining
                    </NavLink>

                    <NavLink to="/?menu_slug=take-away-delivery" className={() => cn('hover:text-primary-600 rounded"')}>
                        Take Away
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) => cn('hover:text-primary-600 rounded"', isActive ? "text-primary-600" : "")}
                    >
                        About
                    </NavLink>

                    <a href={`tel:${PHONE_NUMBER}`}>
                        <Button className="btn-primary font-medium text-[24px]" rightIcon={<FaPhoneAlt className="w-5 h-5" />}>
                            Καλέστε μας
                        </Button>
                    </a>
                </nav>

                <LanguageSwitcher />
            </div>
        </header>
    );
}
