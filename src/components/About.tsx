import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Delivering high-quality solutions within tight deadlines"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-smooth">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Enthusiastic Computer Science student at JNNCE, Shivamogga with a strong passion for 
                problem-solving and technology. I love building full-stack web applications that solve 
                real-world problems and create meaningful user experiences.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Eager to apply my skills and work collaboratively in a dynamic environment focused on 
                innovation and growth. I believe in continuous learning and staying updated with modern 
                web technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:scale-105 transition-smooth group animate-scale-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
