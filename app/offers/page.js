import Link from "next/link";

import {
    ArrowLeft,
    BadgePercent,
    Sparkles,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ProductCard from "@/components/products/ProductCard";

import products from "@/data/products";

function OffersPage() {
    const offerProducts = products.filter(
        (product) => product.discount > 0
    );

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
            <Header />

            <Container>
                {/* Page Header */}
                <section className="relative overflow-hidden border-b border-border py-8 sm:py-10">
                    <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-danger/5 blur-3xl" />

                    <div className="relative">
                        <div className="flex items-center gap-2 text-xs font-semibold text-danger sm:text-sm">
                            <Sparkles
                                size={16}
                                strokeWidth={1.8}
                            />

                            پیشنهاد ویژه
                        </div>

                        <h1 className="mt-2 text-2xl font-bold leading-[1.6] tracking-tight text-foreground sm:text-3xl">
                            تخفیف‌های ویژه ایرانی شاپ
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                            بهترین فرصت‌ها برای خرید محصولات دیجیتال با
                            قیمت مناسب‌تر.
                        </p>
                    </div>
                </section>

                {/* Products */}
                <section className="py-8 sm:py-10">
                    {offerProducts.length > 0 ? (
                        <>
                            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-danger/10 text-danger">
                                        <BadgePercent
                                            size={19}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            محصولات تخفیف‌خورده
                                        </p>

                                        <p className="mt-1 text-xs text-muted">
                                            {
                                                new Intl.NumberFormat(
                                                    "fa-IR"
                                                ).format(
                                                    offerProducts.length
                                                )
                                            }{" "}
                                            محصول آماده خرید است.
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href="/products"
                                    className="hidden shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-muted transition-all duration-200 hover:bg-surface-elevated hover:text-foreground sm:flex"
                                >
                                    مشاهده همه محصولات

                                    <ArrowLeft
                                        size={16}
                                        strokeWidth={1.8}
                                    />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {offerProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>

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
                        </>
                    ) : (
                        <div className="rounded-3xl border border-border bg-surface px-6 py-20 text-center shadow-sm">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-elevated text-muted">
                                <BadgePercent
                                    size={25}
                                    strokeWidth={1.7}
                                />
                            </div>

                            <h2 className="mt-5 text-lg font-bold text-foreground">
                                در حال حاضر پیشنهاد ویژه‌ای وجود ندارد.
                            </h2>

                            <p className="mx-auto mt-2 max-w-sm text-sm leading-7 text-muted">
                                محصولات جدید و تخفیف‌های آینده را بررسی
                                کنید.
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
                    )}
                </section>
            </Container>

            <Footer />
        </main>
    );
}

export default OffersPage;