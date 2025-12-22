import { cn } from "~/lib/utils";
import type { TStatistic } from "~/types/statistic.type";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

type Props = {
    item: TStatistic;
    onCtaClick?: (item: TStatistic) => void;
    className?: string;
};

export function StatisticsCard({ item, onCtaClick, className }: Props) {
    const base =
        "rounded-xl bg-white px-7 py-6 shadow-lg shadow-black/10 hover:scale-[1.02] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:ring-4 hover:ring-primary-500/80 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-500";

    return (
        <article className={cn(base, className)}>
            {/* Make the whole card a real link, with proper focus styles */}
            <Link
                to="/about"
                className={cn(
                    "block rounded-xl",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                )}
                aria-labelledby={`stat-title-${item.id}`}
                aria-describedby={`stat-desc-${item.id}`}
                onClick={e => {
                    onCtaClick?.(item);
                    // If parent wants to fully control navigation:
                    // e.preventDefault();
                }}
            >
                <div className="text-[40px] font-bold leading-none text-primary-500">{item.headline}</div>

                <div className="mt-2">
                    <h3 id={`stat-title-${item.id}`} className="text-lg font-semibold text-blue-900">
                        {item.title}
                    </h3>

                    {item.subtitle ? <p className="mt-1 text-[12px] font-semibold text-neutral-900">{item.subtitle}</p> : null}
                </div>

                <p id={`stat-desc-${item.id}`} className="mt-3 text-sm leading-relaxed text-gray-500">
                    {item.description}
                </p>

                {/* CTA should be part of the same link (avoid nested interactive button) */}
                <div className="mt-4">
                    <span className="text-primary-500 text-[12px] inline-flex items-center">
                        {item.ctaText}
                        <FaArrowRightLong className="w-3.5 h-3.5 ms-2" aria-hidden="true" focusable="false" />
                    </span>
                </div>
            </Link>
        </article>
    );
}
