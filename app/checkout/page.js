"use client";

import Link from "next/link";

import {
    ArrowLeft,
    ArrowRight,
    Check,
    CreditCard,
    MapPin,
    Package,
    ShieldCheck,
    Truck,
} from "lucide-react";

import { useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

import { useCart } from "@/components/providers/CartContext";

function formatPrice(price) {
    return new Intl.NumberFormat("fa-IR").format(price);
}

function CheckoutPage() {
    const {
        cartItems,
        totalItems,
        totalPrice,
        clearCart,
    } = useCart();

    const [shippingMethod, setShippingMethod] =
        useState("express");

    const [paymentMethod, setPaymentMethod] =
        useState("online");

    const [isSubmitted, setIsSubmitted] =
        useState(false);

    const [orderNumber, setOrderNumber] =
        useState("");

    const shippingCost =
        shippingMethod === "express" ? 150000 : 0;

    const finalPrice =
        totalPrice + shippingCost;

    function handleSubmit(event) {
        event.preventDefault();

        const generatedOrderNumber = `IR-${Date.now()
            .toString()
            .slice(-8)}`;

        setOrderNumber(generatedOrderNumber);

        clearCart();

        setIsSubmitted(true);
    }

    if (cartItems.length === 0 && !isSubmitted) {
        return (
            <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
                <Header />

                <Container>
                    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-elevated text-muted">
                            <Package
                                size={26}
                                strokeWidth={1.7}
                            />
                        </div>

                        <h1 className="mt-5 text-xl font-bold text-foreground">
                            سبد خرید شما خالی است
                        </h1>

                        <p className="mt-2 max-w-sm text-sm leading-7 text-muted">
                            برای ادامه فرایند خرید، ابتدا محصولی به سبد خرید
                            اضافه کنید.
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

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
                <Header />

                <Container>
                    <section className="flex min-h-[65vh] flex-col items-center justify-center px-4 py-16 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-success/10 text-success shadow-sm">
                            <Check
                                size={30}
                                strokeWidth={2}
                            />
                        </div>

                        <span className="mt-6 text-xs font-semibold text-success sm:text-sm">
                            سفارش با موفقیت ثبت شد
                        </span>

                        <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            ممنون از خرید شما
                        </h1>

                        <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                            سفارش شما با موفقیت ثبت شد و اطلاعات آن برای
                            ادامه فرایند آماده است.
                        </p>

                        <div className="mt-7 w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                            <div className="border-b border-border bg-surface-elevated px-5 py-3">
                                <p className="text-right text-[11px] font-medium text-muted">
                                    اطلاعات سفارش
                                </p>
                            </div>

                            <div className="flex items-center justify-between gap-4 px-5 py-4">
                                <span className="text-xs text-muted">
                                    شماره سفارش
                                </span>

                                <span
                                    dir="ltr"
                                    className="rounded-lg bg-surface-elevated px-3 py-1.5 text-sm font-bold tracking-wide text-foreground"
                                >
                                    {orderNumber}
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
                            <Link
                                href="/products"
                                className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md"
                            >
                                ادامه خرید

                                <ArrowLeft
                                    size={16}
                                    strokeWidth={1.8}
                                />
                            </Link>

                            <Link
                                href="/"
                                className="flex h-11 flex-1 items-center justify-center rounded-xl border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-surface-elevated"
                            >
                                صفحه اصلی
                            </Link>
                        </div>
                    </section>
                </Container>

                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
            <Header />

            <Container>
                {/* Header */}
                <section className="border-b border-border py-8 sm:py-10">
                    <Link
                        href="/cart"
                        className="mb-5 inline-flex items-center gap-2 rounded-lg px-1 py-1 text-xs font-medium text-muted transition-colors duration-200 hover:text-foreground"
                    >
                        <ArrowRight
                            size={16}
                            strokeWidth={1.8}
                        />

                        بازگشت به سبد خرید
                    </Link>

                    <span className="block text-xs font-semibold text-primary sm:text-sm">
                        تکمیل سفارش
                    </span>

                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        نهایی کردن خرید
                    </h1>

                    <p className="mt-3 text-sm leading-7 text-muted">
                        اطلاعات ارسال و روش پرداخت را وارد کنید.
                    </p>
                </section>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-6 py-8 sm:py-10 lg:grid-cols-[1fr_360px] lg:gap-8"
                >
                    {/* Main Form */}
                    <div className="space-y-6">
                        {/* Customer Information */}
                        <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <MapPin
                                        size={19}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div>
                                    <h2 className="text-sm font-bold text-foreground">
                                        اطلاعات گیرنده
                                    </h2>

                                    <p className="mt-1 text-xs text-muted">
                                        اطلاعات تماس و آدرس تحویل
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="mb-2 block text-xs font-medium text-foreground"
                                    >
                                        نام
                                    </label>

                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        placeholder="مثلاً محمدرضا"
                                        className="h-11 w-full rounded-xl border border-border bg-surface-elevated px-4 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted focus:border-primary focus:bg-surface"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="mb-2 block text-xs font-medium text-foreground"
                                    >
                                        نام خانوادگی
                                    </label>

                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        placeholder="نام خانوادگی"
                                        className="h-11 w-full rounded-xl border border-border bg-surface-elevated px-4 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted focus:border-primary focus:bg-surface"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-xs font-medium text-foreground"
                                    >
                                        شماره موبایل
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        dir="ltr"
                                        inputMode="tel"
                                        placeholder="09xxxxxxxxx"
                                        className="h-11 w-full rounded-xl border border-border bg-surface-elevated px-4 text-left text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted focus:border-primary focus:bg-surface"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="postalCode"
                                        className="mb-2 block text-xs font-medium text-foreground"
                                    >
                                        کد پستی
                                    </label>

                                    <input
                                        id="postalCode"
                                        name="postalCode"
                                        type="text"
                                        required
                                        inputMode="numeric"
                                        dir="ltr"
                                        placeholder="1234567890"
                                        className="h-11 w-full rounded-xl border border-border bg-surface-elevated px-4 text-left text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted focus:border-primary focus:bg-surface"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="address"
                                        className="mb-2 block text-xs font-medium text-foreground"
                                    >
                                        آدرس کامل
                                    </label>

                                    <textarea
                                        id="address"
                                        name="address"
                                        required
                                        rows={4}
                                        placeholder="استان، شهر، خیابان، کوچه، پلاک و واحد"
                                        className="w-full resize-none rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm leading-7 text-foreground outline-none transition-colors duration-200 placeholder:text-muted focus:border-primary focus:bg-surface"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Shipping */}
                        <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Truck
                                        size={19}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div>
                                    <h2 className="text-sm font-bold text-foreground">
                                        روش ارسال
                                    </h2>

                                    <p className="mt-1 text-xs text-muted">
                                        روش تحویل سفارش را انتخاب کنید.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                <label
                                    className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl border p-4 transition-all duration-200 ${shippingMethod === "express"
                                        ? "border-primary bg-primary/5 shadow-sm"
                                        : "border-border bg-surface-elevated hover:border-primary/40"
                                        }`}
                                >
                                    <div className="flex min-w-0 items-center gap-3">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            value="express"
                                            checked={
                                                shippingMethod ===
                                                "express"
                                            }
                                            onChange={() =>
                                                setShippingMethod(
                                                    "express"
                                                )
                                            }
                                            className="accent-primary"
                                        />

                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-foreground">
                                                ارسال سریع
                                            </p>

                                            <p className="mt-1 text-xs text-muted">
                                                تحویل ۱ تا ۲ روز کاری
                                            </p>
                                        </div>
                                    </div>

                                    <span className="shrink-0 text-xs font-semibold text-foreground">
                                        ۱۵۰٬۰۰۰ تومان
                                    </span>
                                </label>

                                <label
                                    className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl border p-4 transition-all duration-200 ${shippingMethod === "free"
                                        ? "border-primary bg-primary/5 shadow-sm"
                                        : "border-border bg-surface-elevated hover:border-primary/40"
                                        }`}
                                >
                                    <div className="flex min-w-0 items-center gap-3">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            value="free"
                                            checked={
                                                shippingMethod === "free"
                                            }
                                            onChange={() =>
                                                setShippingMethod(
                                                    "free"
                                                )
                                            }
                                            className="accent-primary"
                                        />

                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-foreground">
                                                ارسال عادی
                                            </p>

                                            <p className="mt-1 text-xs text-muted">
                                                تحویل ۳ تا ۵ روز کاری
                                            </p>
                                        </div>
                                    </div>

                                    <span className="shrink-0 text-xs font-semibold text-success">
                                        رایگان
                                    </span>
                                </label>
                            </div>
                        </section>

                        {/* Payment */}
                        <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <CreditCard
                                        size={19}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div>
                                    <h2 className="text-sm font-bold text-foreground">
                                        روش پرداخت
                                    </h2>

                                    <p className="mt-1 text-xs text-muted">
                                        روش پرداخت سفارش را انتخاب کنید.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                <label
                                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all duration-200 ${paymentMethod === "online"
                                        ? "border-primary bg-primary/5 shadow-sm"
                                        : "border-border bg-surface-elevated hover:border-primary/40"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="online"
                                        checked={
                                            paymentMethod === "online"
                                        }
                                        onChange={() =>
                                            setPaymentMethod(
                                                "online"
                                            )
                                        }
                                        className="accent-primary"
                                    />

                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            پرداخت آنلاین
                                        </p>

                                        <p className="mt-1 text-xs text-muted">
                                            پرداخت امن از طریق درگاه بانکی
                                        </p>
                                    </div>
                                </label>

                                <label
                                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all duration-200 ${paymentMethod === "cash"
                                        ? "border-primary bg-primary/5 shadow-sm"
                                        : "border-border bg-surface-elevated hover:border-primary/40"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cash"
                                        checked={
                                            paymentMethod === "cash"
                                        }
                                        onChange={() =>
                                            setPaymentMethod(
                                                "cash"
                                            )
                                        }
                                        className="accent-primary"
                                    />

                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            پرداخت هنگام تحویل
                                        </p>

                                        <p className="mt-1 text-xs text-muted">
                                            پرداخت وجه در زمان دریافت سفارش
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </section>
                    </div>

                    {/* Order Summary */}
                    <aside className="lg:sticky lg:top-24 lg:h-fit">
                        <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-bold text-foreground">
                                    خلاصه سفارش
                                </h2>

                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-elevated text-muted">
                                    <Package
                                        size={16}
                                        strokeWidth={1.8}
                                    />
                                </span>
                            </div>

                            <div className="mt-5 max-h-64 space-y-4 overflow-y-auto pl-1">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-start justify-between gap-4"
                                    >
                                        <div className="min-w-0">
                                            <p className="truncate text-xs font-medium text-foreground">
                                                {item.name}
                                            </p>

                                            <p className="mt-1 text-[11px] text-muted">
                                                تعداد:{" "}
                                                {formatPrice(
                                                    item.quantity
                                                )}
                                            </p>
                                        </div>

                                        <span className="shrink-0 text-xs font-semibold text-foreground">
                                            {formatPrice(
                                                item.price *
                                                item.quantity
                                            )}{" "}
                                            تومان
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="my-5 h-px bg-border" />

                            <div className="space-y-3 text-xs">
                                <div className="flex items-center justify-between">
                                    <span className="text-muted">
                                        تعداد کالا
                                    </span>

                                    <span className="font-medium text-foreground">
                                        {formatPrice(totalItems)}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-muted">
                                        مبلغ کالاها
                                    </span>

                                    <span className="font-medium text-foreground">
                                        {formatPrice(totalPrice)} تومان
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-muted">
                                        هزینه ارسال
                                    </span>

                                    <span
                                        className={`font-medium ${shippingCost === 0
                                            ? "text-success"
                                            : "text-foreground"
                                            }`}
                                    >
                                        {shippingCost === 0
                                            ? "رایگان"
                                            : `${formatPrice(
                                                shippingCost
                                            )} تومان`}
                                    </span>
                                </div>
                            </div>

                            <div className="my-5 h-px bg-border" />

                            <div className="rounded-xl bg-surface-elevated p-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-foreground">
                                        مبلغ نهایی
                                    </span>

                                    <div className="text-left">
                                        <span className="text-xl font-bold tracking-tight text-foreground">
                                            {formatPrice(finalPrice)}
                                        </span>

                                        <span className="mr-1 text-[10px] text-muted">
                                            تومان
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md"
                            >
                                <Check
                                    size={17}
                                    strokeWidth={1.9}
                                />

                                ثبت سفارش
                            </button>

                            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-muted">
                                <ShieldCheck
                                    size={15}
                                    strokeWidth={1.8}
                                />

                                پرداخت امن و حفاظت از اطلاعات
                            </div>
                        </div>
                    </aside>
                </form>
            </Container>

            <Footer />
        </main>
    );
}

export default CheckoutPage;