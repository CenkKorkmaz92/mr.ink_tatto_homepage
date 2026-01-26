import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const images = [
  {
    src: hero1,
    alt: "Tattoo Studio Interior"
  },
  {
    src: hero2,
    alt: "Tattoo Artist at Work"
  }
];

const ImageCarousel = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Images */}
      <div className="relative h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover select-none"
              onContextMenu={(e) => e.preventDefault()}
              style={{ WebkitTouchCallout: 'none', WebkitUserSelect: 'none' }}
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-accent" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center text-accent px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ textShadow: '0 0 10px rgba(40, 44, 52, 1), 0 0 20px rgba(40, 44, 52, 1), 0 0 30px rgba(40, 44, 52, 0.9), 0 0 40px rgba(40, 44, 52, 0.8), 3px 3px 6px rgba(40, 44, 52, 0.9), -3px -3px 6px rgba(40, 44, 52, 0.9), 3px -3px 6px rgba(40, 44, 52, 0.9), -3px 3px 6px rgba(40, 44, 52, 0.9)' }}>
            {t('hero.title').split(' bei ').length > 1 ? (
              <>
                {t('hero.title').split(' bei ')[0]}
                <br />
                bei {t('hero.title').split(' bei ')[1]}
              </>
            ) : t('hero.title').split(' to ').length > 1 ? (
              <>
                {t('hero.title').split(' to ')[0]} to
                <br />
                {t('hero.title').split(' to ')[1]}
              </>
            ) : (
              t('hero.title')
            )}
          </h1>
          <p className="text-xl md:text-2xl text-accent/90" style={{ textShadow: '0 0 8px rgba(40, 44, 52, 1), 0 0 15px rgba(40, 44, 52, 1), 0 0 25px rgba(40, 44, 52, 0.9), 2px 2px 4px rgba(40, 44, 52, 0.9), -2px -2px 4px rgba(40, 44, 52, 0.9), 2px -2px 4px rgba(40, 44, 52, 0.9), -2px 2px 4px rgba(40, 44, 52, 0.9)' }}>{t('hero.subtitle')}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;