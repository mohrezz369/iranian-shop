import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BestSellingProducts from "@/components/home/BestSellingProducts";
import HeroSection from "@/components/home/HeroSection";

function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <Header />

      <HeroSection />

      <CategorySection />

      <FeaturedProducts />

      <BestSellingProducts />

      <Footer />
    </main>
  );
}

export default HomePage;