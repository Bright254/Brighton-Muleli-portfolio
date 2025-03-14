
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfoItem = ({ icon, title, content }: ContactInfoItemProps) => (
  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md">
    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/5 text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground">{content}</p>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">Contact</span>
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <p className="paragraph">
            I'd love to hear from you. Whether you have a question, proposal, or just want to say hello.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ContactInfoItem 
            icon={<Mail className="h-6 w-6" />}
            title="Email"
            content="hello@example.com"
          />
          <ContactInfoItem 
            icon={<Phone className="h-6 w-6" />}
            title="Phone"
            content="+1 (555) 123-4567"
          />
          <ContactInfoItem 
            icon={<MapPin className="h-6 w-6" />}
            title="Location"
            content="San Francisco, CA"
          />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="p-8 rounded-lg bg-white shadow-sm border border-border/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
