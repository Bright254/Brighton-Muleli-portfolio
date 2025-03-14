
import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Project data focused on graphic design
const projects = [
  {
    id: 1,
    title: "Evergreen | Sustainable Cosmetics Branding",
    description: "Complete brand identity and packaging design for an eco-friendly cosmetics line, emphasizing sustainable materials and natural aesthetics.",
    tags: ["Branding", "Packaging", "Typography"],
    image: "/placeholder.svg",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Pulse Annual Report Design",
    description: "Editorial design for a tech company's annual report, featuring custom infographics, data visualization, and photography direction.",
    tags: ["Editorial", "Print", "Infographics"],
    image: "/placeholder.svg",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Harvest Market Brand Identity",
    description: "Brand identity system for a local farmers market, including logo design, color palette, signage, and promotional materials.",
    tags: ["Branding", "Logo Design", "Print"],
    image: "/placeholder.svg",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Nomad Coffee Packaging",
    description: "Distinctive packaging design for a specialty coffee roaster, featuring hand-drawn illustrations and typography that tells the coffee's origin story.",
    tags: ["Packaging", "Illustration", "Typography"],
    image: "/placeholder.svg",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Rhythm Music Festival Campaign",
    description: "Visual campaign for an annual music festival spanning posters, digital ads, merchandise, and stage design with a cohesive visual language.",
    tags: ["Campaign", "Print", "Digital Design"],
    image: "/placeholder.svg",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Lumen Photography Portfolio",
    description: "Design and layout for a photographer's print portfolio and lookbook, emphasizing elegant typography and thoughtful image sequencing.",
    tags: ["Editorial", "Print", "Typography"],
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
          <span className="section-title-tag">Portfolio</span>
          <h2 className="heading-lg mb-4">Featured Design Work</h2>
          <p className="paragraph">
            A selection of my most impactful graphic design projects spanning brand identity, packaging, editorial, and print design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="group">
            Full Portfolio
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
