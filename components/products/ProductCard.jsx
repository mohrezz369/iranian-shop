"use client";

import Image from "next/image";
import Link from "next/link";

import {
    Check,
    Heart,
    ShoppingBag,
    Star,
} from "lucide-react";

import { useState } from "react";

import { useCart } from "../providers/CartContext";
import { useWishlist } from "../providers/WishlistContext";

function formatPrice(price) {
    return new Intl.NumberFormat("fa-IR").format(price);
}

function ProductCard({ product }) {
    const [isAdded, setIsAdded] = useState(false);

    const { addToCart } = useCart();

    const {
        toggleWishlist,
        isInWishlist,
    } = useWishlist();

    const isFavorite = isInWishlist(product.id);

    function handleAddToCart() {
        addToCart(product);

        setIsAdded(true);

        window.setTimeout(() => {
            setIsAdded(false);
        }, 1200);
    }

    function handleWishlist() {
        toggleWishlist(product);
    }

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface-elevated hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
            {/* Product Image */}
            <div className="relative aspect-[1.18/1] overflow-hidden bg-surface-elevated">
                {/* Badge */}
                {product.badge && (
                    <span className="absolute right-3 top-3 z-10 rounded-lg bg-primary px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm">
                        {product.badge}
                    </span>
                )}

                {/* Discount */}
                {product.discount > 0 && (
                    <span className="absolute left-3 top-3 z-10 rounded-lg bg-danger px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                        {product.discount}٪
                    </span>
                )}

                {/* Wishlist */}
                <button
                    type="button"
                    onClick={handleWishlist}
                    aria-label={
                        isFavorite
                            ? "حذف از علاقه‌مندی‌ها"
                            : "افزودن به علاقه‌مندی‌ها"
                    }
                    aria-pressed={isFavorite}
                    className="absolute bottom-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface/90 text-muted shadow-sm backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                    <Heart
                        size={17}
                        strokeWidth={1.8}
                        className={
                            isFavorite
                                ? "fill-danger text-danger"
                                : ""
                        }
                    />
                </button>

                <Link
                    href={`/products/${product.id}`}
                    aria-label={`مشاهده ${product.name}`}
                    className="relative block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/50"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>
            </div>

            {/* Content */}
            <div className="flex min-h-53.5 flex-1 flex-col p-4">
                {/* Product Information */}
                <Link
                    href={`/products/${product.id}`}
                    className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                    <p className="text-[11px] font-medium text-muted">
                        {product.categoryLabel}
                    </p>

                    <h3 className="mt-1 min-h-10 text-sm font-semibold leading-5 text-foreground transition-colors duration-200 group-hover:text-primary">
                        {product.name}
                    </h3>

                    <div className="mt-1.5 flex items-center gap-1.5">
                        <Star
                            size={14}
                            strokeWidth={1.8}
                            className="fill-current text-yellow-500"
                        />

                        <span className="text-xs font-semibold text-foreground">
                            {product.rating}
                        </span>

                        <span className="text-[11px] text-muted">
                            ({product.reviewCount})
                        </span>
                    </div>
                </Link>

                {/* Price */}
                <div className="mt-auto pt-3">
                    {product.oldPrice && (
                        <p className="text-[11px] text-muted line-through">
                            {formatPrice(product.oldPrice)} تومان
                        </p>
                    )}

                    <div className="mt-0.5 flex items-baseline gap-1">
                        <span className="text-base font-bold tracking-tight text-foreground">
                            {formatPrice(product.price)}
                        </span>

                        <span className="text-[10px] text-muted">
                            تومان
                        </span>
                    </div>
                </div>

                {/* Add To Cart */}
                <button
                    type="button"
                    onClick={handleAddToCart}
                    aria-live="polite"
                    className={`mt-3 flex h-9.5 w-full items-center justify-center gap-2 rounded-xl text-xs font-semibold text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ${isAdded
                        ? "bg-success"
                        : "bg-primary hover:bg-primary-hover"
                        }`}
                >
                    {isAdded ? (
                        <>
                            <Check
                                size={15}
                                strokeWidth={2}
                            />

                            به سبد اضافه شد
                        </>
                    ) : (
                        <>
                            <ShoppingBag
                                size={15}
                                strokeWidth={1.8}
                            />

                            افزودن به سبد
                        </>
                    )}
                </button>
            </div>
        </article>
    );
}

export default ProductCard;