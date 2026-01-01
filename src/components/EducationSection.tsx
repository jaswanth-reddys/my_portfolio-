import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Indian Institute of Information Technology Raichur",
    location: "Raichur, Karnataka",
    period: "Nov 2022 - May 2026",
    score: "CGPA: 7.18/10.0",
    current: true,
  },
  {
    degree: "Junior College (Class 11-12)",
    institution: "NRI Junior College",
    location: "Guntur, Andhra Pradesh",
    period: "Jan 2020 - Jan 2022",
    score: "Percentage: 87.5%",
    current: false,
  },
  {
    degree: "High School (Class 10)",
    institution: "Sri Santhinikethan School",
    location: "Nandyal, Andhra Pradesh",
    period: "Jan 2019 - Jan 2020",
    score: "Percentage: 98.1%",
    current: false,
  },
];

const certifications = [
  {
    title: "Data Science Training Program",
    issuer: "Datateach.ai, Hyderabad",
    duration: "6 months",
    topics: ["Python", "SQL", "Machine Learning", "Gen AI"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="section-heading">Education & Certifications</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className="relative pl-8 pb-6 last:pb-0 border-l-2 border-border last:border-transparent"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px] ${
                      item.current
                        ? "bg-primary animate-glow-pulse"
                        : "bg-border"
                    }`}
                  />

                  <div className="glass rounded-2xl p-6 card-hover">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-display font-semibold text-lg">
                        {item.degree}
                      </h4>
                      {item.current && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full shrink-0">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-1">
                      {item.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.location} • {item.period}
                    </p>
                    <p className="text-primary font-medium">{item.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-xl">
                Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="glass rounded-2xl p-6 card-hover"
                >
                  <h4 className="font-display font-semibold text-lg mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Duration: {cert.duration}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
