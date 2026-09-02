import Link from "next/link";
import {
    ArrowRight,
    Home,
    SearchX,
    ShoppingBag,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

function NotFoundPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
            <Header />

            <Container>
                <section className="flex min-h-[calc(100vh-128px)] items-center justify-center py-16">
                    <div className="w-full max-w-xl text-center">
                        {/* Icon */}
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-border bg-surface-elevated text-muted">
                            <SearchX
                                size={36}
                                strokeWidth={1.5}
                            />
                        </div>

                        {/* 404 */}
                        <p className="mt-8 text-7xl font-bold tracking-tight text-primary sm:text-8xl">
                            ۴۰۴
                        </p>

                        {/* Title */}
                        <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            صفحه مورد نظر پیدا نشد
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted">
                            متأسفیم، صفحه‌ای که به دنبال آن هستید
                            وجود ندارد یا ممکن است جابه‌جا شده باشد.
                        </p>

                        {/* Actions */}
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                href="/"
                                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover sm:w-auto"
                            >
                                <Home
                                    size={17}
                                    strokeWidth={1.8}
                                />

                                بازگشت به خانه
                            </Link>

                            <Link
                                href="/products"
                                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-elevated sm:w-auto"
                            >
                                <ShoppingBag
                                    size={17}
                                    strokeWidth={1.8}
                                />

                                مشاهده محصولات
                            </Link>
                        </div>

                        {/* Back */}
                        <Link
                            href="/"
                            className="mt-7 inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors duration-200 hover:text-foreground"
                        >
                            بازگشت به صفحه قبل

                            <ArrowRight
                                size={14}
                                strokeWidth={1.8}
                            />
                        </Link>
                    </div>
                </section>
            </Container>

            <Footer />
        </main>
    );
}

export default NotFoundPage;