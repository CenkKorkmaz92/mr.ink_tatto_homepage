import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ImageCarousel from "@/components/ImageCarousel";
import GalleryLightbox from "@/components/GalleryLightbox";
import artistMain from "@/assets/artist-main.jpg";
import galleryPreview from "@/assets/gallery-preview.jpg";

// Sample gallery images - you can replace these with actual tattoo images
const galleryImages = [
  { src: galleryPreview, alt: "Tattoo Gallery Preview" },
  { src: artistMain, alt: "Artist Work Sample" },
];

const studioImages = [
  { src: artistMain, alt: "Studio Interior 1" },
  { src: galleryPreview, alt: "Studio Interior 2" },
];

const Home = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (index: number = 0) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <ImageCarousel />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Artist Section */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <img
                src={artistMain}
                alt="Main Artist"
                className="w-full h-80 object-cover"
              />
            </Card>
            
            <Separator className="bg-accent" />
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Master Artist</h2>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of experience in the tattoo industry, our master artist 
                specializes in realistic portraits, traditional designs, and custom artwork. 
                Every piece is crafted with precision, passion, and attention to detail, 
                ensuring that your vision becomes a lasting work of art.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From small, delicate pieces to large, complex compositions, we work closely 
                with each client to create something truly unique. Our commitment to hygiene, 
                safety, and artistic excellence has made us the premier choice for discerning 
                clients seeking exceptional tattoo artistry.
              </p>
            </div>
          </div>

          {/* Gallery Preview */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Work</h2>
            <Card className="overflow-hidden cursor-pointer group" onClick={() => openGallery()}>
              <div className="relative">
                <img
                  src={galleryPreview}
                  alt="Gallery Preview"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="lg">
                    View Gallery
                  </Button>
                </div>
              </div>
            </Card>
            <p className="text-muted-foreground">
              Explore our collection of completed works featuring various styles 
              and techniques. Click to view our full portfolio.
            </p>
          </div>
        </div>
      </div>

      {/* Studio Images */}
      <div className="bg-primary/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Studio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {studioImages.map((image, index) => (
              <Card key={index} className="overflow-hidden">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Visit Us</h2>
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
            <p className="text-muted-foreground">
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

export default Home;