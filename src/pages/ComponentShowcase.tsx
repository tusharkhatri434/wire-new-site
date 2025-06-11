
import React from 'react';
import { Button } from '@/components/ui/button';
import ResponsivePopup from '@/components/ResponsivePopup';
import AnimatedSlider from '@/components/AnimatedSlider';
import AnimatedSection from '@/components/AnimatedSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Bell, Star, Download, Settings } from 'lucide-react';

const ComponentShowcase = () => {
  const slides = [
    {
      id: '1',
      title: 'Advanced Wire Technology',
      description: 'Precision engineered solutions for industrial applications',
      image: '/lovable-uploads/cb864c1e-9f13-4dc8-b80f-4b5d08341c99.jpg',
      bgColor: 'linear-gradient(135deg, #0A1D50 0%, #1E40AF 100%)'
    },
    {
      id: '2',
      title: 'Quality Assurance',
      description: 'Certified processes ensuring maximum reliability',
      image: '/lovable-uploads/cb864c1e-9f13-4dc8-b80f-4b5d08341c99.jpg',
      bgColor: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)'
    },
    {
      id: '3',
      title: 'Global Standards',
      description: 'Meeting international quality requirements',
      image: '/lovable-uploads/cb864c1e-9f13-4dc8-b80f-4b5d08341c99.jpg',
      bgColor: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-blue/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/cb864c1e-9f13-4dc8-b80f-4b5d08341c99.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10">
          <AnimatedSection animation="fade-in">
            <h1 className="heading-1 text-center mb-8 animate-slide-in-up">
              Component Showcase
            </h1>
            <p className="text-responsive-lg text-center text-white/90 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              Experience our responsive design system with advanced animations and interactive components
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Animated Slider Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="slide-left">
            <h2 className="heading-2 text-center mb-12 text-brand-blue">
              Interactive Slider
            </h2>
            <AnimatedSlider slides={slides} />
          </AnimatedSection>
        </div>
      </section>

      {/* Popup Examples Section */}
      <section className="section bg-gradient-to-r from-gray-50 to-white">
        <div className="container">
          <AnimatedSection animation="fade-in">
            <h2 className="heading-2 text-center mb-12 text-brand-blue">
              Responsive Popups
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Info Popup */}
              <ResponsivePopup
                trigger={
                  <Button className="w-full btn-primary hover-lift">
                    <Bell className="mr-2 h-4 w-4" />
                    Info Popup
                  </Button>
                }
                title="Information"
                description="This is an informational message"
                variant="info"
                size="md"
              >
                <div className="space-y-4">
                  <p className="text-responsive-base text-gray-700">
                    This popup demonstrates responsive design with beautiful animations and glass morphism effects.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-brand-gold" />
                    <span className="text-sm">Premium feature enabled</span>
                  </div>
                </div>
              </ResponsivePopup>

              {/* Success Popup */}
              <ResponsivePopup
                trigger={
                  <Button className="w-full btn-accent hover-lift">
                    <Star className="mr-2 h-4 w-4" />
                    Success
                  </Button>
                }
                title="Success!"
                description="Operation completed successfully"
                variant="success"
                size="md"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-green-700">Your request has been processed successfully!</p>
                </div>
              </ResponsivePopup>

              {/* Warning Popup */}
              <ResponsivePopup
                trigger={
                  <Button variant="outline" className="w-full hover-lift border-amber-300 text-amber-700 hover:bg-amber-50">
                    <Settings className="mr-2 h-4 w-4" />
                    Warning
                  </Button>
                }
                title="Warning"
                description="Please review before proceeding"
                variant="warning"
                size="lg"
              >
                <div className="space-y-4">
                  <p className="text-amber-700">
                    This action may affect your current settings. Please review the changes carefully.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-amber-600">
                    <li>Configuration will be updated</li>
                    <li>Previous settings will be backed up</li>
                    <li>Changes are reversible</li>
                  </ul>
                </div>
              </ResponsivePopup>

              {/* Download Popup */}
              <ResponsivePopup
                trigger={
                  <Button variant="secondary" className="w-full hover-lift">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                }
                title="Download Resources"
                description="Access technical documentation"
                variant="default"
                size="xl"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-brand-blue/20 rounded-lg hover-lift cursor-pointer transition-all duration-300">
                      <h4 className="font-semibold text-brand-blue mb-2">Product Catalog</h4>
                      <p className="text-sm text-gray-600">Complete product specifications</p>
                    </div>
                    <div className="p-4 border border-brand-blue/20 rounded-lg hover-lift cursor-pointer transition-all duration-300">
                      <h4 className="font-semibold text-brand-blue mb-2">Technical Data</h4>
                      <p className="text-sm text-gray-600">Engineering specifications</p>
                    </div>
                  </div>
                  <Button className="w-full btn-primary">
                    Download All Resources
                  </Button>
                </div>
              </ResponsivePopup>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Animation Examples */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="scale-in">
            <h2 className="heading-2 text-center mb-12 text-brand-blue">
              Scroll Animations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="slide-left" delay={100}>
                <div className="p-8 bg-white rounded-xl shadow-lg hover-lift depth-2 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">Slide Left</h3>
                  <p className="text-gray-600">Content slides in from the left with smooth easing</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={200}>
                <div className="p-8 bg-white rounded-xl shadow-lg hover-lift depth-2 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                    <Bell className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">Fade In</h3>
                  <p className="text-gray-600">Gentle fade-in effect with upward motion</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={300}>
                <div className="p-8 bg-white rounded-xl shadow-lg hover-lift depth-2 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-gray to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">Slide Right</h3>
                  <p className="text-gray-600">Content slides in from the right with bounce</p>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Responsive Features */}
      <section className="section bg-gradient-to-br from-brand-blue/5 to-white">
        <div className="container">
          <AnimatedSection animation="scale-in">
            <h2 className="heading-2 text-center mb-12 text-brand-blue">
              Responsive Features
            </h2>
            
            <div className="prose prose-lg max-w-4xl mx-auto text-center">
              <p className="text-responsive-lg text-gray-700 mb-8">
                All components automatically adapt to different screen sizes with optimized interactions for mobile, tablet, and desktop devices.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                <div className="p-6 bg-white rounded-lg shadow-md hover-lift">
                  <h4 className="font-semibold text-brand-blue mb-2">Mobile First</h4>
                  <p className="text-sm text-gray-600">Optimized touch interactions and readable typography</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md hover-lift">
                  <h4 className="font-semibold text-brand-blue mb-2">Tablet Ready</h4>
                  <p className="text-sm text-gray-600">Perfect balance between mobile and desktop experiences</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md hover-lift">
                  <h4 className="font-semibold text-brand-blue mb-2">Desktop Enhanced</h4>
                  <p className="text-sm text-gray-600">Advanced interactions and hover effects</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ComponentShowcase;
