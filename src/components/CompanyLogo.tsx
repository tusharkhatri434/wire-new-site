import { cn } from "@/lib/utils";
interface CompanyLogoProps {
  className?: string;
}
const CompanyLogo = ({
  className
}: CompanyLogoProps) => {
  return <div className={cn("flex items-center bg-white rounded-sm", className)}>
      <div className="h-12 sm:h-14 md:h-16 xl:h-[70px] flex-shrink-0">
        <img alt="Maheshwari Wires Logo" className="h-full w-auto object-cover filter brightness-110 contrast-110" src="/lovable-uploads/4b08319e-d6ea-4de7-b408-d2e3836e50e1.png" />
      </div>
    </div>;
};
export default CompanyLogo;