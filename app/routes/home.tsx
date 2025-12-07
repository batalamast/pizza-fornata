import type { Route } from "./+types/home";
import PizzaHero from "~/components/hero/PizzaSelector";
import { Navbar } from "~/components/header/NavBar";

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
        </>
    );
}
