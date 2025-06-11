
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ProductCardProps {
  title: string;
  image: string;
  description?: string;
  features?: string[];
  applications?: string[];
  advantages?: string[];
  anchor?: string;
  className?: string;
}

const ProductCard = ({ 
  title, 
  image, 
  description,
  features,
  applications,
  advantages,
  anchor,
  className 
}: ProductCardProps) => {
  const handleLearnMore = () => {
    if (anchor) {
      const element = document.getElementById(anchor);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <Card 
      className={cn(
        "h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group bg-white border border-gray-200 hover:border-brand-blue/30", 
        className
      )}
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden bg-gray-50">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110" 
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-brand-blue group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between pt-0">
        <div className="space-y-4">
          {/* Key Features */}
          {features && features.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-brand-blue mb-2 uppercase tracking-wide">Key Features</h4>
              <ul className="space-y-1">
                {features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start text-xs text-gray-600">
                    <CheckCircle className="h-3 w-3 text-brand-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
                {features.length > 3 && (
                  <li className="text-xs text-gray-500 italic">
                    +{features.length - 3} more features
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Applications */}
          {applications && applications.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-brand-blue mb-2 uppercase tracking-wide">Applications</h4>
              <div className="flex flex-wrap gap-1">
                {applications.slice(0, 3).map((app, idx) => (
                  <span key={idx} className="inline-block bg-blue-50 text-brand-blue text-xs px-2 py-1 rounded-full">
                    {app}
                  </span>
                ))}
                {applications.length > 3 && (
                  <span className="inline-block bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                    +{applications.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Advantages */}
          {advantages && advantages.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-brand-blue mb-2 uppercase tracking-wide">Advantages</h4>
              <div className="flex flex-wrap gap-1">
                {advantages.slice(0, 3).map((advantage, idx) => (
                  <span key={idx} className="inline-block bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                    {advantage}
                  </span>
                ))}
                {advantages.length > 3 && (
                  <span className="inline-block bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                    +{advantages.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Learn More Button */}
        {anchor && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Button 
              onClick={handleLearnMore}
              variant="outline"
              size="sm"
              className="w-full group/btn border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              <span className="text-xs font-medium">Learn More</span>
              <ArrowRight className="h-3 w-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
