
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [cartCount, setCartCount] = useState(0);
  const { toast } = useToast();

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
    toast({
      title: "Item added to cart",
      description: "Your item has been added to your cart.",
      duration: 2000,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cartCount} />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts onAddToCart={handleAddToCart} />
        <Categories />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
