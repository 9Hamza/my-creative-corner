import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Shine Details",
    role: "Design & Development",
    description: "A bilingual Arabic/English landing page for a car-detailing centre in Jeddah. A photoreal car, rendered in Blender, turns as you scroll to show each service, and bookings go straight to WhatsApp.",
    tags: ["Next.js", "TypeScript", "Blender", "Arabic / English", "Vercel"],
    demo: "https://shine-details-site.vercel.app/en",
    image: "/ShineDetailsProject.jpg",
  },
  {
    title: "Qaddim",
    role: "Full Stack Developer",
    description: "Tailors a LaTeX résumé to a job posting without touching the template. Each edit is proposed as a reviewable change, a second Claude pass checks it against the original so nothing is invented, and the output must still compile. Arabic and English interface.",
    tags: ["Next.js", "TypeScript", "Claude API", "PostgreSQL", "LaTeX"],
    demo: "https://resume-tailor-blond-eight.vercel.app/",
    image: "/QaddimProject.jpg",
  },
  {
    title: "Tawoo Restaurant",
    role: "Web Developer",
    description: "An Arabic-first website for a charcoal-grilled chicken restaurant in Jeddah: full menu with prices, opening hours, location, and ordering through HungerStation.",
    tags: ["Astro", "Tailwind CSS", "GSAP", "Arabic RTL"],
    demo: "https://tawoo-restaurant-website.vercel.app/",
    image: "/TawooProject.jpg",
  },
  {
    title: "League Leaderboard Web App",
    role: "Full Stack Developer",
    description: "Built a full-stack web application visualizing League of Legends leaderboard data via Riot API. Hosted backend on AWS EC2 and frontend on Vercel.",
    tags: ["React", "Express", "AWS EC2", "Vercel", "Riot API"],
    github: "https://github.com/9Hamza/riot-api-analytics-tool",
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
