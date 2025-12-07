import { Link } from "react-router";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "~/components/ui/Button";

export function Navbar() {
    return (
        <header className="bg-white">
            <div className="mx-auto flex items-center justify-between gap-6 px-4 py-4 md:px-8 lg:px-20 max-w-8xl">
                {/* logo left */}
                {/*I need better width for this logo*/}
                <Link to="" className="flex items-center">
                    <img src="/images/logo.png" alt="Fornata" />
                </Link>

                {/* middle nav links */}
                <nav className="hidden md:flex items-center gap-8 text-[24px] font-medium">
                    <a href="#home" className="hover:text-primary-600">
                        Home
                    </a>
                    <a href="#dining" className="hover:text-primary-600">
                        Dining
                    </a>
                    <a href="#take-away" className="hover:text-primary-600">
                        Take Away
                    </a>
                    <a href="#about" className="hover:text-primary-600">
                        About
                    </a>
                    <a href="tel:+30210xxxxxxx">
                        <Button className="btn-primary font-medium text-[24px]" rightIcon={<FaPhoneAlt className="w-5 h-5" />}>
                            Καλέστε μας
                        </Button>
                    </a>
                </nav>

                {/* right: button + languages */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <button className="shadow-md rounded-2xl">
                            <img src="/images/flags/en.png" alt="English" className=" rounded-2xl" />
                        </button>
                        <button className="shadow-md rounded-2xl">
                            <img src="/images/flags/el.png" alt="Ελληνικά" className="rounded-2xl" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
