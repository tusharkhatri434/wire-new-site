import React from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import { ArrowUp, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import WhatsappIcon from "./WhatsappIcon";

const productsData = [
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
  ];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [expandedCategories, setExpandedCategories] = React.useState({});

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Helper function to get all linkable products from a category
  const getLinkableProducts = (category, maxItems = 6) => {
    const products = [];
    
    const addProducts = (items, depth = 0) => {
      if (products.length >= maxItems) return;
      
      items?.forEach(item => {
        if (products.length >= maxItems) return;
        
        if (item.link) {
          products.push({
            name: item.name,
            path: item.path,
            depth
          });
        }
        
        if (item.children && products.length < maxItems) {
          addProducts(item.children, depth + 1);
        }
      });
    };

    addProducts(category.children);
    return products;
  };

  // Split products into columns for better layout
  const getProductColumns = () => {
    const columns = [];
    productsData.forEach((category, index) => {
      const products = getLinkableProducts(category, 8);
      if (products.length > 0) {
        columns.push({
          title: category.name,
          products: products,
          id: category.id
        });
      }
    });
    return columns;
  };

  const productColumns = getProductColumns();

  return (
    <footer className="bg-brand-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative container mx-auto py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-6">
          
          {/* Company Info - Takes 2 columns on xl screens */}
          <div className="sm:col-span-2 xl:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-3 bg-white rounded-lg p-2 w-fit">
                <div className="w-48 sm:w-52 lg:w-56 h-10 sm:h-12 lg:h-14 flex-shrink-0">
                  <img 
                    alt="Maheshwari Wires Logo" 
                    className="h-full w-auto object-contain filter brightness-110 contrast-110" 
                    src="/lovable-uploads/4b08319e-d6ea-4de7-b408-d2e3836e50e1.png" 
                  />
                </div>
              </div>
            </div>
            
            <p className="text-white mb-6 leading-relaxed text-sm lg:text-base max-w-md">
              For over four decades, Maheshwari Industrial Corporation has pioneered the evolution of the wire manufacturing industry in India, delivering world-class solutions with integrity and excellence.
            </p>
            
            {/* Social Media */}
            <div className="flex flex-wrap gap-3 mb-6 items-center">
              <a
                  href={"http://wa.me/9837053329"}
                  className="group w-10 h-10 bg-blue-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 transform hover:scale-110 border border-blue-700 hover:border-brand-gold"
                  aria-label={`Follow us on whatsapp`}
                >
                  <WhatsappIcon/>
                </a>
                <a
                  href={""}
                  className="group w-10 h-10 bg-blue-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 transform hover:scale-110 border border-blue-700 hover:border-brand-gold"
                  aria-label={`Follow us on linkedin`}
                >
                  <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="text-white text-sm font-semibold mb-3 flex items-center">
                <div className="w-6 h-0.5 bg-brand-gold mr-2"></div>
                Quick Contact
              </h4>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span className="text-blue-100">+91-9837002076</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                   <Phone className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span className="text-blue-100">+91-9457815966</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span className="text-blue-100">Maheshwariwires@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-gold text-base lg:text-lg font-bold mb-4 lg:mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-gold"></div>
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Our Foundation", path: "/foundation" },
                { label: "Our Infrastructure", path: "/infrastructure" },
                { label: "Our Customers", path: "/customers" },
                { label: "Contact Us", path: "/connect" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="group text-blue-100 hover:text-brand-gold transition-all duration-300 text-sm flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transform transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Product Columns */}
          {productColumns.slice(0, 3).map((column, columnIndex) => (
            <div key={column.id} className="lg:block">
              <h3 className="text-brand-gold text-base lg:text-lg font-bold mb-4 lg:mb-6 relative">
                {column.title}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-gold"></div>
              </h3>
              
              {/* Mobile Expandable */}
              <div className="lg:hidden">
                <button
                  onClick={() => toggleCategory(column.id)}
                  className="flex items-center justify-between w-full text-left text-blue-100 hover:text-brand-gold transition-colors text-sm mb-2"
                >
                  <span>View Products</span>
                  <ChevronRight 
                    className={`h-4 w-4 transform transition-transform ${
                      expandedCategories[column.id] ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
                
                {expandedCategories[column.id] && (
                  <ul className="space-y-2">
                    {column.products.map((product, index) => (
                      <li key={index}>
                        <Link
                          to={product.path}
                          className="text-blue-200 hover:text-brand-gold transition-colors duration-300 text-xs block py-1"
                          // style={{ paddingLeft: `${product.depth * 8}px` }}
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Desktop Always Visible */}
              <ul className="hidden lg:block space-y-2 lg:space-y-3">
                {column.products.map((product, index) => (
                  <li key={index}>
                    <Link
                      to={product.path}
                      className="group text-blue-100 hover:text-brand-gold transition-all duration-300 text-sm flex items-start"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 mt-0.5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transform transition-transform duration-300 leading-tight">
                        {product.name}
                      </span>
                    </Link>
                  </li>
                ))}
                {/* {column.products.length > 6 && (
                  <li>
                    <Link
                      to="/products"
                      className="text-brand-gold hover:text-yellow-300 transition-colors text-xs font-medium flex items-center"
                    >
                      View All <ChevronRight className="h-3 w-3 ml-1" />
                    </Link>
                  </li>
                )} */}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Address Section */}
        <div className="mt-12 pt-8 border-t border-blue-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white text-sm font-semibold mb-3 flex items-center">
                <MapPin className="h-4 w-4 text-brand-gold mr-2" />
                Head Office
              </h4>
              <p className="text-blue-100 text-sm leading-relaxed">
               19 A & B, Mohkampur Industrial Area <br></br> Phase-II, Rithani, Meerut, U.P, India, 250103.
               </p>
            </div>
            
            <div>
              <h4 className="text-white text-sm font-semibold mb-3 flex items-center">
                <Clock className="h-4 w-4 text-brand-gold mr-2" />
                Business Hours
              </h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Monday - Friday : 
                9:00 AM - 6:00 PM<br />
                Saturday : 
                9:00 AM - 1:00 PM<br />
                Sunday : Closed
              </p>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-3">
                Quality Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {['ISO 9001:2015', 'CE Certified', 'Export Quality'].map((cert, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-800/50 rounded text-xs text-blue-100 border border-blue-700">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-blue-800/50 bg-blue-950/50 backdrop-blur-sm">
        <div className="container mx-auto py-4 lg:py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-blue-200 text-xs sm:text-sm text-center sm:text-left">
              <p>© 2025 Maheshwari Industrial Corporation. All rights reserved.</p>
              <div>
               Website Developed by : 
               <a className="underline" href="https://www.pixel8ai.com/" target="_blank" rel="noopener noreferrer">
               Team Pixel8ai{" "} 
               </a>
               <a className="underline" href="https://www.sharadupadhyay.com/" target="_blank" rel="noopener noreferrer">
                 & Promoted by : Team Exabyte{" "} 
               </a>
              </div>
            </div>
          
            {/* <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/privacy" className="text-blue-200 hover:text-brand-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-blue-200 hover:text-brand-gold transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="text-blue-200 hover:text-brand-gold transition-colors">
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-brand-gold text-brand-blue p-3 rounded-full hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl z-50 transform hover:scale-110 border-2 border-brand-gold hover:border-yellow-500"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </footer>
  );
};

export default Footer;