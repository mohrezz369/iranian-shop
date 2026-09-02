"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import {
    ArrowLeft,
    ArrowRight,
    Check,
    Heart,
    Minus,
    Plus,
    ShoppingBag,
    Star,
} from "lucide-react";

import { useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ProductCard from "@/components/products/ProductCard";
import ProductSpecifications from "@/components/products/ProductSpecifications";
import { useCart } from "@/components/providers/CartContext";
import { useWishlist } from "@/components/providers/WishlistContext";

import products from "@/data/products";

function formatPrice(price) {
    return new Intl.NumberFormat("fa-IR").format(price);
}

function ProductDetailsPage() {
    const params = useParams();

    const product = products.find(
        (item) =>
            String(item.id) === String(params.id)
    );

    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const { addToCart } = useCart();

    const {
        toggleWishlist,
        isInWishlist,
    } = useWishlist();

    if (!product) {
        return (
            <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
                <Header />

                <Container>
                    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-elevated text-muted">
                            <span className="text-xl">
                                🔎
                            </span>
                        </div>

                        <h1 className="mt-5 text-xl font-bold text-foreground">
                            محصول پیدا نشد
                        </h1>

                        <p className="mt-2 max-w-sm text-sm leading-7 text-muted">
                            محصول موردنظر وجود ندارد یا حذف شده است.
                        </p>

                        <Link
                            href="/products"
                            className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md"
                        >
                            بازگشت به فروشگاه

                            <ArrowRight
                                size={16}
                                strokeWidth={1.8}
                            />
                        </Link>
                    </section>
                </Container>

                <Footer />
            </main>
        );
    }

    const isFavorite = isInWishlist(product.id);

    const relatedProducts = products
        .filter(
            (item) =>
                item.category === product.category &&
                item.id !== product.id
        )
        .slice(0, 4);

    function increaseQuantity() {
        setQuantity((currentQuantity) =>
            Math.min(
                currentQuantity + 1,
                product.stock
            )
        );
    }

    function decreaseQuantity() {
        setQuantity((currentQuantity) =>
            Math.max(currentQuantity - 1, 1)
        );
    }

    function handleAddToCart() {
        for (
            let index = 0;
            index < quantity;
            index += 1
        ) {
            addToCart(product);
        }

        setIsAdded(true);

        window.setTimeout(() => {
            setIsAdded(false);
        }, 1200);
    }

    function handleWishlist() {
        toggleWishlist(product);
    }

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
            <Header />

            <Container>
                {/* Breadcrumb */}
                <div className="py-5 sm:py-6">
                    <div className="flex min-w-0 items-center gap-2 overflow-hidden text-xs text-muted">
                        <Link
                            href="/"
                            className="shrink-0 transition-colors duration-200 hover:text-foreground"
                        >
                            خانه
                        </Link>

                        <span className="shrink-0 text-border">
                            /
                        </span>

                        <Link
                            href="/products"
                            className="shrink-0 transition-colors duration-200 hover:text-foreground"
                        >
                            محصولات
                        </Link>

                        <span className="shrink-0 text-border">
                            /
                        </span>

                        <span className="truncate text-foreground">
                            {product.name}
                        </span>
                    </div>
                </div>

                {/* Product Main */}
                <section className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
                    {/* Product Image */}
                    <div className="relative self-start overflow-hidden rounded-3xl border border-border bg-surface transition-colors duration-200">
                        {/* Decorative Background */}
                        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

                        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

                        {/* Badge */}
                        {product.badge && (
                            <span className="absolute right-4 top-4 z-10 rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                                {product.badge}
                            </span>
                        )}

                        {/* Discount */}
                        {product.discount > 0 && (
                            <span className="absolute left-4 top-4 z-10 rounded-xl bg-danger px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                                {product.discount}٪ تخفیف
                            </span>
                        )}

                        <div className="relative aspect-square">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain p-8 transition-transform duration-300 hover:scale-[1.02] sm:p-12 lg:p-14"
                            />
                        </div>

                        {/* Image Bottom Info */}
                        <div className="border-t border-border px-5 py-4 sm:px-6">
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-xs text-muted">
                                    تضمین اصالت کالا
                                </span>

                                <span className="flex items-center gap-1.5 text-xs font-medium text-success">
                                    <Check
                                        size={14}
                                        strokeWidth={2}
                                    />
                                    قابل سفارش
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="flex flex-col">
                        {/* Category */}
                        <span className="w-fit rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                            {product.categoryLabel}
                        </span>

                        {/* Title */}
                        <h1 className="mt-4 text-2xl font-bold leading-[1.6] tracking-tight text-foreground sm:text-3xl lg:text-[2rem]">
                            {product.name}
                        </h1>

                        {/* Brand */}
                        <p className="mt-2 text-sm text-muted">
                            برند{" "}
                            <span className="font-medium text-foreground">
                                {product.brand}
                            </span>
                        </p>

                        {/* Rating */}
                        <div className="mt-5 flex items-center gap-2">
                            <div className="flex items-center gap-1.5 rounded-lg bg-surface-elevated px-2.5 py-1.5">
                                <Star
                                    size={15}
                                    strokeWidth={1.8}
                                    className="fill-current text-yellow-500"
                                />

                                <span className="text-xs font-bold text-foreground">
                                    {product.rating}
                                </span>
                            </div>

                            <span className="text-xs text-muted">
                                بر اساس{" "}
                                {formatPrice(
                                    product.reviewCount
                                )}{" "}
                                نظر
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px bg-border" />

                        {/* Price */}
                        <div>
                            {product.oldPrice && (
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-muted line-through">
                                        {formatPrice(
                                            product.oldPrice
                                        )}{" "}
                                        تومان
                                    </span>

                                    {product.discount > 0 && (
                                        <span className="rounded-md bg-danger/10 px-1.5 py-0.5 text-[10px] font-bold text-danger">
                                            {product.discount}٪
                                        </span>
                                    )}
                                </div>
                            )}

                            <div className="mt-1 flex items-baseline gap-2">
                                <span className="text-3xl font-bold tracking-tight text-foreground">
                                    {formatPrice(
                                        product.price
                                    )}
                                </span>

                                <span className="text-xs font-medium text-muted">
                                    تومان
                                </span>
                            </div>
                        </div>

                        {/* Stock */}
                        <div className="mt-5 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_0_4px] shadow-success/10" />

                            <span className="text-xs font-semibold text-success">
                                موجود در انبار
                            </span>

                            <span className="text-xs text-muted">
                                (
                                {formatPrice(
                                    product.stock
                                )}{" "}
                                عدد)
                            </span>
                        </div>

                        {/* Quantity */}
                        <div className="mt-7">
                            <p className="mb-2.5 text-xs font-semibold text-foreground">
                                تعداد
                            </p>

                            <div className="flex h-11 w-fit items-center overflow-hidden rounded-xl border border-border bg-surface">
                                <button
                                    type="button"
                                    onClick={
                                        decreaseQuantity
                                    }
                                    disabled={
                                        quantity <= 1
                                    }
                                    aria-label="کاهش تعداد"
                                    className="flex h-full w-11 items-center justify-center text-muted transition-colors duration-200 hover:bg-surface-elevated hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <Minus
                                        size={16}
                                        strokeWidth={1.8}
                                    />
                                </button>

                                <span className="flex w-12 items-center justify-center text-sm font-bold text-foreground">
                                    {formatPrice(
                                        quantity
                                    )}
                                </span>

                                <button
                                    type="button"
                                    onClick={
                                        increaseQuantity
                                    }
                                    disabled={
                                        quantity >=
                                        product.stock
                                    }
                                    aria-label="افزایش تعداد"
                                    className="flex h-full w-11 items-center justify-center text-muted transition-colors duration-200 hover:bg-surface-elevated hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <Plus
                                        size={16}
                                        strokeWidth={1.8}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-5 flex gap-3">
                            <button
                                type="button"
                                onClick={
                                    handleAddToCart
                                }
                                className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white shadow-sm transition-all duration-200 ${isAdded
                                    ? "bg-success"
                                    : "bg-primary hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md"
                                    }`}
                            >
                                {isAdded ? (
                                    <>
                                        <Check
                                            size={18}
                                            strokeWidth={2}
                                        />

                                        به سبد اضافه شد
                                    </>
                                ) : (
                                    <>
                                        <ShoppingBag
                                            size={18}
                                            strokeWidth={
                                                1.8
                                            }
                                        />

                                        افزودن به سبد
                                    </>
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={
                                    handleWishlist
                                }
                                aria-label={
                                    isFavorite
                                        ? "حذف از علاقه‌مندی‌ها"
                                        : "افزودن به علاقه‌مندی‌ها"
                                }
                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 ${isFavorite
                                    ? "border-danger/20 bg-danger/10 text-danger"
                                    : "border-border bg-surface text-muted hover:bg-surface-elevated hover:text-foreground"
                                    }`}
                            >
                                <Heart
                                    size={20}
                                    strokeWidth={1.8}
                                    className={
                                        isFavorite
                                            ? "fill-danger"
                                            : ""
                                    }
                                />
                            </button>
                        </div>

                        {/* Product Summary */}
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl border border-border bg-surface p-4 transition-colors duration-200">
                                <p className="text-[11px] text-muted">
                                    برند
                                </p>

                                <p className="mt-1.5 text-sm font-semibold text-foreground">
                                    {product.brand}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-surface p-4 transition-colors duration-200">
                                <p className="text-[11px] text-muted">
                                    دسته‌بندی
                                </p>

                                <p className="mt-1.5 text-sm font-semibold text-foreground">
                                    {
                                        product.categoryLabel
                                    }
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-surface p-4 transition-colors duration-200">
                                <p className="text-[11px] text-muted">
                                    امتیاز
                                </p>

                                <p className="mt-1.5 text-sm font-semibold text-foreground">
                                    {product.rating} از ۵
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-surface p-4 transition-colors duration-200">
                                <p className="text-[11px] text-muted">
                                    وضعیت
                                </p>

                                <p className="mt-1.5 text-sm font-semibold text-success">
                                    موجود
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <ProductSpecifications
                    specifications={
                        product.specifications
                    }
                />

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="border-t border-border py-14 sm:py-16">
                        <div className="mb-8 flex items-end justify-between gap-6">
                            <div>
                                <span className="text-xs font-semibold text-primary sm:text-sm">
                                    شاید بپسندی
                                </span>

                                <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                    محصولات مرتبط
                                </h2>

                                <p className="mt-2 text-sm leading-7 text-muted">
                                    چند محصول دیگر از همین دسته‌بندی.
                                </p>
                            </div>

                            <Link
                                href={`/products?category=${product.category}`}
                                className="hidden shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-muted transition-all duration-200 hover:bg-surface-elevated hover:text-foreground sm:flex"
                            >
                                مشاهده همه

                                <ArrowLeft
                                    size={17}
                                    strokeWidth={1.8}
                                />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {relatedProducts.map(
                                (relatedProduct) => (
                                    <ProductCard
                                        key={
                                            relatedProduct.id
                                        }
                                        product={
                                            relatedProduct
                                        }
                                    />
                                )
                            )}
                        </div>

                        {/* Mobile Link */}
                        <div className="mt-6 sm:hidden">
                            <Link
                                href={`/products?category=${product.category}`}
                                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition-all duration-200 hover:bg-surface-elevated"
                            >
                                مشاهده همه محصولات

                                <ArrowLeft
                                    size={17}
                                    strokeWidth={1.8}
                                />
                            </Link>
                        </div>
                    </section>
                )}
            </Container>

            <Footer />
        </main>
    );
}

export default ProductDetailsPage;