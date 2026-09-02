import Link from "next/link";

import {
    ArrowLeft,
    Headphones,
    Laptop,
    Smartphone,
    Tablet,
} from "lucide-react";

import Container from "../layout/Container";

const categories = [
    {
        title: "لپ‌ تاپ",
        description: "برای کار، تحصیل و حرفه‌ای‌تر شدن",
        href: "/products?category=laptop",
        icon: Laptop,
    },
    {
        title: "موبایل",
        description: "انتخابی هوشمند برای هر سبک زندگی",
        href: "/products?category=mobile",
        icon: Smartphone,
    },
    {
        title: "تبلت",
        description: "سبک، کاربردی و همیشه همراه",
        href: "/products?category=tablet",
        icon: Tablet,
    },
    {
        title: "هدفون",
        description: "صدایی که هر لحظه را بهتر می‌کند",
        href: "/products?category=earbuds",
        icon: Headphones,
    },
];

function CategorySection() {
    return (
        <section className="bg-background py-16 transition-colors duration-200 sm:py-20">
            <Container>
                {/* Section Header */}
                <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
                    <div>
                        <span className="text-xs font-semibold text-primary sm:text-sm">
                            دسته‌بندی محصولات
                        </span>

                        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            چی می‌خوای بخری؟
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-muted">
                            دسته‌بندی مورد نظرت را انتخاب کن و محصولات را
                            ببین.
                        </p>
                    </div>

                    {/* Desktop Link */}
                    <Link
                        href="/products"
                        className="hidden shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-muted transition-all duration-200 hover:bg-surface-elevated hover:text-foreground sm:flex"
                    >
                        مشاهده همه

                        <ArrowLeft
                            size={17}
                            strokeWidth={1.8}
                        />
                    </Link>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <Link
                                key={category.title}
                                href={category.href}
                                className="group rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface-elevated hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/20 sm:p-6"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    {/* Icon */}
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white group-hover:shadow-sm">
                                        <Icon
                                            size={23}
                                            strokeWidth={1.7}
                                        />
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-all duration-200 group-hover:bg-surface group-hover:text-foreground">
                                        <ArrowLeft
                                            size={17}
                                            strokeWidth={1.8}
                                            className="transition-transform duration-200 group-hover:-translate-x-0.5"
                                        />
                                    </div>
                                </div>

                                <h3 className="mt-6 text-base font-semibold text-foreground sm:text-lg">
                                    {category.title}
                                </h3>

                                <p className="mt-2 text-xs leading-6 text-muted sm:text-sm">
                                    {category.description}
                                </p>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Link */}
                <div className="mt-5 sm:hidden">
                    <Link
                        href="/products"
                        className="flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition-all duration-200 hover:bg-surface-elevated"
                    >
                        مشاهده همه محصولات

                        <ArrowLeft
                            size={17}
                            strokeWidth={1.8}
                        />
                    </Link>
                </div>
            </Container>
        </section>
    );
}

export default CategorySection;