
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Portfolio', href: '#projects' },
  { title: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-bold transition-all hover:scale-105 duration-300"
          aria-label="Logo"
        >
          <span className="text-primary">Brighton Muleli</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <Button
          variant="outline"
          size="sm"
          className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-white"
          asChild
        >
          <a href="#contact">Get In Touch</a>
        </Button>

        <button 
          className="md:hidden text-foreground focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col md:hidden pt-24 px-6 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col">
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="text-xl font-medium hover:text-primary"
                  onClick={closeMenu}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <Button
            className="mt-10 bg-primary hover:bg-primary/90"
            asChild
          >
            <a href="#contact" onClick={closeMenu}>Get In Touch</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
