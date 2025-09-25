import { Smartphone } from "lucide-react";
import cardsImage from "@/assets/cards.png";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8 fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Virtual crypto cards and account top-ups
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed">
              Issue virtual cards and top up your account with cryptocurrencies via Telegram bot
            </p>
            <button className="btn-crypto px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center gap-3">
              Start Telegram bot
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84L12.19 12.53L15 9.72L19.83 14.55L21 13.38L18.38 10.76L21 8.14Z"/>
              </svg>
            </button>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={cardsImage} 
              alt="Virtual crypto cards" 
              className="w-[400px] h-auto float-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;