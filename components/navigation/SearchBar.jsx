"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBar() {
    const router = useRouter();

    const [searchValue, setSearchValue] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const value = searchValue.trim();

        if (!value) {
            router.push("/products");
            return;
        }

        router.push(
            `/products?search=${encodeURIComponent(value)}`
        );
    }

    function handleClear() {
        setSearchValue("");
        router.push("/products");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="relative mx-auto w-full max-w-md"
        >
            <input
                type="search"
                value={searchValue}
                onChange={(event) =>
                    setSearchValue(event.target.value)
                }
                placeholder="جستجوی محصول..."
                aria-label="جستجوی محصول"
                className="h-11 w-full rounded-xl border border-border bg-surface-elevated pr-12 pl-11 text-right text-sm text-foreground outline-none placeholder:text-muted focus:border-primary"
            />

            <Search
                size={19}
                strokeWidth={1.8}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
            />

            {searchValue && (
                <button
                    type="button"
                    onClick={handleClear}
                    aria-label="پاک کردن جستجو"
                    className="absolute left-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-muted transition-colors duration-200 hover:bg-surface hover:text-foreground"
                >
                    <X
                        size={15}
                        strokeWidth={1.8}
                    />
                </button>
            )}
        </form>
    );
}

export default SearchBar;