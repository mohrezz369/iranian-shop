"use client";

import Link from "next/link";

import Container from "./Container";
import Navbar from "../navigation/Navbar";
import SearchBar from "../navigation/SearchBar";
import ThemeToggle from "../navigation/ThemeToggle";

import { Heart, ShoppingBag } from "lucide-react";

import { useCart } from "../providers/CartContext";
import { useWishlist } from "../providers/WishlistContext";

function Header() {
    const { totalItems } = useCart();
    const { wishlistCount } = useWishlist();

    return (
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md transition-colors duration-200">
            <Container>
                {/* Main Header */}
                <div className="flex h-16 items-center gap-3 sm:gap-6">
                    {/* Logo */}
                    <div className="min-w-0 shrink-0">
                        <Link
                            href="/"
                            className="rounded-lg text-lg font-bold tracking-tight text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 sm:text-xl"
                        >
                            ایرانی شاپ
                        </Link>
                    </div>

                    {/* Desktop Navigation / Mobile Actions */}
                    <Navbar />

                    {/* Desktop Search */}
                    <div className="hidden min-w-0 flex-1 sm:block">
                        <SearchBar />
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
                        {/* Wishlist */}
                        <Link
                            href="/wishlist"
                            aria-label={
                                wishlistCount > 0
                                    ? `علاقه‌مندی‌ها، ${wishlistCount} کالا`
                                    : "علاقه‌مندی‌ها"
                            }
                            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors duration-200 hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                        >
                            <Heart
                                aria-hidden="true"
                                size={20}
                                strokeWidth={1.8}
                            />

                            {wishlistCount > 0 && (
                                <span
                                    aria-hidden="true"
                                    className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white"
                                >
                                    {wishlistCount > 99
                                        ? "99+"
                                        : wishlistCount}
                                </span>
                            )}
                        </Link>

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

                        {/* Theme */}
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="pb-3 sm:hidden">
                    <SearchBar />
                </div>
            </Container>
        </header>
    );
}

export default Header;