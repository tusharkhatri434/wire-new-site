import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white text-[#0e1a24] rounded-xl overflow-hidden shadow-lg w-full max-w-sm flex flex-col border border-gray-200">
      {/* Image with top-left tags */}
      <div className="relative">
        <img
          src={"/lovable-uploads/4e574527-b0ae-47a4-b06f-2f0a522be5a2.png"}
          alt={product.heading}
          className="w-full h-52 object-cover"
        />
        {product.tags?.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <div
                key={index}
                className="bg-[#001F5B] text-white text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title (added here) */}
        <h3 className="text-xl font-bold text-black mb-1">{product.title}</h3>

        {/* Heading */}
        <h2 className="text-md font-semibold text-[#001F5B]">{product.heading}</h2>

        {/* Subheading */}
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <ul className="mt-4 space-y-2 text-sm text-[#0e1a24]">
          {product.keyFeatures?.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-yellow-400 font-bold text-base">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Learn More Button */}
        <div className="mt-auto pt-6">
          <Link to={"/products/123"}>
          <button className="w-full bg-[#001F5B] text-white font-semibold py-2 rounded-md flex justify-center items-center gap-2 hover:bg-[#002a7f] transition-all duration-200">
            View Details
            <ArrowRight className="w-4 h-4" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
