import { Shield, Zap, Eye } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Security",
      description: "Your funds are safe with bank-level encryption and secure protocols",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Instant transactions and real-time card activation for immediate use",
    },
    {
      icon: Eye,
      title: "Anonymity",
      description: "Private and secure transactions with minimal personal data required",
    },
  ];

  return (
    <section className="bg-white border-t-0 py-8 sm:py-20">
      <div className="container border-t-0 mx-auto px-2 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-16">
            Benefits
          </h2>
          
          <div className="flex flex-row flex-nowrap gap-4 sm:gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col space-y-2 sm:space-y-4 min-w-[110px] sm:min-w-0 text-center"
              >
                <benefit.icon className="w-5 h-5 sm:w-8 sm:h-8 text-gray-900 mx-auto" />
                <div>
                  <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-base text-gray-600 leading-tight">
                    {benefit.description}
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

export default BenefitsSection;