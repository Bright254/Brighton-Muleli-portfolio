
import { Button } from "@/components/ui/button";
import { ArrowDown, PenTool, Palette, Layers } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 overflow-hidden relative bg-gray-50"
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-title-tag animate-fade-in">Graphic Designer</span>
          <h1 className="heading-xl mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary">Alex Morgan</span> - Creative Graphic Designer
          </h1>
          <p className="paragraph max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Transforming ideas into compelling visual narratives through strategic design, typography, and artful composition.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="#projects">View Portfolio</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Start a Project</a>
            </Button>
          </div>
        </div>
        
        {/* Design elements */}
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
              <PenTool className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Branding</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
              <Palette className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Print Design</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
              <Layers className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Packaging</span>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-10 w-10 text-primary/70" />
          </a>
        </div>
      </div>
      
      {/* Background design elements */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 h-48 w-48 rounded-full bg-blue-100/20 blur-3xl"></div>
    </section>
  );
};

export default Hero;
