
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Plus, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Masala Khakhra",
    description: "Thin, crispy cracker with spicy seasoning",
    price: 99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300&h=300",
    rating: 4.8
  },
  {
    id: 2,
    name: "Methi Khakhra",
    description: "Crispy flatbread with fenugreek leaves",
    price: 109,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300&h=300",
    rating: 4.6
  },
  {
    id: 3,
    name: "Jeera Khakhra",
    description: "Thin crackers with cumin flavor",
    price: 89,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300&h=300",
    rating: 4.7
  },
  {
    id: 4,
    name: "Cheese Khakhra",
    description: "Cheesy twist on traditional khakhra",
    price: 129,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300&h=300",
    rating: 4.9
  }
];

interface FeaturedProductsProps {
  onAddToCart: () => void;
}

const FeaturedProducts = ({ onAddToCart }: FeaturedProductsProps) => {
  return (
    <div id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gujarat-900">Featured Products</h2>
          <p className="text-gujarat-600 mt-2 max-w-2xl mx-auto">
            Discover our handcrafted Gujarati delicacies made with authentic recipes and premium ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="pt-4">
                <div className="flex items-center text-gujarat-500 mb-1">
                  <Star className="fill-gujarat-500 stroke-gujarat-500 h-4 w-4" />
                  <span className="text-sm ml-1">{product.rating}</span>
                </div>
                <CardTitle className="text-lg font-semibold text-gujarat-900">{product.name}</CardTitle>
                <p className="text-muted-foreground mt-1 text-sm line-clamp-2">{product.description}</p>
                <p className="mt-2 font-bold">₹{product.price}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  onClick={onAddToCart} 
                  className="w-full bg-gujarat-600 hover:bg-gujarat-700"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-gujarat-600 text-gujarat-600 hover:bg-gujarat-50">
            View All Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
