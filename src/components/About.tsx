
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillProps {
  name: string;
}

const skills = [
  "Brand Identity Design",
  "Logo Design",
  "Typography",
  "HTML",
  "Figma",
  "Inkscape",
  "Creativity",
  "Communication"
];

const Skill = ({ name }: SkillProps) => (
  <div className="flex items-center gap-2 py-1">
    <CheckCircle className="h-5 w-5 text-primary" />
    <span>{name}</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="w-full aspect-square rounded-lg overflow-hidden relative">
              <img 
                src="/lovable-uploads/e387a111-cab0-4984-bba3-25cb18bc8346.png" 
                alt="Brighton Muleli" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
          
          {/* Content column */}
          <div className="w-full lg:w-1/2">
            <span className="section-title-tag">About Me</span>
            <h2 className="heading-lg mb-6">Designing Visuals That Communicate & Connect</h2>
            <p className="paragraph mb-6">
              I'm Brighton Muleli, a passionate graphic designer with 1 year of experience crafting visual identities and design solutions that help brands stand out in today's crowded marketplace.
            </p>
            <p className="paragraph mb-10">
              My design approach combines strategic thinking with creative execution, focusing on creating purposeful visuals that communicate effectively while delighting viewers with thoughtful aesthetics.
            </p>
            
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 mb-8">
              {skills.map((skill) => (
                <Skill key={skill} name={skill} />
              ))}
            </div>
            
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
