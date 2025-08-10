
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  message: string;
}

const EnhancedContactForm = ({ className }: { className?: string }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const { name, email, phone, company, inquiryType, message } = formData;

  const whatsappMessage = `Hi, I have an inquiry.
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Type of Inquiry: ${inquiryType}
Message: ${message}`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappNumber = '9837053329';

  // WhatsApp redirect URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Simulate delay like an API call
  setTimeout(() => {
    window.open(whatsappUrl, '_blank'); // Open WhatsApp in new tab
    toast.success('Redirecting to WhatsApp...');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      inquiryType: '',
      message: ''
    });
    setIsSubmitting(false);
  }, 1000);
};


  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12", className)}>
      {/* Contact Form */}
      <div className="glass p-6 md:p-8 rounded-2xl depth-2 hover-lift transition-all duration-300">
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4 font-poppins">
            Get in Touch
          </h3>
          <p className="text-gray-600 font-montserrat">
            Ready to discuss your wire requirements? Send us a message and our technical team will respond promptly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-brand-blue font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="border-gray-300 focus:border-brand-gold focus:ring-brand-gold/20 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-brand-blue font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="border-gray-300 focus:border-brand-gold focus:ring-brand-gold/20 transition-all duration-300"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-brand-blue font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="border-gray-300 focus:border-brand-gold focus:ring-brand-gold/20 transition-all duration-300"
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-brand-blue font-medium">
                Company
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="border-gray-300 focus:border-brand-gold focus:ring-brand-gold/20 transition-all duration-300"
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="inquiryType" className="text-brand-blue font-medium">
              Inquiry Type *
            </Label>
            <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
              <SelectTrigger className="border-gray-300 focus:border-brand-gold focus:ring-brand-gold/20 transition-all duration-300">
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                <SelectItem value="technical-support">Technical Support</SelectItem>
                <SelectItem value="quote-request">Quote Request</SelectItem>
                <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                <SelectItem value="general">General Question</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-brand-blue font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              rows={5}
              className="border-gray-300 focus:border-brand-gold focus:ring-brand-gold/20 transition-all duration-300 resize-none"
              placeholder="Please describe your requirements, specifications, or questions in detail..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-blue hover:bg-blue-900 text-white py-3 text-lg font-semibold hover-lift transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                Sending...
              </div>
            ) : (
              <div className="flex items-center">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </div>
            )}
          </Button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        {/* Quick Contact */}
        <div className="glass-dark p-6 rounded-xl depth-1 hover-lift transition-all duration-300">
          <h4 className="text-xl font-bold text-brand-blue mb-4 font-poppins">
            Quick Contact
          </h4>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-brand-gold" />
              </div>
              <div>
                <p className="font-medium text-brand-blue">Phone</p>
                <a href='tel:+919837053329' className='underline underline-offset-2'><p className="text-gray-600">+91 9837053329</p></a>
                <a href='tel:+919837002076' className='underline underline-offset-2'><p className="text-gray-600">+91 9837002076</p></a>
                <a href='tel:+919457815966' className='underline underline-offset-2'><p className="text-gray-600">+91 9457815966</p></a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center mr-4">
                <MessageCircle className="h-5 w-5 text-brand-gold" />
              </div>
              <div>
                <p className="font-medium text-brand-blue">Whatsapp</p>
                <a className='underline underline-offset-2' href='tel:+919837053329'>
                <p className="text-gray-600">+91 9837053329</p>
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-brand-gold" />
              </div>
              <div>
                <p className="font-medium text-brand-blue">Email</p>
                <a href='mailto:Maheshwariwires@gmail.com' className='underline underline-offset-2'>
                <p className="text-gray-600">Maheshwariwires@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center mr-4">
                <MapPin className="h-5 w-5 text-brand-gold" />
              </div>
              <div>
                <p className="font-medium text-brand-blue">Address</p>
                <p className="text-gray-600">19 A & B, Mohkampur Industrial Area <br></br> Phase-II, Rithani, Meerut, U.P, India, 250103</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="glass p-6 rounded-xl depth-1 hover-lift transition-all duration-300">
          <h4 className="text-xl font-bold text-brand-blue mb-4 font-poppins flex items-center">
            <Clock className="h-5 w-5 mr-2 text-brand-gold" />
            Business Hours
          </h4>
          <div className="space-y-2 text-gray-600">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="font-medium">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span className="font-medium">9:00 AM - 1:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span className="font-medium text-red-500">Closed</span>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-gradient-to-r from-brand-blue to-blue-600 p-6 rounded-xl text-white depth-2">
          <h4 className="text-lg font-bold mb-2">Fast Response Guarantee</h4>
          <p className="text-blue-100">We typically respond to all inquiries within 24 hours during business days.</p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContactForm;
