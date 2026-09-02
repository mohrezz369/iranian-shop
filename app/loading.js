function Loading() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
            <div className="flex flex-col items-center text-center">
                <div
                    className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-primary"
                    aria-hidden="true"
                />

                <p className="mt-4 text-sm font-medium text-foreground">
                    در حال بارگذاری...
                </p>

                <p className="mt-1 text-xs text-muted">
                    لطفاً کمی صبر کنید.
                </p>
            </div>
        </main>
    );
}

export default Loading;