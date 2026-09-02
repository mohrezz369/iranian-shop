import Link from "next/link";
import {
    Globe,
    Send,
    ShieldCheck,
    Truck,
} from "lucide-react";

import Container from "./Container";

function Footer() {
    return (
        <footer className="border-t border-border bg-surface transition-colors duration-200">
            <Container>
                {/* Benefits */}
                <div className="grid grid-cols-1 border-b border-border py-2 sm:grid-cols-3">
                    <div className="flex items-center gap-4 px-2 py-5 sm:border-l sm:border-border sm:px-6">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-elevated text-primary">
                            <Truck size={19} strokeWidth={1.8} />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-foreground">
                                ارسال سریع
                            </p>

                            <p className="mt-1 text-xs text-muted">
                                ارسال به سراسر کشور
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border-t border-border px-2 py-5 sm:border-t-0 sm:border-l sm:border-border sm:px-6">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-elevated text-primary">
                            <ShieldCheck size={19} strokeWidth={1.8} />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-foreground">
                                ضمانت اصالت
                            </p>

                            <p className="mt-1 text-xs text-muted">
                                خریدی مطمئن و آسوده
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border-t border-border px-2 py-5 sm:border-t-0 sm:px-6">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-elevated text-primary">
                            <Send size={19} strokeWidth={1.8} />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-foreground">
                                پشتیبانی آنلاین
                            </p>

                            <p className="mt-1 text-xs text-muted">
                                همراه شما در تمام مراحل
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Footer */}
                <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <Link
                            href="/"
                            className="text-xl font-bold tracking-tight text-foreground"
                        >
                            ایرانی شاپ
                        </Link>

                        <p className="mt-4 text-sm leading-7 text-muted">
                            یک فروشگاه دیجیتال مدرن برای تجربه‌ای ساده،
                            سریع و مطمئن در خرید محصولات تکنولوژی.
                        </p>

                        <div className="mt-5 flex items-center gap-2">
                            <a
                                href="#"
                                aria-label="وب‌سایت"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors duration-200 hover:bg-surface-elevated hover:text-foreground"
                            >
                                <Globe size={17} strokeWidth={1.8} />
                            </a>

                            <a
                                href="#"
                                aria-label="تلگرام"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors duration-200 hover:bg-surface-elevated hover:text-foreground"
                            >
                                <Send size={17} strokeWidth={1.8} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground">
                            دسترسی سریع
                        </h3>

                        <div className="mt-4 flex flex-col gap-3">
                            <Link
                                href="/"
                                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                            >
                                خانه
                            </Link>

                            <Link
                                href="/products"
                                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                            >
                                فروشگاه
                            </Link>

                            <Link
                                href="/category"
                                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                            >
                                دسته‌بندی‌ها
                            </Link>

                            <Link
                                href="/offers"
                                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                            >
                                پیشنهادهای ویژه
                            </Link>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground">
                            دسته‌بندی‌ها
                        </h3>

                        <div className="mt-4 flex flex-col gap-3">
                            <Link
                                href="/products?category=laptop"
                                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                            >
                                لپ‌ تاپ
                            </Link>

                            <Link
                                href="/products?category=mobile"
                                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                            >
                                موبایل
                            </Link>

                            <Link
                                href="/products?category=tablet"
                                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                            >
                                تبلت
                            </Link>

                            <Link
                                href="/products?category=earbuds"
                                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                            >
                                هدفون
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-3 border-t border-border py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © ۱۴۰۵ ایرانی شاپ — تمامی حقوق محفوظ است.
                    </p>

                    <p>
                        Built by{" "}
                        <span className="font-semibold text-foreground">
                            mohrezz  🚀
                        </span>
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;