import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ImageCarousel from "@/components/ImageCarousel";
import GalleryLightbox from "@/components/GalleryLightbox";
import profileMrsSteel from "@/assets/mrs_steel_profile.webp";
import galleryPreview from "@/assets/gallery-preview.jpg";
import portfolioMrsSteel from "@/assets/portfolio_mrs_steel.webp";
import pircingStandard1 from "@/assets/pircing_standart_1.webp";
import pircingStandard2 from "@/assets/pircing_standart_2.webp";

const PIERCING_GALLERY_COUNT = 31;
const PIERCING_GALLERY_PATH = '/piercing-gallery/';

/**
 * Loads piercing gallery images from public/piercing-gallery folder
 * Currently loading 31 piercing images
 */
const loadPiercingGallery = () => {
  if (PIERCING_GALLERY_COUNT === 0) return [];
  const imageFiles = Array.from({ length: PIERCING_GALLERY_COUNT }, (_, i) => 
    `piercing_${String(i + 1).padStart(3, '0')}.webp`
  );
  return imageFiles.map((filename) => ({
    src: `${PIERCING_GALLERY_PATH}${filename}`,
    alt: `Piercing ${filename}`
  }));
};

const PIERCING_IMAGES = loadPiercingGallery();

const STUDIO_IMAGES = [
  { src: pircingStandard1, alt: "Studio Piercing Area 1" },
  { src: pircingStandard2, alt: "Studio Piercing Area 2" },
];

/**
 * Piercing services page featuring Mrs. Steel
 * Displays piercing services, portfolio, and studio standards
 */
const Pircing = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPortfolioGridOpen, setIsPortfolioGridOpen] = useState(false);

  const openGallery = (index: number = 0) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const openPortfolioGrid = () => {
    setIsPortfolioGridOpen(true);
  };

  return (
    <div className="min-h-screen bg-golden text-golden-foreground">
      {/* Hero Carousel */}
      <ImageCarousel />

      {/* Header Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#282c34' }}>{t('pircing.title')}</h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#282c34' }}>
              {t('pircing.intro')}
            </p>
          </div>

          {/* Services Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-primary border-accent/30 p-6 text-center">
              <div className="border-2 border-accent/60 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-accent">{t('pircing.services.ear')}</h3>
                <p className="text-accent/80">{t('pircing.services.earDesc')}</p>
              </div>
            </Card>
            <Card className="bg-primary border-accent/30 p-6 text-center">
              <div className="border-2 border-accent/60 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-accent">{t('pircing.services.facial')}</h3>
                <p className="text-accent/80">{t('pircing.services.facialDesc')}</p>
              </div>
            </Card>
            <Card className="bg-primary border-accent/30 p-6 text-center">
              <div className="border-2 border-accent/60 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-accent">{t('pircing.services.body')}</h3>
                <p className="text-accent/80">{t('pircing.services.bodyDesc')}</p>
              </div>
            </Card>
            <Card className="bg-primary border-accent/30 p-6 text-center">
              <div className="border-2 border-accent/60 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-accent">{t('pircing.standards.quality')}</h3>
                <p className="text-accent/80">{t('pircing.standards.qualityDesc')}</p>
              </div>
            </Card>
            <Card className="bg-primary border-accent/30 p-6 text-center">
              <div className="border-2 border-accent/60 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-accent">{t('pircing.standards.sterile')}</h3>
                <p className="text-accent/80">{t('pircing.standards.sterileDesc')}</p>
              </div>
            </Card>
            <Card className="bg-primary border-accent/30 p-6 text-center">
              <div className="border-2 border-accent/60 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-accent">{t('pircing.standards.care')}</h3>
                <p className="text-accent/80">{t('pircing.standards.careDesc')}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center">
          {/* Mrs. Steel Section */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center" style={{ color: '#282c34' }}>{t('pircing.about.title')}</h2>
            <div className="flex flex-col md:grid md:grid-cols-[auto_1px_1fr] gap-4 md:gap-6 items-start">
              <Card className="overflow-hidden mx-auto md:mx-0 w-full md:w-auto border border-golden-foreground/30 bg-golden-card">
                <img
                  src={profileMrsSteel}
                  alt="Mrs. Steel - Piercing Specialist"
                  className="w-full h-[400px] md:h-[500px] object-cover select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ WebkitTouchCallout: 'none' }}
                />
              </Card>
              
              <Separator orientation="vertical" className="bg-golden-foreground h-full min-h-[500px] hidden md:block" />
              <Separator className="bg-golden-foreground md:hidden" />
              
              <div className="space-y-4 flex items-center w-full">
                <div className="space-y-4">
                  <p className="leading-relaxed text-sm md:text-base" style={{ color: '#282c34' }}>
                    {t('pircing.about.description')}
                  </p>
                  <p className="leading-relaxed text-sm md:text-base" style={{ color: '#282c34' }}>
                    {t('pircing.about.description2')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Preview */}
          <div className="relative mx-auto md:mx-0 w-fit flex flex-col justify-between min-h-[400px] md:min-h-full">
            <Separator className="bg-golden-foreground" />
            <Card className="overflow-hidden my-6 md:my-auto border border-golden-foreground/30 bg-golden-card">
              <div className="relative cursor-pointer group" onClick={openPortfolioGrid}>
                <img
                  src={portfolioMrsSteel}
                  alt="Piercing Portfolio"
                  className="w-auto h-[400px] md:h-[500px] object-cover select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ WebkitTouchCallout: 'none' }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="lg" className="bg-golden-accent text-golden-foreground">
                    {t('pircing.portfolio')}
                  </Button>
                </div>
              </div>
            </Card>
            <Separator className="bg-golden-foreground" />
          </div>
        </div>
      </div>

      {/* Studio Images */}
      <div className="bg-golden-foreground/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#282c34' }}>{t('pircing.standards.title')}</h2>
            <p className="text-xl text-golden-foreground/80 max-w-2xl mx-auto">{t('pircing.standards.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {STUDIO_IMAGES.map((image, index) => (
              <Card key={index} className="overflow-hidden bg-golden-card h-[400px] md:h-[500px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full ${
                    index === 0 
                      ? 'object-cover' 
                      : 'object-cover object-top'
                  }`}
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
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#282c34' }}>{t('pircing.cta.title')}</h2>
            <p className="text-xl mb-8" style={{ color: '#282c34' }}>{t('pircing.cta.subtitle')}</p>
            <Button size="lg" className="bg-golden-foreground text-golden hover:bg-golden-foreground/90" asChild>
              <Link to="/contact?recipient=mrssteel">{t('pircing.cta.button')}</Link>
            </Button>
          </div>
        </div>
      </div>

      <GalleryLightbox
        images={PIERCING_IMAGES}
        isOpen={isGalleryOpen}
        currentIndex={currentImageIndex}
        onClose={() => setIsGalleryOpen(false)}
        onNavigate={setCurrentImageIndex}
      />

      <Dialog open={isPortfolioGridOpen} onOpenChange={setIsPortfolioGridOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] overflow-y-auto bg-golden-card border-2 border-muted-foreground/30" closeButtonClassName="text-golden-foreground/70 hover:text-golden-foreground border border-muted-foreground/30 rounded-md">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold" style={{ color: '#282c34' }}>{t('pircing.portfolio')}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {PIERCING_IMAGES.map((image, index) => (
              <Card 
                key={index}
                className="overflow-hidden group transition-all duration-300 bg-golden-card"
                style={{ border: '4px solid #282c34' }}
              >
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Pircing;
