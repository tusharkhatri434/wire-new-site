
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "./Header";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Handle scroll to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top when route changes (unless there's a hash)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
    
    // Handle anchor links when route changes
    const handleAnchorLinks = () => {
      const hash = location.hash;
      if (hash) {
        // Delay to ensure page content is loaded
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            // Add offset for header (adjusted for mobile vs desktop)
            const headerOffset = isMobile ? 80 : 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 200);
      }
    };
    
    handleAnchorLinks();
  }, [location, isMobile]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header scrolled={scrolled} />
      <main className={cn("flex-1 w-full", {
        "pt-12 md:pt-14": true, // Adjusted for smaller header
      })}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
