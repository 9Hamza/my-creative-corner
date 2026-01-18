import { Github, Linkedin, Mail, Gamepad2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-muted border-4 border-background shadow-lg flex items-center justify-center">
              <span className="text-4xl font-bold text-muted-foreground">HB</span>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Hamza Bahamdan
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-6">
            Unity Game Developer
          </p>

          {/* Bio */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            I'm a Unity Game Developer specializing in AR/VR, Multiplayer Systems, and Software Engineering.
            Based in Jeddah, Saudi Arabia, I love building immersive experiences and interactive games.
            Currently working on mobile games reaching millions of users worldwide.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/hamzabahamdan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/hamzabahamdan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://itch.io/profile/hamzabahamdan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-all hover:scale-110"
              aria-label="itch.io"
            >
              <Gamepad2 className="h-5 w-5" />
            </a>
            <a
              href="mailto:hamza.bahamdan@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Curved bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
