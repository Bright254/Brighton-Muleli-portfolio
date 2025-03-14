
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 overflow-hidden relative bg-[#F5F5F5]"
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-title-tag animate-fade-in">Graphic Designer</span>
          <h1 className="heading-xl mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary">Jane Doe</span> - Creating Visual Identities & Brand Stories
          </h1>
          <p className="paragraph max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            I specialize in branding, print design, and digital graphics that help businesses communicate their unique story and connect with their audience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Start a Project</a>
            </Button>
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
    </section>
  );
};

export default Hero;
