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
                  : "border-accent/30 hover:border-accent hover:bg-accent/10 text-accent hover:text-accent rounded-tl-2xl rounded-tr-none rounded-bl-none rounded-br-2xl shadow-[0_0_8px_rgba(160,130,90,0.2)] hover:shadow-[0_0_12px_rgba(160,130,90,0.4)]"
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
                  : "border-accent/30 hover:border-accent hover:bg-accent/10 text-accent hover:text-accent rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none shadow-[0_0_8px_rgba(160,130,90,0.2)] hover:shadow-[0_0_12px_rgba(160,130,90,0.4)]"
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
          className={`max-w-4xl max-h-[90vh] overflow-y-auto legal-modal ${isPricingPage ? 'bg-golden-card' : ''}`}
          closeButtonClassName={isPricingPage ? 'text-primary hover:text-primary' : ''}
        >
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>
              {t('legal.imprint.title')}
            </DialogTitle>
          </DialogHeader>
          <div className={`space-y-6 ${isPricingPage ? '' : 'text-muted-foreground'}`} style={isPricingPage ? { color: '#282c34' } : {}}>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.imprint.businessInfo')}</h2>
              <div className="space-y-1 text-sm">
                <p><strong>{t('legal.imprint.company')}:</strong> Mr. Ink Tattoo</p>
                <p><strong>{t('legal.imprint.owner')}:</strong> Max Riss</p>
                <p><strong>{t('legal.imprint.address')}:</strong> Neuffener Str. 66, 72622 Nürtingen, Germany</p>
                <p><strong>{t('legal.imprint.phone')}:</strong> 01573 3360210</p>
                <p><strong>{t('legal.imprint.email')}:</strong> mr.ink.nt@gmail.com</p>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.imprint.responsible')}</h2>
              <p className="text-sm">
                {t('legal.imprint.responsibleText')}
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.imprint.disclaimer')}</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-semibold mb-2 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.imprint.liabilityContent')}</h3>
                  <p className="text-sm">
                    {t('legal.imprint.liabilityContentText')}
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.imprint.liabilityLinks')}</h3>
                  <p className="text-sm">
                    {t('legal.imprint.liabilityLinksText')}
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.imprint.copyright')}</h2>
              <p className="text-sm">
                {t('legal.imprint.copyrightText')}
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      {/* Data Protection Dialog */}
      <Dialog open={dataProtectionOpen} onOpenChange={setDataProtectionOpen}>
        <DialogContent 
          className={`max-w-4xl max-h-[90vh] overflow-y-auto legal-modal ${isPricingPage ? 'bg-golden-card' : ''}`}
          closeButtonClassName={isPricingPage ? 'text-primary hover:text-primary' : ''}
        >
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>
              {t('legal.privacy.title')}
            </DialogTitle>
          </DialogHeader>
          <div className={`space-y-6 ${isPricingPage ? '' : 'text-muted-foreground'}`} style={isPricingPage ? { color: '#282c34' } : {}}>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.overview')}</h2>
              <p className="text-sm">
                {t('legal.privacy.overviewText')}
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.controller')}</h2>
              <p className="text-sm mb-2">{t('legal.privacy.controllerText')}</p>
              <div className="space-y-1 text-sm">
                <p><strong>{t('legal.privacy.responsible')}:</strong> Max Riss</p>
                <p><strong>{t('legal.imprint.address')}:</strong> Neuffener Str. 66, 72622 Nürtingen, Germany</p>
                <p><strong>{t('legal.imprint.phone')}:</strong> 01573 3360210</p>
                <p><strong>{t('legal.imprint.email')}:</strong> mr.ink.nt@gmail.com</p>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.dataCollection')}</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-semibold mb-2 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.contactForms')}</h3>
                  <p className="text-sm">
                    {t('legal.privacy.contactFormsText')}
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.cookies')}</h3>
                  <p className="text-sm">
                    {t('legal.privacy.cookiesText')}
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.yourRights')}</h2>
              <p className="text-sm mb-3">{t('legal.privacy.rightsText')}</p>
              <div className="space-y-2 text-sm">
                <div>
                  <strong className="text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.rightInfo')}:</strong>
                  <p className="ml-4">{t('legal.privacy.rightInfoText')}</p>
                </div>
                <div>
                  <strong className="text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.rightCorrection')}:</strong>
                  <p className="ml-4">{t('legal.privacy.rightCorrectionText')}</p>
                </div>
                <div>
                  <strong className="text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.rightDeletion')}:</strong>
                  <p className="ml-4">{t('legal.privacy.rightDeletionText')}</p>
                </div>
                <div>
                  <strong className="text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.rightRestriction')}:</strong>
                  <p className="ml-4">{t('legal.privacy.rightRestrictionText')}</p>
                </div>
                <div>
                  <strong className="text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.rightPortability')}:</strong>
                  <p className="ml-4">{t('legal.privacy.rightPortabilityText')}</p>
                </div>
                <div>
                  <strong className="text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.rightObjection')}:</strong>
                  <p className="ml-4">{t('legal.privacy.rightObjectionText')}</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.dataStorage')}</h2>
              <p className="text-sm">
                {t('legal.privacy.dataStorageText')}
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-3 text-accent" style={isPricingPage ? { color: '#282c34' } : {}}>{t('legal.privacy.contact')}</h2>
              <p className="text-sm">
                {t('legal.privacy.contactText')}
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;