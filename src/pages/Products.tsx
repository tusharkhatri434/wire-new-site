
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const { hash } = location;

  // Scroll to the specific product section when hash changes
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, [hash]);

  // Product categories data
  const productCategories = [
    {
      id: "edm-wire",
      title: "EDM Wire",
      image: "/lovable-uploads/033e88f3-a322-4187-b61b-6eb0bf8c8ea3.png",
      subProducts: [
        "Plain Brass Wire",
        "Diffused Coated Wire", 
        "Zinc Diffused Coated Wire",
        "Zinc Coated Wire"
      ]
    },
    {
      id: "brazing-wire",
      title: "Brazing Wire",
      image: "/lovable-uploads/2c299fa8-edd5-4d18-9333-f32ecdd5c9d9.png",
      subProducts: [
        "Induction Brazing Rings"
      ]
    },
    {
      id: "welding-wire",
      title: "Welding Wire",
      image: "/lovable-uploads/a05ed1e3-8bb7-43c2-a3f3-e3e33bd8ab6d.png",
      subProducts: [
        "Copper Alloy: ErCuSiA",
        "Copper Alloy: ErCu",
        "Copper Alloy: ErCuSnC", 
        "Copper Alloy: ErCuSnA",
        "Copper Alloy: CuAlA1",
        "Copper Alloy: CuAlA2",
        "Aluminium: 4043",
        "Aluminium: 5357",
        "Aluminium: 4047"
      ]
    },
    {
      id: "copper-wire",
      title: "Copper Wire",
      image: "/lovable-uploads/e1e5c479-b03d-4b95-94b0-d5925c024345.png",
      subProducts: []
    },
    {
      id: "copper-extrusions",
      title: "Copper Extrusions",
      image: "/lovable-uploads/033e88f3-a322-4187-b61b-6eb0bf8c8ea3.png",
      subProducts: []
    },
    {
      id: "zari-wire",
      title: "Zari Wire",
      image: "/lovable-uploads/4e574527-b0ae-47a4-b06f-2f0a522be5a2.png",
      subProducts: []
    },
    {
      id: "molly-wire",
      title: "Molly Wire",
      image: "/lovable-uploads/e1e5c479-b03d-4b95-94b0-d5925c024345.png",
      subProducts: []
    },
    {
      id: "consumables",
      title: "Consumables",
      image: "/lovable-uploads/76e9f5c2-bfdd-41fd-8447-48981ed09178.png",
      subProducts: [
        "Resin",
        "Filter",
        "Current Pickup",
        "Minerals"
      ]
    }
  ];

  const downloadCatalogue = () => {
    toast.success("Thank you for your interest. A link to download the catalogue has been sent to your registered email.");
  };

  return (
    <div className="flex flex-col">
      <HeroSection 
        title="Our Product Range" 
        subtitle="Engineered for performance, crafted with precision" 
        backgroundImage="/lovable-uploads/6ee12984-0671-4f3c-aa77-3720b1bbe079.png" 
        className="min-h-[50vh]" 
      />

      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Comprehensive Wire Solutions" 
            subtitle="From EDM wires to specialized brazing alloys, our products serve the most demanding applications across defense, aerospace, and industrial sectors." 
          />

          {/* Product Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {productCategories.map((category) => (
              <div 
                key={category.id} 
                id={category.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-gray-100 overflow-hidden group"
              >
                {/* Category Image */}
                <div className="relative h-48 overflow-hidden bg-gray-50">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category Title */}
                  <h3 className="text-xl font-bold text-brand-blue mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Sub-Products List */}
                  {category.subProducts.length > 0 ? (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">Products:</h4>
                      <ul className="space-y-2">
                        {category.subProducts.map((product, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="w-2 h-2 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{product}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 text-center italic">
                        Premium quality {category.title.toLowerCase()} solutions
                      </p>
                    </div>
                  )}

                  {/* View Details Button */}
                  <div className="text-center">
                    <Button 
                      asChild
                      className="bg-brand-gold hover:bg-yellow-500 text-brand-blue hover:text-white transition-all duration-300 w-full group/btn"
                    >
                      <Link to={`/products#${category.id}`}>
                        <span className="font-medium">View Details</span>
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button 
              onClick={downloadCatalogue} 
              className="bg-brand-blue hover:bg-brand-blue/90 inline-flex items-center gap-2 px-8 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download className="h-4 w-4" />
              <span>Download Complete Technical Catalogue</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
