import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ProductMegaMenu = ({ productsData }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Detect screen width
  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative group">
      {/* Trigger Button */}
      <button
        onClick={toggleMenu}
        onMouseEnter={() => window.innerWidth >= 768 && setIsOpen(true)}
        onMouseLeave={() => window.innerWidth >= 768 && setIsOpen(false)}
        className="flex items-center gap-1 px-4 py-2 text-white md:text-base text-sm"
      >
        Products <ChevronDown size={16} />
      </button>

      {/* Mega Menu Panel */}
      {isOpen && (
        <div
          onMouseEnter={() => window.innerWidth >= 768 && setIsOpen(true)}
          onMouseLeave={() => window.innerWidth >= 768 && setIsOpen(false)}
          className="absolute left-0 z-50 w-full max-w-screen-xl px-4 py-6 mt-2 bg-white shadow-lg md:flex md:gap-10 rounded-lg"
        >
          {/* Columns */}
          {productsData.map((category) => (
            <div key={category.id} className="mb-4 md:mb-0 md:w-1/3">
              <h3 className="mb-2 font-semibold text-blue-700">{category.name}</h3>
              <ul className="space-y-1 text-gray-800">
                {renderMenu(category.children)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Recursive submenu renderer
const renderMenu = (items) => {
  if (!items) return null;

  return items.map((item) => (
    <li key={item.id}>
      <div className="hover:underline cursor-pointer">\u2022 {item.name}</div>
      {item.children && (
        <ul className="ml-4 mt-1 space-y-1 border-l border-gray-300 pl-2 text-sm text-gray-600">
          {renderMenu(item.children)}
        </ul>
      )}
    </li>
  ));
};

export default ProductMegaMenu;
