import { IoStar } from "react-icons/io5";

export function Stars({ value = 5 }: { value?: number }) {
    const v = Math.max(0, Math.min(5, Math.round(value)));
    return (
        <div className="flex items-center justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < v ? "text-primary-500 text-2xl" : "text-black/20 text-2xl"} aria-hidden>
                    <IoStar />
                </span>
            ))}
            <span className="sr-only">{v} out of 5 stars</span>
        </div>
    );
}
