
import { CheckCircle } from "lucide-react";

interface SkillProps {
  name: string;
}

const skills = [
  "UI/UX Design",
  "Web Development",
  "React/Next.js",
  "Responsive Design",
  "JavaScript/TypeScript",
  "Animation",
  "CSS/Tailwind",
  "Figma/Adobe XD"
];

const Skill = ({ name }: SkillProps) => (
  <div className="flex items-center gap-2 py-1">
    <CheckCircle className="h-5 w-5 text-primary" />
    <span>{name}</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="w-full aspect-square bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 animate-pulse"></div>
              {/* Replace with your own image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Your Photo
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="w-full lg:w-1/2">
            <span className="section-title-tag">About Me</span>
            <h2 className="heading-lg mb-6">Dedicated to crafting exceptional digital experiences</h2>
            <p className="paragraph mb-6">
              I'm a passionate designer and developer with a keen eye for detail and a love for creating intuitive, user-centered digital experiences. My approach combines aesthetic sensibility with technical expertise to build solutions that are both beautiful and functional.
            </p>
            <p className="paragraph mb-10">
              With a background in both design and development, I bridge the gap between visual appeal and technical implementation, ensuring that every project meets the highest standards of quality and performance.
            </p>
            
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 mb-8">
              {skills.map((skill) => (
                <Skill key={skill} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
