
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useParallax } from "@/hooks/useScrollAnimation";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  opacity?:string
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  buttonText = "Explore More",
  buttonLink = "/products",
  opacity="opacity-35",
  className
}: HeroSectionProps) => {
  const offsetY = useParallax();

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Parallax Background Layers */}
      <div 
        className="absolute inset-0 parallax-back"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // transform: `translateY(${offsetY * 0.5}px)`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Gradient Overlay with 3D depth */}
      <div 
        className={`absolute inset-0 parallax-base ${opacity}`}
        style={{
          background: `linear-gradient(135deg, rgba(10,29,80,0.9) 0%, rgba(10,29,80,0.7) 50%, rgba(10,29,80,0.85) 100%)`,
          transform: `translateY(${offsetY * 0.2}px)`
        }}
      />

      {/* Floating Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float absolute top-1/4 right-1/4 w-2 h-2 bg-brand-gold rounded-full opacity-60" />
        <div className="animate-float absolute top-1/3 left-1/5 w-1 h-1 bg-white rounded-full opacity-40" style={{ animationDelay: '2s' }} />
        <div className="animate-float absolute bottom-1/3 right-1/5 w-3 h-3 bg-brand-gold rounded-full opacity-30" style={{ animationDelay: '4s' }} />
      </div> */}

      {/* Content */}
      <div className="container mx-auto px-4 py-0 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-brand-gold bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
          </div>
          
          {subtitle && (
            <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl font-montserrat leading-relaxed">
                {subtitle}
              </p>
            </div>
          )}
          
          {buttonText && buttonLink && (
            <div className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                asChild 
                className="bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-500 hover:to-brand-gold text-brand-blue px-8 py-6 text-base font-semibold font-montserrat hover-lift hover-glow transition-all duration-300 depth-2"
              >
                <Link to={buttonLink}>{buttonText}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
