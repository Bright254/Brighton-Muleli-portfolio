
import { Instagram, Linkedin } from 'lucide-react';

// Custom Behance icon since it's not available in lucide-react
const BehanceIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M8 9h5.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5H8" />
    <path d="M8 15h6.5a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5H8" />
    <path d="M16 6h.01" />
    <path d="M12 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4h-4Z" />
  </svg>
);

const socialLinks = [
  { 
    icon: <BehanceIcon />, 
    url: "https://www.behance.net/Brighton_Muleli", 
    label: "Behance"
  },
  { 
    icon: <Linkedin className="h-5 w-5" />, 
    url: "https://www.linkedin.com/in/brighton-muleli-456b04284", 
    label: "LinkedIn" 
  },
  { 
    icon: <Instagram className="h-5 w-5" />, 
    url: "https://www.instagram.com/m.y.r.i.a.d_b.r.i.g.h.t/", 
    label: "Instagram" 
  }
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
