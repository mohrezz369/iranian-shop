import Link from "next/link";

import {
    ArrowLeft,
    TrendingUp,
} from "lucide-react";

import Container from "../layout/Container";
import ProductCard from "../products/ProductCard";

import products from "@/data/products";

function BestSellingProducts() {
    const bestSellingProducts = [...products]
        .sort(
            (a, b) =>
                b.reviewCount - a.reviewCount
        )
        .slice(0, 4);

    return (
        <section className="bg-background py-16 transition-colors duration-200 sm:py-20">
            <Container>
                {/* Section Header */}
                <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-primary sm:text-sm">
                            <TrendingUp
                                size={17}
                                strokeWidth={1.8}
                            />

                            محبوب‌ترین‌ها
                        </div>

                        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            پرفروش‌ترین محصولات
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-muted">
                            محصولاتی که بیشتر از همه مورد توجه کاربران قرار
                            گرفته‌اند.
                        </p>
                    </div>

                    {/* Desktop Link */}
                    <Link
                        href="/products"
                        className="hidden shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-muted transition-all duration-200 hover:bg-surface-elevated hover:text-foreground sm:flex"
                    >
                        مشاهده همه

                        <ArrowLeft
                            size={17}
                            strokeWidth={1.8}
                        />
                    </Link>
                </div>

                {/* Products */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {bestSellingProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

                {/* Mobile Link */}
                <div className="mt-6 sm:hidden">
                    <Link
                        href="/products"
                        className="flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition-all duration-200 hover:bg-surface-elevated"
                    >
                        مشاهده همه محصولات

                        <ArrowLeft
                            size={17}
                            strokeWidth={1.8}
                        />
                    </Link>
                </div>
            </Container>
        </section>
    );
}

export default BestSellingProducts;