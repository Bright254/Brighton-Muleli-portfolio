
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillProps {
  name: string;
}

const skills = [
  "Brand Identity Design",
  "Logo Design",
  "Typography",
  "Print & Editorial",
  "Packaging Design",
  "Social Media Graphics",
  "Illustration",
  "Adobe Creative Suite"
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
            <div className="w-full aspect-square bg-[#F5F5F5] rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)]" style={{ backgroundSize: "20px 20px" }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl font-bold text-primary/20">AM</span>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="w-full lg:w-1/2">
            <span className="section-title-tag">About Me</span>
            <h2 className="heading-lg mb-6">Designing Visuals That Communicate & Connect</h2>
            <p className="paragraph mb-6">
              I'm Alex Morgan, a passionate graphic designer with 7+ years of experience crafting visual identities and design solutions that help brands stand out in today's crowded marketplace.
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
