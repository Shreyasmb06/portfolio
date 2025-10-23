import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Full Stack Web Development Intern",
      organization: "CMTI (Central Manufacturing Technology Institute)",
      period: "2024",
      description: "Built dynamic web pages with HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL. Integrated email functionality using PHPMailer for automated notifications and user communication. Developed Product Management System for efficient operations."
    },
    {
      type: "education",
      title: "BE in Computer Science",
      organization: "JNNCE, Shivamogga",
      period: "2021 - 2025",
      description: "Currently pursuing Bachelor's degree with CGPA of 8.8/10. Focused on software engineering, web technologies, and full-stack development. Active participant in coding activities and technical projects."
    },
    {
      type: "education",
      title: "PUC (Intermediate in Science)",
      organization: "State Board",
      period: "2019 - 2021",
      description: "Completed Pre-University Course with 92%. Strong foundation in Mathematics, Physics, and Computer Science."
    },
    {
      type: "education",
      title: "10th (Secondary Examination)",
      organization: "State Board",
      period: "2018 - 2019",
      description: "Completed secondary education with 83%. Developed early interest in computers and programming."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-smooth group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                          {exp.type === "work" ? (
                            <Briefcase className="h-6 w-6 text-primary" />
                          ) : (
                            <GraduationCap className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                          <p className="text-primary font-medium mb-2">{exp.organization}</p>
                          <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                          <p className="text-foreground/80">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-[7px] md:-translate-x-1/2 animate-glow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
