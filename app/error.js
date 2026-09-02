"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

function Error({ reset }) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
            <section className="w-full max-w-md rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-danger/10 text-danger">
                    <AlertTriangle
                        size={26}
                        strokeWidth={1.7}
                        aria-hidden="true"
                    />
                </div>

                <h1 className="mt-5 text-lg font-bold text-foreground">
                    مشکلی پیش آمده است
                </h1>

                <p className="mt-2 text-sm leading-7 text-muted">
                    هنگام نمایش این صفحه خطایی رخ داد. دوباره تلاش کنید.
                </p>

                <button
                    type="button"
                    onClick={() => reset()}
                    className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                >
                    <RefreshCw
                        size={16}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />

                    تلاش مجدد
                </button>
            </section>
        </main>
    );
}

export default Error;