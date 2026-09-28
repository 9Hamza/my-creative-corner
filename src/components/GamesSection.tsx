import { Gamepad2, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const games = [
  {
    title: "Game Jam Projects",
    description: "Various game jam entries created under time constraints, showcasing rapid prototyping and creative problem-solving skills. Pictured: Cold Escape (ASM Game Jam 2025); also No Time to Paws (GameZanga 13) and Rotygon.",
    image: "/GameJamProjects.jpg",
  },
  {
    title: "Bootcamp Projects",
    description: "Games developed during the Saudi Digital Academy bootcamp, demonstrating fundamentals of game development and Unity expertise. Pictured: Shadow's Tale; also Perception is Reality.",
    image: "/BootcampProjects.jpg",
  },
];

const GamesSection = () => {
  return (
    <section id="games" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Games
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Personal game projects, game jam entries, and bootcamp creations. Check out my itch.io profile for playable demos!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
          {games.map((game, index) => (
            <Card
              key={index}
              className="group bg-card hover:shadow-lg transition-all duration-300 border-border overflow-hidden"
            >
              <div className="aspect-video bg-muted">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {game.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {game.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* itch.io CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="gap-2">
            <a
              href="https://hamboozy.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gamepad2 className="h-4 w-4" />
              View All Games on itch.io
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
