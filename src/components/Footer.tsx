import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const isPricingPage = location.pathname === "/pircing";
  const [imprintOpen, setImprintOpen] = useState(false);
  const [dataProtectionOpen, setDataProtectionOpen] = useState(false);

  return (
    <footer className="bg-primary border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src={logo} 
              alt="Mr. Ink Tattoo Logo" 
              className="h-10 w-auto object-contain rounded-tl-2xl rounded-tr-none rounded-bl-none rounded-br-2xl opacity-90 hover:opacity-100 transition-all duration-300 border border-accent/30 hover:border-accent"
            />
            <span className="text-lg font-bold px-3 py-1.5 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border transition-all duration-300 text-accent border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_0_8px_rgba(160,130,90,0.2)] hover:shadow-[0_0_12px_rgba(160,130,90,0.4)]">
              Mr.Ink Tattoo
            </span>
          </Link>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm">
            <button 
              onClick={() => setImprintOpen(true)}
              className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
            >
              {t('footer.imprint')}
            </button>
            <button 
              onClick={() => setDataProtectionOpen(true)}
              className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
            >
              {t('footer.privacy')}
            </button>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className={`border transition-all duration-300 ${
                isPricingPage
                  ? "border-accent/30 hover:border-accent hover:bg-accent/10 text-accent hover:text-accent rounded-tl-2xl rounded-tr-none rounded-bl-none rounded-br-2xl shadow-[0_0_8px_rgba(160,130,90,0.2)] hover:shadow-[0_0_12px_rgba(160,130,90,0.4)]"
                  : "border-accent/30 hover:border-accent hover:bg-accent/10 hover:text-accent rounded-tl-2xl rounded-tr-none rounded-bl-none rounded-br-2xl shadow-[0_0_8px_rgba(160,130,90,0.2)] hover:shadow-[0_0_12px_rgba(160,130,90,0.4)]"
              }`}
              asChild
            >
              <a 
                href={isPricingPage ? "https://www.facebook.com/mrssteelpiercing/" : "https://www.facebook.com/p/mr__ink__tattoo-100071387660308/"} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`border transition-all duration-300 ${
                isPricingPage
                  ? "border-accent/30 hover:border-accent hover:bg-accent/10 text-accent hover:text-accent rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none shadow-[0_0_8px_rgba(160,130,90,0.2)] hover:shadow-[0_0_12px_rgba(160,130,90,0.4)]"
                  : "border-accent/30 hover:border-accent hover:bg-accent/10 hover:text-accent rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none shadow-[0_0_8px_rgba(160,130,90,0.2)] hover:shadow-[0_0_12px_rgba(160,130,90,0.4)]"
              }`}
              asChild
            >
              <a 
                href={isPricingPage ? "https://www.instagram.com/mrs_steel_piercing/" : "https://www.instagram.com/mr__ink__tattoo/?hl=de"} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} />
              </a>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 Mr. Ink Tattoo. {t('footer.rights')}</p>
          <p className="mt-2 text-xs opacity-70">
            Design & Development by Cenk Korkmaz & Philipp Schoenborn
          </p>
        </div>
      </div>

      {/* Imprint Dialog */}
      <Dialog open={imprintOpen} onOpenChange={setImprintOpen}>
        <DialogContent 
          className={`max-w-4xl max-h-[90vh] overflow-y-auto ${isPricingPage ? 'bg-golden-card' : ''}`}
          closeButtonClassName={isPricingPage ? 'text-primary hover:text-primary' : ''}
        >
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>
              Imprint
            </DialogTitle>
          </DialogHeader>
          <div className={`space-y-6 ${isPricingPage ? '' : 'text-muted-foreground'}`} style={isPricingPage ? { color: '#282c34' } : {}}>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>Business Information</h2>
              <div className="space-y-1 text-sm">
                <p><strong>Company:</strong> Mr. Ink Tattoo</p>
                <p><strong>Owner:</strong> Max Riss</p>
                <p><strong>Address:</strong> Neuffener Str. 66, 72622 Nürtingen, Germany</p>
                <p><strong>Phone:</strong> 01573 3360210</p>
                <p><strong>Email:</strong> info@mrink-studio.de</p>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>Business Registration</h2>
              <div className="space-y-1 text-sm">
                <p><strong>Trade Registry:</strong> HRB 123456</p>
                <p><strong>Registration Court:</strong> Amtsgericht Stuttgart</p>
                <p><strong>VAT ID:</strong> DE123456789</p>
                <p><strong>Tax Number:</strong> 12/345/67890</p>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>Professional Licensing</h2>
              <div className="space-y-1 text-sm">
                <p><strong>Health Department License:</strong> HD-2026-001</p>
                <p><strong>Professional Tattoo Artist Certification:</strong> Certified by German Tattoo Association</p>
                <p><strong>Hygiene Certificate:</strong> Updated annually according to § 6 Tätowiermittelverordnung (TätMV)</p>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>Responsible for Content</h2>
              <p className="text-sm">
                Max Riss is responsible for all content on this website according to 
                § 18 Abs. 2 MStV (Medienstaatsvertrag) and § 5 TMG (Telemediengesetz).
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>Disclaimer</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-semibold mb-2 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>Liability for Content</h3>
                  <p className="text-sm">
                    As a service provider, we are responsible for our own content on these pages according to § 7 Abs. 1 TMG. 
                    The content of our pages has been created with the utmost care. However, 
                    we cannot guarantee the content's accuracy, completeness, or topicality.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>Liability for Links</h3>
                  <p className="text-sm">
                    Our website contains links to external third-party websites over whose content we have no control. 
                    Therefore, we cannot assume any liability for this external content. According to §§ 8 to 10 TMG, 
                    we are not obligated to monitor transmitted or stored third-party information.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>Copyright</h2>
              <p className="text-sm">
                The content and works on these pages created by the site operators are 
                subject to German copyright law. Duplication, processing, distribution, 
                and any form of commercialization of such material beyond the scope of 
                copyright law shall require the prior written consent of its respective 
                author or creator.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      {/* Data Protection Dialog */}
      <Dialog open={dataProtectionOpen} onOpenChange={setDataProtectionOpen}>
        <DialogContent 
          className={`max-w-4xl max-h-[90vh] overflow-y-auto ${isPricingPage ? 'bg-golden-card' : ''}`}
          closeButtonClassName={isPricingPage ? 'text-primary hover:text-primary' : ''}
        >
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>
              Data Protection Policy
            </DialogTitle>
          </DialogHeader>
          <div className={`space-y-6 ${isPricingPage ? '' : 'text-muted-foreground'}`} style={isPricingPage ? { color: '#282c34' } : {}}>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>1. Data Protection Overview</h2>
              <p className="text-sm">
                The following information provides an overview of what happens to your 
                personal data when you visit our website. Personal data is any data that 
                can be used to personally identify you. This privacy policy complies with 
                the EU General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>2. Data Controller</h2>
              <div className="space-y-1 text-sm">
                <p><strong>Responsible party:</strong> Max Riss</p>
                <p><strong>Address:</strong> Neuffener Str. 66, 72622 Nürtingen, Germany</p>
                <p><strong>Phone:</strong> 01573 3360210</p>
                <p><strong>Email:</strong> info@mrink-studio.de</p>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>3. Data Collection</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-semibold mb-2 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>Contact Forms</h3>
                  <p className="text-sm">
                    When you submit our contact form, we collect your name, surname, 
                    and message content. This data is used solely to respond to your 
                    inquiry and is stored securely.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>Cookies</h3>
                  <p className="text-sm">
                    Our website uses cookies to improve user experience. You can configure your browser to 
                    refuse cookies or to alert you when cookies are being sent.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>4. Your Rights under GDPR</h2>
              <p className="text-sm">You have rights to information, correction, deletion, data portability, and to object to processing.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>5. Contact</h2>
              <p className="text-sm">
                If you have any questions about this privacy policy, 
                please contact us at info@mrink-studio.de.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;