"use client";

import Image from "next/image";
import Link from "next/link";

import {
    ArrowLeft,
    ArrowRight,
    Minus,
    Plus,
    ShoppingBag,
    Trash2,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

import { useCart } from "@/components/providers/CartContext";

function formatPrice(price) {
    return new Intl.NumberFormat("fa-IR").format(price);
}

function CartPage() {
    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
    } = useCart();

    const isEmpty = cartItems.length === 0;

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

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

                    <span className="block text-xs font-semibold text-primary sm:text-sm">
                        سبد خرید
                    </span>

                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        سبد خرید شما
                    </h1>

                    <p className="mt-3 text-sm leading-7 text-muted">
                        محصولات انتخاب‌شده را بررسی و سفارش خود را مدیریت
                        کنید.
                    </p>
                </section>

                {/* Empty Cart */}
                {isEmpty ? (
                    <section className="py-20 sm:py-24">
                        <div className="mx-auto max-w-md rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-sm">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-elevated text-muted">
                                <ShoppingBag
                                    size={25}
                                    strokeWidth={1.7}
                                />
                            </div>

                            <h2 className="mt-5 text-lg font-bold text-foreground">
                                سبد خرید شما خالی است
                            </h2>

                            <p className="mt-2 text-sm leading-7 text-muted">
                                هنوز محصولی به سبد خرید اضافه نکرده‌اید.
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
                        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:gap-8">
                            {/* Cart Items */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between gap-4">
                                    <p className="text-sm font-semibold text-foreground">
                                        {formatPrice(
                                            cartItems.length
                                        )}{" "}
                                        محصول
                                    </p>

                                    <button
                                        type="button"
                                        onClick={clearCart}
                                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium text-danger transition-colors duration-200 hover:bg-danger/10"
                                    >
                                        <Trash2
                                            size={15}
                                            strokeWidth={1.8}
                                        />

                                        پاک کردن سبد
                                    </button>
                                </div>

                                {cartItems.map((item) => (
                                    <article
                                        key={item.id}
                                        className="rounded-2xl border border-border bg-surface p-4 transition-all duration-200 hover:border-primary/20 hover:shadow-sm sm:p-5"
                                    >
                                        <div className="flex gap-4 sm:gap-5">
                                            {/* Product Image */}
                                            <Link
                                                href={`/products/${item.id}`}
                                                className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-surface-elevated sm:h-28 sm:w-28"
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    sizes="112px"
                                                    className="object-contain p-3 transition-transform duration-300 hover:scale-105"
                                                />
                                            </Link>

                                            {/* Product Info */}
                                            <div className="flex min-w-0 flex-1 flex-col justify-between">
                                                <div className="flex items-start justify-between gap-3">
                                                    <Link
                                                        href={`/products/${item.id}`}
                                                        className="min-w-0"
                                                    >
                                                        <p className="text-[11px] font-medium text-muted">
                                                            {
                                                                item.categoryLabel
                                                            }
                                                        </p>

                                                        <h2 className="mt-1 text-sm font-semibold leading-6 text-foreground transition-colors duration-200 hover:text-primary">
                                                            {item.name}
                                                        </h2>

                                                        <p className="mt-1 text-[11px] text-muted">
                                                            {
                                                                item.brand
                                                            }
                                                        </p>
                                                    </Link>

                                                    {/* Remove */}
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeFromCart(
                                                                item.id
                                                            )
                                                        }
                                                        aria-label="حذف محصول"
                                                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted transition-all duration-200 hover:bg-danger/10 hover:text-danger"
                                                    >
                                                        <Trash2
                                                            size={
                                                                16
                                                            }
                                                            strokeWidth={
                                                                1.8
                                                            }
                                                        />
                                                    </button>
                                                </div>

                                                <div className="mt-4 flex items-end justify-between gap-4">
                                                    {/* Quantity */}
                                                    <div className="flex h-9 items-center overflow-hidden rounded-lg border border-border bg-surface-elevated">
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                decreaseQuantity(
                                                                    item.id
                                                                )
                                                            }
                                                            disabled={
                                                                item.quantity <=
                                                                1
                                                            }
                                                            aria-label="کاهش تعداد"
                                                            className="flex h-full w-9 items-center justify-center text-muted transition-colors duration-200 hover:bg-surface hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                                                        >
                                                            <Minus
                                                                size={
                                                                    14
                                                                }
                                                                strokeWidth={
                                                                    1.8
                                                                }
                                                            />
                                                        </button>

                                                        <span className="flex min-w-9 items-center justify-center text-xs font-bold text-foreground">
                                                            {formatPrice(
                                                                item.quantity
                                                            )}
                                                        </span>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                increaseQuantity(
                                                                    item.id
                                                                )
                                                            }
                                                            aria-label="افزایش تعداد"
                                                            className="flex h-full w-9 items-center justify-center text-muted transition-colors duration-200 hover:bg-surface hover:text-foreground"
                                                        >
                                                            <Plus
                                                                size={
                                                                    14
                                                                }
                                                                strokeWidth={
                                                                    1.8
                                                                }
                                                            />
                                                        </button>
                                                    </div>

                                                    {/* Price */}
                                                    <div className="text-left">
                                                        <p className="text-sm font-bold text-foreground">
                                                            {formatPrice(
                                                                item.price *
                                                                item.quantity
                                                            )}
                                                        </p>

                                                        <p className="mt-0.5 text-[10px] text-muted">
                                                            تومان
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Summary */}
                            <aside className="h-fit rounded-2xl border border-border bg-surface p-5 shadow-sm lg:sticky lg:top-24">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-base font-bold text-foreground">
                                        خلاصه سفارش
                                    </h2>

                                    <ShoppingBag
                                        size={18}
                                        strokeWidth={1.8}
                                        className="text-muted"
                                    />
                                </div>

                                <div className="mt-6 space-y-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted">
                                            تعداد کالا
                                        </span>

                                        <span className="font-medium text-foreground">
                                            {formatPrice(
                                                totalItems
                                            )}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted">
                                            جمع کالاها
                                        </span>

                                        <span className="font-medium text-foreground">
                                            {formatPrice(
                                                totalPrice
                                            )}{" "}
                                            تومان
                                        </span>
                                    </div>

                                    <div className="border-t border-border pt-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-foreground">
                                                مبلغ نهایی
                                            </span>

                                            <div className="text-left">
                                                <span className="text-xl font-bold tracking-tight text-foreground">
                                                    {formatPrice(
                                                        totalPrice
                                                    )}
                                                </span>

                                                <span className="mr-1 text-[10px] text-muted">
                                                    تومان
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href="/checkout"
                                    className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md"
                                >
                                    ادامه فرایند خرید

                                    <ArrowLeft
                                        size={17}
                                        strokeWidth={1.8}
                                    />
                                </Link>

                                <p className="mt-3 text-center text-[10px] leading-5 text-muted">
                                    درگاه پرداخت در نسخه نهایی فروشگاه اضافه
                                    خواهد شد.
                                </p>
                            </aside>
                        </div>
                    </section>
                )}
            </Container>

            <Footer />
        </main>
    );
}

export default CartPage;