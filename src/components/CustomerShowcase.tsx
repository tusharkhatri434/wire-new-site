
import React from 'react';
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { Building2, Factory, Zap, Shield, Atom, Rocket, Users, MapPin, Award, Globe, Target, CheckCircle, Settings } from "lucide-react";

const CustomerShowcase = () => {
  const defenseBranches = [
    {
      name: "Ordnance Factory, Jabalpur",
      icon: <Factory className="h-8 w-8 text-white" />,
      description: "Leading defense manufacturing unit specializing in ammunition and ordnance equipment",
      location: "Jabalpur, Madhya Pradesh",
      partnership: "Since 2010"
    },
    {
      name: "Ordnance Factory, Cossipore", 
      icon: <Factory className="h-8 w-8 text-white" />,
      description: "Premier defense establishment for artillery and weapon systems manufacturing",
      location: "Kolkata, West Bengal",
      partnership: "Since 2012"
    },
    {
      name: "Ordnance Factory, Kanpur",
      icon: <Factory className="h-8 w-8 text-white" />,
      description: "Critical defense manufacturing facility for various ordnance components",
      location: "Kanpur, Uttar Pradesh", 
      partnership: "Since 2008"
    },
    {
      name: "Small Arms Factory",
      icon: <Shield className="h-8 w-8 text-white" />,
      description: "Specialized in manufacturing small arms and related defense equipment",
      location: "Kanpur, Uttar Pradesh",
      partnership: "Since 2015"
    },
    {
      name: "Rifle Factory, Ishapore",
      icon: <Shield className="h-8 w-8 text-white" />,
      description: "Historic rifle manufacturing facility serving India's defense needs",
      location: "Ishapore, West Bengal",
      partnership: "Since 2009"
    }
  ];

  const researchOrgs = [
    {
      name: "Defence R&D Org.",
      icon: <Shield className="h-8 w-8 text-white" />,
      description: "India's premier defense research organization developing cutting-edge military technologies",
      specialization: "Defense Technology Development",
      partnership: "Strategic Partner Since 2011"
    },
    {
      name: "Defense R&D Laboratory",
      icon: <Shield className="h-8 w-8 text-white" />,
      description: "Advanced research laboratory focusing on defense applications and materials science",
      specialization: "Materials Research & Development", 
      partnership: "Research Collaboration Since 2013"
    },
    {
      name: "Defense Research Medical Labs",
      icon: <Shield className="h-8 w-8 text-white" />,
      description: "Specialized medical research facility for defense applications and soldier welfare",
      specialization: "Medical Defense Research",
      partnership: "Supply Partner Since 2014"
    },
    {
      name: "Gas Turbine Research Establishment",
      icon: <Zap className="h-8 w-8 text-white" />,
      description: "Leading research establishment for gas turbine technology and aerospace applications",
      specialization: "Aerospace & Turbine Technology",
      partnership: "Technology Partner Since 2010"
    },
    {
      name: "Hindustan Aeronautics Ltd (Lucknow & Bangalore)",
      icon: <Rocket className="h-8 w-8 text-white" />,
      description: "India's largest aerospace and defense corporation manufacturing aircraft and helicopters",
      specialization: "Aerospace Manufacturing",
      partnership: "Key Supplier Since 2007"
    },
    {
      name: "Bhabha Atomic Research Centre",
      icon: <Atom className="h-8 w-8 text-white" />,
      description: "India's premier nuclear research center advancing atomic energy applications",
      specialization: "Nuclear Research & Technology",
      partnership: "Precision Wire Supplier Since 2009"
    },
    {
      name: "Indian Space Research Organisation",
      icon: <Rocket className="h-8 w-8 text-white" />,
      description: "India's national space agency leading satellite and space exploration missions",
      specialization: "Space Technology & Satellite Systems",
      partnership: "Critical Component Supplier Since 2012"
    },
    {
      name: "Mishra Dhatu Nigam",
      icon: <Building2 className="h-8 w-8 text-white" />,
      description: "Specialized in manufacturing superalloys and titanium alloys for aerospace applications",
      specialization: "Advanced Alloys & Materials",
      partnership: "Materials Partner Since 2011"
    }
  ];

  const iits = [
    { 
      name: "IIT Bombay", 
      icon: <Building2 className="h-8 w-8 text-white" />,
      description: "Premier technical institute leading in engineering research and education",
      specialization: "Advanced Engineering Research",
      collaboration: "Research Wire Solutions"
    },
    { 
      name: "IIT Kanpur", 
      icon: <Building2 className="h-8 w-8 text-white" />,
      description: "Renowned for mechanical and aerospace engineering excellence",
      specialization: "Mechanical & Aerospace Engineering",
      collaboration: "Precision Wire for Research"
    },
    { 
      name: "IIT Bangalore", 
      icon: <Building2 className="h-8 w-8 text-white" />,
      description: "Leading institute in technology innovation and research",
      specialization: "Technology Innovation",
      collaboration: "EDM Wire Solutions"
    },
    { 
      name: "IIT Roorkee", 
      icon: <Building2 className="h-8 w-8 text-white" />,
      description: "Historic institute excelling in civil and mechanical engineering",
      specialization: "Civil & Mechanical Engineering",
      collaboration: "Research & Development Support"
    },
    { 
      name: "IIT Kharagpur", 
      icon: <Building2 className="h-8 w-8 text-white" />,
      description: "India's first IIT, pioneering in multiple engineering disciplines",
      specialization: "Multi-disciplinary Engineering",
      collaboration: "Advanced Wire Technology"
    }
  ];

  const drdobVendors = [
    { name: "MTAR, Hyderabad", type: "Defense Manufacturing", since: "2013" },
    { name: "Mazagon Dock Shipbuilders Limited", type: "Shipbuilding", since: "2011" },
    { name: "Goa Shipyard Limited", type: "Naval Shipbuilding", since: "2012" },
    { name: "Garg Associates Pvt. Ltd., Ghaziabad", type: "Defense Components", since: "2010" },
    { name: "Indo German Tool Room, Ahmedabad", type: "Precision Tooling", since: "2009" },
    { name: "Indo German Tool Room, Aurangabad", type: "Manufacturing Tools", since: "2014" },
    { name: "Indo German Tool Room, Ludhiana", type: "Industrial Tools", since: "2015" },
    { name: "Indo Danish Tool Room, Jamshedpur", type: "Advanced Tooling", since: "2008" },
    { name: "Indo Danish Tool Room, Patna", type: "Technical Tools", since: "2016" },
    { name: "CTRTC, Bhubaneswar", type: "Technology Center", since: "2013" },
    { name: "IDEMI, Mumbai", type: "Industrial Equipment", since: "2011" },
    { name: "Central Institute of Plastics Engineering & Technology", type: "Plastics Technology", since: "2017" },
    { name: "MSME Tool Room, Hyderabad", type: "MSME Support", since: "2012" },
    { name: "MSME Tool Room, Aligarh", type: "Small Scale Industries", since: "2014" },
    { name: "MSME Tool Room, Jaipur", type: "Regional Manufacturing", since: "2015" },
    { name: "MSME Tool Room, Guwahati", type: "Northeast Development", since: "2016" },
    { name: "MSME Tool Room (PPDC), Meerut", type: "Product Development", since: "2013" },
    { name: "Artificial Limbs, Kanpur", type: "Medical Equipment", since: "2018" },
    { name: "CRIPS, Bhopal", type: "Research Institute", since: "2014" },
    { name: "BHEL, Bhopal", type: "Heavy Engineering", since: "2007" },
    { name: "Indian Railway", type: "Transportation", since: "2005" }
  ];

  const additionalCustomers = [
    { name: "Motherson Techno Tools Limited", type: "Automotive Manufacturing", since: "2016" },
    { name: "Imperial Auto Limited", type: "Automotive Components", since: "2018" },
    { name: "Sharda Motors, Pune", type: "Automotive Industry", since: "2017" },
    { name: "Parle Elizabeth Tools Private Limited, Mumbai", type: "Tool Manufacturing", since: "2015" }
  ];

  return (
    <div className="flex flex-col">
      <HeroSection 
        title="Our Esteemed Customers" 
        subtitle="Serving India's most critical defense, aerospace, and research institutions with precision wire solutions"
        backgroundImage="/lovable-uploads/6ee12984-0671-4f3c-aa77-3720b1bbe079.png"
        className="min-h-[60vh]"
      />

      {/* Make in India Highlight */}
      <AnimatedSection animation="fade-in">
        <section className="section bg-gradient-to-br from-brand-blue to-blue-950 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Supporting #MakeInIndia Movement
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  Earlier EDM Wire was being imported from countries like Germany, Taiwan, Korea and China. 
                  With the installation of advanced integrated technology from Japan and Italy, MWPL developed 
                  equivalent high quality wire. Hence, India is now independent to produce its own wire, 
                  supporting the #MakeInIndia movement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Customer Statistics */}
      <AnimatedSection animation="fade-in">
        <section className="section bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-brand-blue mb-2">25+</h3>
                <p className="text-gray-600 font-medium">Defense Organizations</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Atom className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-brand-blue mb-2">15+</h3>
                <p className="text-gray-600 font-medium">Research Institutes</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-brand-blue mb-2">5+</h3>
                <p className="text-gray-600 font-medium">Premier IITs</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-brand-blue mb-2">50+</h3>
                <p className="text-gray-600 font-medium">DRDO Vendors</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Voices of Trust Section */}
      <AnimatedSection animation="fade-in">
        <section className="section bg-gradient-to-br from-brand-blue to-blue-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Voices of Trust
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                Our clients speak not only of product quality, but of professionalism, technical understanding, and delivery confidence.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <blockquote className="text-lg md:text-xl text-white/95 italic text-center mb-6 leading-relaxed">
                  "Maheshwari Wires has consistently delivered high-quality products that meet our 
                  exacting standards for aerospace applications. Their technical expertise and 
                  commitment to quality make them a valuable partner in our critical projects."
                </blockquote>
                <div className="text-center">
                  <div className="inline-block bg-brand-gold px-6 py-3 rounded-full">
                    <p className="text-brand-blue font-semibold">Technical Director</p>
                    <p className="text-brand-blue/80 text-sm">Leading Aerospace Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Defense & Ordnance Section */}
      <AnimatedSection animation="fade-in">
        <section className="section">
          <div className="container">
            <SectionHeading 
              title="Defense & Ordnance Establishments" 
              subtitle="Serving India's defense manufacturing units with precision wire solutions"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {defenseBranches.map((org, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-brand-blue/30 hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        {org.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-brand-blue mb-2">{org.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{org.description}</p>
                        <div className="space-y-1">
                          <div className="flex items-center text-xs text-gray-500">
                            <MapPin className="h-3 w-3 mr-1" />
                            {org.location}
                          </div>
                          <div className="flex items-center text-xs text-brand-gold font-medium">
                            <Award className="h-3 w-3 mr-1" />
                            {org.partnership}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Research Organizations Section */}
      <AnimatedSection animation="fade-in">
        <section className="section bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container">
            <SectionHeading 
              title="Research & Development Organizations" 
              subtitle="Partnering with India's premier research institutions for advanced technology solutions"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {researchOrgs.map((org, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <div className="h-fullbg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-brand-gold/30 hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        {org.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-brand-blue mb-2">{org.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{org.description}</p>
                        <div className="space-y-1">
                          <div className="flex items-center text-xs text-gray-500">
                            <Target className="h-3 w-3 mr-1" />
                            {org.specialization}
                          </div>
                          <div className="flex items-center text-xs text-brand-gold font-medium">
                            <Award className="h-3 w-3 mr-1" />
                            {org.partnership}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Educational Institutes Section */}
      <AnimatedSection animation="fade-in">
        <section className="section">
          <div className="container">
            <SectionHeading 
              title="Premier Educational Institutes" 
              subtitle="Collaborating with India's top IITs for research and development initiatives"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {iits.map((iit, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-brand-blue/30 hover-lift">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        {iit.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-brand-blue mb-2">{iit.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{iit.description}</p>
                      <div className="space-y-1">
                        <div className="flex items-center justify-center text-xs text-gray-500">
                          <Target className="h-3 w-3 mr-1" />
                          {iit.specialization}
                        </div>
                        <div className="flex items-center justify-center text-xs text-brand-gold font-medium">
                          <Award className="h-3 w-3 mr-1" />
                          {iit.collaboration}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* DRDO Vendors Section */}
      <AnimatedSection animation="fade-in">
        <section className="section bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container">
            <SectionHeading 
              title="DRDO Vendor Network" 
              subtitle="Many Vendors of DRDO purchase products from us for their manufacturing processes"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {drdobVendors.map((vendor, index) => (
                <AnimatedSection key={index} animation="slide-left" delay={index * 50}>
                  <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-brand-gold/30 hover-lift">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-brand-gold rounded-full flex-shrink-0 mt-2"></div>
                      <div className="flex-1">
                        <h4 className="text-gray-700 font-medium mb-1">{vendor.name}</h4>
                        <div className="space-y-1">
                          <div className="flex items-center text-xs text-gray-500">
                            <Building2 className="h-3 w-3 mr-1" />
                            {vendor.type}
                          </div>
                          <div className="flex items-center text-xs text-brand-gold font-medium">
                            <Award className="h-3 w-3 mr-1" />
                            Partner Since {vendor.since}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Additional Customers Section */}
      <AnimatedSection animation="fade-in">
        <section className="section">
          <div className="container">
            <SectionHeading 
              title="Additional Valued Customers" 
              subtitle="Also to name a few more of our customers, we also provide our products to:"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {additionalCustomers.map((customer, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                  <div className="h-full bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-brand-blue/30 hover-lift text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-gray-700 font-medium mb-2">{customer.name}</h4>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center text-xs text-gray-500">
                        <Building2 className="h-3 w-3 mr-1" />
                        {customer.type}
                      </div>
                      <div className="flex items-center justify-center text-xs text-brand-gold font-medium">
                        <Award className="h-3 w-3 mr-1" />
                        Partner Since {customer.since}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default CustomerShowcase;
