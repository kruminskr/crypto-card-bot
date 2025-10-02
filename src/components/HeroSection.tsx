import heroBackground from "@/assets/hero-background.jpg";
import character from "@/assets/character.png";
import logo from "@/assets/logo.png";
import cardsHero from "@/assets/cards-hero.png";

const HeroSection = () => {
  return (
    <section 
      className="relative flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '70vh',
      }}
    >
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
        <div className="relative max-w-7xl mx-auto">
          
          {/* Left Side - Logo, Text, Button */}
          <div className="max-w-[280px] sm:max-w-xs md:max-w-sm space-y-4 sm:space-y-6">
            {/* Logo */}
            <div>
              <img 
                src={logo} 
                alt="Papa Bin Logo" 
                className="w-24 sm:w-32 md:w-36 lg:w-40 h-auto drop-shadow-lg"
              />
            </div>

            {/* Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white drop-shadow-lg">
              Power up your ADS account with Papa BIN
            </h1>

            {/* CTA Button */}
            <button className="bg-slate-600/90 hover:bg-slate-500/90 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-medium transition-all duration-200 backdrop-blur-sm shadow-lg hover:shadow-xl">
              Start Telegram bot
            </button>
          </div>

          {/* Right Side - Cards and Character (Absolutely Positioned) */}
          
          {/* Cards - Mid-Right */}
          <div className="absolute top-0 right-0 sm:right-4 md:right-8 lg:right-16 w-36 sm:w-48 md:w-56 lg:w-72 xl:w-80 z-20 pointer-events-none">
            <img 
              src={cardsHero} 
              alt="Virtual cards stack" 
              className="w-full h-auto drop-shadow-2xl float-animation"
            />
          </div>

          {/* Character - Bottom Right */}
          <div className="absolute bottom-0 right-0 sm:right-2 md:right-4 lg:right-8 w-32 sm:w-40 md:w-48 lg:w-64 xl:w-72 z-10 pointer-events-none">
            <img 
              src={character} 
              alt="Papa Bin Character" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;