import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { allProducts } from "../data/productCardData.tsx";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const location = useLocation();
  const { hash } = location;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const categories = [
    "All Categories",
    "Non-Ferrous Wire",
    "Brazing and Welding",
    "Consumables",
  ];

  // Smooth scroll to hash
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);

  // Filter logic
  useEffect(() => {
    let result = allProducts;

    if (selectedCategory !== "All Categories") {
      result = result.filter((product) => product.category === selectedCategory);
    }

    if (searchQuery.trim() !== "") {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <div className="flex flex-col">
      <HeroSection
        title="Our Product Range"
        subtitle="Engineered for performance, crafted with precision"
        backgroundImage="/lovable-uploads/6ee12984-0671-4f3c-aa77-3720b1bbe079.png"
        className="min-h-[50vh]"
      />

      <section className="container">
        <div className="min-h-screen p-4 sm:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Filters */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-4">Filter Products</h2>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm border transition ${
                      cat === selectedCategory
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search */}
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((data, idx) => (
                  <ProductCard key={idx} product={data} />
                ))
              ) : (
                <p className="text-gray-600 text-center col-span-full">
                  No products found.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Products;
