"use client";

import {
    createContext,
    useContext,
    useMemo,
    useSyncExternalStore,
} from "react";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "irani-shop-cart";

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
    return localStorage.getItem(CART_STORAGE_KEY) || "[]";
}

function notifyCartChange() {
    listeners.forEach((listener) => listener());
}

function getCartItems() {
    const snapshot = getClientSnapshot();

    try {
        return JSON.parse(snapshot);
    } catch {
        return [];
    }
}

function saveCartItems(items) {
    try {
        localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(items)
        );

        notifyCartChange();
    } catch {
        // Ignore LocalStorage errors.
    }
}

function CartProvider({ children }) {
    const cartSnapshot = useSyncExternalStore(
        subscribe,
        getClientSnapshot,
        getServerSnapshot
    );

    const cartItems = useMemo(() => {
        try {
            return JSON.parse(cartSnapshot);
        } catch {
            return [];
        }
    }, [cartSnapshot]);

    function addToCart(product) {
        const currentItems = getCartItems();

        const existingItem = currentItems.find(
            (item) => item.id === product.id
        );

        if (existingItem) {
            const updatedItems = currentItems.map((item) =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            );

            saveCartItems(updatedItems);

            return;
        }

        saveCartItems([
            ...currentItems,
            {
                ...product,
                quantity: 1,
            },
        ]);
    }

    function removeFromCart(productId) {
        const currentItems = getCartItems();

        const updatedItems = currentItems.filter(
            (item) => item.id !== productId
        );

        saveCartItems(updatedItems);
    }

    function increaseQuantity(productId) {
        const currentItems = getCartItems();

        const updatedItems = currentItems.map((item) =>
            item.id === productId
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                }
                : item
        );

        saveCartItems(updatedItems);
    }

    function decreaseQuantity(productId) {
        const currentItems = getCartItems();

        const updatedItems = currentItems
            .map((item) =>
                item.id === productId
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                    : item
            )
            .filter((item) => item.quantity > 0);

        saveCartItems(updatedItems);
    }

    function clearCart() {
        saveCartItems([]);
    }

    const totalItems = useMemo(() => {
        return cartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );
    }, [cartItems]);

    const totalPrice = useMemo(() => {
        return cartItems.reduce(
            (total, item) =>
                total + item.price * item.quantity,
            0
        );
    }, [cartItems]);

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
}

export default CartProvider;