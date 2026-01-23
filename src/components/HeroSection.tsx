import { forwardRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const ItchIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" ref={ref} {...props}>
    <path d="M 16 5 C 12.748 5 8.3121094 5.0508594 7.4121094 5.1308594 C 6.4021094 5.7368594 4.4028125 8.0309531 4.3828125 8.6269531 L 4.3828125 9.6269531 C 4.3828125 10.889953 5.5657188 12 6.6367188 12 C 7.9197187 12 8.9902344 10.929969 8.9902344 9.6679688 C 8.9902344 10.929969 10.0305 12 11.3125 12 C 12.6055 12 13.605469 10.930969 13.605469 9.6679688 C 13.605469 10.929969 14.695281 12 15.988281 12 L 16.009766 12 C 17.302766 12 18.392578 10.930969 18.392578 9.6679688 C 18.392578 10.929969 19.402547 12 20.685547 12 C 21.968547 12 23.009766 10.930969 23.009766 9.6679688 C 23.009766 10.929969 24.080281 12 25.363281 12 C 26.434281 12 27.615234 10.889953 27.615234 9.6269531 L 27.615234 8.6269531 C 27.595234 8.0309531 25.595938 5.7368594 24.585938 5.1308594 C 21.443938 5.0198594 19.252 5 16 5 z M 13.550781 11.742188 C 12.497781 13.552188 9.8523125 13.573906 8.8203125 11.753906 C 8.1903125 12.845906 6.7642969 13.267547 6.1542969 13.060547 C 5.9762969 14.959547 5.8534844 24.70875 7.1464844 26.34375 C 10.943484 27.22875 21.164516 27.20975 24.853516 26.34375 C 26.348516 24.81975 26.013703 14.821547 25.845703 13.060547 C 25.235703 13.267547 23.809453 12.845906 23.189453 11.753906 C 22.146453 13.573906 19.501219 13.552188 18.449219 11.742188 C 18.124219 12.332187 17.367 13.109375 16 13.109375 C 14.997 13.148375 14.051781 12.607187 13.550781 11.742188 z M 11.419922 14 C 12.219922 14 12.950078 14.000469 13.830078 14.980469 C 15.280078 14.830469 16.719922 14.830469 18.169922 14.980469 C 19.059922 14.010469 19.780078 14.009766 20.580078 14.009766 C 23.160078 14.009766 23.780937 17.819609 24.710938 21.099609 C 25.550938 24.149609 24.429062 24.230469 23.039062 24.230469 C 20.969062 24.150469 19.820313 22.650625 19.820312 21.140625 C 17.890313 21.460625 14.809688 21.580625 12.179688 21.140625 C 12.179688 22.650625 11.030938 24.150469 8.9609375 24.230469 C 7.5709375 24.230469 6.4490625 24.149609 7.2890625 21.099609 C 8.2190625 17.799609 8.8399219 14.009766 11.419922 14.009766 L 11.419922 14 z M 16 16.876953 C 16 16.876953 14.306 18.439375 14 18.984375 L 15.107422 18.943359 L 15.107422 19.910156 C 15.107422 19.968156 15.926 19.917969 16 19.917969 C 16.447 19.934969 16.892578 19.951156 16.892578 19.910156 L 16.892578 18.943359 L 18 18.984375 C 17.694 18.438375 16 16.876953 16 16.876953 z"/>
  </svg>
));
ItchIcon.displayName = "ItchIcon";

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
            <div
              className="w-48 h-48 rounded-full border-4 border-background shadow-lg"
              style={{
                backgroundImage: 'url(/time-square-ny.jpg)',
                backgroundSize: '350%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: '57%',
                backgroundPositionY: '49%',
              }}
            />
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
            I'm a Unity Game Developer focused on building interactive games and immersive experiences across mobile, PC, 
            and AR/VR platforms. Based in Jeddah & Riyadh, Saudi Arabia, I work on multiplayer systems and scalable game architectures.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/9Hamza"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://hamboozy.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-all hover:scale-110"
              aria-label="itch.io"
            >
              <ItchIcon className="h-5 w-5" />
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
