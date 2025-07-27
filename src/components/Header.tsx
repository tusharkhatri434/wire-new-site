import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDeviceType } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  ChevronDown, 
  Phone, 
  Mail, 
  X,
  Home,
  Building,
  Box,
  Folder,
  MapPin,
  Users,
  Package,
  Layers,
  Zap,
  ShoppingCart
} from "lucide-react";

// Company logo
import CompanyLogo from "./CompanyLogo";

interface HeaderProps {
  scrolled?: boolean;
}

// Define the menu structure
interface MenuItem {
  id: number;
  label: string;
  path: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

// Enhanced hierarchical product data with link property
interface ProductItem {
  id: number;
  name: string;
  link?: boolean; // New property to determine if item is clickable/linkable
  path?: string;  // Optional path for linking
  children?: ProductItem[];
}

const Header = ({
  scrolled = false
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
  const [expandedProductCategories, setExpandedProductCategories] = useState<Set<number>>(new Set());
  const [isScrolled, setIsScrolled] = useState(scrolled);
  const location = useLocation();
  const { isMobile, isTablet, isDesktop } = useDeviceType();
  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Enhanced scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dropdown refs
  const addDropdownRef = (key: string, ref: HTMLDivElement | null) => {
    if (ref) {
      dropdownRefs.current[key] = ref;
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdowns({});
    setExpandedProductCategories(new Set());
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      Object.keys(openDropdowns).forEach(key => {
        if (openDropdowns[key] && 
            dropdownRefs.current[key] && 
            !dropdownRefs.current[key]?.contains(target) &&
            !target.closest(`[data-dropdown="${key}"]`)) {
          setOpenDropdowns(prev => ({...prev, [key]: false}));
        }
      });
      
      if (isMenuOpen && 
          headerRef.current && 
          !headerRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, openDropdowns]);

  // Enhanced hierarchical product data with link property
  const productsData: ProductItem[] = [
    {
      "id": 1,
      "name": "Non-Ferrous wire",
      "link": false,
      "path": "/products/non-ferrous-wire",
      "children": [
        { "id": 2, "name": "EDM Wire", "link": true, "path": "/products/1" },
        { "id": 3, "name": "Zari Wire", "link": true, "path": "/products/zari-wire" },
        { "id": 4, "name": "Copper extrusions", "link": true, "path": "/products/copper-extrusions" },
        { "id": 5, "name": "Molly Wire", "link": true, "path": "/products/molly-wire" },
        { "id": 6, "name": "Copper wire", "link": true, "path": "/products/copper-wire" },
        {
          "id": 7,
          "name": "plain brass wire",
          "link": true,
          "path": "/products/plain-brass-wire",
          "children": [
            {
              "id": 8,
              "name": "diffused coated wire",
              "link": true,
              "path": "/products/diffused-coated-wire",
              "children": [
                {
                  "id": 9,
                  "name": "Zinc diffused coated wire",
                  "link": true,
                  "path": "/products/zinc-diffused-coated-wire",
                  "children": [
                    { "id": 10, "name": "Zinc coated wire", "link": true, "path": "/products/zinc-coated-wire" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 11,
      "name": "Brazing And Welding",
      "link": true,
      "path": "/products/brazing-and-welding",
      "children": [
        { "id": 12, "name": "Copper Wire for Induction Brazing", "link": true, "path": "/products/copper-wire-induction-brazing" },
        { "id": 13, "name": "Brazing wire", "link": true, "path": "/products/brazing-wire" },
        {
          "id": 14,
          "name": "Induction Brazing Wire & Rings",
          "link": true,
          "path": "/products/induction-brazing-wire-rings",
          "children": [
            { "id": 15, "name": "Brass Brazing RBCuZn-c", "link": true, "path": "/products/brass-brazing-rbcuzn-c" },
            { "id": 16, "name": "Copper Phosphor Brazing Wire", "link": true, "path": "/products/copper-phosphor-brazing-wire" }
          ]
        },
        {
          "id": 17,
          "name": "Welding Wire",
          "link": true,
          "path": "/products/welding-wire",
          "children": [
            { "id": 18, "name": "Copper alloy", "link": true, "path": "/products/copper-alloy" },
            {
              "id": 19,
              "name": "Aluminum",
              "link": true,
              "path": "/products/aluminum",
              "children": [
                { "id": 20, "name": "4043", "link": true, "path": "/products/aluminum-4043" },
                { "id": 21, "name": "5357", "link": true, "path": "/products/aluminum-5357" },
                { "id": 22, "name": "4047", "link": true, "path": "/products/aluminum-4047" }
              ]
            },
            { "id": 23, "name": "Er Cu Sia", "link": true, "path": "/products/er-cu-sia" },
            { "id": 24, "name": "Er Cu", "link": true, "path": "/products/er-cu" },
            { "id": 25, "name": "Er Cu SuC", "link": true, "path": "/products/er-cu-suc" },
            { "id": 26, "name": "Er Cu Sn A", "link": true, "path": "/products/er-cu-sn-a" },
            { "id": 27, "name": "CuAl A1", "link": true, "path": "/products/cual-a1" },
            { "id": 28, "name": "Cu Al A2", "link": true, "path": "/products/cu-al-a2" },
            { "id": 29, "name": "Sudronic", "link": true, "path": "/products/sudronic" }
          ]
        }
      ]
    },
    {
      "id": 30,
      "name": "Consumables",
      "link": true,
      "path": "/products/consumables",
      "children": [
        { "id": 31, "name": "Resin", "link": true, "path": "/products/resin" },
        { "id": 32, "name": "Ointment oil", "link": true, "path": "/products/ointment-oil" },
        { "id": 33, "name": "Filter", "link": true, "path": "/products/filter" },
        {
          "id": 34,
          "name": "current pickup",
          "link": false, // Example of non-linkable item
          "children": [
            { "id": 35, "name": "Diamond edm", "link": true, "path": "/products/diamond-edm" },
            { "id": 36, "name": "Current Pickup", "link": true, "path": "/products/current-pickup" }
          ]
        },
        { "id": 37, "name": "mineral", "link": true, "path": "/products/mineral" },
        { "id": 38, "name": "Rust Remover", "link": true, "path": "/products/rust-remover" },
        {
          "id": 39,
          "name": "Tube Electrode",
          "link": true,
          "path": "/products/tube-electrode",
          "children": [
            {
              "id": 40,
              "name": "Copper Tube and Brass tube",
              "link": true,
              "path": "/products/copper-tube-brass-tube",
              "children": [
                {
                  "id": 41,
                  "name": "Drill Guide",
                  "link": true,
                  "path": "/products/drill-guide",
                  "children": [
                    { "id": 42, "name": "Japanese Drill guide", "link": true, "path": "/products/japanese-drill-guide" },
                    { "id": 43, "name": "Edm Drill Guide", "link": true, "path": "/products/edm-drill-guide" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  // Get product category icons
  const getProductCategoryIcon = (name: string) => {
    if (name.includes('Non-Ferrous')) return <Layers className="w-3 h-3 text-blue-500" />;
    if (name.includes('Brazing')) return <Zap className="w-3 h-3 text-orange-500" />;
    if (name.includes('Consumables')) return <ShoppingCart className="w-3 h-3 text-green-500" />;
    return <Package className="w-3 h-3 text-gray-400" />;
  };

  // Toggle product category expansion
  const toggleProductCategory = (categoryId: number, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    const newExpanded = new Set(expandedProductCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedProductCategories(newExpanded);
  };

  // Handle product item click
  const handleProductItemClick = (item: ProductItem, event: React.MouseEvent) => {
    const hasChildren = item.children && item.children.length > 0;
    
    // If item has children, toggle expansion
    if (hasChildren) {
      event.preventDefault();
      toggleProductCategory(item.id, event);
    }
    
    // If item is linkable and has a path, navigate
    if (item.link && item.path && !hasChildren) {
      window.scrollTo(0, 0);
      setIsMenuOpen(false);
      setOpenDropdowns({});
    }
  };

  // Get total product count
  const getTotalProducts = (items: ProductItem[]): number => {
    let count = 0;
    items.forEach(item => {
      count += 1;
      if (item.children) {
        count += getTotalProducts(item.children);
      }
    });
    return count;
  };

  const totalProducts = getTotalProducts(productsData);
  
  const isActive = (path: string) => {
    if (path === "/customers") return false;
    return location.pathname === path;
  };

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleNavigationWithHash = (hashPath: string) => {
    const path = hashPath.split('#')[0];
    const hash = hashPath.includes('#') ? hashPath.split('#')[1] : '';
    
    if (location.pathname === path && hash) {
      const element = document.getElementById(hash);
      if (element) {
        const offset = isMobile ? 120 : 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        setIsMenuOpen(false);
        setOpenDropdowns({});
      }
    } else {
      handleNavigation();
    }
  };

  const toggleDropdown = (e: React.MouseEvent, key: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    setOpenDropdowns(prev => {
      const newState = { ...prev };
      
      Object.keys(newState).forEach(k => {
        if (k !== key) newState[k] = false;
      });
      
      newState[key] = !prev[key];
      
      return newState;
    });
  };

  // Enhanced menu structure with new products
  const menuItems: MenuItem[] = [
    {
      id: 1,
      label: "Home",
      path: "/",
      icon: <Home className="h-3 w-3 mr-1" />
    },
    {
      id: 2,
      label: "Foundation",
      path: "/foundation",
      icon: <Folder className="h-3 w-3 mr-1" />,
      children: [
        { id: 21, label: "Legacy", path: "/foundation#legacy" },
        { id: 22, label: "Capabilities", path: "/infrastructure" },
        { id: 23, label: "Certifications", path: "/foundation#certifications" },
        { id: 24, label: "Make in India Movement", path: "/foundation#make-in-india" }
      ]
    },
    {
      id: 3,
      label: "Products",
      path: "/products",
      icon: <Box className="h-3 w-3 mr-1" />,
      children: [] // Will be populated dynamically from productsData
    },
    {
      id: 4,
      label: "Infrastructure",
      path: "/infrastructure",
      icon: <Building className="h-3 w-3 mr-1" />
    },
    {
      id: 5,
      label: "Customers",
      path: "/customers",
      icon: <Users className="h-3 w-3 mr-1" />
    },
    {
      id: 6,
      label: "Connect",
      path: "/connect",
      icon: <MapPin className="h-3 w-3 mr-1" />
    }
  ];

  // Render product item recursively with enhanced click handling
  const renderProductItem = (item: ProductItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedProductCategories.has(item.id);
    const paddingLeft = level * 12;
    const isClickable = item.link && item.path;

    const ItemContent = () => (
      <div 
        className={cn(
          "flex items-center gap-2 p-2 rounded-md transition-colors text-xs",
          level === 0 ? 'font-semibold text-brand-blue border-b border-gray-100 mb-1' : 
          level === 1 ? 'font-medium text-gray-700' : 
          'text-gray-600',
          (isClickable || hasChildren) ? 'cursor-pointer hover:bg-gray-50' : 'cursor-default'
        )}
        style={{ paddingLeft: `${8 + paddingLeft}px` }}
        onClick={(e) => handleProductItemClick(item, e)}
      >
        {hasChildren && (
          <div className="flex-shrink-0">
            {isExpanded ? (
              <ChevronDown className="w-3 h-3 text-gray-500" />
            ) : (
              <ChevronDown className="w-3 h-3 text-gray-500 -rotate-90" />
            )}
          </div>
        )}
        
        <div className="flex-shrink-0">
          {getProductCategoryIcon(item.name)}
        </div>
        
        <span className="flex-1 capitalize truncate" title={item.name}>
          {item.name}
        </span>
        
        {hasChildren && (
          <span className="text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded-full">
            {item.children!.length}
          </span>
        )}
      </div>
    );

    return (
      <div key={item.id} style={{ breakInside: 'avoid', marginBottom: '2px' }}>
        {isClickable && !hasChildren ? (
          <Link to={item.path!} onClick={() => {
            handleNavigation();
            setOpenDropdowns({});
          }}>
            <ItemContent />
          </Link>
        ) : (
          <ItemContent />
        )}

        {hasChildren && isExpanded && (
          <div className="border-l border-gray-200 ml-4">
            {item.children!.map(child => renderProductItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  // Render a dropdown item (recursive)
  const renderDropdownItem = (item: MenuItem, index: number, level: number = 0, parentKey: string = '') => {
    const hasChildren = item.children && item.children.length > 0;
    const itemKey = parentKey ? `${parentKey}-${index}` : `menu-${index}`;
    
    // Special handling for Products menu
    if (item.label === "Products") {
      return (
        <div key={itemKey} className={isMobile ? "border-t border-gray-100 first:border-t-0" : ""}>
          <button 
            data-dropdown={itemKey}
            className={cn(
              isMobile ? 
                "w-full flex justify-between items-center px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 hover:bg-white hover:text-brand-blue border border-transparent hover:border-brand-blue/20 hover:shadow-lg" : 
                "px-3 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center hover:bg-white hover:text-brand-blue text-xs border border-transparent hover:border-brand-blue/20 hover:shadow-lg",
              isActive(item.path) || openDropdowns[itemKey] ? 
                "bg-white text-brand-blue shadow-lg border-brand-blue/20" : 
                "text-brand-blue"
            )} 
            onClick={(e) => toggleDropdown(e, itemKey)}
            aria-expanded={openDropdowns[itemKey]}
            aria-haspopup="true"
          >
            <span className="flex items-center">
              {item.icon}
              <Link to={item.path}>
                {item.label} ({totalProducts})
              </Link>
            </span>
            <ChevronDown className={cn("h-3 w-3 transition-all duration-300", openDropdowns[itemKey] && "transform rotate-180")} />
          </button>
          
          {openDropdowns[itemKey] && (
            <div 
              ref={(ref) => addDropdownRef(itemKey, ref)}
              className={isMobile ? 
                "pl-3 mt-2 border-l-2 border-brand-gold ml-4 bg-white rounded-lg py-2 shadow-lg animate-slide-in-up max-h-80 overflow-y-auto" : 
                "absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 z-[60] border border-brand-blue/10 animate-scale-in overflow-y-auto"}
              style={!isMobile ? { 
                width: '420px', 
                maxHeight: '70vh',
              } : {}}
            >
              {/* Header */}
              {/* <div className="px-3 pb-2 mb-2 border-b border-gray-200">
                <Link 
                  to={item.path} 
                  className="flex items-center text-brand-blue font-bold hover:text-brand-blue/80 transition-colors text-xs"
                  onClick={() => {
                    handleNavigation();
                    setOpenDropdowns({});
                  }}
                >
                  {item.icon}
                  All Products ({totalProducts} items)
                </Link>
                <p className="text-xs text-gray-500 mt-1">Click categories to expand • Blue items are clickable</p>
              </div> */}
              
              {/* Product Categories */}
              <div className="px-2">
                {productsData.map(category => renderProductItem(category))}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 px-3 pt-2 mt-2">
                <Link
                  to="/products"
                  className="block w-full text-center bg-brand-blue text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-brand-blue/90 transition-colors"
                  onClick={() => {
                    handleNavigation();
                    setOpenDropdowns({});
                  }}
                >
                  View Complete Catalog
                </Link>
              </div>
            </div>
          )}
        </div>
      );
    }

    // Regular menu item handling
    if (!isMobile && hasChildren && level > 0) {
      return (
        <div key={itemKey} className="relative group/submenu">
          <button 
            className="flex w-full items-center justify-between px-3 py-2 text-brand-blue hover:bg-white hover:text-brand-blue transition-all duration-300 rounded-lg text-xs font-medium border border-transparent hover:border-brand-blue/20 hover:shadow-lg"
            onClick={(e) => e.preventDefault()}
            aria-haspopus="true"
          >
            <span className="font-semibold">{item.label}</span>
            <ChevronDown className="h-3 w-3 ml-2 transform -rotate-90 transition-transform group-hover/submenu:scale-110" />
          </button>
          <div className="absolute left-full top-0 mt-0 ml-2 w-60 bg-white rounded-xl shadow-2xl py-2 z-[70] hidden group-hover/submenu:block border border-brand-blue/10 animate-scale-in">
            {item.children?.map((child, childIndex) => 
              renderDropdownItem(child, childIndex, level + 1, itemKey)
            )}
          </div>
        </div>
      );
    }
    
    if (hasChildren) {
      return (
        <div key={itemKey} className={isMobile ? "border-t border-gray-100 first:border-t-0" : ""}>
          <button 
            data-dropdown={itemKey}
            className={cn(
              isMobile ? 
                "w-full flex justify-between items-center px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 hover:bg-white hover:text-brand-blue border border-transparent hover:border-brand-blue/20 hover:shadow-lg" : 
                "px-3 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center hover:bg-white hover:text-brand-blue text-xs border border-transparent hover:border-brand-blue/20 hover:shadow-lg",
              isActive(item.path) || openDropdowns[itemKey] ? 
                "bg-white text-brand-blue shadow-lg border-brand-blue/20" : 
                "text-brand-blue"
            )} 
            onClick={(e) => toggleDropdown(e, itemKey)}
            aria-expanded={openDropdowns[itemKey]}
            aria-haspopup="true"
          >
            <span className="flex items-center">
              {item.icon}
              <Link to={item.path}>
                {item.label}
              </Link>
            </span>
            <ChevronDown className={cn("h-3 w-3 transition-all duration-300", openDropdowns[itemKey] && "transform rotate-180")} />
          </button>
          
          {openDropdowns[itemKey] && (
            <div 
              ref={(ref) => addDropdownRef(itemKey, ref)}
              className={isMobile ? 
                "pl-3 mt-2 border-l-2 border-brand-gold ml-4 bg-white rounded-lg py-2 shadow-lg animate-slide-in-up" : 
                "absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 z-[60] border border-brand-blue/10 animate-scale-in overflow-y-auto"}
              style={!isMobile ? { width: '280px', maxHeight: '70vh' } : {}}
            >
              {/* {level === 0 && !isMobile && (
                <Link 
                  to={item.path} 
                  className="block w-full text-left px-3 py-2 text-brand-blue font-bold hover:bg-gray-50 transition-all duration-300 border-b border-brand-blue/10 rounded-t-lg text-xs mb-2" 
                  onClick={() => {
                    handleNavigation();
                    setOpenDropdowns({});
                  }}
                >
                  <div className="flex items-center">
                    {item.icon}
                    All {item.label}
                  </div>
                </Link>
              )} */}
              
              <div className="space-y-1">
                {item.children?.map((child, childIndex) => (
                  <div key={childIndex}>
                    {renderDropdownItem(child, childIndex, level + 1, itemKey)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
    
    return (
      <Link 
        key={itemKey}
        to={item.path} 
        className={cn(
          isMobile ? 
            "block px-3 py-2 text-xs text-brand-blue hover:bg-white hover:text-brand-blue rounded-lg transition-all duration-300 font-semibold border border-transparent hover:border-brand-blue/20 hover:shadow-lg" : 
            "block w-full text-left px-3 py-2 text-brand-blue hover:bg-white hover:text-brand-blue transition-all duration-300 rounded-lg text-xs font-semibold border border-transparent hover:border-brand-blue/20 hover:shadow-lg"
        )} 
        style={!isMobile ? { breakInside: 'avoid' } : {}}
        onClick={() => {
          if (item.path.includes('#')) {
            handleNavigationWithHash(item.path);
          } else {
            handleNavigation();
          }
          setOpenDropdowns({});
        }}
      >
        <div className="flex items-center">
          {isMobile && item.icon}
          {item.label}
        </div>
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex flex-col bg-white shadow-xl border-b border-brand-blue/20 transition-all duration-300" ref={headerRef}>
      {/* Enhanced Top Info Bar - More compact */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-blue/95 text-white py-1 px-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4">
            <p className="font-medium animate-slide-in-left">Precision Engineered Wire Solutions Since 1982</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+911234567890" className="flex items-center hover:text-brand-gold transition-all duration-300 hover-scale group">
              <Phone className="h-3 w-3 mr-1 group-hover:animate-glow" />
              <span className="font-medium text-xs">+91 1234 567 890</span>
            </a>
            <a href="mailto:info@maheshwariwires.com" className="flex items-center hover:text-brand-gold transition-all duration-300 hover-scale group">
              <Mail className="h-3 w-3 mr-1 group-hover:animate-glow" />
              <span className="font-medium text-xs">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation Bar - More compact */}
      <div className={cn(
        "transition-all duration-300 w-full bg-white",
        isScrolled ? "py-1 lg:py-1.5 shadow-depth-3" : "py-1.5 lg:py-2 shadow-depth-2",
        "border-b border-brand-blue/10"
      )}>
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Enhanced Logo - Smaller */}
          <Link to="/" className="flex items-center hover-scale transition-all duration-300 group" onClick={handleNavigation}>
            <div className="relative transform scale-75">
              <CompanyLogo />
            </div>
          </Link>

          {/* Enhanced Desktop Navigation - Smaller and more compact */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => {
              const itemKey = `menu-${index}`;
              
              if (item.children || item.label === "Products") {
                return (
                  <div key={itemKey} className="relative group" ref={(ref) => addDropdownRef(itemKey, ref)}>
                    <button 
                      data-dropdown={itemKey}
                      className={cn(
                        "px-2 py-1.5 rounded-lg font-semibold transition-all duration-300 flex items-center group relative overflow-hidden text-xs", 
                        isActive(item.path) || openDropdowns[itemKey] ? 
                          "bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white shadow-lg" : 
                          "text-brand-blue hover:bg-white hover:text-brand-blue hover:shadow-lg border border-transparent hover:border-brand-blue/20"
                      )} 
                      onClick={(e) => toggleDropdown(e, itemKey)}
                      onMouseEnter={isDesktop ? (e) => toggleDropdown(e, itemKey) : undefined}
                      aria-expanded={openDropdowns[itemKey]}
                    >
                      <span className="flex items-center relative z-10">
                        <span className="hidden xl:inline">{item.icon}</span>
                        <span className={cn("whitespace-nowrap", item.icon ? "xl:ml-1" : "")}>
                          <Link to={item.path}>
                            {item.label}
                          </Link>
                        </span>
                      </span>
                      <ChevronDown className={cn("ml-1 h-3 w-3 transition-transform duration-300", openDropdowns[itemKey] && "transform rotate-180")} />
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-brand-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>

                    {openDropdowns[itemKey] && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-2xl py-3 z-50 border border-brand-blue/10 animate-scale-in overflow-y-auto"
                        style={item.label === 'Products' ? { 
                          width: '420px', 
                          maxHeight: '70vh',
                        } : { width: '280px', maxHeight: '70vh' }}
                        onMouseLeave={isDesktop ? () => setOpenDropdowns(prev => ({...prev, [itemKey]: false})) : undefined}
                      >
                        {item.label === "Products" ? (
                          <>
                            {/* Header */}
                            {/* <div className="px-3 pb-2 mb-2 border-b border-gray-200">
                              <Link 
                                to={item.path} 
                                className="flex items-center text-brand-blue font-bold hover:text-brand-blue/80 transition-colors text-xs"
                                onClick={() => {
                                  handleNavigation();
                                  setOpenDropdowns({});
                                }}
                              >
                                <span className="hidden xl:inline">{item.icon}</span>
                                <span className={cn(item.icon ? "xl:ml-1" : "")}>All Products ({totalProducts} items)</span>
                              </Link>
                              <p className="text-xs text-gray-500 mt-1">Click categories to expand • Blue items are clickable</p>
                            </div> */}
                            
                            {/* Product Categories */}
                            <div className="px-2">
                              {productsData.map(category => renderProductItem(category))}
                            </div>

                            {/* Footer */}
                            <div className="border-t border-gray-200 px-3 pt-2 mt-2">
                              <Link
                                to="/products"
                                className="block w-full text-center bg-brand-blue text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-brand-blue/90 transition-colors"
                                onClick={() => {
                                  handleNavigation();
                                  setOpenDropdowns({});
                                }}
                              >
                                View Complete Catalog
                              </Link>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* <Link 
                              to={item.path} 
                              className="block w-full text-left px-3 py-2 text-brand-blue font-bold hover:bg-gray-50 transition-all duration-300 border-b border-brand-blue/10 text-xs mb-2" 
                              onClick={() => {
                                handleNavigation();
                                setOpenDropdowns({});
                              }}
                            >
                              <div className="flex items-center">
                                <span className="hidden xl:inline">{item.icon}</span>
                                <span className={cn(item.icon ? "xl:ml-1" : "")}>All {item.label}</span>
                              </div>
                            </Link> */}
                            
                            <div className="space-y-1">
                              {item.children?.map((child, childIndex) => 
                                renderDropdownItem(child, childIndex, 1, itemKey)
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link 
                  key={itemKey}
                  to={item.path} 
                  className={cn(
                    "px-2 py-1.5 rounded-lg font-semibold transition-all duration-300 flex items-center group relative overflow-hidden text-xs whitespace-nowrap", 
                    isActive(item.path) ? 
                      "bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white shadow-lg" : 
                      "text-brand-blue hover:bg-white hover:text-brand-blue hover:shadow-lg border border-transparent hover:border-brand-blue/20"
                  )} 
                  onClick={handleNavigation}
                >
                  <span className="flex items-center relative z-10">
                    <span className="hidden xl:inline">{item.icon}</span>
                    <span className={cn(item.icon ? "xl:ml-1" : "")}>{item.label}</span>
                  </span>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-brand-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              );
            })}
          </nav>

          {/* Enhanced Mobile Menu Button - Smaller */}
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "lg:hidden relative overflow-hidden transition-all duration-300 hover:scale-110 w-8 h-8",
              isMenuOpen ? "bg-brand-blue text-white shadow-lg" : "text-brand-blue hover:bg-brand-blue/10 border border-brand-blue/20"
            )} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative z-10 transition-transform duration-300">
              {isMenuOpen ? (
                <X className="h-4 w-4 animate-scale-in" />
              ) : (
                <Menu className="h-4 w-4 animate-scale-in" />
              )}
            </div>
            
            <div className={cn(
              "absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-blue/90 transform transition-all duration-300",
              isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            )}></div>
          </Button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation - More compact */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[60px] sm:top-[70px] left-0 right-0 bg-white shadow-2xl border-b border-brand-blue/20 animate-slide-in-up z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="container mx-auto flex flex-col space-y-1 p-3">
            <div className="border-b border-brand-blue/20 pb-3 mb-3 bg-gradient-to-r from-gray-50 to-white rounded-lg p-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a href="tel:+911234567890" className="flex items-center px-2 py-1.5 text-xs text-brand-blue hover:bg-brand-blue/10 rounded-lg transition-all duration-300 hover-scale group border border-brand-blue/20">
                  <Phone className="h-3 w-3 mr-2 text-brand-gold group-hover:animate-glow" />
                  <span className="font-semibold">+91 1234 567 890</span>
                </a>
                <a href="mailto:info@maheshwariwires.com" className="flex items-center px-2 py-1.5 text-xs text-brand-blue hover:bg-brand-blue/10 rounded-lg transition-all duration-300 hover-scale group border border-brand-blue/20">
                  <Mail className="h-3 w-3 mr-2 text-brand-gold group-hover:animate-glow" />
                  <span className="font-semibold">Email Us</span>
                </a>
              </div>
            </div>

            {menuItems.map((item, index) => {
              const itemKey = `mobile-menu-${index}`;
                
              if (item.children || item.label === "Products") {
                return renderDropdownItem(item, index, 0, 'mobile');
              }
              
              return (
                <Link 
                  key={itemKey}
                  to={item.path} 
                  className={cn(
                    "px-2 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center group relative overflow-hidden text-xs border border-transparent hover:border-brand-blue/20 hover:shadow-lg", 
                    isActive(item.path) ? 
                      "bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white shadow-lg" : 
                      "text-brand-blue hover:bg-white hover:text-brand-blue"
                  )} 
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleNavigation();
                  }}
                >
                  <span className="flex items-center relative z-10">
                    {item.icon}
                    <span className="ml-1">{item.label}</span>
                  </span>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-brand-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;