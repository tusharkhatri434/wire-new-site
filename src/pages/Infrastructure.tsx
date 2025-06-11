
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import IndustrySlider from "@/components/IndustrySlider";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Factory, Cog, Zap, Shield, Target, CheckCircle, ArrowRight, Settings, Wrench, Package, Beaker, ChevronDown } from "lucide-react";

const Infrastructure = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const facilities = [
    {
      title: "Japanese Technology Integration",
      description: "Advanced integrated technology from Japan for unmatched accuracy and finish to our wire products",
      icon: <Factory className="h-8 w-8 text-brand-gold" />,
      features: ["Superior dimensional tolerance", "Uniform surface finish", "Enhanced conductivity", "Reduced variability batch-to-batch"]
    },
    {
      title: "Continuous Wire Drawing Systems", 
      description: "Multi-stage annealing and micro-plating processes reflecting finest practices of modern metallurgy",
      icon: <Settings className="h-8 w-8 text-brand-gold" />,
      features: ["Continuous wire drawing", "Multi-stage annealing", "Micro-plating processes", "Enhanced mechanical strength"]
    },
    {
      title: "Quality Control Laboratory",
      description: "Chemical and mechanical testing ensuring consistency, traceability, and international compliance",
      icon: <CheckCircle className="h-8 w-8 text-brand-gold" />,
      features: ["Chemical composition analysis", "Mechanical testing", "Traceability systems", "International standards"]
    },
    {
      title: "Raw Material Excellence",
      description: "High-purity, certified raw materials from globally trusted suppliers with comprehensive testing",
      icon: <Beaker className="h-8 w-8 text-brand-gold" />,
      features: ["OFHC copper", "High-purity aluminium alloys", "Specialty metals", "Technical-grade materials"]
    }
  ];

  const manufacturingSteps = [
    {
      step: "Raw Material Selection",
      description: "High-purity certified materials from global suppliers",
      icon: <Package className="h-6 w-6" />
    },
    {
      step: "In-House Testing", 
      description: "Chemical and mechanical testing for quality assurance",
      icon: <Beaker className="h-6 w-6" />
    },
    {
      step: "Melting & Alloying",
      description: "Precision melting and alloy composition control",
      icon: <Zap className="h-6 w-6" />
    },
    {
      step: "Casting/Extruding",
      description: "Advanced casting and extrusion processes",
      icon: <Factory className="h-6 w-6" />
    },
    {
      step: "Drawing (Multi-Stage)",
      description: "Multi-stage wire drawing for precision dimensions",
      icon: <Settings className="h-6 w-6" />
    },
    {
      step: "Annealing", 
      description: "Controlled annealing for optimal properties",
      icon: <Zap className="h-6 w-6" />
    },
    {
      step: "Surface Treatment/Coating",
      description: "Specialized surface treatments and coatings",
      icon: <Shield className="h-6 w-6" />
    },
    {
      step: "Final Calibration",
      description: "Precision calibration and quality verification",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: "QC Inspection",
      description: "Comprehensive quality control inspection",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: "Packaging & Dispatch",
      description: "Professional packaging and timely dispatch",
      icon: <Package className="h-6 w-6" />
    }
  ];

  const rawMaterials = [
    "Oxygen-free high conductivity (OFHC) copper",
    "High-purity aluminium alloys", 
    "Specialty metals and modifiers for brazing and welding",
    "Coating-grade zinc and brass",
    "Technical-grade resins, filters, and minerals"
  ];

  const industries = [
    {
      title: "Defense & Aerospace",
      description: "For mission-critical assemblies requiring the highest precision and reliability standards.",
      icon: <Shield className="h-6 w-6 text-white" />,
      stats: "50+ Projects"
    },
    {
      title: "Research Institutions", 
      description: "ISRO, BARC, DRDO - supporting India's cutting-edge research and development.",
      icon: <Factory className="h-6 w-6 text-white" />,
      stats: "25+ Institutions"
    },
    {
      title: "Electronics & Power",
      description: "Where conductivity meets reliability in modern electronic systems.",
      icon: <Zap className="h-6 w-6 text-white" />,
      stats: "100+ Applications"
    },
    {
      title: "Automotive & EV",
      description: "Lightweight, high-performance alloy wires for next-generation vehicles.", 
      icon: <Target className="h-6 w-6 text-white" />,
      stats: "Growing Market"
    }
  ];

  const voicesOfTrust = [
    {
      text: "Maheshwari Wires has been our trusted partner for over a decade. Their EDM wires consistently deliver the precision we need for our critical defense projects.",
      author: "Senior Engineer",
      company: "DRDO Vendor"
    },
    {
      text: "The quality and reliability of their brazing wires have significantly improved our manufacturing efficiency. Excellent technical support too.",
      author: "Production Manager",
      company: "ISRO Approved Supplier"
    },
    {
      text: "From custom specifications to timely delivery, Maheshwari Wires understands our research requirements perfectly.",
      author: "Research Scientist",
      company: "BARC Collaborator"
    }
  ];

  return (
    <div className="flex flex-col">
      <HeroSection 
        title="State-of-the-Art Wire Manufacturing" 
        subtitle="Built to Global Standards. At Maheshwari Wires Pvt. Ltd., infrastructure is more than machines — it's a complete ecosystem of precision, process control, and people."
        backgroundImage="/lovable-uploads/6ee12984-0671-4f3c-aa77-3720b1bbe079.png"
        className="min-h-[60vh]"
      />

      {/* Japanese Technology Integration */}
      <AnimatedSection animation="fade-in">
        <section className="section">
          <div className="container">
            <SectionHeading 
              title="Powered by Precision. Guided by Innovation." 
              subtitle="We have adopted key Japanese manufacturing technologies to bring unmatched accuracy and finish to our wire products."
            />
            
            <Tabs defaultValue="technology" className="w-full mt-8">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="systems">Systems</TabsTrigger>
                <TabsTrigger value="quality">Quality</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
              </TabsList>
              
              <TabsContent value="technology">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {facilities.slice(0, 2).map((facility, index) => (
                    <AnimatedSection key={index} animation="scale-in" delay={index * 200}>
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-brand-blue/30 hover-lift">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            {facility.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-brand-blue mb-2">{facility.title}</h3>
                            <p className="text-gray-600 mb-3 text-sm leading-relaxed">{facility.description}</p>
                            
                            <div className="space-y-1">
                              {facility.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center">
                                  <CheckCircle className="h-3 w-3 text-brand-gold mr-2 flex-shrink-0" />
                                  <span className="text-xs text-gray-700">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="systems">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {facilities.slice(1, 3).map((facility, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          {facility.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-brand-blue mb-2">{facility.title}</h3>
                          <p className="text-gray-600 mb-3 text-sm leading-relaxed">{facility.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="quality">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      {facilities[2].icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-brand-blue mb-2">{facilities[2].title}</h3>
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">{facilities[2].description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {facilities[2].features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-brand-gold mr-2 flex-shrink-0" />
                            <span className="text-xs text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="materials">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      {facilities[3].icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-brand-blue mb-2">{facilities[3].title}</h3>
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">{facilities[3].description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {facilities[3].features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-brand-gold mr-2 flex-shrink-0" />
                            <span className="text-xs text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <AnimatedSection animation="fade-in" delay={800}>
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <p className="text-base text-gray-700 leading-relaxed text-center">
                  By blending traditional Indian craftsmanship with world-class machinery, we create wires that deliver reliability across critical applications.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Raw Materials Section with Collapsible */}
      <AnimatedSection animation="slide-left">
        <section className="section bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container">
            <SectionHeading 
              title="Quality Starts at the Core" 
              subtitle="Great wires begin with great inputs. We procure high-purity, certified raw materials from globally trusted suppliers."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <AnimatedSection animation="fade-in">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-brand-blue mb-4">We work with:</h3>
                  <div className="space-y-2">
                    {rawMaterials.map((material, index) => (
                      <Collapsible key={index}>
                        <CollapsibleTrigger 
                          onClick={() => toggleItem(`material-${index}`)}
                          className="flex items-center justify-between w-full text-left p-2 rounded hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 text-sm leading-relaxed">{material}</p>
                          </div>
                          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${openItems[`material-${index}`] ? 'rotate-180' : ''}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pl-5 pt-2">
                          <p className="text-xs text-gray-600">
                            Premium grade material sourced from certified global suppliers with full traceability.
                          </p>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-brand-blue mb-4">Quality Assurance</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    Every batch undergoes chemical and mechanical testing before entering the production line, ensuring consistency, traceability, and compliance with international standards.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-medium text-sm">
                    Every element is chosen with purpose — to meet your performance needs.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Manufacturing Process */}
      <AnimatedSection animation="slide-left">
        <section className="section">
          <div className="container">
            <SectionHeading 
              title="From Metal to Mastery – Our Process" 
              subtitle="We follow a fully in-house, quality-controlled manufacturing process designed to deliver high-performance wires every time."
            />

            {/* Process Flow */}
            <div className="mt-8 mb-12">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                {manufacturingSteps.map((step, index) => (
                  <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                    <div className="h-full bg-white rounded-xl p-3 shadow-lg border border-gray-200 hover:border-brand-blue/30 hover-lift transition-all duration-300 text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>
                      <h4 className="font-bold text-brand-blue mb-1 text-xs">{step.step}</h4>
                      <p className="text-xs text-gray-600 leading-tight">{step.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection animation="fade-in" delay={1000}>
              <div className="text-center">
                <p className="text-base text-gray-600 mb-4">
                  Each stage is optimized for output efficiency, material integrity, and precision control.
                </p>
                <Button asChild className="bg-brand-blue hover:bg-blue-900 text-white px-6 py-2 text-sm hover-lift">
                  <Link to="/connect">Contact Our Technical Team</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Industries Section */}
      <AnimatedSection animation="fade-in">
        <section className="section bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container">
            <SectionHeading 
              title="Industries That Rely on Us" 
              subtitle="We power the sectors that power nations — where precision wires are not just components, but commitments to safety, innovation, and endurance."
            />
            
            <IndustrySlider industries={industries} className="mt-6" />
          </div>
        </section>
      </AnimatedSection>

      {/* Voices of Trust Section */}
      <AnimatedSection animation="fade-in">
        <section className="section">
          <div className="container">
            <SectionHeading 
              title="Voices of Trust" 
              subtitle="Our clients speak not only of product quality, but of professionalism, technical understanding, and delivery confidence."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {voicesOfTrust.map((testimonial, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 200}>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-brand-blue/30 hover-lift transition-all duration-300">
                    <div className="mb-4">
                      <div className="flex text-brand-gold mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-lg">★</span>
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-brand-blue text-sm">{testimonial.author}</p>
                      <p className="text-gray-600 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Quality Assurance */}
      <AnimatedSection>
        <section className="section bg-brand-blue">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="glass-dark bg-black p-6 rounded-2xl border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-brand-blue">Quality at Every Step</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  Our experienced team of quality analysts keep a check on our products to match industry parameters 
                  that assure the delivery of a defect-free range of products. With world-class technology and 
                  quality-tested raw materials, our products are manufactured in accordance to defined industry standards.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h4 className="font-semibold text-brand-blue mb-1 text-sm">Quality Standards</h4>
                    <p className="text-gray-600 text-xs">International compliance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-2">
                      <Wrench className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h4 className="font-semibold text-brand-blue mb-1 text-sm">Advanced Testing</h4>
                    <p className="text-gray-600 text-xs">Rigorous quality control</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-6 w-6 text-brand-blue" />
                    </div>
                    <h4 className="font-semibold text-brand-blue mb-1 text-sm">Defect-Free</h4>
                    <p className="text-gray-600 text-xs">Zero-defect delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Infrastructure;
