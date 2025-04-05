
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  cartCount: number;
}

const Navbar = ({ cartCount }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-gujarat-600 font-bold text-2xl">Khakhra</span>
            <span className="text-gujarat-500 font-bold text-2xl">Kart</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-foreground hover:text-gujarat-600 font-medium">Home</a>
          <a href="#menu" className="text-foreground hover:text-gujarat-600 font-medium">Menu</a>
          <a href="#categories" className="text-foreground hover:text-gujarat-600 font-medium">Categories</a>
          <a href="#about" className="text-foreground hover:text-gujarat-600 font-medium">About</a>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-gujarat-500 text-white">{cartCount}</Badge>
            )}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="outline" size="icon" className="mr-2 relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-gujarat-500 text-white">{cartCount}</Badge>
            )}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-foreground hover:text-gujarat-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#menu" 
              className="text-foreground hover:text-gujarat-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </a>
            <a 
              href="#categories" 
              className="text-foreground hover:text-gujarat-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-gujarat-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
