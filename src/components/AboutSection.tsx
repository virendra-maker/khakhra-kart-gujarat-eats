
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Award, Truck, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Authentic Recipes",
    description: "Our products are made using traditional Gujarati recipes passed down through generations."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the finest ingredients to ensure superior taste and quality in every bite."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Enjoy quick delivery to your doorstep with our efficient logistics network."
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description: "Our customers love our products, with over 95% satisfaction rate."
  }
];

const AboutSection = () => {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gujarat-900 mb-4">About Gujarat Eats</h2>
            <p className="text-muted-foreground mb-6">
              Founded with a passion for authentic Gujarati cuisine, Khakhra Kart brings the 
              flavors of Gujarat right to your doorstep. Our journey began with the humble khakhra, 
              a thin cracker common in Gujarati cuisine, and has now expanded to include a variety 
              of traditional delicacies.
            </p>
            <p className="text-muted-foreground mb-6">
              We take pride in using traditional methods and recipes that have been passed down through 
              generations. Every product is handcrafted with love and care to ensure that you get the 
              authentic taste of Gujarat in every bite.
            </p>
            <p className="text-muted-foreground">
              Our mission is to spread the joy of Gujarati cuisine across the country and make 
              these delicious treats accessible to everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-l-4 border-l-gujarat-500">
                <CardContent className="p-6">
                  <feature.icon className="h-8 w-8 text-gujarat-600 mb-3" />
                  <h3 className="font-bold text-gujarat-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
