import type { Route } from "./+types/home";
import PizzaHero from "~/components/PizzaSelector";

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
            <PizzaHero />

            <div className="mt-5">About</div>
        </>
    );
}
