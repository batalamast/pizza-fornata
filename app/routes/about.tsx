import type { Route } from "./+types/home";
import { Navbar } from "~/components/home/header/NavBar";
import { ContactMapSection } from "~/components/home/contact-us/ContactUs";
import Footer from "~/components/home/footer/Footer";
import StatisticsSection from "~/components/home/statistics/StatisticsSection";
import AboutHero from "~/components/about/AboutHero";
import GallerySection from "~/components/about/GallerySection";
import GetToKnowsUsSection from "~/components/about/GetToKnowUsSection";

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

export default function Home() {
    return (
        <>
            <Navbar />
            <AboutHero />
            <StatisticsSection />
            <GallerySection />
            <GetToKnowsUsSection />
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
        </>
    );
}
