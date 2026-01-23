const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Hamza Bahamdan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
