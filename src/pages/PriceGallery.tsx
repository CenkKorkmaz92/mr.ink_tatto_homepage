import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GalleryLightbox from "@/components/GalleryLightbox";
import galleryPreview from "@/assets/gallery-preview.jpg";
import artistMain from "@/assets/artist-main.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

// Price categories
const priceCategories = [
  { id: "all", name: "All Prices" },
  { id: "small", name: "€150-300" },
  { id: "medium", name: "€300-600" },
  { id: "large", name: "€600+" }
];

const priceGalleryImages = [
  { 
    src: galleryPreview, 
    alt: "Small Rose Tattoo", 
    category: "small",
    price: "€200",
    size: "5cm x 7cm",
    duration: "1.5 hours",
    description: "Delicate rose design on wrist"
  },
  { 
    src: artistMain, 
    alt: "Medium Geometric Design", 
    category: "medium",
    price: "€450",
    size: "12cm x 15cm",
    duration: "3 hours",
    description: "Sacred geometry forearm piece"
  },
  { 
    src: hero1, 
    alt: "Large Back Piece", 
    category: "large",
    price: "€1,200",
    size: "25cm x 30cm",
    duration: "8 hours (2 sessions)",
    description: "Full back artistic composition"
  },
  { 
    src: hero2, 
    alt: "Small Symbol", 
    category: "small",
    price: "€180",
    size: "3cm x 4cm",
    duration: "1 hour",
    description: "Minimalist symbol design"
  },
  { 
    src: galleryPreview, 
    alt: "Medium Portrait", 
    category: "medium",
    price: "€550",
    size: "10cm x 12cm",
    duration: "4 hours",
    description: "Realistic portrait work"
  },
  { 
    src: artistMain, 
    alt: "Large Sleeve", 
    category: "large",
    price: "€2,500",
    size: "Full arm",
    duration: "15 hours (3 sessions)",
    description: "Complete sleeve design"
  },
  { 
    src: hero1, 
    alt: "Small Text", 
    category: "small",
    price: "€150",
    size: "8cm x 2cm",
    duration: "45 minutes",
    description: "Custom lettering"
  },
  { 
    src: hero2, 
    alt: "Medium Mandala", 
    category: "medium",
    price: "€400",
    size: "15cm diameter",
    duration: "2.5 hours",
    description: "Intricate mandala design"
  }
];

const PriceGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === "all" 
    ? priceGalleryImages 
    : priceGalleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-golden text-golden-foreground py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Examples</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-80">
            Browse real examples with transparent pricing to help plan your investment
          </p>
        </div>

        {/* Price Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {priceCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`transition-all duration-300 ${
                activeCategory === category.id 
                  ? "bg-golden-foreground text-golden" 
                  : "border-golden-foreground/30 text-golden-foreground hover:bg-golden-foreground/10"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={`${image.category}-${index}`}
              className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300 bg-golden-card border-golden-foreground/20"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-golden-foreground text-golden font-bold">
                    {image.price}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="text-white p-4 w-full">
                    <h3 className="font-semibold mb-2">{image.alt}</h3>
                    <p className="text-sm opacity-90 mb-2">{image.description}</p>
                    <div className="text-xs space-y-1">
                      <p>Size: {image.size}</p>
                      <p>Duration: {image.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-golden-foreground">{image.alt}</h3>
                <p className="text-sm text-golden-foreground/80 mb-3">{image.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-golden-foreground/70">Size: {image.size}</span>
                  <span className="font-bold text-golden-foreground text-lg">{image.price}</span>
                </div>
                <p className="text-xs text-golden-foreground/60 mt-1">Duration: {image.duration}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl opacity-80">No examples found in this price range.</p>
          </div>
        )}

        {/* Pricing Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto p-8 bg-golden-card border-golden-foreground/20">
            <h2 className="text-2xl font-bold mb-6 text-golden-foreground">Understanding Our Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-golden-foreground">Small Tattoos</h3>
                <p className="text-golden-foreground/80 text-sm">Simple designs, up to 5cm, 1-2 hours</p>
                <p className="font-bold text-golden-foreground mt-1">€150 - €300</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-golden-foreground">Medium Tattoos</h3>
                <p className="text-golden-foreground/80 text-sm">Detailed work, 5-15cm, 2-4 hours</p>
                <p className="font-bold text-golden-foreground mt-1">€300 - €600</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-golden-foreground">Large Tattoos</h3>
                <p className="text-golden-foreground/80 text-sm">Complex pieces, 15cm+, multiple sessions</p>
                <p className="font-bold text-golden-foreground mt-1">€600+</p>
              </div>
            </div>
            <p className="text-golden-foreground/80 leading-relaxed mb-6">
              All prices include consultation, custom design, aftercare kit, and touch-ups. 
              Final pricing depends on complexity, placement, and time required. 
              Payment plans available for larger pieces.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-golden-foreground text-golden hover:bg-golden-foreground/90">
                Book Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-golden-foreground/30 text-golden-foreground hover:bg-golden-foreground/10">
                Contact Us
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

export default PriceGallery;