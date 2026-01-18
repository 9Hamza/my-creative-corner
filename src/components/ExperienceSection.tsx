const experiences = [
  {
    company: "Tech Corp",
    role: "Senior Software Developer",
    period: "2022 - Present",
    description:
      "Leading frontend development for the main product. Building scalable React applications and mentoring junior developers.",
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple web applications. Implemented CI/CD pipelines and improved deployment processes.",
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2018 - 2020",
    description:
      "Created responsive websites and web applications for various clients. Worked closely with designers to implement pixel-perfect designs.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-8 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

                <div
                  className={`ml-6 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
