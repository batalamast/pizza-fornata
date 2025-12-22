import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/Button";
import type { TMenuCard } from "~/types/menu.type";

type Props = {
    item: TMenuCard;
    onCtaClick?: (item: TMenuCard) => void;
    className?: string;
};

export function MenuCard({ item, onCtaClick, className }: Props) {
    return (
        <button
            type="button"
            onClick={() => onCtaClick?.(item)}
            className={cn(
                "group relative block w-full overflow-hidden rounded-[28px] text-left",
                "focus:outline-none focus:ring-2 focus:ring-white/80",
                className
            )}
        >
            {/* Background image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.imageUrl})` }} aria-hidden="true" />

            {/* Overlay (για readability) */}
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8A442CC] to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex h-[340px] flex-col justify-start p-10">
                <div className="text-[50px] font-extrabold leading-none text-white drop-shadow">{item.title}</div>

                <div className="mt-5">
                    <Button className="justify-center rounded-md bg-white px-4 py-3 text-[18px] font-semibold text-primary-500 shadow-md">
                        Δες τον Κατάλογο
                    </Button>
                </div>
            </div>
        </button>
    );
}
