// PizzaHero.tsx
import React, { useEffect, useState } from "react";

type PizzaId = "special" | "margherita" | "village" | "fornata" | "carbonara";

type PizzaOption = {
    id: PizzaId;
    label: string;
    image: string;
    angle: number; // μοίρες πάνω στον κύκλο
};

const pizzaOptions: PizzaOption[] = [
    {
        id: "special",
        label: "Special",
        image: "/images/pizzas/special.png",
        angle: 170,
    },
    {
        id: "margherita",
        label: "Margherita",
        image: "/images/pizzas/margherita.png",
        angle: 130,
    },
    {
        id: "village",
        label: "Village",
        image: "/images/pizzas/village.png",
        angle: 90,
    },
    {
        id: "fornata",
        label: "Fornata",
        image: "/images/pizzas/fornata.png",
        angle: 50,
    },
    {
        id: "carbonara",
        label: "Carbonara",
        image: "/images/pizzas/carbonara.png",
        angle: 10,
    },
];

const PizzaHero: React.FC = () => {
    const [size, setSize] = useState<30 | 38>(30);
    const [selected, setSelected] = useState<PizzaOption>(pizzaOptions[0]);
    const [animatePizza, setAnimatePizza] = useState(false);

    useEffect(() => {
        setAnimatePizza(true);
        const t = setTimeout(() => setAnimatePizza(false), 350);
        return () => clearTimeout(t);
    }, [selected, size]);

    const dotClasses = (active: boolean) =>
        `rounded-full transition-transform ${
            active
                ? "h-3 w-3 bg-[#f4a521] border border-[#f4a521] shadow-[0_0_0_4px_rgba(244,165,33,0.45)] scale-110"
                : "h-2.5 w-2.5 bg-white border border-white"
        }`;

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#d5d2cd] text-black">
            {/* background εικόνα */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-35"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                }}
            />
            {/* λευκό overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/45 to-white/90" />

            {/* SIZE SELECTOR επάνω */}
            <div className="relative z-10 flex flex-col items-center pt-16">
                <h2 className="text-[25px] font-medium tracking-wide">Pizza Size (cm)</h2>
                <div className="mt-4 flex gap-4">
                    {[30, 38].map((val) => (
                        <button
                            key={val}
                            type="button"
                            onClick={() => setSize(val as 30 | 38)}
                            className={`flex h-16 w-16 items-center justify-center rounded-full border border-black transition
                ${
                                size === val
                                    ? "bg-black text-white shadow-lg shadow-black/40 scale-105"
                                    : "bg-transparent text-black hover:bg-black/5"
                            }`}
                        >
                            <span className="text-lg font-semibold">{val}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-[-420px] left-1/2 z-10 h-[840px] w-[840px] -translate-x-1/2">
                <div className="absolute -inset-3 rounded-full border border-black/35" />

                {/* Labels πάνω στον κύκλο (δυναμικά αλλά τοποθετημένα μαθηματικά σωστά) */}
                {pizzaOptions.map((opt) => (
                    <ArcLabel
                        key={opt.id}
                        option={opt}
                        active={selected.id === opt.id}
                        onClick={() => setSelected(opt)}
                        dotClasses={dotClasses}
                    />
                ))}

                {/* ΠΙΤΣΑ – λίγο πιο μέσα για να φαίνεται η γραμμή του κύκλου */}
                <div
                    className={`absolute inset-6 flex items-center justify-center transition-transform duration-300 ease-out
            ${animatePizza ? "scale-[1.06] rotate-[2deg]" : "scale-100 rotate-0"}`}
                >
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-[#cfa573] shadow-2xl shadow-black/60">
                        <img
                            src={selected.image}
                            alt={selected.label}
                            className="h-full w-full object-cover"
                        />

                        {/* κουμπί στο “μπροστινό” μέρος της πίτσας */}
                        <button
                            type="button"
                            className="pointer-events-auto absolute left-1/2 top-[29%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#f4a521] px-5 py-3 text-lg font-semibold text-black shadow-md shadow-black/40 hover:bg-[#ffb938] active:scale-95 transition"
                        >
                            Δες τον κατάλογό μας
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

type ArcLabelProps = {
    option: PizzaOption;
    active: boolean;
    onClick: () => void;
    dotClasses: (active: boolean) => string;
};

/**
 * ArcLabel
 * - Υπολογίζει ακριβώς το σημείο πάνω στον κύκλο
 * - Το (x,y) είναι το ΚΕΝΤΡΟ της τελίτσας
 * - Το κείμενο βγαίνει δεξιά/αριστερά με absolute, για να μην “σπρώχνει” την τελίτσα.
 */
const ArcLabel: React.FC<ArcLabelProps> = ({
                                               option,
                                               active,
                                               onClick
                                           }) => {
    // Geometria κύκλου:
    const WRAPPER_SIZE = 640;
    const radiusPct = 51.5;

    const centerYOffsetPx = 0;
    const centerYOffsetPct = (centerYOffsetPx / WRAPPER_SIZE) * 100;
    const centerY = 50 + centerYOffsetPct;

    const rad = (option.angle * Math.PI) / 180;

    // 0° = δεξιά, 90° = κορυφή, 180° = αριστερά
    const x = 50 + radiusPct * Math.cos(rad);
    const y = centerY - radiusPct * Math.sin(rad);

    const isLeftSide = x < 50;

    const isCenter = option.id === "village"; // ή ό,τι id έχεις

    return (
        <button
            type="button"
            onClick={onClick}
            className="pointer-events-auto absolute"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
            }}
        >
            <div className="relative">
                {/* DOT: το (x, y) είναι ακριβώς το κέντρο αυτής της τελίτσας */}
                <span
                    className={`block rounded-full transition-transform ${
                        active
                            ? "h-4 w-4 bg-[#f4a521] border border-[#f4a521] shadow-[0_0_0_4px_rgba(244,165,33,0.45)] scale-110"
                            : "h-3.5 w-3.5 bg-white border border-white"
                    }`}
                />

                {/* TEXT */}
                {isCenter ? (
                    // Village: κείμενο ΠΑΝΩ από την τελεία
                    <span
                        className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap text-[35px] font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]"
                    >
            {option.label}
          </span>
                ) : (
                    // Όλα τα άλλα: κείμενο δίπλα από την τελεία
                    <span
                        className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[35px] font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] ${
                            isLeftSide ? "right-7" : "left-7"
                        }`}
                    >
            {option.label}
          </span>
                )}
            </div>
        </button>
    );
};


export default PizzaHero;
