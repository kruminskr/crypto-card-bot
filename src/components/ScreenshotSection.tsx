const ScreenshotSection = () => {
  return (
    <section className="dark-gradient py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Experience seamless crypto banking
              </h2>
              <p className="text-xs sm:text-base text-foreground-secondary leading-relaxed">
                See how easy it is to manage your crypto cards and transactions through our intuitive Telegram interface.
              </p>
              <button className="btn-crypto px-8 py-4 rounded-xl text-sm sm:text-base md:text-lg font-medium inline-flex items-center gap-3">
                Start Telegram bot
              </button>
            </div>

            {/* Right Column - Screenshot Placeholder */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;