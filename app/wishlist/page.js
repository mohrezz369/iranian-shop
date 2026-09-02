"use client";

import Link from "next/link";

import {
    ArrowLeft,
    ArrowRight,
    Heart,
    Trash2,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ProductCard from "@/components/products/ProductCard";

import { useWishlist } from "@/components/providers/WishlistContext";

function WishlistPage() {
    const {
        wishlistItems,
        clearWishlist,
    } = useWishlist();

    const isEmpty = wishlistItems.length === 0;

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
            <Header />

            <Container>
                {/* Page Header */}
                <section className="border-b border-border py-8 sm:py-10">
                    <Link
                        href="/products"
                        className="mb-5 inline-flex items-center gap-2 rounded-lg px-1 py-1 text-xs font-medium text-muted transition-colors duration-200 hover:text-foreground"
                    >
                        <ArrowRight
                            size={16}
                            strokeWidth={1.8}
                        />

                        بازگشت به فروشگاه
                    </Link>

                    <div className="flex items-center gap-2 text-xs font-semibold text-primary sm:text-sm">
                        <Heart
                            size={16}
                            strokeWidth={1.8}
                        />

                        علاقه‌مندی‌ها
                    </div>

                    <h1 className="mt-2 text-2xl font-bold leading-[1.6] tracking-tight text-foreground sm:text-3xl">
                        محصولات مورد علاقه
                    </h1>

                    <p className="mt-3 text-sm leading-7 text-muted">
                        محصولاتی که برای خرید بعدی ذخیره کرده‌اید.
                    </p>
                </section>

                {/* Empty Wishlist */}
                {isEmpty ? (
                    <section className="py-20 sm:py-24">
                        <div className="mx-auto max-w-md rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-sm">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-elevated text-muted">
                                <Heart
                                    size={25}
                                    strokeWidth={1.7}
                                />
                            </div>

                            <h2 className="mt-5 text-lg font-bold text-foreground">
                                لیست علاقه‌مندی‌ها خالی است
                            </h2>

                            <p className="mt-2 text-sm leading-7 text-muted">
                                هنوز محصولی را به علاقه‌مندی‌های خود اضافه
                                نکرده‌اید.
                            </p>

                            <Link
                                href="/products"
                                className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md"
                            >
                                مشاهده محصولات

                                <ArrowLeft
                                    size={16}
                                    strokeWidth={1.8}
                                />
                            </Link>
                        </div>
                    </section>
                ) : (
                    <section className="py-8 sm:py-10">
                        {/* Toolbar */}
                        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Heart
                                        size={19}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        محصولات ذخیره‌شده
                                    </p>

                                    <p className="mt-1 text-xs text-muted">
                                        {
                                            new Intl.NumberFormat(
                                                "fa-IR"
                                            ).format(
                                                wishlistItems.length
                                            )
                                        }{" "}
                                        محصول در لیست شما قرار دارد.
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={clearWishlist}
                                className="flex h-10 items-center justify-center gap-2 self-start rounded-xl border border-danger/20 bg-danger/5 px-3.5 text-xs font-medium text-danger transition-all duration-200 hover:bg-danger/10 sm:self-auto"
                            >
                                <Trash2
                                    size={15}
                                    strokeWidth={1.8}
                                />

                                پاک کردن علاقه‌مندی‌ها
                            </button>
                        </div>

                        {/* Products */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {wishlistItems.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </Container>

            <Footer />
        </main>
    );
}

export default WishlistPage;