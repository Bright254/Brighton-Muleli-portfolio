
import { CheckCircle } from "lucide-react";

interface SkillProps {
  name: string;
}

const skills = [
  "Branding & Identity",
  "UI/UX Design",
  "Logo Design",
  "Print Design",
  "Typography",
  "Illustration",
  "Social Media Graphics",
  "Motion Graphics"
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
              {/* Replace with your own image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Your Photo
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="w-full lg:w-1/2">
            <span className="section-title-tag">About Me</span>
            <h2 className="heading-lg mb-6">Creating Visual Stories That Connect & Inspire</h2>
            <p className="paragraph mb-6">
              I'm a passionate graphic designer with a keen eye for detail and a love for creating impactful visual stories. My approach combines creativity with strategic thinking to build designs that are both beautiful and effective.
            </p>
            <p className="paragraph mb-10">
              With experience across various industries, I bring a unique perspective to each project, ensuring that every design meets the highest standards of quality and achieves its communication goals.
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
