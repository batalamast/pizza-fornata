import type { Route } from "./+types/home";
import PizzaHero from "~/components/home/hero/PizzaHeroSection";
import { Navbar } from "~/components/home/header/NavBar";
import StatisticsSection from "~/components/home/statistics/StatisticsSection";
import { useSearchParams } from "react-router";
import { lazy, Suspense, useEffect } from "react";

const Footer = lazy(() => import("~/components/home/footer/Footer"));

const ContactMapSection = lazy(() => import("~/components/home/contact-us/ContactUs").then(m => ({ default: m.ContactMapSection })));

const QuestionsSection = lazy(() => import("~/components/home/questions/QuestionsSection"));

const EventsSection = lazy(() => import("~/components/home/events/EventsSection"));

const ReviewsSection = lazy(() => import("~/components/home/reviews/ReviewsSection"));

const MenuSection = lazy(() => import("~/components/home/menu/MenuSection"));
const DeliverySection = lazy(() => import("~/components/home/delivery/DeliverySection"));

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Pizza Fornata | Αυθεντική πίτσα σε ξυλόφουρνο" },
        {
            name: "description",
            content:
                "Χειροποίητη ζύμη, φρέσκα υλικά και αληθινός ξυλόφουρνος. Παράγγειλε online από την Pizza Fornata ή κάνε κράτηση για τραπέζι."
        }
    ];
}

// TODO: Fav icon
export default function Home() {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const menuSlug = searchParams.get("menu_slug");
        const category = searchParams.get("category");

        if (menuSlug || category) {
            const el = document.getElementById("menus");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [searchParams]);

    return (
        <>
            <Navbar />
            <PizzaHero />
            <StatisticsSection />

            <Suspense fallback={null}>
                {/*<AboutUsSection />*/}
                <MenuSection />
                <DeliverySection />
                <ReviewsSection />
                <EventsSection />
                <QuestionsSection />
                <ContactMapSection
                    backgroundSrc="/images/contact/contact-bottom.png"
                    title="Που βρισκόμαστε;"
                    description="Tincidunt posuere egestas ut vitae nisl. Mauris enim blandit sit amet ullamcorper nunc id lobortis nam."
                    rightCity="Θεσσαλονίκη"
                    rightAddress="Κων/νου Παλαιολόγου 25, 555 35"
                    phone="231 032 8320"
                    ctaLabel="Επικοινωνήστε μαζί μας"
                    ctaHref="#contact"
                />
                <Footer />
            </Suspense>
        </>
    );
}
