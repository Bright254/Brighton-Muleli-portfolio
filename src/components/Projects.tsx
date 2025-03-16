
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from "@/lib/utils";

// Project data with uploaded designs
const projects = [
  {
    id: 1,
    title: "Bright Blends Logo Design",
    tags: ["Branding", "Logo Design"],
    image: "/lovable-uploads/8e52f3ef-8381-4bec-8809-3f7df13ae6f1.png",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Bright Blends Wine Glass Logo",
    tags: ["Branding", "Logo Design"],
    image: "/lovable-uploads/32262651-c3ba-4a8a-99a9-61f18582aac0.png",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Fruit Punch Product Poster",
    tags: ["Product Design", "Print"],
    image: "/lovable-uploads/5d98eea0-5d06-4959-905e-bb65d4806011.png",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Lushy Henna Classes Poster",
    tags: ["Poster Design", "Event Promotion"],
    image: "/lovable-uploads/9efc0a4e-c3f7-4bce-81f2-f62412e1f28d.png",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Yemimar's Thrift Heaven Poster",
    tags: ["Fashion", "Promotional Design"],
    image: "/lovable-uploads/b5f3b130-8d1b-4750-845b-515d46658e6b.png",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Spartan Car Logo Design",
    tags: ["Branding", "Logo Design"],
    image: "/lovable-uploads/a3067e14-2a6d-4bf2-b114-b6be1e9cecbb.png",
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
            A showcase of my graphic design projects spanning branding, promotional materials, and print design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
