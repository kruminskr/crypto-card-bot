import heroBackground from "@/assets/hero-background.jpg";
import character from "@/assets/character.png";
import logo from "@/assets/logo.png";
import cardsHero from "@/assets/cards-hero.png";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content Container */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="relative max-w-7xl mx-auto">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <img 
              src={logo} 
              alt="Papa Bin Logo" 
              className="w-32 md:w-40 h-auto"
            />
          </div>

          {/* Main Content Area */}
          <div className="relative">
            {/* Left Side - Text Content */}
            <div className="max-w-md md:max-w-lg space-y-6 md:space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg">
                Power up your ADS account with Papa BIN
              </h1>
              <button className="bg-slate-700/80 hover:bg-slate-600/80 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium transition-all duration-200 backdrop-blur-sm">
                Start Telegram bot
              </button>
            </div>

            {/* Cards - Top Right */}
            <div className="absolute -top-8 right-0 md:right-12 lg:right-20 w-48 md:w-64 lg:w-80 z-20 pointer-events-none">
              <img 
                src={cardsHero} 
                alt="Virtual cards" 
                className="w-full h-auto drop-shadow-2xl float-animation"
              />
            </div>

            {/* Character - Bottom Right */}
            <div className="absolute -bottom-32 -right-8 md:-bottom-40 md:right-0 lg:-bottom-48 lg:right-8 w-56 md:w-72 lg:w-96 z-10 pointer-events-none">
              <img 
                src={character} 
                alt="Papa Bin Character" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;