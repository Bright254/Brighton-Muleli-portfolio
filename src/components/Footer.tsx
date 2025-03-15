
import { Instagram, Dribbble, ExternalLink } from 'lucide-react';

const socialLinks = [
  { icon: <Instagram className="h-5 w-5" />, url: "#", label: "Instagram" },
  { icon: <Dribbble className="h-5 w-5" />, url: "#", label: "Dribbble" },
  { icon: <ExternalLink className="h-5 w-5" />, url: "#", label: "Behance" }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
          <div>
            <a href="#home" className="text-2xl font-bold">
              <span className="text-primary">Brighton Muleli</span>
            </a>
            <p className="mt-2 text-white/80 max-w-md">
              Creating thoughtful, strategic, and visually impactful design solutions for brands that want to make a lasting impression.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  aria-label={link.label}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white/70">
            &copy; {currentYear} Brighton Muleli. Graphic Designer.
          </p>
          
          <div className="mt-4 sm:mt-0">
            <nav className="flex space-x-6">
              <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-sm text-white/70 hover:text-primary transition-colors">Terms</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
