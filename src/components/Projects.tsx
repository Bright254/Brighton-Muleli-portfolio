
import { useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with advanced filtering, search functionality, and secure checkout process.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A minimalist portfolio website with smooth animations and responsive design to showcase creative work.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity application with drag-and-drop task organization, reminders, and progress tracking.",
    tags: ["React", "TypeScript", "Firebase"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
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
      <div className="aspect-video bg-muted overflow-hidden">
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
            <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/5 text-primary">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          <a 
            href={project.liveUrl} 
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
          </a>
          <a 
            href={project.githubUrl} 
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4 mr-1" /> View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">My Work</span>
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="paragraph">
            A collection of projects that showcase my skills and expertise in design and development. Each project represents a unique challenge and solution.
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
