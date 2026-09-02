function ProductSpecifications({ specifications }) {
    if (!specifications || specifications.length === 0) {
        return null;
    }

    return (
        <section className="mt-10 border-t border-border pt-10">
            <div className="mb-6">
                <span className="text-sm font-medium text-primary">
                    مشخصات فنی
                </span>

                <h2 className="mt-1 text-xl font-bold text-foreground">
                    مشخصات محصول
                </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                {specifications.map((item, index) => (
                    <div
                        key={item.label}
                        className={`grid grid-cols-1 gap-2 px-5 py-4 sm:grid-cols-[180px_1fr] sm:gap-6 ${index !== specifications.length - 1
                            ? "border-b border-border"
                            : ""
                            }`}
                    >
                        <span className="text-xs font-medium text-muted">
                            {item.label}
                        </span>

                        <span className="text-sm font-medium text-foreground">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductSpecifications;