// PizzaHero.tsx
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "~/components/ui/Button";

type PizzaId = "special" | "margherita" | "village" | "fornata" | "carbonara";

type PizzaOption = {
    id: PizzaId;
    label: string;
    image: string;
    angle: number;
};

const pizzaOptions: PizzaOption[] = [
    {
        id: "special",
        label: "Special",
        image: "/images/hero/pizza-hero.png",
        angle: 170
    },
    {
        id: "margherita",
        label: "Margherita",
        image: "/images/hero/pizza-hero.png",
        angle: 130
    },
    {
        id: "village",
        label: "Village",
        image: "/images/hero/pizza-hero.png",
        angle: 90
    },
    {
        id: "fornata",
        label: "Fornata",
        image: "/images/hero/pizza-hero.png",
        angle: 50
    },
    {
        id: "carbonara",
        label: "Carbonara",
        image: "/images/hero/pizza-hero.png",
        angle: 10
    }
];

const PizzaHero: React.FC = () => {
    const [selected, setSelected] = useState<PizzaOption>(pizzaOptions[0]);
    const [rotation, setRotation] = useState(0);
    const hasMounted = useRef(false);

    // κάθε φορά που αλλάζει πίτσα → αυξάνουμε λίγο το rotation
    useEffect(() => {
        if (hasMounted.current) {
            // πόσο να γυρνάει κάθε φορά (παίξε με αυτό)
            setRotation(prev => prev + 30);
        } else {
            hasMounted.current = true; // στο πρώτο render μόνο, ΔΕΝ κάνουμε rotate
        }
    }, [selected.id]);

    const dotClasses = (active: boolean) =>
        `rounded-full transition-transform ${
            active ? "h-3 w-3 bg-[#f4a521] outline outline-[3px] outline-white scale-110" : "h-2.5 w-2.5 bg-white"
        }`;

    return (
        <section className="relative min-h-[90vh] overflow-hidden text-black">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-35"
                style={{ backgroundImage: "url('/images/hero/fournos-hero.jpg')" }}
            />

            <div className="pointer-events-none absolute bottom-[-420px] left-1/2 z-10 h-[840px] w-[840px] -translate-x-1/2">
                <div className="absolute -inset-3 rounded-full border border-black/35" />

                {pizzaOptions.map(opt => (
                    <ArcLabel
                        key={opt.id}
                        option={opt}
                        active={selected.id === opt.id}
                        onClick={() => setSelected(opt)}
                        dotClasses={dotClasses}
                    />
                ))}

                <div className="absolute inset-6 flex items-center justify-center">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                        <motion.div
                            className="h-full w-full"
                            initial={{ opacity: 0, y: 60, rotate: 0 }}
                            animate={{ opacity: 1, y: 0, rotate: rotation }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <img
                                src={selected.image}
                                alt={selected.label}
                                className="h-full w-full object-cover"
                                loading="eager"
                                decoding="async"
                                fetchPriority="high"
                            />
                        </motion.div>

                        <Button className="pointer-events-auto btn-primary text-xl font-semibold absolute left-1/2 top-[31%] -translate-x-1/2 -translate-y-1/2 shadow-lg">
                            Δες τον κατάλογό μας
                        </Button>
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
const ArcLabel: React.FC<ArcLabelProps> = ({ option, active, onClick }) => {
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
            className="pointer-events-auto absolute cursor-pointer"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)"
            }}
        >
            <div className="relative">
                <div
                    className={`h-5.5 w-5.5 rounded-full bg-white flex items-center justify-center ${active && "border-2 border-primary-500 shadow-[0_0_14px_6px_rgba(244,165,33,0.55)] scale-110"}`}
                >
                    <div className={`h-2.5 w-2.5 rounded-full ${active && "bg-primary-500"}`} />
                </div>

                {/* TEXT */}
                {isCenter ? (
                    // Village: κείμενο ΠΑΝΩ από την τελεία
                    <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap text-[35px] font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                        {option.label}
                    </span>
                ) : (
                    // Όλα τα άλλα: κείμενο δίπλα από την τελεία
                    <span
                        className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[35px] font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] ${
                            isLeftSide ? "right-10" : "left-10"
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
