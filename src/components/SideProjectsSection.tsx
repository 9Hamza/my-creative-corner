import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "League Leaderboard Web App",
    role: "Full Stack Developer",
    description: "Built a full-stack web application visualizing League of Legends leaderboard data via Riot API. Hosted backend on AWS EC2 and frontend on Vercel.",
    tags: ["React", "AWS EC2", "Vercel", "Riot API"],
    github: "https://github.com/9Hamza/riot-inting-tracker",
    demo: "https://inter-of-the-day-client.vercel.app/",
    image: "/InterOfTheDayProject.png",
  },
  {
    title: "VR Interactive Experience",
    role: "Freelance Unity Developer (VR)",
    description: "Helped develop an Oculus Quest 2 VR experience with physics-based interactions for a client participating in one of Ithraa's competitions.",
    tags: ["Unity", "VR", "Oculus Quest 2", "Physics"],
    image: "/vrprojectshowcase.jpg",
  },
  {
    title: "IAP Purchases Integration",
    role: "Freelance Unity Developer",
    description: "Implemented in-app purchase systems for an existing Unity mobile application, supporting virtual currency and item purchases, with full purchase restoration handling.",
    tags: ["Unity", "Mobile", "Firebase Auth", "Firebase Firestore"],
    image: "/iapprojectshowcase.jpg",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Side Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of freelance & personal projects.
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card hover:shadow-lg transition-all duration-300 border-border overflow-hidden"
            >
              <div className="md:flex">
                {/* Project Image */}
                <div className="md:w-1/2 bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-full object-cover transform"
                  />
                </div>
                
                {/* Project Content */}
                <CardContent className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0 ml-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-primary font-medium mb-3">
                    {project.role}
                  </p>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
