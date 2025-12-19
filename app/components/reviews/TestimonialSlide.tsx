import * as React from "react";
import { Stars } from "./Stars";

export function TestimonialSlide({ item }: { item: any }) {
    return (
        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white/70 px-10 py-10 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
            <h3 className="text-center text-2xl font-extrabold">
                <span className="text-[#F19947]">Τι λένε</span> <span className="text-slate-900">οι πελάτες μας</span>
            </h3>

            <div className="mt-6">
                <Stars value={item.rating ?? 5} />
            </div>

            <p className="mt-6 text-center text-[14px] font-semibold italic text-slate-700 leading-relaxed">“{item.quote}”</p>

            <div className="mt-4 text-center text-[13px] font-semibold text-slate-600">{item.author}</div>
        </div>
    );
}
