import { ExternalLink, Github, Brain, Film, Apple } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Multi-Agent AI System for Cancer Detection",
    description:
      "Developed a multi-agent AI-based medical image analysis system for cancer detection across Pathology, Brain MRI, Mammography, Skin Cancer, and Lung Cancer using MedGemma-4B-IT model.",
    tech: ["Python", "FastAPI", "AI Agents", "MedGemma", "PDF Generation"],
    icon: Brain,
    gradient: "from-primary to-cyan-400",
    highlights: [
      "Multi-agent architecture for specialized analysis",
      "Custom AI scoring framework for malignancy risk",
      "Automated clinician-style PDF report generation",
      "Local inference for data privacy",
    ],
  },
  {
    title: "AI-based Fruit & Vegetable Quality Detection",
    description:
      "Implemented a YOLO-based object detection model to classify fruits and vegetables as healthy or rotten and estimate the percentage of damage in real-time.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
    icon: Apple,
    gradient: "from-green-400 to-emerald-500",
    highlights: [
      "Real-time object detection and classification",
      "Custom-labeled dataset with multiple categories",
      "Damage percentage estimation",
      "Computer vision pipeline",
    ],
  },
  {
    title: "Movie Booking System",
    description:
      "Designed and implemented an online movie ticket booking system with user-friendly UI, 3D theater view, seat selection, and role-based access control.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    icon: Film,
    gradient: "from-accent to-pink-500",
    highlights: [
      "Interactive 3D theater view",
      "30% faster load times with optimized SQL",
      "Role-based access control (Admin/User)",
      "Session handling and security features",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/3 w-1/2 h-96 bg-accent/5 rounded-l-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I've Built</p>
          <h2 className="section-heading">Featured Projects</h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass rounded-3xl overflow-hidden card-hover ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0`}
                  >
                    <project.icon className="w-7 h-7 text-background" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Github size={16} />
                    View Code
                  </Button>
                  <Button variant="glass" size="sm">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
