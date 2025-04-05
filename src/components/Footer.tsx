
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gujarat-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Khakhra<span className="text-gujarat-400">Kart</span></h3>
            <p className="text-gujarat-200 mb-4">
              Delivering authentic Gujarati flavors straight to your doorstep since 2020.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-gujarat-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-gujarat-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-gujarat-800">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gujarat-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gujarat-200 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#categories" className="text-gujarat-200 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#about" className="text-gujarat-200 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gujarat-200">123 Gujarat Street</li>
              <li className="text-gujarat-200">Ahmedabad, Gujarat</li>
              <li className="text-gujarat-200">India 380001</li>
              <li className="text-gujarat-200">Phone: +91 98765 43210</li>
              <li className="text-gujarat-200">Email: info@khakhrakart.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-gujarat-200 mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-gujarat-800 border-gujarat-700 text-white placeholder:text-gujarat-400"
              />
              <Button className="bg-gujarat-500 hover:bg-gujarat-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gujarat-800 pt-6 mt-6 text-gujarat-400 text-sm">
          <p className="text-center">
            &copy; {new Date().getFullYear()} KhakhraKart - Gujarat Eats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
