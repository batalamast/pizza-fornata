import { useState } from "react";
import type { TQuestion } from "~/types/question.type";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { cn } from "~/lib/utils";

export function FAQ({ items }: { items: TQuestion[] }) {
    const [openId, setOpenId] = useState<number>(items[0].id);

    return (
        <div className="space-y-6 mt-10">
            {items.map(item => {
                const isOpen = openId === item.id;

                return (
                    <button
                        type="button"
                        key={item.id}
                        className={cn(
                            "rounded-2xl px-6 py-5 shadow-sm w-full transition-colors",
                            isOpen ? "bg-primary-300" : "bg-primary-100"
                        )}
                        onClick={() => setOpenId(isOpen ? -1 : item.id)}
                        aria-expanded={isOpen}
                    >
                        <div className="flex w-full items-center justify-between gap-6 text-left cursor-pointer">
                            <div>{item.question}</div>
                            <div>{isOpen ? <IoIosArrowDown className="text-gray-500" /> : <IoIosArrowUp className="text-gray-500" />}</div>
                        </div>

                        {isOpen ? <div className="mt-4 text-blue-800 text-sm text-start">{item.answer}</div> : null}
                    </button>
                );
            })}
        </div>
    );
}
