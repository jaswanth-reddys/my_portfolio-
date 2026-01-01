import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 opacity-0 animate-slide-up">
              Hello, I'm
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-slide-up animation-delay-200">
              BC Jaswanth
              <span className="block text-gradient">Reddy</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-slide-up animation-delay-400">
              Computer Science Engineering
            </p>
            <p className="text-muted-foreground max-w-xl mb-8 opacity-0 animate-slide-up animation-delay-600">
              Final year B.Tech student at IIIT Raichur specializing in AI, Machine Learning, 
              and Full-Stack Development. Passionate about building AI-driven solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-slide-up animation-delay-800">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start opacity-0 animate-slide-up animation-delay-800">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:jaswanthreddy2028116@gmail.com"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 scale-110 animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/30 glow-primary animate-float">
                <img
                  src={profileImage}
                  alt="BC Jaswanth Reddy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 glass rounded-2xl flex items-center justify-center animate-float animation-delay-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">3+</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 glass rounded-2xl flex items-center justify-center animate-float animation-delay-400">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">7.18</p>
                  <p className="text-xs text-muted-foreground">CGPA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
