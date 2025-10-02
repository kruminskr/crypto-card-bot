import heroBackground from "@/assets/hero-background.jpg";
import logo from "@/assets/logo.png";
import cards from "@/assets/cards-hero.png";
import character from "@/assets/character.png";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[70vh] md:min-h-[80vh] w-full flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Left side - Logo, Text, Button */}
          <div className="flex flex-col items-start space-y-3 md:space-y-6 max-w-[45%] md:max-w-[40%]">
            <img 
              src={logo} 
              alt="PAPA BIN Logo" 
              className="w-full max-w-[180px] md:max-w-[280px] h-auto"
            />
            <h1 className="text-white text-sm md:text-2xl lg:text-3xl font-bold leading-tight">
              Power up your ADS account with <span className="font-extrabold">Papa BIN</span>
            </h1>
            <button className="bg-gray-600 hover:bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-base font-medium transition-all duration-300 hover:shadow-lg">
              Start Telegram bot
            </button>
          </div>

          {/* Right side - Cards and Character */}
          <div className="relative flex items-end justify-end max-w-[55%] md:max-w-[60%] h-[50vh] md:h-[60vh]">
            <img 
              src={cards} 
              alt="Credit Cards" 
              className="absolute right-[15%] md:right-[25%] bottom-[25%] md:bottom-[30%] w-[60%] md:w-[50%] h-auto object-contain z-10"
            />
            <img 
              src={character} 
              alt="Papa BIN Character" 
              className="absolute right-0 bottom-0 w-[55%] md:w-[45%] h-auto object-contain z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;