"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    const mounted = useSyncExternalStore(
        () => () => { },
        () => true,
        () => false
    );

    function handleThemeToggle() {
        const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

        const html = document.documentElement;

        html.classList.add("theme-transition");

        setTheme(nextTheme);

        window.setTimeout(() => {
            html.classList.remove("theme-transition");
        }, 200);
    }

    if (!mounted) {
        return (
            <button
                type="button"
                aria-label="تغییر حالت نمایش"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground"
            />
        );
    }

    return (
        <button
            type="button"
            onClick={handleThemeToggle}
            aria-label={
                resolvedTheme === "dark"
                    ? "فعال کردن حالت روشن"
                    : "فعال کردن حالت تاریک"
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors duration-200 hover:bg-surface-elevated"
        >
            {resolvedTheme === "dark" ? (
                <Sun size={19} strokeWidth={1.8} />
            ) : (
                <Moon size={19} strokeWidth={1.8} />
            )}
        </button>
    );
}

export default ThemeToggle;