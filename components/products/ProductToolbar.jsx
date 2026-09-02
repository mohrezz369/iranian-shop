"use client";

import {
    Check,
    ChevronDown,
    SlidersHorizontal,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

function ProductToolbar({
    category,
    setCategory,
    sort,
    setSort,
}) {
    const [isSortOpen, setIsSortOpen] = useState(false);

    const sortRef = useRef(null);

    const categories = [
        { value: "all", label: "همه محصولات" },
        { value: "laptop", label: "لپ‌ تاپ" },
        { value: "mobile", label: "موبایل" },
        { value: "tablet", label: "تبلت" },
        { value: "earbuds", label: "هدفون" },
    ];

    const sortOptions = [
        { value: "default", label: "پیش‌فرض" },
        { value: "popular", label: "محبوب‌ترین" },
        { value: "newest", label: "جدیدترین" },
        { value: "price-low", label: "ارزان‌ترین" },
        { value: "price-high", label: "گران‌ترین" },
    ];

    const selectedSort = sortOptions.find(
        (option) => option.value === sort
    );

    useEffect(() => {
        function handleOutsideClick(event) {
            if (
                sortRef.current &&
                !sortRef.current.contains(event.target)
            ) {
                setIsSortOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );
        };
    }, []);

    function handleSortChange(value) {
        setSort(value);
        setIsSortOpen(false);
    }

    return (
        <div className="mb-8 rounded-2xl border border-border bg-surface p-3 transition-colors duration-200 sm:p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                {/* Categories */}
                <div className="flex min-w-0 items-center gap-3">
                    <div className="hidden shrink-0 items-center gap-2 rounded-xl bg-surface-elevated px-3 py-2 text-xs font-semibold text-foreground sm:flex">
                        <SlidersHorizontal
                            size={16}
                            strokeWidth={1.8}
                        />

                        فیلتر
                    </div>

                    <div className="min-w-0 flex-1 overflow-x-auto pb-0.5 scrollbar-none [&::-webkit-scrollbar]:hidden">
                        <div className="flex w-max gap-2">
                            {categories.map((item) => {
                                const isSelected =
                                    category === item.value;

                                return (
                                    <button
                                        key={item.value}
                                        type="button"
                                        onClick={() =>
                                            setCategory(
                                                item.value
                                            )
                                        }
                                        className={`shrink-0 rounded-xl px-3.5 py-2.5 text-xs font-medium transition-all duration-200 ${isSelected
                                            ? "bg-primary text-white shadow-sm"
                                            : "bg-surface-elevated text-muted hover:bg-border hover:text-foreground"
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Sort */}
                <div className="flex shrink-0 items-center justify-between gap-3 border-t border-border pt-3 sm:justify-end sm:border-t-0 sm:pt-0">
                    <span className="text-xs font-medium text-muted">
                        مرتب‌سازی:
                    </span>

                    <div
                        ref={sortRef}
                        className="relative"
                    >
                        {/* Trigger */}
                        <button
                            type="button"
                            onClick={() =>
                                setIsSortOpen(
                                    (value) => !value
                                )
                            }
                            aria-haspopup="listbox"
                            aria-expanded={isSortOpen}
                            className="flex h-10 min-w-32 items-center justify-between gap-3 rounded-xl border border-border bg-surface-elevated px-3.5 text-xs font-medium text-foreground outline-none transition-all duration-200 hover:border-primary/40 hover:bg-background focus:border-primary"
                        >
                            <span>
                                {selectedSort?.label}
                            </span>

                            <ChevronDown
                                size={15}
                                strokeWidth={1.8}
                                className={`shrink-0 text-muted transition-transform duration-200 ${isSortOpen
                                    ? "rotate-180"
                                    : ""
                                    }`}
                            />
                        </button>

                        {/* Dropdown */}
                        {isSortOpen && (
                            <div className="absolute left-0 top-[calc(100%+8px)] z-30 min-w-full overflow-hidden rounded-2xl border border-border bg-surface p-1.5 shadow-xl shadow-black/5 dark:shadow-black/20">
                                {sortOptions.map(
                                    (option) => {
                                        const isSelected =
                                            sort ===
                                            option.value;

                                        return (
                                            <button
                                                key={
                                                    option.value
                                                }
                                                type="button"
                                                role="option"
                                                aria-selected={
                                                    isSelected
                                                }
                                                onClick={() =>
                                                    handleSortChange(
                                                        option.value
                                                    )
                                                }
                                                className={`flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-right text-xs font-medium transition-colors duration-200 ${isSelected
                                                    ? "bg-primary text-white"
                                                    : "text-foreground hover:bg-surface-elevated"
                                                    }`}
                                            >
                                                <span>
                                                    {
                                                        option.label
                                                    }
                                                </span>

                                                {isSelected && (
                                                    <Check
                                                        size={
                                                            14
                                                        }
                                                        strokeWidth={
                                                            2
                                                        }
                                                    />
                                                )}
                                            </button>
                                        );
                                    }
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductToolbar;