const experiences = [
  {
    company: "Table Knight Games",
    location: "Remote",
    role: "Unity Game Developer",
    period: "Mar 2023 – Present",
    description:
      "Worked on and maintained Jawabak Jawabahom (2M+ users) using Unity/C#, PlayFab, Firebase, and Photon. Helped build and deploy Ghostlee, an AR social app with Firebase backend and localization support. Streamlined designer workflows via Firebase Remote Config for real-time updates without new builds.",
  },
  {
    company: "Tamatem Games",
    location: "Amman, Jordan",
    role: "Unity Game Developer",
    period: "Apr 2024 – Oct 2024",
    description:
      "Connected server authoritative game logic with the Unity frontend, ensuring smooth multiplayer experiences. Implemented new gameplay features.",
  },
  {
    company: "Tamatem Games",
    location: "Amman, Jordan",
    role: "Game Development Intern",
    period: "Oct 2023 – Apr 2024",
    description:
      "Collaborated in Unity networking stack migration; contributed reviewed PRs enhancing delivery speed. Gained experience with AWS, SignalR, RabbitMQ, and Microsoft Orleans in distributed game systems.",
  },
  {
    company: "Ithraa Competition",
    location: "Remote, Saudi Arabia",
    role: "Freelance Unity Developer (VR)",
    period: "Jan 2023 – Feb 2023",
    description:
      "Implemented Oculus Quest 2 VR experiences with physics-based interactions.",
  },
  {
    company: "Digipen Institute of Technology",
    location: "Riyadh, Saudi Arabia",
    role: "Game Programming Instructor (Gamers8 GameDevZone)",
    period: "Jul 2023 – Sep 2023",
    description:
      "Helped teach fundamentals of game programming in p5.js to a class of 25+ students. Guided students through game projects and provided constructive feedback.",
  },
  {
    company: "Bupa Arabia",
    location: "Jeddah, Saudi Arabia",
    role: "Software Development Intern",
    period: "Jun 2021 – Aug 2021",
    description:
      "Ported C# libraries to Java, improving internal software compatibility.",
  },
];

const education = [
  {
    institution: "University of Tulsa",
    location: "Tulsa, OK",
    degree: "B.S. in Computer Science",
    period: "May 2022",
  },
  {
    institution: "Metropolia University of Applied Sciences",
    location: "Helsinki, Finland",
    degree: "Game Development Certificate (6 months)",
    period: "Apr 2025",
  },
  {
    institution: "Saudi Digital Academy",
    location: "Jeddah, Saudi Arabia",
    degree: "Advanced Game Dev Bootcamp (4 months)",
    period: "Apr 2023",
  },
  {
    institution: "Saudi Digital Academy (with Coding Dojo)",
    location: "Jeddah, Saudi Arabia",
    degree: "Beginner Game Dev Bootcamp (4 months)",
    period: "Nov 2022",
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

        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-8 last:mb-0 pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

                <div className="p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.location}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <h4 className="font-semibold text-foreground">{edu.degree}</h4>
              <p className="text-primary text-sm font-medium">{edu.institution}</p>
              <p className="text-muted-foreground text-sm">
                {edu.location} • {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
