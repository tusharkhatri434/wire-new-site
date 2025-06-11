
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  id?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  alignment = "center",
  className,
  id
}: SectionHeadingProps) => {
  return (
    <div 
      id={id} 
      className={cn(
        "mb-6 md:mb-8 px-4 sm:px-0 scroll-mt-20",
        {
          "text-left": alignment === "left",
          "text-center": alignment === "center",
          "text-right": alignment === "right"
        }, 
        className
      )}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 py-2 md:py-3 text-brand-blue font-poppins">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-gray-600 font-montserrat leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
