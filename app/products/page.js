import { Suspense } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ProductsView from "@/components/products/ProductsView";

import products from "@/data/products";

function ProductsLoading() {
    return (
        <div className="space-y-6">
            <div className="h-20 animate-pulse rounded-2xl bg-surface-elevated" />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-2xl border border-border bg-surface"
                    >
                        <div className="aspect-[1.18/1] animate-pulse bg-surface-elevated" />

                        <div className="space-y-3 p-4">
                            <div className="h-3 w-16 animate-pulse rounded bg-surface-elevated" />
                            <div className="h-5 w-3/4 animate-pulse rounded bg-surface-elevated" />
                            <div className="h-4 w-1/3 animate-pulse rounded bg-surface-elevated" />
                            <div className="h-9 w-full animate-pulse rounded-xl bg-surface-elevated" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ProductsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
            <Header />

            <Container>
                <section className="border-b border-border py-10">
                    <div>
                        <span className="text-sm font-medium text-primary">
                            فروشگاه
                        </span>

                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                            همه محصولات
                        </h1>

                        <p className="mt-3 text-sm leading-7 text-muted">
                            محصولات مورد نیازت را پیدا و انتخاب کن.
                        </p>
                    </div>
                </section>

                <section className="py-10">
                    <Suspense fallback={<ProductsLoading />}>
                        <ProductsView products={products} />
                    </Suspense>
                </section>
            </Container>

            <Footer />
        </main>
    );
}

export default ProductsPage;