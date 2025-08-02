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
  ShoppingCart,
  MessageCircle
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
      "path": "/products",
      "children": [
        { "id": 3, "name": "Zari Wire", "link": true, "path": "/products/6" },
        { "id": 4, "name": "Copper extrusions", "link": true, "path": "/products/7" },
        { "id": 5, "name": "Molly Wire", "link": true, "path": "/products/8" },
        { "id": 6, "name": "Copper wire", "link": true, "path": "/products/9" },
        { "id": 2, "name": "EDM Wire", "link": true, "path": "/products/5", 
          "children":[
            {
              "id": 7,
              "name": "plain brass wire",
              "link": true,
              "path": "/products/1"
            },
            {
              "id": 8,
              "name": "diffused coated wire",
              "link": true,
              "path": "/products/2",
            },
            {
             "id": 9,
             "name": "Zinc diffused coated wire",
             "link": true,
             "path": "/products/3",
            },
            { "id": 10, "name": "Zinc coated wire", "link": true, "path": "/products/4" }
          ]
        }]
    },{
      "id": 11,
      "name": "Brazing And Welding",
      "link": false,
      "path": "/products",
      "children":[
      {
        "id": 12,
       "name": "Copper Wire for Induction Brazing",
       "link": true,
       "path": "/products/18",
        },
        {
        "id": 13,
       "name": "Brazing wire",
       "link": true,
       "path": "/products/19",
       "children":[
        {
        "id": 14,
       "name": "Induction Brazing Wire & Rings",
       "link": true,
       "path": "/products/20"
        },
        {
        "id": 15  ,
       "name": "Brass Brazing RBCuZn-c",
       "link": true,
       "path": "/products/21"
        },
        {
        "id": 16,
       "name": "Copper Phosphor Brazing Wire",
       "link": true,
       "path": "/products/22"
        }
       ]
        },
         {
        "id": 16,
       "name": " Welding Wire",
       "link": false,
       "path": "/products",
       "children":[
      {
        "id": 17,
       "name": "Copper Alloy",
       "link": false,
       "path": "/products",
       "children":[
      {
        "id": 18,
       "name": "Er Cu Sia",
       "link": true,
       "path": "/products/23",
      },
         {
        "id": 19,
       "name": "Er Cu",
       "link": true,
       "path": "/products/24",
      },
         {
        "id": 20,
       "name": "Er Cu SnC",
       "link": true,
       "path": "/products/25",
      },
         {
        "id": 21,
       "name": "Er Cu Sn A",
       "link": true,
       "path": "/products/26",
      },
         {
        "id": 22,
       "name": "CuAl A1",
       "link": true,
       "path": "/products/27",
      },
         {
        "id": 23,
       "name": "CuAl A2",
       "link": true,
       "path": "/products/28",
      },
         {
        "id": 24,
       "name": "Sudronic",
       "link": true,
       "path": "/products/29",
      },
       ]
      },
      {
        "id": 25,
       "name": "Aluminum",
       "link": false,
       "path": "/products",
       "children":[
        {
        "id": 26,
       "name": "4043",
       "link": true,
       "path": "/products/30",
      },
        {
        "id": 27,
       "name": "5357",
       "link": true,
       "path": "/products/31",
      },
        {
        "id": 28,
       "name": "4047",
       "link": true,
       "path": "/products/32",
      }
       ]
      }
       ]
        },
      ]
    },
      {
      "id": 29,
      "name": " Consumables",
      "link": false,
      "path": "/products",
       "children":[
        {
          "id": 30,
          "name": "Resin",
          "link": true,
          "path": "/products/10"
        },
        {
          "id": 31,
          "name": "Ointment Oil",
          "link": true,
          "path": "/products/11"
        },
        {
          "id": 32,
          "name": "Filter",
          "link": true,
          "path": "/products/12"
        },
        {
          "id": 33,
          "name": "Current Pickup Assembly",
          "link": true,
          "path": "/products/13",
          "children":[
          {
          "id": 34,
          "name": "Diamond EDM Pickup",
          "link": true,
          "path": "/products/131"
        },
        {
          "id": 35,
          "name": "Current Pickup (Standard)",
          "link": true,
          "path": "/products/132"
        },
          ]
        },
   
        {
          "id": 36,
          "name": "Mineral",
          "link": true,
          "path": "/products/14"
        },
        {
          "id": 37,
          "name": "Rust Remover",
          "link": true,
          "path": "/products/15"
        },
        {
          "id": 42,
          "name": " Tube Electrode",
          "link": false,
          "path": "/products/15",
          "children":[
          {
          "id": 38,
          "name": "Copper Tube Electrode",
          "link": true,
          "path": "/products/161"
        },
        {
          "id": 39,
          "name": "Brass Tube Electrode",
          "link": true,
          "path": "/products/162"
        },
          ]
        },
        {
          "id": 43,
          "name": "Drill Guide",
          "link": false,
          "path": "/products/171",
          "children":[
          {
          "id": 40,
          "name": "Japanese Drill Guide",
          "link": true,
          "path": "/products/171"
        },
        {
          "id": 41,
          "name": "EDM Drill Guide (Standard)",
          "link": true,
          "path": "/products/172"
        }]
        }
       ]
    }
  ]

  // Get product category icons
  const getProductCategoryIcon = (name: string) => {
    if (name.includes('Non-Ferrous')) return <Layers className="w-3 h-3 text-blue-500" />;
    if (name.includes('Brazing')) return <Zap className="w-3 h-3 text-orange-500" />;
    if (name.includes('Consumables')) return <ShoppingCart className="w-3 h-3 text-green-500" />;
    return <Package className="w-3 h-3 text-yellow-500" />;
  };

  // Enhanced function to check if a path is active (including product subcategories)
  const isProductPathActive = (item: ProductItem): boolean => {
    if (item.path && location.pathname === item.path) {
      return true;
    }
    
    if (item.children) {
      return item.children.some(child => isProductPathActive(child));
    }
    
    return false;
  };

  // Enhanced function to check if any product is active
  const isProductsActive = (): boolean => {
    if (location.pathname === '/products') return true;
    return productsData.some(category => isProductPathActive(category));
  };

  // Toggle product category expansion
  const toggleProductCategory = (categoryId: number, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
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

  // Handle product item text click (for navigation)
  const handleProductTextClick = (item: ProductItem, event: React.MouseEvent) => {
    // Only navigate if item is linkable and has a path
    if (item.link && item.path) {
      event.stopPropagation();
      window.scrollTo(0, 0);
      setIsMenuOpen(false);
      setOpenDropdowns({});
    }
  };

  // Handle product item click (for items without children or non-linkable items)
  const handleProductItemClick = (item: ProductItem, event: React.MouseEvent) => {
    const hasChildren = item.children && item.children.length > 0;
    
    // If item has children, toggle expansion
    if (hasChildren) {
      event.preventDefault();
      toggleProductCategory(item.id, event);
    }
    
    // If item is linkable and has a path and no children, navigate
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
  
  // Enhanced isActive function to handle all paths correctly including product paths
  const isActive = (path: string) => {
    if (path === '/products') {
      return isProductsActive();
    }
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
      label: "Our Foundation",
      path: "/foundation",
      icon: <Folder className="h-3 w-3 mr-1" />,
      children: [
        { id: 21, label: "Our Legacy", path: "/foundation#legacy" },
        { id: 22, label: "Our Capabilities", path: "/infrastructure" },
        { id: 23, label: "Our Certifications", path: "/foundation#certifications" },
        { id: 24, label: "Make in India Movement", path: "/foundation#make-in-india" }
      ]
    },
    {
      id: 3,
      label: "Our Products",
      path: "/products",
      icon: <Box className="h-3 w-3 mr-1" />,
      children: [] // Will be populated dynamically from productsData
    },
    {
      id: 4,
      label: "Our Infrastructure",
      path: "/infrastructure",
      icon: <Building className="h-3 w-3 mr-1" />
    },
    {
      id: 5,
      label: "Our Customers",
      path: "/customers",
      icon: <Users className="h-3 w-3 mr-1" />
    },
    {
      id: 6,
      label: "Connect us",
      path: "/connect",
      icon: <MapPin className="h-3 w-3 mr-1" />
    }
  ];

  // Render product item recursively with enhanced click handling and active states
  const renderProductItem = (item: ProductItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedProductCategories.has(item.id);
    const paddingLeft = level * 12;
    const isClickable = item.link && item.path;
    const isItemActive = isProductPathActive(item);

    const ItemContent = () => (
      <div 
        className={cn(
          "flex items-center gap-2 p-2 rounded-md transition-all duration-300 text-xs",
          level === 0 ? 'font-semibold border-b border-gray-100 mb-1' : 
          level === 1 ? 'font-medium' : 
          'font-normal',
          // Enhanced active and hover states with dark backgrounds
          isItemActive 
            ? 'bg-brand-blue text-white shadow-lg' 
            : 'text-brand-blue hover:bg-brand-blue hover:text-white'
        )}
        style={{ paddingLeft: `${8 + paddingLeft}px` }}
      >
        <div className="flex-shrink-0">
          {getProductCategoryIcon(item.name)}
        </div>
        
        {/* Product Name - Clickable if linkable */}
        {isClickable ? (
          <Link
            to={item.path!}
            className={cn(
              "flex-1 capitalize truncate transition-all duration-300 font-medium underline-offset-2",
              isItemActive 
                ? "text-white" 
                : "text-inherit hover:text-white hover:underline"
            )} 
            title={item.name}
            onClick={(e) => {
              e.stopPropagation();
              handleNavigation();
              setOpenDropdowns({});
            }}
          >
            {item.name}
          </Link>
        ) : (
          <span 
            className={cn(
              "flex-1 capitalize truncate",
              hasChildren ? "cursor-pointer transition-colors" : "cursor-default"
            )} 
            title={item.name}
            onClick={hasChildren ? (e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleProductCategory(item.id, e);
            } : undefined}
          >
            {item.name}
          </span>
        )}

         {/* Chevron Button - Only show if has children */}
        {hasChildren && (
          <button
            className={cn(
              "flex-shrink-0 p-1 rounded transition-all duration-300 touch-manipulation",
              isItemActive 
                ? "hover:bg-slate-600 text-white" 
                : "hover:bg-gray-100 text-gray-500"
            )}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleProductCategory(item.id, e);
            }}
            type="button"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4 -rotate-90" />
            )}
          </button>
        )}
      </div>
    );

    return (
      <div key={item.id} style={{ breakInside: 'avoid', marginBottom: '2px' }}>
        <ItemContent />

        {hasChildren && isExpanded && (
          <div className="border-l border-gray-200 ml-4">
            {item.children!.map(child => renderProductItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  // Enhanced renderDropdownItem with dark active states
  const renderDropdownItem = (item: MenuItem, index: number, level: number = 0, parentKey: string = '') => {
    const hasChildren = item.children && item.children.length > 0;
    const itemKey = parentKey ? `${parentKey}-${index}` : `menu-${index}`;
    
    // Special handling for Products menu
    if (item.label === "Our Products") {
      const isProductsMenuActive = isProductsActive();
      
      return (
        <div key={itemKey} className={isMobile ? "border-t border-gray-100 first:border-t-0" : ""}>
          <button 
            data-dropdown={itemKey}
            className={cn(
              isMobile ? 
                "w-full flex justify-between items-center px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 border" : 
                "px-3 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center text-xs border",
              // Enhanced active state with dark background
              isProductsMenuActive || openDropdowns[itemKey] ? 
                "bg-brand-blue text-white shadow-lg border-slate-600" : 
                "text-brand-blue hover:bg-brand-blue hover:text-white border-transparent hover:border-slate-600 hover:shadow-lg"
            )} 
            onClick={(e) => toggleDropdown(e, itemKey)}
            onMouseEnter={() => {
              if (isDesktop && !isMobile) {
                setOpenDropdowns(prev => {
                  const newState = { ...prev };
                  Object.keys(newState).forEach(k => {
                    if (k !== itemKey) newState[k] = false;
                  });
                  newState[itemKey] = true;
                  return newState;
                });
              }
            }}
            aria-expanded={openDropdowns[itemKey]}
            aria-haspopup="true"
          >
            <span className="flex items-center">
              {item.icon}
              <Link to={item.path} className="text-inherit">
                {item.label}
              </Link>
            </span>
            <ChevronDown className={cn("h-3 w-3 transition-all duration-300", openDropdowns[itemKey] && "transform rotate-180")} />
          </button>
          
          {openDropdowns[itemKey] && (
            <div 
              ref={(ref) => addDropdownRef(itemKey, ref)}
              className={isMobile ? 
                "pl-3 mt-2 border-l-2 border-brand-gold ml-4 bg-white rounded-lg py-2 shadow-lg animate-slide-in-up max-h-80 overflow-y-auto" : 
                "absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 z-[9999] border border-brand-blue/10 animate-scale-in overflow-y-auto"}
              style={!isMobile ? { 
                width: '420px', 
                maxHeight: '70vh',
              } : {}}
            >
              {/* Product Categories */}
              <div className="px-2">
                {productsData.map(category => renderProductItem(category))}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 px-3 pt-2 mt-2">
                <Link
                  to="/products"
                  className={cn(
                    "block w-full text-center px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300",
                    isProductsActive()
                      ? "bg-brand-blue text-white"
                      : "bg-brand-blue text-white hover:bg-brand-blue"
                  )}
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

    // Regular menu item handling with enhanced dark active states
    if (!isMobile && !isTablet && hasChildren && level > 0) {
      return (
        <div key={itemKey} className="relative group/submenu">
          <button 
            className={cn(
              "flex w-full items-center justify-between px-3 py-2 transition-all duration-300 rounded-lg text-xs font-medium border",
              isActive(item.path)
                ? "bg-brand-blue text-white border-slate-600 shadow-lg"
                : "text-brand-blue hover:bg-brand-blue hover:text-white border-transparent hover:border-slate-600 hover:shadow-lg"
            )}
            onClick={(e) => e.preventDefault()}
            aria-haspopup="true"
          >
            <span className="font-semibold">{item.label}</span>
            <ChevronDown className="h-3 w-3 ml-2 transform -rotate-90 transition-transform group-hover/submenu:scale-110" />
          </button>
          <div className="absolute left-full top-0 mt-0 ml-2 w-60 bg-white rounded-xl shadow-2xl py-2 z-[9999] hidden group-hover/submenu:block border border-brand-blue/10 animate-scale-in">
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
                "w-full flex justify-between items-center px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 border" : 
                "px-3 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center text-xs border",
              isActive(item.path) || openDropdowns[itemKey] ? 
                "bg-brand-blue text-white shadow-lg border-slate-600" : 
                "text-brand-blue hover:bg-brand-blue hover:text-white border-transparent hover:border-slate-600 hover:shadow-lg"
            )} 
            onClick={(e) => toggleDropdown(e, itemKey)}
            aria-expanded={openDropdowns[itemKey]}
            aria-haspopup="true"
          >
            <span className="flex items-center">
              {item.icon}
              <Link to={item.path} className="text-inherit">
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
                "absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 z-[9999] border border-brand-blue/10 animate-scale-in overflow-y-auto"}
              style={!isMobile ? { width: '280px', maxHeight: '70vh' } : {}}
              onMouseLeave={() => {
                if (isDesktop && !isMobile) {
                  setOpenDropdowns(prev => ({...prev, [itemKey]: false}));
                }
              }}
            >              
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
    
    // Enhanced simple menu item with dark active states
    return (
      <Link 
        key={itemKey}
        to={item.path} 
        className={cn(
          isMobile ? 
            "block px-3 py-2 text-xs rounded-lg transition-all duration-300 font-semibold border" : 
            "block w-full text-left px-3 py-2 transition-all duration-300 rounded-lg text-xs font-semibold border",
          isActive(item.path) ? 
            "bg-brand-blue text-white border-slate-600 shadow-lg" : 
            "text-brand-blue hover:bg-brand-blue hover:text-white border-transparent hover:border-slate-600 hover:shadow-lg"
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
    <header className="fixed top-0 left-0 right-0 z-[9998] w-full flex flex-col bg-white shadow-xl border-b border-brand-blue/20 transition-all duration-300" ref={headerRef}>
      {/* Enhanced Top Info Bar - More compact */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-blue/95 text-white py-1 px-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4">
            <p className="font-medium animate-slide-in-left">Precision Engineered Wire Solutions Since 1982</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+911234567890" className="flex items-center hover:text-brand-gold transition-all duration-300 hover-scale group">
              <MessageCircle className="h-3 w-3 mr-1 group-hover:animate-glow" />
              <span className="font-medium text-xs">+91 9837053329</span>
            </a>
            <a href="mailto:Maheshwariwires@gmail.com" className="flex items-center hover:text-brand-gold transition-all duration-300 hover-scale group">
              <Mail className="h-3 w-3 mr-1 group-hover:animate-glow" />
              <span className="font-medium text-xs">Email-Maheshwariwires@gmail.com</span>
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

          {/* Enhanced Desktop Navigation - Fixed with consistent styling */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => {
              const itemKey = `menu-${index}`;
              
              if (item.children || item.label === "Our Products") {
                return (
                  <div key={itemKey} className="relative group" ref={(ref) => addDropdownRef(itemKey, ref)}>
                    <button 
                      data-dropdown={itemKey}
                      className={cn(
                        "px-2 py-1.5 rounded-lg font-semibold transition-all duration-300 flex items-center group relative overflow-hidden text-xs", 
                        isActive(item.path) || openDropdowns[itemKey] ? 
                          "bg-brand-blue text-white shadow-lg border border-slate-600" : 
                          "text-brand-blue hover:bg-brand-blue hover:text-white hover:shadow-lg border border-transparent hover:border-slate-600"
                      )} 
                      onClick={(e) => toggleDropdown(e, itemKey)}
                      onMouseEnter={() => {
                        if (isDesktop) {
                          setOpenDropdowns(prev => {
                            const newState = { ...prev };
                            Object.keys(newState).forEach(k => {
                              if (k !== itemKey) newState[k] = false;
                            });
                            newState[itemKey] = true;
                            return newState;
                          });
                        }
                      }}
                      aria-expanded={openDropdowns[itemKey]}
                    >
                      <span className="flex items-center relative z-10">
                        <span className="hidden xl:inline">{item.icon}</span>
                        <span className={cn("whitespace-nowrap", item.icon ? "xl:ml-1" : "")}>
                          <Link to={item.path} className="text-inherit">
                            {item.label}
                          </Link>
                        </span>
                      </span>
                      <ChevronDown className={cn("ml-1 h-3 w-3 transition-transform duration-300", openDropdowns[itemKey] && "transform rotate-180")} />
                      
                      <div className={cn(
                        "absolute inset-0 transition-transform duration-300 origin-left",
                        isActive(item.path) || openDropdowns[itemKey]
                          ? "bg-brand-blue scale-x-100"
                          : "bg-gradient-to-r from-slate-700/20 to-slate-800/20 scale-x-0 group-hover:scale-x-100"
                      )}></div>
                    </button>

                    {openDropdowns[itemKey] && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-2xl py-3 z-[9999] border border-brand-blue/10 animate-scale-in overflow-y-auto"
                        style={item.label === 'Our Products' ? { 
                          width: '420px', 
                          maxHeight: '70vh',
                        } : { width: '280px', maxHeight: '70vh' }}
                        onMouseLeave={() => {
                          if (isDesktop) {
                            setOpenDropdowns(prev => ({...prev, [itemKey]: false}));
                          }
                        }}
                      >
                        {item.label === "Our Products" ? (
                          <>
                            {/* Product Categories */}
                            <div className="px-2">
                              {productsData.map(category => renderProductItem(category))}
                            </div>

                            {/* Footer */}
                            <div className="border-t border-gray-200 px-3 pt-2 mt-2">
                              <Link
                                to="/products"
                                className={cn(
                                  "block w-full text-center px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300",
                                  isProductsActive()
                                    ? "bg-brand-blue text-white"
                                    : "bg-brand-blue text-white hover:bg-brand-blue"
                                )}
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
              
              // Enhanced simple navigation items with dark active states
              return (
                <Link 
                  key={itemKey}
                  to={item.path} 
                  className={cn(
                    "px-2 py-1.5 rounded-lg font-semibold transition-all duration-300 flex items-center group relative overflow-hidden text-xs whitespace-nowrap", 
                    isActive(item.path) ? 
                      "bg-brand-blue text-white shadow-lg border border-slate-600" : 
                      "text-brand-blue hover:bg-brand-blue hover:text-white hover:shadow-lg border border-transparent hover:border-slate-600"
                  )} 
                  onClick={handleNavigation}
                >
                  <span className="flex items-center relative z-10">
                    <span className="hidden xl:inline">{item.icon}</span>
                    <span className={cn(item.icon ? "xl:ml-1" : "")}>{item.label}</span>
                  </span>
                  
                  <div className={cn(
                    "absolute inset-0 transition-transform duration-300 origin-left",
                    isActive(item.path)
                      ? "bg-brand-blue scale-x-100"
                      : "bg-gradient-to-r from-slate-700/20 to-slate-800/20 scale-x-0 group-hover:scale-x-100"
                  )}></div>
                </Link>
              );
            })}
          </nav>

          {/* Enhanced Mobile Menu Button - Smaller */}
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "md:hidden relative overflow-hidden transition-all duration-300 hover:scale-110 w-8 h-8",
              isMenuOpen ? "bg-brand-blue text-white shadow-lg" : "text-brand-blue hover:bg-brand-blue hover:text-white border border-brand-blue/20"
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
              "absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 transform transition-all duration-300",
              isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            )}></div>
          </Button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation - Fixed with dark active states */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[60px] sm:top-[70px] left-0 right-0 bg-white shadow-2xl border-b border-brand-blue/20 animate-slide-in-up z-[9997] max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="container mx-auto flex flex-col space-y-1 p-3">
            <div className="border-b border-brand-blue/20 pb-3 mb-3 bg-gradient-to-r from-gray-50 to-white rounded-lg p-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a href="tel:+919837053329" className="flex items-center px-2 py-1.5 text-xs text-brand-blue hover:bg-brand-blue hover:text-white rounded-lg transition-all duration-300 hover-scale group border border-brand-blue/20">
                  <Phone className="h-3 w-3 mr-2 text-brand-gold group-hover:animate-glow" />
                  <span className="font-semibold">+91 9837053329</span>
                </a>
                <a href="mailto:Maheshwariwires@gmail.com" className="flex items-center px-2 py-1.5 text-xs text-brand-blue hover:bg-brand-blue hover:text-white rounded-lg transition-all duration-300 hover-scale group border border-brand-blue/20">
                  <Mail className="h-3 w-3 mr-2 text-brand-gold group-hover:animate-glow" />
                  <span className="font-semibold">Email Us</span>
                </a>
              </div>
            </div>

            {menuItems.map((item, index) => {
              const itemKey = `mobile-menu-${index}`;
                
              if (item.children || item.label === "Our Products") {
                return renderDropdownItem(item, index, 0, 'mobile');
              }
              
              // Enhanced mobile navigation items with dark active states
              return (
                <Link 
                  key={itemKey}
                  to={item.path} 
                  className={cn(
                    "px-2 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center group relative overflow-hidden text-xs border", 
                    isActive(item.path) ? 
                      "bg-brand-blue text-white shadow-lg border-slate-600" : 
                      "text-brand-blue hover:bg-brand-blue hover:text-white border-transparent hover:border-slate-600 hover:shadow-lg"
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
                  
                  <div className={cn(
                    "absolute inset-0 transition-transform duration-300 origin-left",
                    isActive(item.path)
                      ? "bg-brand-blue scale-x-100"
                      : "bg-gradient-to-r from-slate-700/20 to-slate-800/20 scale-x-0 group-hover:scale-x-100"
                  )}></div>
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