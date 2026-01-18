import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, checkout, and payment integration.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates and team features.",
    tags: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with forecasts, maps, and location-based alerts.",
    tags: ["React", "APIs", "Tailwind", "Charts"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Portfolio Generator",
    description: "CLI tool that generates stunning portfolio websites from a config file.",
    tags: ["Node.js", "CLI", "Templates", "Markdown"],
    github: "https://github.com",
  },
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
            A selection of projects I've worked on. Each one taught me something new.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
