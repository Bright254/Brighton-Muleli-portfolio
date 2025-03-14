
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: <Github className="h-5 w-5" />, url: "#", label: "GitHub" },
  { icon: <Linkedin className="h-5 w-5" />, url: "#", label: "LinkedIn" },
  { icon: <Twitter className="h-5 w-5" />, url: "#", label: "Twitter" }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
          <div>
            <a href="#home" className="text-2xl font-bold">Portfolio</a>
            <p className="mt-2 text-primary-foreground/80 max-w-md">
              Creating precision-engineered digital experiences with a focus on detail, usability, and beauty.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  aria-label={link.label}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/80">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          
          <div className="mt-4 sm:mt-0">
            <nav className="flex space-x-6">
              <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
