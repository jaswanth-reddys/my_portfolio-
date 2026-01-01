import { Code2, Brain, Database, Globe } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI & ML",
    description: "Building intelligent systems using PyTorch, YOLO, and LangChain",
  },
  {
    icon: Code2,
    title: "Full-Stack",
    description: "Creating scalable applications with Python, FastAPI, and modern web tech",
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Analyzing and visualizing data with Python, SQL, and Power BI",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Crafting responsive interfaces with HTML, CSS, JS, and Bootstrap",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get To Know</p>
          <h2 className="section-heading">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a Computer Science Engineering student at the{" "}
              <span className="text-foreground font-medium">
                Indian Institute of Information Technology Raichur
              </span>
              , currently in my final year. My journey in tech has been driven by a deep
              curiosity for Artificial Intelligence and its real-world applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I've worked on impactful projects ranging from{" "}
              <span className="text-primary">healthcare AI systems</span> for cancer detection
              to <span className="text-accent">computer vision models</span> for agriculture.
              I believe in building technology that makes a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently seeking opportunities in{" "}
              <span className="text-foreground font-medium">
                Software Engineering, Data Science, or Machine Learning
              </span>{" "}
              roles where I can contribute and grow.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
