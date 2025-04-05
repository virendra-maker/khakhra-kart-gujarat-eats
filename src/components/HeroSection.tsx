
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gujarat-50 to-gujarat-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gujarat-900">
              Authentic Gujarati <span className="text-gujarat-600">Delicacies</span> Delivered
            </h1>
            <p className="mt-4 text-lg text-gujarat-800 max-w-md">
              Experience the rich flavors of Gujarat with our handcrafted khakhras and 
              traditional snacks delivered right to your doorstep.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-gujarat-600 hover:bg-gujarat-700">
                Order Now
              </Button>
              <Button size="lg" variant="outline" className="border-gujarat-600 text-gujarat-600 hover:bg-gujarat-50">
                Explore Menu
              </Button>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Assorted Gujarati Snacks" 
                className="object-cover w-full h-full rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3">
              <p className="text-sm font-medium text-gujarat-900">
                Made with love using traditional Gujarati recipes
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-gujarat-200 opacity-30 blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gujarat-200 opacity-30 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
