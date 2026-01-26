import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GalleryLightbox from "@/components/GalleryLightbox";

// Function to load gallery images from public/gallery folder
const loadGalleryImages = () => {
  // List of image files in public/gallery folder
  const imageFiles = [
    'bild_001.webp', 'bild_002.webp', 'bild_003.webp', 'bild_004.webp', 'bild_005.webp',
    'bild_006.webp', 'bild_007.webp', 'bild_008.webp', 'bild_009.webp', 'bild_010.webp',
    'bild_011.webp', 'bild_012.webp', 'bild_013.webp', 'bild_014.webp', 'bild_015.webp',
    'bild_016.webp', 'bild_017.webp', 'bild_018.webp', 'bild_019.webp', 'bild_020.webp',
    'bild_021.webp', 'bild_022.webp', 'bild_023.webp', 'bild_024.webp', 'bild_025.webp',
    'bild_026.webp', 'bild_027.webp', 'bild_028.webp', 'bild_029.webp', 'bild_030.webp',
    'bild_031.webp', 'bild_032.webp', 'bild_033.webp', 'bild_034.webp', 'bild_035.webp',
    'bild_036.webp', 'bild_037.webp', 'bild_038.webp', 'bild_039.webp', 'bild_040.webp',
    'bild_041.webp', 'bild_042.webp', 'bild_043.webp', 'bild_044.webp', 'bild_045.webp',
    'bild_046.webp', 'bild_047.webp', 'bild_048.webp', 'bild_049.webp', 'bild_050.webp',
    'bild_051.webp', 'bild_052.webp', 'bild_053.webp', 'bild_054.webp', 'bild_055.webp',
    'bild_056.webp', 'bild_057.webp', 'bild_058.webp', 'bild_059.webp', 'bild_060.webp',
    'bild_061.webp', 'bild_062.webp', 'bild_063.webp'
  ];

  return imageFiles.map((filename) => {
    return {
      src: `/gallery/${filename}`,
      alt: `Tattoo ${filename}`,
      description: `Tattoo design ${filename}`
    };
  });
};

const galleryImages = loadGalleryImages();

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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">{t('gallery.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
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

        {/* Gallery Info */}
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

      {/* Lightbox */}
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