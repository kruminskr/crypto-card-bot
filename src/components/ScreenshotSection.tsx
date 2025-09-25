const ScreenshotSection = () => {
  return (
    <section className="dark-gradient py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Experience seamless crypto banking
              </h2>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                See how easy it is to manage your crypto cards and transactions through our intuitive Telegram interface.
              </p>
              <button className="btn-crypto px-8 py-4 rounded-xl text-lg font-medium inline-flex items-center gap-3">
                Start Telegram bot
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84L12.19 12.53L15 9.72L19.83 14.55L21 13.38L18.38 10.76L21 8.14Z"/>
                </svg>
              </button>
            </div>

            {/* Right Column - Screenshot Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[400px] aspect-video bg-card rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold mb-2">Telegram Bot Interface</div>
                    <div className="text-sm text-foreground-secondary">
                      Interactive preview coming soon
                    </div>
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

export default ScreenshotSection;