"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import {
    Heart,
    Menu,
    ShoppingBag,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { useCart } from "../providers/CartContext";
import { useWishlist } from "../providers/WishlistContext";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { totalItems } = useCart();
    const { wishlistCount } = useWishlist();

    const navigationItems = [
        { label: "خانه", href: "/" },
        { label: "فروشگاه", href: "/products" },
        { label: "دسته‌بندی‌ها", href: "/category" },
        { label: "پیشنهاد ویژه", href: "/offers" },
    ];

    useEffect(() => {
        if (!isMenuOpen) {
            return;
        }

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );

            document.body.style.overflow =
                previousOverflow;
        };
    }, [isMenuOpen]);

    const mobileMenu =
        isMenuOpen &&
            typeof document !== "undefined"
            ? createPortal(
                <div
                    className="fixed inset-0 z-9999 lg:hidden"
                    onClick={() =>
                        setIsMenuOpen(false)
                    }
                >
                    {/* Full Screen Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

                    {/* Mobile Drawer */}
                    <aside
                        id="mobile-navigation"
                        role="dialog"
                        aria-modal="true"
                        aria-label="منوی فروشگاه"
                        className="absolute right-0 top-0 flex h-dvh w-[86%] max-w-sm flex-col overflow-y-auto border-l border-border bg-surface p-5 shadow-2xl"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-border pb-5">
                            <div>
                                <p className="text-base font-bold text-foreground">
                                    ایرانی شاپ
                                </p>

                                <p className="mt-1 text-[11px] text-muted">
                                    منوی فروشگاه
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setIsMenuOpen(
                                        false
                                    )
                                }
                                aria-label="بستن منو"
                                className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors duration-200 hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                            >
                                <X
                                    aria-hidden="true"
                                    size={21}
                                    strokeWidth={1.8}
                                />
                            </button>
                        </div>

                        {/* Main Navigation */}
                        <nav
                            aria-label="منوی موبایل"
                            className="mt-5 flex flex-col gap-1"
                        >
                            {navigationItems.map(
                                (item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() =>
                                            setIsMenuOpen(
                                                false
                                            )
                                        }
                                        className="rounded-xl px-4 py-3.5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                                    >
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </nav>

                        {/* Secondary Links */}
                        <div className="mt-5 border-t border-border pt-5">
                            {/* Wishlist */}
                            <Link
                                href="/wishlist"
                                onClick={() =>
                                    setIsMenuOpen(
                                        false
                                    )
                                }
                                aria-label={
                                    wishlistCount > 0
                                        ? `علاقه‌مندی‌ها، ${wishlistCount} کالا`
                                        : "علاقه‌مندی‌ها"
                                }
                                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                            >
                                <span className="flex items-center gap-3">
                                    <Heart
                                        aria-hidden="true"
                                        size={18}
                                        strokeWidth={
                                            1.8
                                        }
                                    />

                                    علاقه‌مندی‌ها
                                </span>

                                {wishlistCount >
                                    0 && (
                                        <span
                                            aria-hidden="true"
                                            className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-bold text-white"
                                        >
                                            {wishlistCount >
                                                99
                                                ? "99+"
                                                : wishlistCount}
                                        </span>
                                    )}
                            </Link>

                            {/* Cart */}
                            <Link
                                href="/cart"
                                onClick={() =>
                                    setIsMenuOpen(
                                        false
                                    )
                                }
                                aria-label={
                                    totalItems > 0
                                        ? `سبد خرید، ${totalItems} کالا`
                                        : "سبد خرید"
                                }
                                className="mt-1 flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                            >
                                <span className="flex items-center gap-3">
                                    <ShoppingBag
                                        aria-hidden="true"
                                        size={18}
                                        strokeWidth={
                                            1.8
                                        }
                                    />

                                    سبد خرید
                                </span>

                                {totalItems >
                                    0 && (
                                        <span
                                            aria-hidden="true"
                                            className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-bold text-white"
                                        >
                                            {totalItems >
                                                99
                                                ? "99+"
                                                : totalItems}
                                        </span>
                                    )}
                            </Link>
                        </div>

                        {/* Bottom */}
                        <div className="mt-auto border-t border-border pt-5">
                            <p className="text-center text-[10px] text-muted">
                                خرید آسان، سریع و مطمئن
                            </p>
                        </div>
                    </aside>
                </div>,
                document.body
            )
            : null;

    return (
        <>
            {/* Desktop Navigation */}
            <nav
                aria-label="منوی اصلی"
                className="hidden items-center gap-6 lg:flex xl:gap-7"
            >
                {navigationItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="whitespace-nowrap rounded-lg px-1 py-1 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            {/* Mobile Actions */}
            <div className="mr-auto flex shrink-0 items-center gap-2 lg:hidden">
                {/* Cart */}
                <Link
                    href="/cart"
                    aria-label={
                        totalItems > 0
                            ? `سبد خرید، ${totalItems} کالا`
                            : "سبد خرید"
                    }
                    className="relative flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors duration-200 hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                    <ShoppingBag
                        aria-hidden="true"
                        size={20}
                        strokeWidth={1.8}
                    />

                    {totalItems > 0 && (
                        <span
                            aria-hidden="true"
                            className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white"
                        >
                            {totalItems > 99
                                ? "99+"
                                : totalItems}
                        </span>
                    )}
                </Link>

                {/* Menu */}
                <button
                    type="button"
                    onClick={() =>
                        setIsMenuOpen(true)
                    }
                    aria-label="باز کردن منو"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors duration-200 hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                    <Menu
                        aria-hidden="true"
                        size={21}
                        strokeWidth={1.8}
                    />
                </button>
            </div>

            {/* Mobile Menu Portal */}
            {mobileMenu}
        </>
    );
}

export default Navbar;