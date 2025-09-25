import { UserPlus, CreditCard, Bitcoin } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      description: "Create your account via Telegram bot"
    },
    {
      icon: CreditCard,
      title: "Get a card",
      description: "Receive your virtual crypto card instantly"
    },
    {
      icon: Bitcoin,
      title: "Top-up with crypto",
      description: "Fund your card with cryptocurrencies"
    }
  ];

  return (
    <section className="section-gradient py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
            How it works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="space-y-6">
                <div className="icon-container w-20 h-20 mx-auto">
                  <step.icon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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