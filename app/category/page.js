import Link from "next/link";

import {
    ArrowLeft,
    Headphones,
    Laptop,
    Smartphone,
    Tablet,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

const categories = [
    {
        title: "لپ‌تاپ",
        description: "برای کار، تحصیل، برنامه‌نویسی و بازی",
        href: "/products?category=laptop",
        icon: Laptop,
    },
    {
        title: "موبایل",
        description: "جدیدترین گوشی‌های هوشمند",
        href: "/products?category=mobile",
        icon: Smartphone,
    },
    {
        title: "تبلت",
        description: "سبک، قدرتمند و مناسب استفاده روزمره",
        href: "/products?category=tablet",
        icon: Tablet,
    },
    {
        title: "هدفون",
        description: "تجربه صدای بهتر برای هر لحظه",
        href: "/products?category=earbuds",
        icon: Headphones,
    },
];

function CategoryPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
            <Header />

            <Container>
                {/* Page Header */}
                <section className="border-b border-border py-8 sm:py-10">
                    <span className="text-xs font-semibold text-primary sm:text-sm">
                        دسته‌بندی‌ها
                    </span>

                    <h1 className="mt-2 max-w-3xl text-2xl font-bold leading-[1.6] tracking-tight text-foreground sm:text-3xl">
                        محصولات را بر اساس دسته‌بندی پیدا کن
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                        دسته موردنظرت را انتخاب کن و محصولات مرتبط را
                        مشاهده و مقایسه کن.
                    </p>
                </section>

                {/* Categories */}
                <section className="py-10 sm:py-12">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {categories.map((category) => {
                            const Icon = category.icon;

                            return (
                                <Link
                                    key={category.title}
                                    href={category.href}
                                    className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/25 hover:bg-surface-elevated hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 sm:p-6"
                                >
                                    {/* Decorative Glow */}
                                    <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-primary/5 blur-2xl transition-opacity duration-200 group-hover:opacity-100" />

                                    {/* Icon */}
                                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                                        <Icon
                                            size={23}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h2 className="mt-6 text-lg font-bold text-foreground">
                                            {category.title}
                                        </h2>

                                        <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                                            {category.description}
                                        </p>
                                    </div>

                                    {/* Link */}
                                    <div className="relative mt-6 flex items-center justify-between border-t border-border pt-4">
                                        <span className="text-xs font-semibold text-primary">
                                            مشاهده محصولات
                                        </span>

                                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-elevated text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white">
                                            <ArrowLeft
                                                size={15}
                                                strokeWidth={1.8}
                                                className="transition-transform duration-200 group-hover:-translate-x-0.5"
                                            />
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            </Container>

            <Footer />
        </main>
    );
}

export default CategoryPage;