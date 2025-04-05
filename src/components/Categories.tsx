
import { Card, CardContent } from "@/components/ui/card";

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Khakhras",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300&h=300",
    count: 15
  },
  {
    id: 2,
    name: "Theplas",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300&h=300",
    count: 8
  },
  {
    id: 3,
    name: "Farsan",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300&h=300",
    count: 12
  },
  {
    id: 4,
    name: "Pickles",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300&h=300",
    count: 6
  },
  {
    id: 5,
    name: "Sweets",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300&h=300",
    count: 10
  },
  {
    id: 6,
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300&h=300",
    count: 5
  }
];

const Categories = () => {
  return (
    <div id="categories" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gujarat-900">Browse Categories</h2>
          <p className="text-gujarat-600 mt-2 max-w-2xl mx-auto">
            Explore our wide range of authentic Gujarati culinary delights
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
              <CardContent className="p-4 text-center">
                <div className="w-full aspect-square rounded-full overflow-hidden mb-3 mx-auto" style={{ maxWidth: "120px" }}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-medium text-gujarat-900">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} items</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
