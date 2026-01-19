import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ImageCarousel from "@/components/ImageCarousel";
import GalleryLightbox from "@/components/GalleryLightbox";
import profileMrsInk from "@/assets/profile_mrs_ink.webp";
import galleryPreview from "@/assets/gallery-preview.jpg";

const galleryImages = [
  { src: galleryPreview, alt: "Piercing Gallery Preview" },
  { src: profileMrsInk, alt: "Piercing Example Work" },
];

const studioImages = [
  { src: profileMrsInk, alt: "Studio Piercing Area 1" },
  { src: galleryPreview, alt: "Studio Piercing Area 2" },
];

const Pircing = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index: number = 0) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen bg-golden text-golden-foreground">
      {/* Hero Carousel */}
      <ImageCarousel />

      {/* Header Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('pircing.title')}</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-80">
              {t('pircing.intro')}
            </p>
          </div>

          {/* Services Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-golden-card border-golden-foreground/20 p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-golden-foreground">{t('pircing.services.ear')}</h3>
              <p className="text-golden-foreground/80">{t('pircing.services.earDesc')}</p>
            </Card>
            <Card className="bg-golden-card border-golden-foreground/20 p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-golden-foreground">{t('pircing.services.facial')}</h3>
              <p className="text-golden-foreground/80">{t('pircing.services.facialDesc')}</p>
            </Card>
            <Card className="bg-golden-card border-golden-foreground/20 p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-golden-foreground">{t('pircing.services.body')}</h3>
              <p className="text-golden-foreground/80">{t('pircing.services.bodyDesc')}</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Mrs. Steel Section */}
          <div className="space-y-6">
            <Card className="overflow-hidden bg-golden-card">
              <img
                src={profileMrsInk}
                alt="Mrs. Steel - Piercing Specialist"
                className="w-full h-80 object-cover"
              />
            </Card>
            
            <Separator className="bg-golden-foreground/30" />
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{t('pircing.about.title')}</h2>
              <p className="opacity-80 leading-relaxed">
                {t('pircing.about.description')}
              </p>
              <p className="opacity-80 leading-relaxed">
                {t('pircing.about.description2')}
              </p>
            </div>

            {/* Standards */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold">{t('pircing.standards.title')}</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">{t('pircing.standards.quality')}</h4>
                  <p className="opacity-80">{t('pircing.standards.qualityDesc')}</p>
                </div>
                <div>
                  <h4 className="font-semibold">{t('pircing.standards.sterile')}</h4>
                  <p className="opacity-80">{t('pircing.standards.sterileDesc')}</p>
                </div>
                <div>
                  <h4 className="font-semibold">{t('pircing.standards.care')}</h4>
                  <p className="opacity-80">{t('pircing.standards.careDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Preview */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{t('pircing.portfolio')}</h2>
            <Card className="overflow-hidden cursor-pointer group bg-golden-card" onClick={() => openGallery()}>
              <div className="relative">
                <img
                  src={galleryPreview}
                  alt="Piercing Gallery Preview"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="lg" className="bg-golden-accent text-golden-foreground">
                    {t('pircing.portfolio')}
                  </Button>
                </div>
              </div>
            </Card>
            <p className="opacity-80">
              {t('pircing.portfolioDesc')}
            </p>
          </div>
        </div>
      </div>

      {/* Studio Images */}
      <div className="bg-golden-foreground/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('pircing.standards.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {studioImages.map((image, index) => (
              <Card key={index} className="overflow-hidden bg-golden-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t('pircing.cta.title')}</h2>
            <p className="text-xl opacity-80 mb-8">{t('pircing.cta.subtitle')}</p>
            <Button size="lg" className="bg-golden-foreground text-golden hover:bg-golden-foreground/90">
              {t('pircing.cta.button')}
            </Button>
          </div>
        </div>
      </div>

      {/* Gallery Lightbox */}
      <GalleryLightbox
        images={galleryImages}
        isOpen={isGalleryOpen}
        currentIndex={currentImageIndex}
        onClose={() => setIsGalleryOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </div>
  );
};

export default Pircing;
