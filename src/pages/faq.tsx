import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is a virtual crypto card?",
      answer: "A virtual crypto card is a digital payment card that allows you to spend your cryptocurrencies anywhere that accepts traditional debit/credit cards. It converts your crypto to fiat currency instantly at the point of sale."
    },
    {
      question: "How do I get started?",
      answer: "Simply start our Telegram bot, create your account, and follow the verification process. Once verified, you can instantly receive your virtual card and start funding it with cryptocurrencies."
    },
    {
      question: "Which cryptocurrencies are supported?",
      answer: "We support major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, USDC, and many other popular altcoins. The full list is available in our Telegram bot."
    },
    {
      question: "Are there any fees?",
      answer: "We charge minimal fees for card issuance and transactions. All fees are transparently displayed before you confirm any transaction. There are no hidden charges."
    },
    {
      question: "Is my money safe?",
      answer: "Yes, your funds are protected with bank-level encryption and secure protocols. We use industry-standard security measures to ensure your cryptocurrencies and personal data remain safe."
    },
    {
      question: "How fast are transactions?",
      answer: "Card activation is instant, and transactions are processed in real-time. Crypto deposits are confirmed based on the blockchain network speed, typically within minutes."
    },
    {
      question: "Can I use the card internationally?",
      answer: "Yes, our virtual cards work globally wherever Visa/Mastercard is accepted, both online and for in-store purchases through digital wallets."
    },
    {
      question: "What if I need support?",
      answer: "Our support team is available 24/7 through the Telegram bot. You can also reach us through our contact page for any questions or issues."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Find answers to common questions about our virtual crypto cards and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="mb-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-slate-600/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-5">
                  <div className="border-t border-slate-700/50 pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-slate-300 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/50">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;