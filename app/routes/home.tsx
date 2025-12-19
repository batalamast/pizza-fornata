import type { Route } from "./+types/home";
import PizzaHero from "~/components/hero/PizzaHeroSection";
import { Navbar } from "~/components/header/NavBar";
import StatisticsSection from "~/components/statistics/StatisticsSection";
import MenuSection from "~/components/menu/MenuSection";
import DeliverySection from "~/components/delivery/DeliverySection";
import ReviewsSection from "~/components/reviews/ReviewsSection";
import EventsSection from "~/components/events/EventsSection";
import QuestionsSection from "~/components/questions/QuestionsSection";
import { ContactMapSection } from "~/components/contact-us/ContactUs";

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
    return (
        <>
            <Navbar />
            <PizzaHero />
            <StatisticsSection />
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
        </>
    );
}
