import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Jawabak Jawabahom",
    role: "Unity Game Developer at Table Knight Games",
    description: "Jawabak Jawabahom is a multiplayer trivia mobile game with over 2 million users. I'm contributing to the ongoing development, feature implementation, and maintenance of the live game.",
    tags: ["Unity", "C#", "PlayFab", "Firebase", "Photon", "Mobile", "Azure"],
    image: "/JJ2024.png",
  },
  {
    title: "Ghostlee",
    role: "Unity Game Developer at Table Knight Games",
    description: "An AR social app with Firebase backend and full localization support. Built immersive augmented reality experiences for mobile devices that utilize real GPS data.",
    tags: ["Unity", "AR", "Firebase", "Localization", "Mobile"],
    image: "/GhostleeProject.png",
  },
  {
    title: "Wanas",
    role: "Unity Game Developer at Tamatem Games",
    description: "Connected server authoritative game logic with the Unity frontend, ensuring smooth multiplayer experiences. Implemented new gameplay features. ",
    tags: ["Unity", "C#", "Mobile", "AWS EC2", "SignalR", "Photon"],
    image: "/WanasProject.png",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of professional projects I've worked on.
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
