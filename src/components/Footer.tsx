import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} Shreyas M B. Built with <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> and React
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Shreyasmb06" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-smooth"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shreyas-m-b-547540250/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-smooth"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:e.shreyasmb.cse@gmail.com"
              className="p-2 rounded-lg hover:bg-primary/10 transition-smooth"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
