import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GalleryLightbox from "@/components/GalleryLightbox";
import galleryPreview from "@/assets/gallery-preview.jpg";
import profileMrInk from "@/assets/profile_mrInk.webp";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

// Sample gallery with different categories
const galleryCategories = [
  { id: "all", name: "all" },
  { id: "realistic", name: "realism" },
  { id: "traditional", name: "traditional" },
  { id: "blackAndGrey", name: "blackAndGrey" },
  { id: "color", name: "color" }
];

const galleryImages = [
  { 
    src: galleryPreview, 
    alt: "Realistic Portrait Tattoo", 
    category: "realistic",
    description: "Detailed realistic portrait work"
  },
  { 
    src: profileMrInk, 
    alt: "Traditional Design", 
    category: "traditional",
    description: "Classic traditional tattoo style"
  },
  { 
    src: hero1, 
    alt: "Geometric Pattern", 
    category: "geometric",
    description: "Modern geometric design"
  },
  { 
    src: hero2, 
    alt: "Botanical Art", 
    category: "botanical",
    description: "Delicate floral work"
  },
  { 
    src: galleryPreview, 
    alt: "Custom Design", 
    category: "realistic",
    description: "Custom artistic piece"
  },
  { 
    src: profileMrInk, 
    alt: "Traditional Eagle", 
    category: "traditional",
    description: "Bold traditional eagle"
  },
  { 
    src: hero1, 
    alt: "Sacred Geometry", 
    category: "geometric",
    description: "Sacred geometry mandala"
  },
  { 
    src: hero2, 
    alt: "Rose Design", 
    category: "botanical",
    description: "Detailed rose composition"
  }
];

const Gallery = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('gallery.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all duration-300"
            >
              {t(`gallery.${category.name}`)}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={`${image.category}-${index}`}
              className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-semibold mb-2">{image.alt}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">{t('galleryInfo.noResults')}</p>
          </div>
        )}

        {/* Gallery Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">{t('galleryInfo.title')}</h2>
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
        images={filteredImages}
        isOpen={isLightboxOpen}
        currentIndex={currentImageIndex}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </div>
  );
};

export default Gallery;