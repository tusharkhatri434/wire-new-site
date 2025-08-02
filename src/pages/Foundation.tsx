import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Factory, ShieldCheck, Users, Target, Globe, Calendar, Trophy, Star, Cog, Zap, Settings, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
const Foundation = () => {
  const timelineData = [{
    year: "1948",
    title: "The Beginning",
    description: "Maheshwari Industrial Corporation founded with a vision for precision manufacturing"
  }, {
    year: "1950s",
    title: "Presidential Recognition",
    description: "Awarded by the President of India for brazing alloys contribution"
  }, {
    year: "1980s",
    title: "Metallurgical Excellence",
    description: "Established reputation as pioneers in non-ferrous metal solutions"
  }, {
    year: "1999",
    title: "Maheshwari Wires Founded",
    description: "Formal incorporation with cutting-edge technology integration"
  }, {
    year: "2000s",
    title: "Integrated Manufacturing",
    description: "Evolved into fully integrated hub with in-house R&D capabilities"
  }, {
    year: "Present",
    title: "Global Standards",
    description: "Serving national research labs with world-class precision wires"
  }];
  const capabilities = [{
    icon: <Zap className="h-8 w-8" />,
    title: "Micron-Level EDM Wires",
    description: "High-precision electrical discharge machining wires for critical applications"
  }, {
    icon: <Settings className="h-8 w-8" />,
    title: "Custom-Coated Solutions",
    description: "Welding solutions with specialized coatings for niche applications"
  }, {
    icon: <Target className="h-8 w-8" />,
    title: "Drawing & Annealing",
    description: "Complete in-house processing from raw material to finished product"
  }, {
    icon: <Factory className="h-8 w-8" />,
    title: "Surface Coating & Calibration",
    description: "Advanced surface treatments and tensile calibration capabilities"
  }, {
    icon: <Award className="h-8 w-8" />,
    title: "Co-Creation Expertise",
    description: "Metallurgical expertise to develop custom wire compositions"
  }];
  const certifications = [{
    icon: <Award className="h-12 w-12" />,
    title: "ISO 9001:2015",
    description: "Quality Management System"
  }, {
    icon: <ShieldCheck className="h-12 w-12" />,
    title: "ISO 14001:2015",
    description: "Environmental Stewardship"
  }, {
    icon: <Globe className="h-12 w-12" />,
    title: "ISO 45001:2018",
    description: "Occupational Health & Safety"
  }, {
    icon: <Star className="h-12 w-12" />,
    title: "Defence Production",
    description: "Strategic Supply Line Approvals"
  }];
  const clientOrganizations = ["Defense Research & Development Organisation (DRDO)", "Indian Space Research Organisation (ISRO)", "Bhabha Atomic Research Centre (BARC)", "Premier private and public sector engineering firms", "Specialised OEM's in India and overseas"];
  return <div className="flex flex-col">
      {/* Hero Banner */}
      <AnimatedSection animation="fade-in">
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-brand-blue via-blue-900 to-brand-blue overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: "url('/lovable-uploads/6ee12984-0671-4f3c-aa77-3720b1bbe079.png')",
          opacity: 0.3
        }}></div>
          
          <div className="relative z-10 container text-center text-white">
            <AnimatedSection animation="fade-in" delay={200}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                A Heritage of Precision
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={400}>
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed">
                A Future of Progress
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={600}>
              <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-200">
                Founded in the early 1980s, the Maheshwari name has become synonymous with trust and metallurgical excellence.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-brand-blue px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all">
                  <Link to="/products">
                    Explore Our Product Range
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg font-semibold rounded-full">
                  
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Foundation Story */}
      <AnimatedSection animation="fade-in">
        <section className="section bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6">Where It All Began</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                What began as a modest initiative has grown into a multi-generational enterprise serving India's most critical sectors — from defense to deep science. Over 40 years later, our legacy is not just in the wires we produce, but in the industries we empower.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our journey began with Maheshwari Industrial Corporation in 1982 — a pioneering step into the world of non-ferrous metal solutions. Through relentless learning, attention to detail, and a commitment to quality, this humble venture laid the bedrock for what Maheshwari Wires would eventually become.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {timelineData.map((item, index) => <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-l-4 border-yellow-400 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{item.year}</div>
                      <h3 className="text-lg font-bold text-brand-blue mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </AnimatedSection>)}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Maheshwari Wires Evolution */}
      <AnimatedSection animation="fade-in">
        <section className="section bg-gray-50">
          <div className="container">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-8">From a Vision to a Vertically Integrated Force</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                With the formal incorporation of Maheshwari Wires Pvt. Ltd., we transformed our philosophy into a scalable operation — combining traditional values with cutting-edge technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Over time, our facility in Meerut, India, evolved into a fully integrated manufacturing hub with in-house R&D, testing, and customisation capabilities. Today, we cater to highly specialised requirements from national research labs, aerospace assemblies, and high-precision industrial users — with wires that meet global standards, yet carry a distinctly Indian soul.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Core Capabilities */}
      <AnimatedSection animation="fade-in">
        <section className="section bg-white">
          <div className="container">
            <SectionHeading title="Crafting Performance at Scale" subtitle="At Maheshwari Wires, capability isn't just about machines — it's about mindset." />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-yellow-400/50 hover:shadow-lg transition-all duration-300 h-full group">
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                      <div className="text-brand-blue group-hover:text-yellow-600 transition-colors duration-300">
                        {capability.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-brand-blue mb-3">{capability.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{capability.description}</p>
                  </div>
                </AnimatedSection>)}
            </div>

            <AnimatedSection animation="fade-in" delay={800}>
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 mb-6">
                  Our facility is equipped to deliver everything from micron-level EDM wires to custom-coated welding solutions, while our metallurgical expertise enables us to co-create wire compositions for niche applications.
                </p>
                <Button asChild className="bg-brand-blue hover:bg-blue-900 text-white px-6 py-2.5 text-base hover-lift">
                  <Link to="/infrastructure">Explore our Infrastructure</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Trusted Clientele */}
      <AnimatedSection animation="fade-in">
        <section className="section bg-gray-50">
          <div className="container">
            <SectionHeading title="Trusted by the Nation's Finest" subtitle="Our wires are used where failure is not an option." />
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
                What binds our clients to us is not just what we deliver — but how we deliver it: with consistency, clarity, and care.
              </p>
              
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {clientOrganizations.map((org, index) => (
    <AnimatedSection 
      key={index} 
      animation="slide-left" 
      delay={index * 100}
      className={
        index === clientOrganizations.length - 1 && clientOrganizations.length % 2 === 1
          ? 'md:col-span-2 md:flex md:justify-center'
          : ''
      }
    >
      <div className={`w-full h-full bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-brand-blue/30 ${
        index === clientOrganizations.length - 1 && clientOrganizations.length % 2 === 1
          ? 'md:max-w-96'
          : ''
      }`}>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-brand-gold rounded-full mr-[6px]"></div>
          <p className="text-gray-700 font-medium">{org}</p>
        </div>
      </div>
    </AnimatedSection>
  ))}
</div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Certifications & Achievements */}
      <AnimatedSection animation="fade-in">
        <section id="certifications" className="section bg-brand-blue text-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Compliance You Can Trust</h2>
              <p className="text-xl max-w-4xl mx-auto leading-relaxed text-gray-200">
                We believe that process integrity drives product integrity. Our systems are certified for quality, environmental, and safety benchmarks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
                  <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-20 h-20 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
                      <div className="text-yellow-400">
                        {cert.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  </div>
                </AnimatedSection>)}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Make in India Movement */}
      <AnimatedSection  animation="fade-in">
        <section id="make-in-india" className="section bg-yellow-400">
          <div className="container text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6">Proudly Made in India. Built for the World.</h2>
            <p className="text-xl text-brand-blue mb-8 max-w-3xl mx-auto leading-relaxed">
              We are active contributors to India's self-reliance journey — committed to indigenous production, skill-building, and innovation. Our products carry the strength of Indian manufacturing with global vision, and proudly align with the Make in India initiative.
            </p>
            <p className="text-lg text-brand-blue mb-8 max-w-2xl mx-auto">
              For us, it's not just about business — it's about nation-building, one wire at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-blue hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all">
                <Link to="/products">
                  Explore Our Product Range
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-full">
                <Link to="/connect">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>;
};
export default Foundation;