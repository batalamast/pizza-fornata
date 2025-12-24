import * as React from "react";
import { Fragment, useState } from "react";
import type { TProduct } from "~/types/product.type";
import { Button } from "~/components/ui/Button";
import { cn } from "~/lib/utils";
import { GoArrowRight } from "react-icons/go";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { TfiClose } from "react-icons/tfi";

type Props = {
    product: TProduct;
    menuSlug: string;
};

export function MenuItemCard({ product, menuSlug }: Props) {
    let [isOpen, setIsOpen] = useState(false);

    const close = () => {
        setIsOpen(false);
    };

    return (
        <>
            <article
                className={cn("overflow-hidden rounded-2xl border border-gray-300 bg-white", "shadow-[0_12px_30px_rgba(15,23,42,0.08)]")}
                aria-labelledby={`product-title-${product.id}`}
            >
                {/* Image */}
                <div className="relative">
                    <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="block h-[260px] md:h-[360px] w-full object-cover"
                        width="1200"
                        height="360"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                {/* Content */}
                <div className="px-6 md:px-8 py-7">
                    <h3 id={`product-title-${product.id}`} className="text-[24px] md:text-[32px] font-semibold">
                        {product.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-[15px] md:text-[18px] leading-relaxed line-clamp-2">{product.description}</p>

                    <div className="mt-3 flex gap-2 sm:flex-row sm:items-end justify-between items-end">
                        {/* CTA */}
                        <Button
                            className="flex text-sm md:text-lg items-center justify-center rounded-md bg-primary-500 px-3 md:px-4 py-2 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                            rightIcon={<GoArrowRight className="w-4 h-4 text-black ms-2" aria-hidden="true" focusable="false" />}
                            onClick={() => setIsOpen(true)}
                            aria-haspopup="dialog"
                            aria-expanded={isOpen}
                            aria-controls={`product-dialog-${product.id}`}
                        >
                            Δες Περισσότερα
                        </Button>

                        {/* Prices */}
                        <div className="flex justify-center items-center gap-4 md:gap-6" aria-label="Prices">
                            {product.prices.map((price, idx) => {
                                const isDineIn = menuSlug === "dine-in";
                                const isThirty = price.size === "30cm";
                                return (
                                    <div key={idx} className="mt-3">
                                        <div
                                            className={cn(
                                                "rounded-xl px-2 py-1 text-[10px] md:text-[12px] inline-flex items-center justify-center",
                                                isThirty ? "bg-black text-white" : "bg-primary-500 text-white"
                                            )}
                                        >
                                            {price.size}
                                        </div>
                                        <div
                                            className={cn(
                                                "mt-2 text-[28px] md:text-[32px] font-bold leading-none",
                                                isThirty ? "text-black" : "text-primary-500"
                                            )}
                                        >
                                            {isDineIn ? price.dineIn : price.takeAway}€
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </article>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={close} id={`product-dialog-${product.id}`}>
                    {/* Backdrop */}
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 md:p-8">
                            {/* Panel */}
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-250"
                                enterFrom="opacity-0 translate-y-3 scale-[0.98]"
                                enterTo="opacity-100 translate-y-0 scale-100"
                                leave="ease-in duration-180"
                                leaveFrom="opacity-100 translate-y-0 scale-100"
                                leaveTo="opacity-0 translate-y-3 scale-[0.98]"
                            >
                                <DialogPanel
                                    className={cn(
                                        "relative w-full max-w-6xl overflow-hidden rounded-2xl bg-white",
                                        "shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
                                    )}
                                    aria-labelledby={`product-dialog-title-${product.id}`}
                                    aria-describedby={`product-dialog-desc-${product.id}`}
                                >
                                    {/* Close button */}
                                    <button
                                        type="button"
                                        onClick={close}
                                        className={cn(
                                            "absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full",
                                            "bg-white/90 shadow-md hover:bg-white",
                                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                        )}
                                        aria-label="Close dialog"
                                    >
                                        <TfiClose className="h-5 w-5 text-blue-900" aria-hidden="true" focusable="false" />
                                    </button>

                                    {/* Image */}
                                    <div className="relative h-[360px] w-full md:h-[520px]">
                                        <img
                                            src={product.imageUrl}
                                            alt={product.title}
                                            className="h-full w-full object-cover"
                                            width="1200"
                                            height="520"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="px-6 py-7 md:px-10 md:pb-10">
                                        <h3 id={`product-dialog-title-${product.id}`} className="text-[30px] md:text-[40px] font-semibold">
                                            {product.title}
                                        </h3>

                                        <p id={`product-dialog-desc-${product.id}`} className="mt-2 text-[18px] md:text-[20px]">
                                            {product.description}
                                        </p>

                                        <div className="mt-2 flex items-end justify-between gap-6">
                                            {/* Back button */}
                                            <button
                                                type="button"
                                                onClick={close}
                                                className={cn(
                                                    "inline-flex items-center gap-3 rounded-md bg-primary-500 px-4 py-2.5 cursor-pointer",
                                                    "text-[16px] font-bold text-black shadow-md",
                                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                                )}
                                            >
                                                <span aria-hidden="true">←</span> Πίσω
                                            </button>

                                            {/* Prices */}
                                            <div className="flex justify-center items-center gap-6" aria-label="Prices">
                                                {product.prices.map((price, idx) => {
                                                    const isDineIn = menuSlug === "dine-in";
                                                    const isThirty = price.size === "30cm";
                                                    return (
                                                        <div key={idx} className="mt-3">
                                                            <div
                                                                className={cn(
                                                                    "rounded-xl px-2 py-1 text-[12px] inline-flex items-center justify-center",
                                                                    isThirty ? "bg-black text-white" : "bg-primary-500 text-white"
                                                                )}
                                                            >
                                                                {price.size}
                                                            </div>
                                                            <div
                                                                className={cn(
                                                                    "mt-2 text-[32px] font-bold leading-none",
                                                                    isThirty ? "text-black" : "text-primary-500"
                                                                )}
                                                            >
                                                                {isDineIn ? price.dineIn : price.takeAway}€
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
