import { Smartphone } from "lucide-react";
import cryptoCardImage from "@/assets/crypto-card.jpg";

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
            <div className="phone-mockup w-[280px] h-[560px] md:w-[320px] md:h-[640px] p-6 flex flex-col justify-center items-center float-animation">
              <div className="w-full max-w-[240px] space-y-6">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-xs text-foreground-secondary">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <div className="w-1 h-1 bg-foreground-secondary rounded-full"></div>
                  </div>
                </div>

                {/* Card */}
                <div className="crypto-card p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="bitcoin-icon w-10 h-10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">₿</span>
                    </div>
                    <div className="text-right text-xs text-foreground-secondary">
                      <div>Virtual Card</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-lg font-mono tracking-wider">
                      1234 5678 9000
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>CRYPTO USER</span>
                      <span>12/28</span>
                    </div>
                  </div>
                </div>

                {/* App Interface */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-card-secondary rounded-lg">
                    <span className="text-sm">Balance</span>
                    <span className="font-semibold">$2,450.00</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg text-sm font-medium">
                      Top Up
                    </button>
                    <button className="flex-1 bg-card-secondary py-2 px-4 rounded-lg text-sm font-medium">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;