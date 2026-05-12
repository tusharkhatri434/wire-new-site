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
import { useIsMobile } from "@/hooks/use-mobile";
const Home = () => {

  const isMobile = useIsMobile();

  const products = [{
    id: "edm-wire",
    link: 1,
    title: "EDM Wire",
    image: '/lovable-uploads/product/EDMWIREFINAL.webp',
    description: "EDM Wire is a specially engineered metallic wire used as an electrode in wire-cut EDM machines. It delivers exceptional conductivity, mechanical stability, and thermal performance for reliable and efficient machining.",
    features: ["High Electrical Conductivity",
      "Uniform Diameter and Surface Finish",
      "Mechanical Strength & Tensile Control",
      "Oxidation Resistance",
      "Precision Winding"],
    category: "Non-Ferrous wire"
  }, {
    id: "Filter",
    title: "High-Performance EDM Filters",
    image: '/lovable-uploads/product/Filterfinal.webp',
    link: 18,
    description: "EDM Filters are high-performance consumables designed to maintain dielectric purity by removing particulate contaminants, metal debris, and sludge",
    features: ["Micron Ratings from 1µm to 50µm",
      "Low Pressure Drop and High Dirt Holding",
      "Multi-layer Media for Clean Fluids",
      "Magnetic Pre-Filters and Clogging Indicators"],
    category: "Consumables"
  }, {
    id: "Resin",
    title: "Ion Exchange Resin for EDM",
    link: 10,
    image: '/lovable-uploads/product/resinfinal.webp',
    description: "EDM Resin is a high-performance ion-exchange material formulated to purify dielectric fluids by removing metallic ions and impurities generated during the EDM process.",
    features: ["Mixed Bed Strong Acid/Base Composition",
      "Maintains Dielectric Conductivity",
      "Used in EDM and Power Systems"],
    category: "Consumables"
  }, {
    id: "coated-wires",
    link: 2,
    title: "Diffused EDM Wire",
    image: '/lovable-uploads/product/Diffusedcoatedwirefinal.webp',
    description: "Engineered using a multi-layer diffusion process that bonds a zinc-rich alloy into a brass core for high cutting speed and accuracy.",
    features: ["Multi-layer zinc-rich diffusion coating",
      "Uniform surface hardness",
      "Excellent flushing in deep cuts",
      "Up to 30% faster than plain brass wire",
      "Better tolerance in taper cutting"],
    category: "Specialty Coatings"
  },
  {
    id: "molly-wire",
    title: "Molly Wire",
    description: "High-performance molybdenum wire for extreme temperatures, corrosion, and high load environments.",
    heading: "High-Temperature Molly Wire",
    tags: ["Molybdenum", "EDM", "Furnace"],
    features: [
      "Extremely High Melting Point (2620°C)",
      "Excellent Dimensional Stability",
      "Corrosion & Oxidation Resistant",
      "Good Workability & Long Service Life"
    ],
    image: '/lovable-uploads/product/molly_wire.webp',
    link: 8,
    category: "Non-Ferrous Wire",
    subcategory: ""
  },
  {
    id: "ErCu-Snc",
    title: "Er Cu SnC",
    heading: "Tin-Copper Brazing Alloy",
    description: "Provides corrosion-resistant strong joints in copper piping.",
    features: [
      "Improved corrosion resistance",
      "Strong joints",
      "Ideal for piping and tubing applications"
    ],
    tags: ["Copper", "Tin"],
    image: '/lovable-uploads/product/ER_CUS_C_Final.webp',
    link: 25,
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    id: "Induction-Brazing-Rings",
    title: "Induction Brazing Rings",
    heading: "Induction Supplies",
    description: "Rings for induction heating and joining in industrial applications.",
    features: [
      "Pre-formed rings for uniform joints",
      "Excellent repeatability",
      "Reduces manual brazing time",
      "Suited for automation"
    ],
    tags: ["Rings", "Induction"],
    image: '/lovable-uploads/product/Brazing_ring_final.webp',
    link: 20,
    category: "Brazing and Welding",
    subcategory: "Brass Brazing Wire"
  },
  {
    id: "View_All_Products",
    link: "",
    title: "Explore Our Full Range",
    image: "/lovable-uploads/product/image.png",
    description: "Discover our complete collection of premium wire solutions.",
    features: ["Complete product catalog", "Detailed specifications", "Pickup electrodes", "Compare & choose"],
    category: "All Products"
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
    <HeroSection title="Leading the Wirevolution" subtitle="Where innovation meets metallurgy — crafting wires that empower industries, elevate performance, and define reliability." backgroundImage="/lovable-uploads/slide/Homepage.png" buttonText="Explore Our Product Range" buttonLink="/products" />
    {/* <HeroSlider /> */}


    {/* Company Introduction - Solutions, Not Just Supplies */}
    <AnimatedSection animation="fade-in">
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-80" />
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="glass p-6 md:p-8 rounded-2xl depth-2 hover-lift transition-all duration-500">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-brand-blue font-poppins">
                Solutions,{isMobile ? <br></br> : null} Not Just Supplies
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

          <ProductSlider products={products} className="mt-8" />

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

    {/* Manufacturing Partner Section */}
    <AnimatedSection animation="fade-in">
      <section className="py-12 md:py-16 bg-brand-blue text-center rounded-2xl mx-4 sm:mx-8 mb-8 shadow-xl border border-blue-800/50">
        <div className="container flex flex-col items-center justify-center">
          <h3 className="text-sm md:text-base font-bold text-brand-gold uppercase tracking-widest mb-2">
            Visit Our Manufacturing Partner
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-8">
            Rajat Products Pvt.Ltd.
          </h2>
          <Button asChild className="bg-white hover:bg-gray-100 text-brand-blue px-6 py-2 rounded-xl font-bold transform transition-all duration-300 ease-in-out hover:scale-105 text-lg shadow-lg">
            <a href="https://rajatproducts.com/" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </Button>
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

          <AnimatedSection animation="fade-in" delay={100}>
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
                <div className="w-8 md:w-12 h-8 md:h-12 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Quote className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-sm sm:text-lg md:text-xl text-gray-700 mb-6">
                    "Maheshwari Wires has consistently delivered high-quality products that meet our exacting standards for aerospace applications. Their technical expertise and commitment to quality make them a valuable partner in our critical projects."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-7 md:w-10 h-7 md:h-10 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <Award className="w-4 h-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-blue font-poppins">Technical Director</p>
                      <p className="text-gray-600 font-montserrat text-xs">Leading Aerospace Company</p>
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
                <Link to="/customers">Discover Our Clients</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </AnimatedSection>
  </div>;
};
export default Home;