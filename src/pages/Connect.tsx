
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, Clock, Globe, Award } from "lucide-react";

const Connect = () => {
  return (
    <div className="flex flex-col">
      <HeroSection 
        title="Connect With Us" 
        subtitle="Ready to discuss your wire requirements? Our technical experts are here to help you find the perfect solution for your specific needs."
        backgroundImage="/lovable-uploads/6ee12984-0671-4f3c-aa77-3720b1bbe079.png"
        buttonText="Contact Us Now"
        buttonLink="#contact-form"
        className="min-h-[60vh]"
      />

      {/* Contact Form Section */}
      <AnimatedSection animation="fade-in">
        <section id="contact-form" className="section">
          <div className="container">
            <SectionHeading 
              title="Get in Touch" 
              subtitle="Whether you need technical specifications, custom solutions, or partnership opportunities, we're here to help."
            />
            
            <EnhancedContactForm className="mt-12" />
          </div>
        </section>
      </AnimatedSection>

      {/* Additional Info Section */}
      <AnimatedSection animation="slide-left">
        <section className="section bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container">
            <SectionHeading 
              title="Why Choose Maheshwari Wires?" 
              subtitle="When you partner with us, you get more than just products – you get a commitment to excellence."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="glass p-6 rounded-xl depth-1 hover-lift transition-all duration-300">
                <Award className="h-12 w-12 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-blue mb-3 font-poppins">75+ Years Legacy</h3>
                <p className="text-gray-600 font-montserrat">Three generations of expertise in metallurgy and wire manufacturing.</p>
              </div>
              
              <div className="glass p-6 rounded-xl depth-1 hover-lift transition-all duration-300">
                <Globe className="h-12 w-12 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-blue mb-3 font-poppins">Global Standards</h3>
                <p className="text-gray-600 font-montserrat">International quality certifications and compliance with global manufacturing standards.</p>
              </div>
              
              <div className="glass p-6 rounded-xl depth-1 hover-lift transition-all duration-300">
                <Clock className="h-12 w-12 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-blue mb-3 font-poppins">Fast Response</h3>
                <p className="text-gray-600 font-montserrat">24-hour response time for all technical inquiries and custom solution requests.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Connect;
