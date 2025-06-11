
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SlideItem {
  id: string;
  title: string;
  description: string;
  image: string;
  bgColor?: string;
}

interface AnimatedSliderProps {
  slides: SlideItem[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

const AnimatedSlider = ({
  slides,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className
}: AnimatedSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide, autoPlay, interval]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className={cn(
      "relative w-full h-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl depth-3",
      className
    )}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-all duration-500 ease-in-out",
              index === currentSlide 
                ? "opacity-100 translate-x-0 scale-100" 
                : index < currentSlide 
                  ? "opacity-0 -translate-x-full scale-95"
                  : "opacity-0 translate-x-full scale-95"
            )}
            style={{
              background: slide.bgColor || `linear-gradient(135deg, ${index % 2 === 0 ? '#0A1D50' : '#1E3A8A'} 0%, ${index % 2 === 0 ? '#1E40AF' : '#3B82F6'} 100%)`
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Glass Overlay */}
            <div className="absolute inset-0 glass-dark" />
            
            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full p-8 text-center">
              <div className="max-w-2xl animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-poppins animate-slide-in-up">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white/90 font-montserrat animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/30 hover-lift transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/30 hover-lift transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 hover-scale",
                index === currentSlide
                  ? "bg-brand-gold scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedSlider;
