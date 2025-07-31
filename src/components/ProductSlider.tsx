import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useDeviceType } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  category: string;
  link: number;
}

interface ProductSliderProps {
  products: Product[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const ProductSlider = ({ 
  products, 
  autoPlay = true, 
  autoPlayInterval = 5000,
  className 
}: ProductSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const { isMobile, isTablet } = useDeviceType();
  
  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const maxIndex = Math.max(0, products.length - slidesToShow);
  const canLoop = products.length > slidesToShow;

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (!autoPlay || !canLoop) return;
    
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, autoPlayInterval);
  }, [autoPlay, autoPlayInterval, maxIndex, canLoop]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating, maxIndex]);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    const newIndex = canLoop && currentIndex >= maxIndex ? 0 : Math.min(currentIndex + 1, maxIndex);
    goToSlide(newIndex);
  }, [currentIndex, maxIndex, canLoop, goToSlide, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    const newIndex = canLoop && currentIndex <= 0 ? maxIndex : Math.max(currentIndex - 1, 0);
    goToSlide(newIndex);
  }, [currentIndex, maxIndex, canLoop, goToSlide, isAnimating]);

  // Touch/drag handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    stopAutoPlay();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (dragStart === null) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - dragStart;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    if (dragStart === null) return;
    
    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setDragStart(null);
    setDragOffset(0);
    startAutoPlay();
  };

  return (
    <div 
      className={cn("relative w-full overflow-hidden group", className)}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Slider Container */}
      <div className="relative">
        <div 
          className="flex transition-transform duration-700 ease-in-out cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / slidesToShow)}% + ${dragOffset}px))`
          }}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {products.map((product, index) => (
              <div
                key={product.id}
                className={cn(
                  "flex-shrink-0 px-3 select-none",
                  isMobile ? "w-full" : isTablet ? "w-1/2" : "w-1/3"
                )}
              >
                {/* MAIN FIX: Added flex flex-col h-full to make cards equal height */}
                <div className="group/card relative bg-white rounded-xl overflow-hidden hover-lift transition-all duration-500 depth-2 hover:depth-4 border border-gray-200 hover:border-brand-blue/30 shadow-lg hover:shadow-2xl flex flex-col justify-evenly h-full">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {product.category}
                  </div>

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content - MAIN FIX: Added flex-1 to make content area flexible */}
                  <div className="p-4 flex flex-col flex-1">
                    {/* Title - Fixed height container */}
                    <div className="min-h-[2.5rem] flex items-start">
                      <h3 className="text-xl font-bold text-brand-blue font-poppins group-hover/card:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                        {product.title}
                      </h3>
                    </div>

                    {/* Description - Fixed height container */}
                    <div className="mb-4 min-h-[4.5rem] flex items-start">
                      <p className="text-gray-600 font-montserrat text-sm leading-relaxed group-hover/card:text-gray-700 transition-colors line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* Features - Fixed height container */}
                    <div className="mb-6 min-h-[5rem] flex flex-col justify-start">
                      <div className="space-y-2">
                        {product.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start text-sm">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold flex-shrink-0 mr-2 mt-2"></span>
                            <span className="text-gray-600 group-hover/card:text-gray-700 transition-colors line-clamp-2">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button - MAIN FIX: Added mt-auto to push button to bottom */}
                    <div className="mt-auto">
                      <Button 
                        asChild 
                        className="w-full bg-brand-blue hover:bg-blue-900 text-white transition-all duration-300 group-hover/card:shadow-lg"
                      >
                        <Link to={`/products/${product.link}`} className="flex items-center justify-center">
                          Know More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Enhanced Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/5 via-transparent to-brand-blue/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Enhanced Bottom Accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold group-hover/card:w-full transition-all duration-700" />
                </div>
              </div>
          ))}
        </div>
      </div>

      {/* Enhanced Navigation */}
      {canLoop && (
        <>
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-brand-blue rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-brand-blue hover:text-white transition-all duration-300 hover-lift z-10 opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-brand-blue/20 hover:border-brand-blue"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-brand-blue rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-brand-blue hover:text-white transition-all duration-300 hover-lift z-10 opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-brand-blue/20 hover:border-brand-blue"
            aria-label="Next products"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Enhanced Dots */}
      {canLoop && (
        <div className="flex justify-center space-x-3 mt-8">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:cursor-not-allowed",
                index === currentIndex 
                  ? "bg-brand-gold w-8 shadow-lg" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSlider;