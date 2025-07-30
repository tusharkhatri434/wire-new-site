import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ProductSlider from "@/components/ProductSlider";
import IndustrySlider from "@/components/IndustrySlider";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Factory, ShieldCheck, Star, Users, ChevronRight, TrendingUp, Zap, Globe, Target, Quote } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
const Home = () => {
  const products = [{
    id: "edm-wire",
    title: "EDM Wire",
    image: "/lovable-uploads/033e88f3-a322-4187-b61b-6eb0bf8c8ea3.png",
    description: "For precision-cutting needs with exceptional surface finish and enhanced cutting speed.",
    features: ["Exceptional surface finish", "Enhanced cutting speed", "Low discharge wear", "High tensile strength"],
    category: "Precision Wires"
  }, {
    id: "brazing-welding",
    title: "Brazing & Welding Wire",
    image: "/lovable-uploads/76e9f5c2-bfdd-41fd-8447-48981ed09178.png",
    description: "Superior bond strength and thermal control for critical joining applications.",
    features: ["Excellent flow characteristics", "Superior joint strength", "Low temperature options", "Extended shelf life"],
    category: "Joining Solutions"
  }, {
    id: "copper-aluminium",
    title: "Copper & Aluminium Wires",
    image: "/lovable-uploads/e1e5c479-b03d-4b95-94b0-d5925c024345.png",
    description: "Pure, alloyed, and customizable solutions for electrical and industrial applications.",
    features: ["99.9% purity options", "Excellent conductivity", "Customizable dimensions", "Oxygen-free options"],
    category: "Conductive Wires"
  }, {
    id: "coated-wires",
    title: "Coated Wires",
    image: "/lovable-uploads/2c299fa8-edd5-4d18-9333-f32ecdd5c9d9.png",
    description: "Zinc, brass, and diffused layers for specialized applications requiring enhanced performance.",
    features: ["Multiple coating types", "Enhanced durability", "Corrosion resistance", "Custom specifications"],
    category: "Specialty Coatings"
  }, {
    id: "zari-molly",
    title: "Zari & Molly Wires",
    image: "/lovable-uploads/4e574527-b0ae-47a4-b06f-2f0a522be5a2.png",
    description: "Blending tradition with durability for decorative and functional applications.",
    features: ["Tarnish resistant", "Consistent plating", "Flexible yet strong", "True-to-color finishing"],
    category: "Decorative Wires"
  },
  // , {
  //   id: "consumables",
  //   title: "Consumables",
  //   image: "/lovable-uploads/a05ed1e3-8bb7-43c2-a3f3-e3e33bd8ab6d.png",
  //   description: "Filters, rings, resins & beyond - everything you need for optimal wire processing.",
  //   features: ["EDM machine filters", "Dielectric resins", "Pickup electrodes", "Process enhancers"],
  //   category: "Process Support"
  // }, 
  {
    id: "View_All_Products",
    title: "View All Products",
    image: "/lovable-uploads/a05ed1e3-8bb7-43c2-a3f3-e3e33bd8ab6d.png",
    description: "Lorem ipseme ",
    features: ["EDM machine filters", "Dielectric resins", "Pickup electrodes", "Process enhancers"],
    category: "Process Support"
  }
];

  const achievements = [{
    title: "Presidential Recognition",
    description: "Awarded by the President of India for providing essential brazing alloys during critical stages of national development.",
    icon: <Award className="h-5 w-5 text-brand-gold" />
  }, {
    title: "40+ Years Legacy",
    description: "From our roots in 1948 to serving India's top defence and space research institutions.",
    icon: <Factory className="h-5 w-5 text-brand-gold" />
  }, {
    title: "Approved Suppliers",
    description: "Trusted supplier to DRDO, BARC, ISRO and other premier research organizations.",
    icon: <ShieldCheck className="h-5 w-5 text-brand-gold" />
  }, {
    title: "Make in India Pioneer",
    description: "Supporting India's self-reliance movement by developing indigenous high-precision manufacturing capabilities.",
    icon: <Star className="h-5 w-5 text-brand-gold" />
  }];

  const industries = [{
    title: "Defense & Aerospace",
    description: "For mission-critical assemblies requiring the highest precision and reliability standards.",
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    stats: "50+ Projects"
  }, {
    title: "Research Institutions",
    description: "ISRO, BARC, DRDO - supporting India's cutting-edge research and development.",
    icon: <Factory className="h-6 w-6 text-white" />,
    stats: "25+ Institutions"
  }, {
    title: "Electronics & Power",
    description: "Where conductivity meets reliability in modern electronic systems.",
    icon: <Zap className="h-6 w-6 text-white" />,
    stats: "100+ Applications"
  }, {
    title: "Automotive & EV",
    description: "Lightweight, high-performance alloy wires for next-generation vehicles.",
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    stats: "Growing Market"
  }, {
    title: "Fabrication & Manufacturing",
    description: "Welding and brazing wires built to last in industrial manufacturing environments.",
    icon: <Factory className="h-6 w-6 text-white" />,
    stats: "500+ Clients"
  }, {
    title: "Global Export",
    description: "Serving international markets with world-class wire solutions.",
    icon: <Globe className="h-6 w-6 text-white" />,
    stats: "15+ Countries"
  }
];
  return <div className="flex flex-col">
      {/* Enhanced Hero Section */}
      {/* <HeroSection title="Leading the Wirevolution" subtitle="Where innovation meets metallurgy — crafting wires that empower industries, elevate performance, and define reliability." backgroundImage="/lovable-uploads/6ee12984-0671-4f3c-aa77-3720b1bbe079.png" buttonText="Explore Our Product Range" buttonLink="/products" /> */}
      <HeroSlider />

      {/* Company Introduction - Solutions, Not Just Supplies */}
      <AnimatedSection animation="fade-in">
        <section className="section relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-80" />
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="glass p-6 md:p-8 rounded-2xl depth-2 hover-lift transition-all duration-500">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-brand-blue font-poppins">
                  Solutions, Not Just Supplies
                </h2>
                <p className="text-base md:text-lg mb-6 text-gray-700 font-montserrat leading-relaxed max-w-4xl mx-auto">
                  From high-precision EDM wires to customized alloy solutions, Maheshwari Wires Pvt. Ltd. has been at the forefront of India's industrial evolution for decades. 
                  As trusted partners to defense agencies, premier research labs, and global OEMs, our product range is engineered for sectors where precision isn't a choice — it's a standard.
                </p>
                <p className="text-base md:text-lg mb-6 text-gray-700 font-montserrat leading-relaxed max-w-4xl mx-auto">
                  Every wire we make solves a problem — higher conductivity, better weld strength, longer tool life, or exacting tolerances. Our in-house expertise, metallurgical insight, and ability to customize grades and coatings ensure you receive more than material — you receive measurable performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Button asChild className="bg-brand-blue hover:bg-blue-900 text-white px-6 py-2.5 text-base hover-lift">
                    <Link to="/products">Explore Our Product Range</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-brand-gold text-brand-blue hover:bg-brand-gold hover:text-white px-6 py-2.5 text-base hover-lift">
                    <Link to="/foundation">Learn About Our Capabilities</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Separator className="my-8" />

      {/* Enhanced Product Range Section with Slider */}
      <AnimatedSection animation="fade-in">
        <section className="section">
          <div className="container">
            <SectionHeading title="A Glimpse of Our Wire Expertise" subtitle="Built to perform. Designed to last." />
            
            <ProductSlider products={products} className="mt-8"/>

            <AnimatedSection animation="fade-in" delay={800}>
              <div className="mt-8 text-center">
                <Button asChild className="bg-brand-blue hover:bg-blue-900 text-white px-6 py-2.5 text-base hover-lift depth-2">
                  <Link to="/products">View All Products</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      <Separator className="my-8" />

      {/* Enhanced Achievements Section */}
      <AnimatedSection animation="slide-left">
        <section className="section relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container relative z-10">
            <SectionHeading title="Milestones That Define Us" subtitle="From our roots in 1948 to serving India's top defence and space research institutions, our journey is one of consistency, trust, and continuous upgrade." />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {achievements.map((achievement, index) => <AnimatedSection key={index} animation="scale-in" delay={index * 200}>
                  <div className="flex flex-col h-full items-center text-center p-4 md:p-6 glass rounded-xl hover-lift transition-all duration-500 depth-1 hover:depth-3 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300">
                      {achievement.icon}
                    </div>
                    <h3 className="font-bold text-base md:text-lg text-brand-blue mb-3 font-poppins group-hover:text-blue-600 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-montserrat leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </AnimatedSection>)}
            </div>

            <AnimatedSection animation="fade-in" delay={1000}>
              <div className="mt-12 text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
                  <blockquote className="text-lg md:text-xl not-italic text-brand-blue font-montserrat leading-relaxed">
                    "Performance starts at the core — we engineer every wire from the inside out."
                  </blockquote>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      <Separator className="my-8" />

      {/* Enhanced Testimonials Section - Updated Design */}
      <AnimatedSection animation="slide-left">
        <section className="section bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
          <div className="container relative z-10">
            <SectionHeading title="Voices of Trust" subtitle="Our clients speak not only of product quality, but of professionalism, technical understanding, and delivery confidence." />
            
            <div className="max-w-4xl mx-auto">
              <div className="glass p-8 rounded-2xl depth-2 hover-lift transition-all duration-300 bg-white border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg md:text-xl text-gray-700 not-italic not-italic mb-6 italic">
                      "Maheshwari Wires has consistently delivered high-quality products that meet our exacting standards for aerospace applications. Their technical expertise and commitment to quality make them a valuable partner in our critical projects."
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center mr-4">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-blue font-poppins">Technical Director</p>
                        <p className="text-gray-600 font-montserrat text-sm">Leading Aerospace Company</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Separator className="my-8" />

      {/* Enhanced Industries Section with Slider */}
      <AnimatedSection animation="fade-in">
        <section className="section">
          <div className="container">
            <SectionHeading title="Industries That Rely on Us" subtitle="We power the sectors that power nations — where precision wires are not just components, but commitments to safety, innovation, and endurance." />
            
            <IndustrySlider industries={industries} className="mt-8" />
            
            <AnimatedSection animation="scale-in" delay={1000}>
              <div className="mt-8 text-center">
                <Button asChild className="bg-brand-gold hover:bg-yellow-500 text-brand-blue px-6 py-2.5 text-base font-semibold hover-lift depth-2">
                  <Link to="/products">Discover Our Products</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
    </div>;
};
export default Home;