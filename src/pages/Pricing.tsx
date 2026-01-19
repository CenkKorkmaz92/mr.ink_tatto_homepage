import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ImageCarousel from "@/components/ImageCarousel";
import GalleryLightbox from "@/components/GalleryLightbox";
import artistMain from "@/assets/artist-main.jpg";
import galleryPreview from "@/assets/gallery-preview.jpg";

const galleryImages = [
  { src: galleryPreview, alt: "Pricing Gallery Preview" },
  { src: artistMain, alt: "Price Example Work" },
];

const studioImages = [
  { src: artistMain, alt: "Studio Pricing Area 1" },
  { src: galleryPreview, alt: "Studio Pricing Area 2" },
];

const pricingTiers = [
  {
    name: "Small Tattoos",
    price: "€150 - €300",
    description: "Simple designs up to 5cm",
    features: ["1-2 hours session", "Basic aftercare kit", "Touch-up included"]
  },
  {
    name: "Medium Tattoos", 
    price: "€300 - €600",
    description: "Detailed work 5-15cm",
    features: ["2-4 hours session", "Premium aftercare kit", "Free consultation", "Touch-up included"]
  },
  {
    name: "Large Tattoos",
    price: "€600+",
    description: "Complex pieces 15cm+",
    features: ["Multiple sessions", "Custom design", "Premium care package", "Unlimited touch-ups"]
  }
];

const Pricing = () => {
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

      {/* Pricing Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-80">
              Quality artistry with honest, upfront pricing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className="bg-golden-card border-golden-foreground/20 p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-golden-foreground">{tier.name}</h3>
                <div className="text-3xl font-bold mb-4 text-golden-foreground">{tier.price}</div>
                <p className="text-golden-foreground/80 mb-6">{tier.description}</p>
                <ul className="space-y-2 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="text-golden-foreground/80">{feature}</li>
                  ))}
                </ul>
                <Button className="w-full bg-golden-foreground text-golden hover:bg-golden-foreground/90">
                  Book Consultation
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Artist Section */}
          <div className="space-y-6">
            <Card className="overflow-hidden bg-golden-card">
              <img
                src={artistMain}
                alt="Pricing Information"
                className="w-full h-80 object-cover"
              />
            </Card>
            
            <Separator className="bg-golden-foreground/30" />
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Investment in Art</h2>
              <p className="opacity-80 leading-relaxed">
                Our pricing reflects the quality, time, and expertise that goes into 
                every piece. We believe in transparent pricing with no hidden fees. 
                Each tattoo is a unique investment in permanent art that will last a lifetime.
              </p>
              <p className="opacity-80 leading-relaxed">
                Consultations are always free, and we provide detailed quotes based on 
                size, complexity, and time requirements. Payment plans are available 
                for larger pieces.
              </p>
            </div>
          </div>

          {/* Gallery Preview */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Price Examples</h2>
            <Card className="overflow-hidden cursor-pointer group bg-golden-card" onClick={() => openGallery()}>
              <div className="relative">
                <img
                  src={galleryPreview}
                  alt="Pricing Gallery Preview"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="lg" className="bg-golden-accent text-golden-foreground">
                    View Price Examples
                  </Button>
                </div>
              </div>
            </Card>
            <p className="opacity-80">
              Browse examples of our work with corresponding price ranges to help 
              you plan your investment.
            </p>
          </div>
        </div>
      </div>

      {/* Studio Images */}
      <div className="bg-golden-foreground/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comfortable Environment</h2>
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

      {/* Google Maps Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4089485306105!2d13.404954!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sen!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
          <div className="text-center mt-6">
            <p className="opacity-80">
              123 Artist Street, Creative District<br />
              Berlin, Germany 10117
            </p>
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

export default Pricing;