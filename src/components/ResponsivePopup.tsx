
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalTrigger, ModalClose } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { X, Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface ResponsivePopupProps {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const variantConfig = {
  default: {
    icon: Info,
    colorClass: 'text-brand-blue',
    bgClass: 'bg-brand-blue/5',
    borderClass: 'border-brand-blue/20'
  },
  success: {
    icon: CheckCircle,
    colorClass: 'text-green-600',
    bgClass: 'bg-green-50',
    borderClass: 'border-green-200'
  },
  warning: {
    icon: AlertTriangle,
    colorClass: 'text-amber-600',
    bgClass: 'bg-amber-50',
    borderClass: 'border-amber-200'
  },
  error: {
    icon: XCircle,
    colorClass: 'text-red-600',
    bgClass: 'bg-red-50',
    borderClass: 'border-red-200'
  },
  info: {
    icon: Info,
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-50',
    borderClass: 'border-blue-200'
  }
};

const sizeConfig = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl'
};

const ResponsivePopup = ({ 
  trigger, 
  title, 
  description, 
  children, 
  variant = 'default',
  size = 'md',
  className 
}: ResponsivePopupProps) => {
  const [open, setOpen] = useState(false);
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger asChild>
        {trigger}
      </ModalTrigger>
      <ModalContent className={cn(
        sizeConfig[size],
        config.bgClass,
        config.borderClass,
        'animate-scale-in hover-lift',
        className
      )}>
        <ModalHeader className="flex flex-row items-center space-y-0 space-x-3 pb-4">
          <div className={cn(
            'p-2 rounded-full',
            config.bgClass,
            'ring-2 ring-offset-2',
            variant === 'default' ? 'ring-brand-gold/30' : `ring-${variant === 'success' ? 'green' : variant === 'warning' ? 'amber' : variant === 'error' ? 'red' : 'blue'}-200`
          )}>
            <Icon className={cn('h-5 w-5', config.colorClass)} />
          </div>
          <div className="flex-1">
            <ModalTitle className={cn(config.colorClass, 'text-lg')}>{title}</ModalTitle>
            {description && (
              <ModalDescription className="mt-1">{description}</ModalDescription>
            )}
          </div>
        </ModalHeader>
        
        <div className="py-4">
          {children}
        </div>
        
        <div className="flex justify-end pt-4 border-t border-gray-200">
          <ModalClose asChild>
            <Button 
              variant="outline" 
              className="mr-2 hover-scale transition-all duration-200"
            >
              Close
            </Button>
          </ModalClose>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ResponsivePopup;
