import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-developer.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium tracking-wide">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                Shreyas M B
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gradient">
                Full-Stack Developer
              </h2>
              <p className="text-xl text-muted-foreground max-w-lg">
                Building efficient and scalable digital experiences from front to back.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="glow-cyan hover:scale-105 transition-smooth group"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-smooth" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:scale-105 transition-smooth"
                onClick={() => scrollToSection("contact")}
              >
                Hire Me
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                className="hover:bg-muted hover:scale-105 transition-smooth"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card hover:bg-primary/20 border border-border hover:border-primary transition-smooth hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card hover:bg-primary/20 border border-border hover:border-primary transition-smooth hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:e.shreyasmb.cse@gmail.com"
                className="p-3 rounded-lg bg-card hover:bg-primary/20 border border-border hover:border-primary transition-smooth hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl">
              <img 
                src={heroImage} 
                alt="Developer workspace illustration"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 bg-card border-2 border-primary/50 px-6 py-3 rounded-full animate-float shadow-lg">
              <p className="text-primary font-semibold">CGPA 8.8</p>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border-2 border-secondary/50 px-6 py-3 rounded-full animate-float shadow-lg" style={{ animationDelay: "1s" }}>
              <p className="text-secondary font-semibold">3+ Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
