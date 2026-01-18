import { Github, Linkedin, Mail, Download, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hamzabahamdan",
    icon: Github,
    username: "@hamzabahamdan",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hamzabahamdan",
    icon: Linkedin,
    username: "Hamza Bahamdan",
  },
  {
    name: "itch.io",
    href: "https://itch.io/profile/hamzabahamdan",
    icon: Gamepad2,
    username: "hamzabahamdan",
  },
  {
    name: "Email",
    href: "mailto:hamza.bahamdan@gmail.com",
    icon: Mail,
    username: "hamza.bahamdan@gmail.com",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 px-6 py-4 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">{link.name}</p>
                <p className="text-xs text-muted-foreground">{link.username}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Resume Download Button */}
        <div className="flex justify-center">
          <Button asChild size="lg" className="gap-2">
            <a href="/resume.pdf" download="Hamza_Bahamdan_Resume.pdf">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
