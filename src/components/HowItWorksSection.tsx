import { UserPlus, CreditCard, Bitcoin } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      description: "Create your account via Telegram bot",
    },
    {
      icon: CreditCard,
      title: "Get a card",
      description: "Receive your virtual crypto card instantly",
    },
    {
      icon: Bitcoin,
      title: "Top-up with crypto",
      description: "Fund your card with cryptocurrencies",
    },
  ];

  return (
    <section className="section-gradient py-8 sm:py-20">
      <div className="container mx-auto px-2 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-16">
            How it works
          </h2>
          
          <div className="flex flex-row justify-center gap-3 sm:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col space-y-2 sm:space-y-6 flex-1 max-w-[110px] sm:max-w-none text-center"
              >
                <div className="icon-container w-12 h-12 sm:w-20 sm:h-20 mx-auto">
                  <step.icon className="w-6 h-6 sm:w-10 sm:h-10 text-gray-900 icon-image" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-base text-gray-600 leading-tight hidden md:block">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;