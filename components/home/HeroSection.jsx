import Link from "next/link";

import {
    ArrowLeft,
    Headphones,
    ShieldCheck,
    Truck,
} from "lucide-react";

import Container from "../layout/Container";

function HeroSection() {
    return (
        <section className="overflow-hidden border-b border-border bg-background transition-colors duration-200">
            <Container>
                <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
                    {/* Content */}
                    <div className="max-w-2xl">
                        {/* Eyebrow */}
                        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary sm:text-sm">
                            تجربه‌ای متفاوت از خرید دیجیتال
                        </span>

                        {/* Heading */}
                        <h1 className="mt-6 text-4xl font-bold leading-[1.45] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            تکنولوژی مورد علاقه‌ات،
                            <span className="mt-1 block text-primary">
                                همین‌جاست.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-sm leading-8 text-muted sm:text-base lg:text-lg">
                            جدیدترین لپ‌تاپ‌ها، موبایل‌ها، تبلت‌ها و
                            هدفون‌ها را با تجربه‌ای ساده، سریع و مطمئن
                            پیدا کن.
                        </p>

                        {/* Actions */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                href="/products"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md"
                            >
                                مشاهده محصولات

                                <ArrowLeft
                                    size={18}
                                    strokeWidth={2}
                                />
                            </Link>

                            <Link
                                href="/offers"
                                className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-elevated"
                            >
                                پیشنهادهای ویژه
                            </Link>
                        </div>

                        {/* Features */}
                        <div className="mt-10 grid grid-cols-1 gap-5 border-t border-border pt-7 sm:grid-cols-3 sm:gap-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-elevated text-primary">
                                    <Truck
                                        size={19}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        ارسال سریع
                                    </p>

                                    <p className="mt-0.5 text-[11px] text-muted">
                                        به سراسر کشور
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-elevated text-primary">
                                    <ShieldCheck
                                        size={19}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        ضمانت اصالت
                                    </p>

                                    <p className="mt-0.5 text-[11px] text-muted">
                                        خرید مطمئن
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-elevated text-primary">
                                    <Headphones
                                        size={19}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-foreground">
                                        پشتیبانی
                                    </p>

                                    <p className="mt-0.5 text-[11px] text-muted">
                                        همراه شما هستیم
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative hidden lg:block">
                        <div className="relative mx-auto aspect-square max-w-lg overflow-hidden rounded-4xl border border-border bg-surface-elevated shadow-sm transition-colors duration-200">
                            {/* Decorative Glow */}
                            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

                            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

                            {/* Content */}
                            <div className="relative flex h-full flex-col items-center justify-center p-10 text-center">
                                <span className="text-xs font-semibold tracking-wide text-muted">
                                    IRANI SHOP
                                </span>

                                <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground xl:text-5xl">
                                    Smart
                                    <span className="text-primary">
                                        {" "}
                                        Shopping
                                    </span>
                                </h2>

                                <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
                                    همه چیز برای تجربه‌ای بهتر از دنیای
                                    دیجیتال.
                                </p>

                                {/* Stats */}
                                <div className="mt-8 grid w-full max-w-sm grid-cols-2 gap-3">
                                    <div className="rounded-2xl border border-border bg-surface p-5 text-right transition-colors duration-200">
                                        <p className="text-2xl font-bold tracking-tight text-foreground">
                                            ۲۰+
                                        </p>

                                        <p className="mt-1 text-[11px] text-muted">
                                            محصول منتخب
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-border bg-surface p-5 text-right transition-colors duration-200">
                                        <p className="text-2xl font-bold tracking-tight text-foreground">
                                            ۴
                                        </p>

                                        <p className="mt-1 text-[11px] text-muted">
                                            دسته‌بندی
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div className="mt-8 h-1 w-12 rounded-full bg-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default HeroSection;