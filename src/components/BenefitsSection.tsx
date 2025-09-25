import { Shield, Zap, Eye } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Security",
      description: "Your funds are safe with bank-level encryption and secure protocols"
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Instant transactions and real-time card activation for immediate use"
    },
    {
      icon: Eye,
      title: "Anonymity",
      description: "Private and secure transactions with minimal personal data required"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-4">
                <benefit.icon className="w-8 h-8 text-gray-900" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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