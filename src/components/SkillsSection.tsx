const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "Python", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
  },
  {
    title: "ML & AI",
    skills: ["PyTorch", "YOLOv8", "OpenCV", "LangChain", "NLP"],
  },
  {
    title: "Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Tools & Platforms",
    skills: ["FastAPI", "Power BI", "Excel", "MySQL"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "Machine Learning", "AI Agents", "Computer Networks", "Operating Systems"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-primary/5 rounded-r-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Expertise</p>
          <h2 className="section-heading">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 card-hover"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="font-display font-semibold text-xl mb-4 text-gradient">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
