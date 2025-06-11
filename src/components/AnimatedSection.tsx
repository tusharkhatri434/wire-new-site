
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  animation = 'fade-in', 
  className,
  delay = 0 
}: AnimatedSectionProps) => {
  const { ref, isInView } = useScrollAnimation();

  const animationClass = `scroll-${animation}`;
  
  return (
    <div
      ref={ref}
      className={cn(
        animationClass,
        isInView && 'in-view',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
