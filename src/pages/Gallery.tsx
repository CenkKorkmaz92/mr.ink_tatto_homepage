import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GalleryLightbox from "@/components/GalleryLightbox";

const IMAGE_COUNT = 63;
const IMAGE_BASE_PATH = '/gallery/';

/**
 * Generates gallery image data from public/gallery folder
 * @returns Array of image objects with src, alt, and description
 */
const loadGalleryImages = () => {
  const imageFiles = Array.from({ length: IMAGE_COUNT }, (_, i) => 
    `bild_${String(i + 1).padStart(3, '0')}.webp`
  );

  return imageFiles.map((filename) => ({
    src: `${IMAGE_BASE_PATH}${filename}`,
    alt: `Tattoo ${filename}`,
    description: `Tattoo design ${filename}`
  }));
};

const galleryImages = loadGalleryImages();

/**
 * Gallery page displaying tattoo portfolio
 * Features grid layout with lightbox view and booking CTA
 */
const Gallery = () => {
  const { t } = useTranslation();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">{t('gallery.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={`${image.category}-${index}`}
              className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300 border-2 border-accent"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-accent p-4">
                    <p className="text-xl font-semibold">{t('gallery.clickToView')}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-8">
            <h2 className="text-2xl font-bold mb-4 text-accent">{t('galleryInfo.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('galleryInfo.description')}
            </p>
            <div className="mt-6">
              <Button size="lg" asChild>
                <Link to="/contact">
                  {t('galleryInfo.bookConsultation')}
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <GalleryLightbox
        images={galleryImages}
        isOpen={isLightboxOpen}
        currentIndex={currentImageIndex}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </div>
  );
};

export default Gallery;