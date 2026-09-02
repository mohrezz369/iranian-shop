"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import ProductCard from "./ProductCard";
import ProductToolbar from "./ProductToolbar";

function normalizeText(value) {
    return String(value ?? "")
        .trim()
        .toLocaleLowerCase("fa-IR")
        .replace(/ي/g, "ی")
        .replace(/ى/g, "ی")
        .replace(/ك/g, "ک")
        .replace(/ۀ/g, "ه")
        .replace(/ة/g, "ه")
        .replace(/\u200c/g, " ")
        .replace(/\s+/g, " ");
}

function ProductsView({ products }) {
    const searchParams = useSearchParams();

    const searchQuery = (
        searchParams.get("search") || ""
    ).trim();

    const initialCategory =
        searchParams.get("category") || "all";

    const [category, setCategory] =
        useState(initialCategory);

    const [sort, setSort] = useState("default");

    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Search
        if (searchQuery) {
            const normalizedQuery =
                normalizeText(searchQuery);

            result = result.filter((product) => {
                const searchableText = normalizeText(
                    [
                        product.name,
                        product.brand,
                        product.category,
                        product.categoryLabel,
                    ].join(" ")
                );

                return searchableText.includes(
                    normalizedQuery
                );
            });
        }

        // Category
        if (category !== "all") {
            result = result.filter(
                (product) =>
                    product.category === category
            );
        }

        // Sort
        switch (sort) {
            case "popular":
                result.sort(
                    (a, b) =>
                        b.reviewCount - a.reviewCount
                );
                break;

            case "newest":
                result.sort((a, b) => b.id - a.id);
                break;

            case "price-low":
                result.sort(
                    (a, b) => a.price - b.price
                );
                break;

            case "price-high":
                result.sort(
                    (a, b) => b.price - a.price
                );
                break;

            default:
                break;
        }

        return result;
    }, [
        products,
        category,
        sort,
        searchQuery,
    ]);

    return (
        <>
            {/* Search Result Header */}
            {searchQuery && (
                <div className="mb-6 rounded-2xl border border-border bg-surface p-4 transition-colors duration-200">
                    <p className="text-xs text-muted">
                        نتایج جستجو برای:
                    </p>

                    <p className="mt-1 text-sm font-semibold text-foreground">
                        «{searchQuery}»
                    </p>
                </div>
            )}

            <ProductToolbar
                category={category}
                setCategory={setCategory}
                sort={sort}
                setSort={setSort}
            />

            <div className="mb-5 flex items-center justify-between">
                <p className="text-sm text-muted">
                    نمایش{" "}
                    {new Intl.NumberFormat("fa-IR").format(
                        filteredProducts.length
                    )}{" "}
                    محصول
                </p>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <div className="rounded-2xl border border-border bg-surface py-20 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated text-muted">
                        <span className="text-lg">
                            🔎
                        </span>
                    </div>

                    <p className="mt-4 text-sm font-medium text-foreground">
                        محصولی پیدا نشد.
                    </p>

                    <p className="mt-2 text-xs text-muted">
                        عبارت جستجو یا فیلترهای انتخاب‌شده را تغییر دهید.
                    </p>
                </div>
            )}
        </>
    );
}

export default ProductsView;