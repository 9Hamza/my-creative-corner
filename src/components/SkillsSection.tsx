const skillCategories = [
  {
    title: "Engines",
    skills: ["Unity (AR/VR, URP, Multiplayer)"],
  },
  {
    title: "Languages",
    skills: ["C#", "Java", "JavaScript", "HTML/CSS", "Bash"],
  },
  {
    title: "Tools & Services",
    skills: ["PlayFab", "Firebase", "Photon", "AdMob", "Google Sheets API", "Git", "JetBrains Rider"],
  },
  {
    title: "Cloud",
    skills: ["AWS (EC2)", "Vercel", "Remote Config", "Azure Functions"],
  },
  {
    title: "Other",
    skills: ["Version Control", "Tools Programming", "Debugging & Optimization"],
  },
];

const certifications = [
  "Unity Certified Associate: Game Developer",
  "Unity Certified Associate: Programmer",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with on a regular basis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-sm bg-muted text-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg font-medium"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
