import { cn } from "~/lib/utils";
import type { TStatistic } from "~/types/statistic.type";
import { Button } from "~/components/ui/Button";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
    item: TStatistic;
    onCtaClick?: (item: TStatistic) => void;
    className?: string;
};

export function StatisticsCard({ item, onCtaClick, className }: Props) {
    const base = "rounded-xl bg-white px-7 py-6 shadow-lg shadow-black/10";

    return (
        <a
            href={item.link}
            className={cn(base, "block focus:outline-none focus:ring-2 focus:ring-white/80", className)}
            onClick={() => {
                onCtaClick?.(item);
                // If you want to fully control navigation, prevent default in the parent handler.
                // e.preventDefault();
            }}
        >
            <div className="text-[40px] font-bold leading-none text-primary-500">{item.headline}</div>

            <div className="mt-2">
                <div className="text-lg font-semibold text-blue-900">{item.title}</div>
                {item.subtitle ? <div className="mt-1 text-[12px] font-semibold text-neutral-900">{item.subtitle}</div> : null}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.description}</p>

            <div className="mt-4">
                <Button
                    className="text-primary-500 text-[12px] flex justify-center items-center"
                    rightIcon={<FaArrowRightLong className="w-3.5 h-3.5 ms-2" />}
                >
                    Καλέστε μας
                </Button>
            </div>
        </a>
    );
}
