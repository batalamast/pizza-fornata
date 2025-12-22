import { Link } from "react-router";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "~/components/ui/Button";
import { PHONE_NUMBER } from "~/constants/info.constants";
import LanguageSwitcher from "~/components/ui/LanguageSwitcher";

export function Navbar() {
    return (
        <header className="bg-white">
            <div className="mx-auto flex items-center justify-between gap-6 px-4 py-4 md:px-8 lg:px-20 max-w-8xl">
                <Link to="/" className="flex items-center">
                    <img src="/images/logo.png" alt="Fornata" />
                </Link>

                {/* middle nav links */}
                <nav className="hidden md:flex items-center gap-8 text-[24px] font-medium">
                    <Link to="/" className="hover:text-primary-600">
                        Home
                    </Link>
                    <Link to="/?menu_slug=dine-in" className="hover:text-primary-600">
                        Dining
                    </Link>
                    <Link to="/?menu_slug=take-away-delivery" className="hover:text-primary-600">
                        Take Away
                    </Link>
                    <Link to="/about" className="hover:text-primary-600">
                        About
                    </Link>
                    <a href={PHONE_NUMBER}>
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
