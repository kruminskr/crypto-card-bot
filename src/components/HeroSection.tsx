import { useState, useEffect } from "react";
import cardsImage from "@/assets/cards.png";
import charecterImage1 from "@/assets/charecter_1.png";
import charecterImage3 from "@/assets/charecter_3.png";
import charecterImage4 from "@/assets/charecter_4.png";
import charecterImage5 from "@/assets/charecter_5.png";
import logo from "@/assets/logo-small.png";
import backgroundImage1 from "@/assets/BANERIS_1_FONS.jpg";
import backgroundImage2 from "@/assets/BANERIS_2_FONS.jpg";
import backgroundImage3 from "@/assets/BANERIS_3_FONS.jpg";
import backgroundImage4 from "@/assets/BANERIS_4_FONS.jpg";
import backgroundImage5 from "@/assets/BANERIS_5_FONS.jpg";

const banners = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5];

const charecters = [
  charecterImage1,
  charecterImage1,
  charecterImage3,
  charecterImage4,
  charecterImage5,
];

const HeroSection = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // rotate banner every 10 s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentBannerIndex((i) => (i + 1) % banners.length);
    }, 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      /*  Mobile: shorter hero, Desktop: full-screen  */
      className="hero-gradient min-h-[60vh] md:min-h-screen flex relative overflow-hidden"
      style={{
        backgroundImage: `url(${banners[currentBannerIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto self-center px-4 sm:px-6 py-0 ">
        {/* 2-column grid on *all* screens */}
        <div className="grid grid-cols-2 gap-4 items-center -mb-4 sm:gap-6 max-w-6xl mx-auto h-full">
          {/* ───── LEFT – TEXT ───── */}
          <div className="space-y-6 sm:space-y-6">
            <img
              src={logo}
              alt="Papa BIN Logo"
              className="w-16 sm:w-40 md:w-40 h-auto"
            />

            <h1
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black leading-tight text-white"
              style={{
                WebkitTextStroke: "1px black",   // black border
                color: "white",                  // white fill
              }}
            >
              Power up your ADS account with Papa BIN
            </h1>

            <button className="btn-crypto px-4 sm:px-6 py-2 sm:py-3 sm:mt-6 rounded-xl text-sm sm:text-base md:text-lg font-medium inline-flex items-center gap-2">
              Start Telegram bot
            </button>
          </div>

          {/* ───── RIGHT – IMAGES ───── */}
          <div className="flex flex-col items-center items-end h-full relative -mb-16">
            {/* Cards – stays on top */}
            <img
              src={cardsImage}
              alt="Virtual crypto cards"
              className="w-ful max-w-[250px] sm:max-w-[300px] md:max-w-[650px] h-auto relative z-10"
            />

            {/* Character – pushed to the bottom of the column */}
            <img
              src={charecters[currentBannerIndex]}
              alt="Character"
              className="mt-auto w-25 sm:w-28 md:w-48 lg:w-80 h-auto lg:-translate-y-10 z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;