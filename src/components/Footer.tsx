import React from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import { ArrowUp, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import WhatsappIcon from "./WhatsappIcon";

const productsFooter = {
    "non_ferrous_wires": {
      "category_name": "Non-Ferrous Wires",
      "products": {
        "edm_wire": {
          "id": "nfw_001",
          "name": "EDM Wire",
          "link": "/products/5",
          "hasLink": true,
          "children": [
            {
              "id": "nfw_001_001",
              "name": "Plain Brass wire",
              "link": "/products/1",
              "hasLink": true
            },
            {
              "id": "nfw_001_002",
              "name": "Diffused wire",
              "link": "/products/2",
              "hasLink": true
            },
            {
              "id": "nfw_001_003",
              "name": "Zinc Diffused Coated wire",
              "link": "/products/3",
              "hasLink": true
            },
            {
              "id": "nfw_001_004",
              "name": "Zinc Coated wire",
              "link": "/products/4",
              "hasLink": true
            }
          ]
        },
        "zari_wire": {
          "id": "nfw_002",
          "name": "Zari Wire",
          "link": "/products/6",
          "hasLink": true,
          "children": []
        },
        "copper_extrusions": {
          "id": "nfw_003",
          "name": "Copper Extrusions",
          "link": "/products/7",
          "hasLink": true,
          "children": []
        },
        "molly_wire": {
          "id": "nfw_004",
          "name": "Molly Wire",
          "link": "/products/8",
          "hasLink": true,
          "children": []
        },
        "copper_wire": {
          "id": "nfw_005",
          "name": "Copper Wire",
          "link": "/products/9",
          "hasLink": true,
          "children": []
        }
      }
    },
    "welding_and_brazing": {
      "category_name": "Welding and Brazing",
      "products": {
        "copper_wire_for_induction_brazing": {
          "id": "wab_001",
          "name": "Copper Wire for Induction Brazing",
          "link": "/products/18",
          "hasLink": true,
          "children": []
        },
        "brazing_wire": {
          "id": "wab_002",
          "name": "Brass Brazing Wire",
          "link": "/products/19",
          "hasLink": true,
          "children": [
            {
              "id": "wab_002_001",
              "name": " Induction Brazing Rings",
              "link": "/products/20",
              "hasLink": true
            },
            {
              "id": "wab_002_002",
              "name": "Brass Brazing RBCuZn-c",
              "link": "/products/21",
              "hasLink": true
            },
            {
              "id": "wab_002_003",
              "name": "Copper Phosphor Brazing Wire",
              "link": "/products/22",
              "hasLink": true
            }
          ]
        },
        "welding_wire": {
          "id": "wab_003",
          "name": "Welding Wire",
          "link": "/products/201",
          "hasLink": true,
          "children": []
        },
        "copper_alloy": {
          "id": "wab_004",
          "name": "Copper Alloy",
          "hasLink": false,
          "children": [
            {
              "id": "wab_004_001",
              "name": "Er Cu Sia",
              "link": "/products/23",
              "hasLink": true
            },
            {
              "id": "wab_004_002",
              "name": "Er Cu",
              "link": "/products/24",
              "hasLink": true
            },
            {
              "id": "wab_004_003",
              "name": "Er Cu SnC",
              "link": "/products/25",
              "hasLink": true
            },
            {
              "id": "wab_004_004",
              "name": "Er Cu Sn A",
              "link": "/products/26",
              "hasLink": true
            },
            {
              "id": "wab_004_005",
              "name": "CuAIA1",
              "link": "/products/27",
              "hasLink": true
            },
            {
              "id": "wab_004_006",
              "name": "CuAIA2",
              "link": "/products/28",
              "hasLink": true
            },
            {
              "id": "wab_004_007",
              "name": "Sufronic",
              "link": "/products/29",
              "hasLink": true
            }
          ]
        },
        "aluminum": {
          "id": "wab_005",
          "name": "Aluminum",
          "hasLink": false,
          "children": [
            {
              "id": "wab_005_001",
              "name": "4043",
              "link": "/products/30",
              "hasLink": true
            },
            {
              "id": "wab_005_002",
              "name": "5357",
              "link": "/products/31",
              "hasLink": true
            },
            {
              "id": "wab_005_003",
              "name": "4047",
              "link": "/products/32",
              "hasLink": true
            }
          ]
        }
      }
    },
    "consumables": {
      "category_name": "Consumables",
      "products": {
        "resin": {
          "id": "con_001",
          "name": "Resin",
          "link": "/products/10",
          "hasLink": true,
          "children": []
        },
        "ointment_oil": {
          "id": "con_002",
          "name": "Ointment Oil",
          "link": "/products/11",
          "hasLink": true,
          "children": []
        },
        "filter": {
          "id": "con_003",
          "name": "Filter",
          "link": "/products/12",
          "hasLink": true,
          "children": []
        },
        "current_pickup": {
          "id": "con_004",
          "name": "Current Pickup",
          "link": "/products/13",
          "hasLink": true,
          "children": [
            {
              "id": "con_004_001",
              "name": "Diamond EDM",
              "link": "/products/131",
              "hasLink": true
            },
            {
              "id": "con_004_002",
              "name": "Current Pickup",
              "link": "/products/132",
              "hasLink": true
            }
          ]
        },
        "mineral": {
          "id": "con_005",
          "name": "Mineral",
          "link": "/products/14",
          "hasLink": true,
          "children": []
        },
        "rust_remover": {
          "id": "con_006",
          "name": "Rust Remover",
          "link": "/products/15",
          "hasLink": true,
          "children": []
        },
        "tube_electrode": {
          "id": "con_007",
          "name": "Tube Electrode",
          "hasLink": false,
          "children": [
            {
              "id": "con_007_001",
              "name": "Copper Tube",
              "link": "/products/161",
              "hasLink": true
            },
            {
              "id": "con_007_002",
              "name": "Brass Tube",
              "link": "/products/162",
              "hasLink": true
            }
          ]
        },
        "drill_guide": {
          "id": "con_008",
          "name": "DrillGuide",
          "hasLink": false,
          "children": [
            {
              "id": "con_008_001",
              "name": "Japanese Drill Guide",
              "link": "/products/171",
              "hasLink": true
            },
            {
              "id": "con_008_002",
              "name": "EDM Drill Guide",
              "link": "/products/172",
              "hasLink": true
            }
          ]
        }
      }
    }
  };

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [expandedCategories, setExpandedCategories] = React.useState({});
  const [expandedProducts, setExpandedProducts] = React.useState({});

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

  const toggleCategory = (categoryKey) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const toggleProduct = (productKey) => {
    setExpandedProducts(prev => ({
      ...prev,
      [productKey]: !prev[productKey]
    }));
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-3">
          
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
                  href={"https://in.linkedin.com/company/maheshwari-wires"}
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
                <span className="text-blue-100">+91-9837053329</span>
              </div>
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
                <a href="mailto:Maheshwariwires@gmail.com" className="underline underline-offset-4">
                <span className="text-blue-100">Maheshwariwires@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-gold text-base lg:text-lg font-bold mb-4 lg:mb-6 relative">
              Quick Links
              {/* <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-gold"></div> */}
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Our Foundation", path: "/foundation" },
                { label: "Our Products", path: "/pr" },
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

          {/* Products Display - Integrated directly into Footer */}
          {Object.entries(productsFooter).map(([categoryKey, category]) => (
            <div key={categoryKey} className="lg:col-span-1">
              <div className="mb-4">
                <button
                  onClick={() => toggleCategory(categoryKey)}
                  className="flex items-center gap-1 w-full text-left group"
                  aria-expanded={expandedCategories[categoryKey]}
                >
                  <h3 className="text-brand-gold text-base lg:text-lg font-bold relative group-hover:text-yellow-400 transition-colors">
                    {category.category_name}
                    {/* <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-gold group-hover:w-12 transition-all duration-300"></div> */}
                  </h3>
                  <ChevronDown 
                    className={`h-4 w-4 text-brand-gold transition-transform duration-300 lg:hidden ${
                      expandedCategories[categoryKey] ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              <div className={`space-y-2 lg:space-y-3 ${
                expandedCategories[categoryKey] ? 'block' : 'hidden lg:block'
              }`}>
                {Object.entries(category.products).map(([productKey, product]) => (
                  <div key={product.id}>
                    {/* Main Product */}
                    <div className="flex items-center gap-1">
                      {product.hasLink ? (
                        <Link
                          to={product.link}
                          className="group text-sm flex items-center text-blue-100 hover:text-brand-gold transition-all duration-300"
                        >
                          <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                          <span className="group-hover:translate-x-1 transform transition-transform duration-300">
                            {product.name}
                          </span>
                        </Link>
                      ) : (
                        <div
                          className="group text-sm flex items-center text-blue-100 hover:text-brand-gold transition-all duration-300"
                        >
                          <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                          <span className="group-hover:translate-x-1 transform transition-transform duration-300">
                            {product.name}
                          </span>
                        </div>
                      )}
                      
                      {product.children && product.children.length > 0 && (
                        <button
                          onClick={() => toggleProduct(product.id)}
                          className="p-1 text-blue-300 hover:text-brand-gold transition-colors"
                          aria-label={`Toggle ${product.name} submenu`}
                        >
                          <ChevronDown 
                            className={`h-3 w-3 transition-transform duration-300 ${
                              expandedProducts[product.id] ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Sub Products */}
                    {product.children && product.children.length > 0 && (
                      <div className={`ml-4 mt-2 space-y-1 border-l-2 border-blue-800/30 pl-3 ${
                        expandedProducts[product.id] ? 'block' : 'hidden'
                      }`}>
                        {product.children.map((child) => (
                          child.hasLink ? (
                            <Link
                              key={child.id}
                              to={child.link}
                              className="group text-xs flex items-center text-blue-200 hover:text-brand-gold transition-all duration-300"
                            >
                              <ChevronRight className="h-2 w-2 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
                              <span className="group-hover:translate-x-1 transform transition-transform duration-300">
                                {child.name}
                              </span>
                            </Link>
                          ) : (
                              <div
                              key={child.id}
                              className="group text-xs flex items-center text-blue-200 hover:text-brand-gold transition-all duration-300"
                            >
                              <ChevronRight className="h-2 w-2 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
                              <span className="group-hover:translate-x-1 transform transition-transform duration-300">
                                {child.name}
                              </span>
                            </div>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
                 & Promoted by : 
                <a className="underline" href="https://www.sharadupadhyay.com/" target="_blank" rel="noopener noreferrer">
                 Team Exabyte{" "} 
               </a>
              </div>
            </div>
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