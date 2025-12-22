import React from "react";
import { cn } from "~/lib/utils";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ className = "" }) {
    const { i18n } = useTranslation();

    const languages = [
        { code: "en", label: "English", img: "/images/flags/en.png", alt: "English" },
        { code: "el", label: "Ελληνικά", img: "/images/flags/el.png", alt: "Ελληνικά" }
    ];

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <div className="flex items-center gap-2">
                {languages.map(lang => {
                    const isActive = i18n.language === lang.code;

                    return (
                        <button
                            key={lang.code}
                            type="button"
                            className={cn(
                                "shadow-md rounded-2xl transition-transform cursor-pointer",
                                isActive ? "ring-2 ring-primary-500" : "hover:scale-[1.02]"
                            )}
                            aria-label={`Switch language to ${lang.label}`}
                            aria-pressed={isActive}
                            onClick={() => i18n.changeLanguage(lang.code)}
                        >
                            <img
                                src={lang.img}
                                alt={lang.alt}
                                className="rounded-2xl"
                                loading="eager"
                                decoding="async"
                                fetchPriority="high"
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
