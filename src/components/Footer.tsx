
import React from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import { ArrowUp, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

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

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* <CompanyLogo className="text-white" /> */}
              <div className="flex items-center space-x-3 bg-white rounded-sm">
                    <div className="w-52 2xl:w-60 h-12 sm:h-14 md:h-16 lg:h-18 flex-shrink-0">
                      <img alt="Maheshwari Wires Logo" className="h-full w-auto object-contain filter brightness-110 contrast-110" src="/lovable-uploads/4b08319e-d6ea-4de7-b408-d2e3836e50e1.png" />
                    </div>
                  </div>
            </div>
            <p className="text-blue-100 ml-3 mb-6 leading-relaxed text-sm">
              For over four decades, Maheshwari Industrial Corporation has pioneered the evolution of the wire manufacturing industry in India, delivering world-class solutions with integrity and excellence.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "#" }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 transform hover:scale-110"
                  aria-label={`Follow us on ${Icon.name}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-gold"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/foundation" },
                { label: "Services", path: "/infrastructure" },
                { label: "Contact Us", path: "/connect" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-blue-100 hover:text-brand-gold transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories - Column 1 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative">
              Wire Products
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-gold"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "EDM Wire", path: "/products#edm-wire" },
                { label: "Brazing Wire", path: "/products#brazing-wire" },
                { label: "Welding Wire", path: "/products#welding-wire" },
                { label: "Copper Wire", path: "/products#copper-wire" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-blue-100 hover:text-brand-gold transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories - Column 2 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative">
              Specialized Products
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-gold"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Copper Extrusions", path: "/products#copper-extrusions" },
                { label: "Zari Wire", path: "/products#zari-wire" },
                { label: "Molly Wire", path: "/products#molly-wire" },
                { label: "Consumables", path: "/products#consumables" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-blue-100 hover:text-brand-gold transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative">
              Contact Details
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-gold"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-brand-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 leading-relaxed">
                    Industrial Area, Sector 5<br />
                    Noida, Uttar Pradesh<br />
                    India - 201301
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span className="text-blue-100">+91 1234 567 890</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span className="text-blue-100">info@maheshwariwires.com</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span className="text-blue-100">9:00 AM - 6:00 PM (Mon-Sat)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2025 Maheshwari Industrial Corporation. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/connect" className="text-blue-200 hover:text-brand-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/connect" className="text-blue-200 hover:text-brand-gold transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-brand-gold text-brand-blue p-3 rounded-full hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl z-50 transform hover:scale-110"
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
