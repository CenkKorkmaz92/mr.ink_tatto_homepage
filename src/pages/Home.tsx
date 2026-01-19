import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ImageCarousel from "@/components/ImageCarousel";
import GalleryLightbox from "@/components/GalleryLightbox";
import profileMrInk from "@/assets/profile_mrInk.webp";
import galleryPreview from "@/assets/gallery-preview.jpg";
import roomtourMax1 from "@/assets/roomtour_max_1.webp";
import roomtourMax2 from "@/assets/roomtour_max_2.webp";

// Portfolio videos for the gallery preview carousel
const portfolioVideos = [
  "/portfolio_video_1.mp4",
  "/portfolio_video_2.mp4",
  "/portfolio_video_3.mp4"
];

// Sample gallery images - you can replace these with actual tattoo images
const galleryImages = [
  { src: galleryPreview, alt: "Tattoo Gallery Preview" },
  { src: profileMrInk, alt: "Artist Work Sample" },
];

const studioImages = [
  { src: roomtourMax1, alt: "Studio Room Tour 1" },
  { src: roomtourMax2, alt: "Studio Room Tour 2" },
];

const Home = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isStudioGalleryOpen, setIsStudioGalleryOpen] = useState(false);
  const [currentStudioImageIndex, setCurrentStudioImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Auto-rotate portfolio videos when current video ends
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % portfolioVideos.length);
  };

  const openGallery = (index: number = 0) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const openStudioGallery = (index: number = 0) => {
    setCurrentStudioImageIndex(index);
    setIsStudioGalleryOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <ImageCarousel />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center">
          {/* Artist Section */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">{t('team.maxRole')}</h2>
            <div className="flex flex-col md:grid md:grid-cols-[auto_1px_1fr] gap-4 md:gap-6 items-start">
              <Card className="overflow-hidden mx-auto md:mx-0 w-full md:w-auto">
                <img
                  src={profileMrInk}
                  alt="Main Artist"
                  className="w-full h-[400px] md:h-[500px] object-cover select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ WebkitTouchCallout: 'none' }}
                />
              </Card>
              
              <Separator orientation="vertical" className="bg-accent h-full min-h-[500px] hidden md:block" />
              <Separator className="bg-accent md:hidden" />
              
              <div className="space-y-4 flex items-center w-full">
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {t('team.maxBio')}
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Preview */}
          <div className="relative mx-auto md:mx-0 w-fit flex flex-col justify-between min-h-[400px] md:min-h-full">
            <Separator className="bg-accent" />
            <Card className="overflow-hidden my-6 md:my-auto">
              <div className="relative">
                <video
                  key={currentVideoIndex}
                  autoPlay
                  muted
                  playsInline
                  onEnded={handleVideoEnd}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-auto h-[400px] md:h-[500px] object-cover select-none"
                  style={{ WebkitTouchCallout: 'none' }}
                >
                  <source src={portfolioVideos[currentVideoIndex]} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center cursor-pointer" onClick={() => openGallery()}>
                  <Button variant="secondary" size="lg">
                    {t('gallery.title')}
                  </Button>
                </div>
              </div>
            </Card>
            <Separator className="bg-accent" />
          </div>
        </div>
      </div>

      {/* Studio Images */}
      <div className="bg-primary/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t('home.studioTitle')}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Studio Video */}
            <Card className="overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/studio_teaser.mp4" type="video/mp4" />
              </video>
            </Card>

            {studioImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
                onClick={() => openStudioGallery(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t('contact.location')}</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8687519864844!2d9.327939676810485!3d48.30933677125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c5e4e8d5b7ab%3A0x7e3e8e8e8e8e8e8e!2sNeuffener%20Str.%2066%2C%2072622%20N%C3%BCrtingen!5e0!3m2!1sde!2sde!4v1"
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
              Neuffener Str. 66<br />
              72622 Nürtingen
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

      {/* Studio Gallery Lightbox */}
      <GalleryLightbox
        images={studioImages}
        isOpen={isStudioGalleryOpen}
        currentIndex={currentStudioImageIndex}
        onClose={() => setIsStudioGalleryOpen(false)}
        onNavigate={setCurrentStudioImageIndex}
      />
    </div>
  );
};

export default Home;