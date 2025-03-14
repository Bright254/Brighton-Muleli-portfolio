
import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock project data focused on graphic design
const projects = [
  {
    id: 1,
    title: "Brand Identity - Artisan Bakery",
    description: "Complete brand identity design for an artisan bakery, including logo, color palette, typography, packaging, and brand guidelines.",
    tags: ["Branding", "Logo Design", "Packaging"],
    image: "/placeholder.svg",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Product Packaging - Organic Skincare",
    description: "Sustainable packaging design for an organic skincare brand, focusing on eco-friendly materials and vibrant visuals that communicate product benefits.",
    tags: ["Packaging", "Illustration", "Print Design"],
    image: "/placeholder.svg",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Print & Digital Campaign - Fashion Brand",
    description: "Cohesive visual campaign spanning print materials, social media, and digital ads for a seasonal fashion collection launch.",
    tags: ["Campaign", "Print", "Digital Design"],
    image: "/placeholder.svg",
    liveUrl: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg border border-border/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project image */}
      <div className="aspect-video bg-[#F5F5F5] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-in-out",
            isHovered ? "scale-105" : "scale-100"
          )}
          loading="lazy"
        />
      </div>
      
      {/* Project content */}
      <div className="p-6">
        <h3 className="heading-sm mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <a 
          href={project.liveUrl} 
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="h-4 w-4 mr-1" /> View Project
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#F5F5F5]">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">My Work</span>
          <h2 className="heading-lg mb-4">Featured Design Projects</h2>
          <p className="paragraph">
            A selection of my recent graphic design work across various industries and mediums. Each project represents a unique challenge and creative solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
