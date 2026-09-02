"use client";

import {
    createContext,
    useContext,
    useMemo,
    useSyncExternalStore,
} from "react";

const WishlistContext = createContext(null);

const WISHLIST_STORAGE_KEY = "irani-shop-wishlist";

const listeners = new Set();

function subscribe(listener) {
    listeners.add(listener);

    return () => {
        listeners.delete(listener);
    };
}

function getServerSnapshot() {
    return "[]";
}

function getClientSnapshot() {
    return (
        localStorage.getItem(WISHLIST_STORAGE_KEY) || "[]"
    );
}

function notifyWishlistChange() {
    listeners.forEach((listener) => listener());
}

function getWishlistItems() {
    const snapshot = getClientSnapshot();

    try {
        return JSON.parse(snapshot);
    } catch {
        return [];
    }
}

function saveWishlistItems(items) {
    try {
        localStorage.setItem(
            WISHLIST_STORAGE_KEY,
            JSON.stringify(items)
        );

        notifyWishlistChange();
    } catch {
        // Ignore LocalStorage errors.
    }
}

function WishlistProvider({ children }) {
    const wishlistSnapshot = useSyncExternalStore(
        subscribe,
        getClientSnapshot,
        getServerSnapshot
    );

    const wishlistItems = useMemo(() => {
        try {
            return JSON.parse(wishlistSnapshot);
        } catch {
            return [];
        }
    }, [wishlistSnapshot]);

    function addToWishlist(product) {
        const currentItems = getWishlistItems();

        const alreadyExists = currentItems.some(
            (item) => item.id === product.id
        );

        if (alreadyExists) {
            return;
        }

        saveWishlistItems([
            ...currentItems,
            product,
        ]);
    }

    function removeFromWishlist(productId) {
        const currentItems = getWishlistItems();

        const updatedItems = currentItems.filter(
            (item) => item.id !== productId
        );

        saveWishlistItems(updatedItems);
    }

    function toggleWishlist(product) {
        const currentItems = getWishlistItems();

        const alreadyExists = currentItems.some(
            (item) => item.id === product.id
        );

        if (alreadyExists) {
            removeFromWishlist(product.id);
            return;
        }

        addToWishlist(product);
    }

    function isInWishlist(productId) {
        return wishlistItems.some(
            (item) => item.id === productId
        );
    }

    function clearWishlist() {
        saveWishlistItems([]);
    }

    const wishlistCount = wishlistItems.length;

    const value = {
        wishlistItems,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);

    if (!context) {
        throw new Error(
            "useWishlist must be used inside WishlistProvider"
        );
    }

    return context;
}

export default WishlistProvider;