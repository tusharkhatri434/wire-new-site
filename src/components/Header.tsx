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
  Users
} from "lucide-react";

// Company logo
import CompanyLogo from "./CompanyLogo";

interface HeaderProps {
  scrolled?: boolean;
}

// Define the menu structure
interface MenuItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

const Header = ({
  scrolled = false
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
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

  // Enhanced menu structure with reorganized products
  const menuItems: MenuItem[] = [
    {
      label: "Home",
      path: "/",
      icon: <Home className="h-3 w-3 mr-1" />
    },
    {
      label: "Foundation",
      path: "/foundation",
      icon: <Folder className="h-3 w-3 mr-1" />,
      children: [
        { label: "Legacy", path: "/foundation#legacy" },
        // { label: "Foundation (MIC)", path: "/foundation#foundation" },
        // { label: "Maheshwari Wires", path: "/foundation#maheshwari-wires" },
        { label: "Capabilities", path: "/infrastructure" },
        { label: "Certifications", path: "/foundation#certifications" },
        { label: "Make in India Movement", path: "/foundation#make-in-india" }
      ]
    },
    {
      label: "Products",
      path: "/products",
      icon: <Box className="h-3 w-3 mr-1" />,
      children: [
        // EDM Wire
        { label: "EDM Wire", path: "/products#edm-wire" },
        { label: "• M-Cut Plain Wire", path: "/products#edm-wire-mcut-plain" },
        { label: "• M-Cut Zincor Wire", path: "/products#edm-wire-zincor" },
        { label: "• M-Cut Dynamic Diffused", path: "/products#edm-wire-dynamic" },
        
        // Brazing Wire
        { label: "Brazing Wire", path: "/products#brazing-wire" },
        { label: "• Brass Brazing Wire", path: "/products#brass-brazing-wire" },
        { label: "• Brass Brazing Rings", path: "/products#brass-brazing-rings" },
        { label: "• PhosCopper", path: "/products#phoscopper" },
        
        // Welding Wire
        { label: "Welding Wire", path: "/products#welding-wire" },
        { label: "• Copper MIG Wire", path: "/products#copper-mig-welding" },
        { label: "• Filler Wire", path: "/products#filler-wire" },
        { label: "• Sudronic Wire", path: "/products#sudronic-wire" },
        
        // Copper Wire
        { label: "Copper Wire", path: "/products#copper-wire" },
        { label: "• Phosphor Bronze Wire", path: "/products#phosphor-bronze" },
        { label: "• Brass Wire", path: "/products#brass-wire" },
        
        // Copper Extrusions
        { label: "Copper Extrusions", path: "/products#copper-extrusions" },
        { label: "• Copper Busbars", path: "/products#copper-busbars" },
        { label: "• Tube Electrode", path: "/products#tube-electrode" }
      ]
    },
    {
      label: "Infrastructure",
      path: "/infrastructure",
      icon: <Building className="h-3 w-3 mr-1" />
    },
    {
      label: "Customers",
      path: "/customers",
      icon: <Users className="h-3 w-3 mr-1" />
    },
    {
      label: "Connect",
      path: "/connect",
      icon: <MapPin className="h-3 w-3 mr-1" />
    }
  ];

  // Render a dropdown item (recursive)
  const renderDropdownItem = (item: MenuItem, index: number, level: number = 0, parentKey: string = '') => {
    const hasChildren = item.children && item.children.length > 0;
    const itemKey = parentKey ? `${parentKey}-${index}` : `menu-${index}`;
    
    if (!isMobile && hasChildren && level > 0) {
      return (
        <div key={itemKey} className="relative group/submenu">
          <button 
            className="flex w-full items-center justify-between px-3 py-2 text-brand-blue hover:bg-white hover:text-brand-blue transition-all duration-300 rounded-lg text-xs font-medium border border-transparent hover:border-brand-blue/20 hover:shadow-lg"
            onClick={(e) => e.preventDefault()}
            aria-haspopup="true"
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
              {item.label}
            </span>
            <ChevronDown className={cn("h-3 w-3 transition-all duration-300", openDropdowns[itemKey] && "transform rotate-180")} />
          </button>
          
          {openDropdowns[itemKey] && (
            <div 
              ref={(ref) => addDropdownRef(itemKey, ref)}
              className={isMobile ? 
                "pl-3 mt-2 border-l-2 border-brand-gold ml-4 bg-white rounded-lg py-2 shadow-lg animate-slide-in-up" : 
                "absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl py-3 z-[60] border border-brand-blue/10 animate-scale-in overflow-y-auto"}
              style={!isMobile && item.label === 'Products' ? { 
                width: '500px', 
                maxHeight: '70vh',
                columnCount: 2,
                columnGap: '1rem',
                columnFill: 'balance'
              } : !isMobile ? { width: '280px', maxHeight: '70vh' } : {}}
            >
              {level === 0 && !isMobile && (
                <Link 
                  to={item.path} 
                  className="block w-full text-left px-3 py-2 text-brand-blue font-bold hover:bg-gray-50 transition-all duration-300 border-b border-brand-blue/10 rounded-t-lg text-xs mb-2" 
                  style={{ breakInside: 'avoid', columnSpan: item.label === 'Products' ? 'all' : 'none' }}
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
              )}
              
              <div className={item.label === 'Products' && !isMobile ? "space-y-1" : "space-y-1"}>
                {item.children?.map((child, childIndex) => (
                  <div key={childIndex} style={!isMobile && item.label === 'Products' ? { breakInside: 'avoid', marginBottom: '4px' } : {}}>
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
              
              if (item.children) {
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
                          {item.label}
                        </span>
                      </span>
                      <ChevronDown className={cn("ml-1 h-3 w-3 transition-transform duration-300", openDropdowns[itemKey] && "transform rotate-180")} />
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-brand-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>

                    {openDropdowns[itemKey] && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-2xl py-3 z-50 border border-brand-blue/10 animate-scale-in overflow-y-auto"
                        style={item.label === 'Products' ? { 
                          width: '500px', 
                          maxHeight: '70vh',
                        } : { width: '280px', maxHeight: '70vh' }}
                        onMouseLeave={isDesktop ? () => setOpenDropdowns(prev => ({...prev, [itemKey]: false})) : undefined}
                      >
                        <Link 
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
                        </Link>
                        
                        <div className={item.label === 'Products' ? "grid grid-cols-2 gap-1 px-2" : "space-y-1"}>
                          {item.children.map((child, childIndex) => 
                            renderDropdownItem(child, childIndex, 1, itemKey)
                          )}
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
                
              if (item.children) {
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
