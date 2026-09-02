import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";

import "./globals.css";

import { ThemeProvider } from "next-themes";

import CartProvider from "@/components/providers/CartContext";
import WishlistProvider from "@/components/providers/WishlistContext";

export const metadata = {
  title: {
    default: "ایرانی شاپ",
    template: "%s | ایرانی شاپ",
  },
  description:
    "ایرانی شاپ؛ فروشگاه دیجیتال مدرن برای خرید لپ‌تاپ، موبایل، تبلت و هدفون.",
};

function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CartProvider>
            <WishlistProvider>
              {children}
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;