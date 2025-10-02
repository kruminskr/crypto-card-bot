const Footer = () => {
  return (
    <footer className="bg-background-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs sm:text-base text-foreground-secondary">
            © 2024 Kupec
          </div>
          
          <div className="flex gap-8">
            <a 
              href="/faq" 
              className="text-xs sm:text-base text-foreground-secondary hover:text-foreground transition-colors duration-300"
            >
              FAQ
            </a>
            <a 
              href="/terms" 
              className="text-xs sm:text-base text-foreground-secondary hover:text-foreground transition-colors duration-300"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;