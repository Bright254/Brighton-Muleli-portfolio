
import { CheckCircle } from "lucide-react";

interface SkillProps {
  name: string;
}

const skills = [
  "Brand Identity Design",
  "Logo Design",
  "Print Design",
  "Typography",
  "Illustration",
  "Social Media Graphics",
  "Packaging Design",
  "Marketing Collateral"
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
            <h2 className="heading-lg mb-6">Crafting Visual Stories That Leave a Lasting Impression</h2>
            <p className="paragraph mb-6">
              I'm a passionate graphic designer with over 5 years of experience creating impactful visual identities and brand materials. My approach combines creative design thinking with strategic brand development to create designs that are both visually stunning and effective.
            </p>
            <p className="paragraph mb-10">
              Working with clients across various industries, from startups to established businesses, I bring a unique perspective to each project and ensure every design meets the highest standards while achieving your communication goals.
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
