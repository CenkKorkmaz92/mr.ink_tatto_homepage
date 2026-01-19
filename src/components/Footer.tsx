import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const isPricingPage = location.pathname === "/pircing";

  return (
    <footer className={`border-t ${
      isPricingPage 
        ? "bg-golden-foreground/10 border-golden-foreground/20" 
        : "bg-primary border-border"
    }`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src={logo} 
              alt="Mr. Ink Tattoo Logo" 
              className="h-8 w-auto object-contain rounded-2xl border-[0.5px] border-yellow-500 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            <span className={`text-lg font-bold relative transition-colors ${
              isPricingPage ? "text-golden-foreground hover:text-golden-foreground" : "text-primary-foreground hover:text-yellow-500"
            }`}>
              Mr.Ink Tattoo
              <span className={`absolute bottom-0 left-0 h-[0.5px] w-full group-hover:w-full transition-all duration-300 ${
                isPricingPage ? "bg-golden-foreground" : "bg-yellow-500"
              }`}></span>
            </span>
          </Link>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm">
            <Link 
              to="/imprint" 
              className={`transition-colors ${
                isPricingPage 
                  ? "text-golden-foreground/70 hover:text-golden-foreground" 
                  : "text-muted-foreground hover:text-accent"
              }`}
            >
              {t('footer.imprint')}
            </Link>
            <Link 
              to="/data-protection" 
              className={`transition-colors ${
                isPricingPage 
                  ? "text-golden-foreground/70 hover:text-golden-foreground" 
                  : "text-muted-foreground hover:text-accent"
              }`}
            >
              {t('footer.privacy')}
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className={isPricingPage 
                ? "hover:bg-golden-foreground hover:text-golden" 
                : "hover:bg-accent hover:text-accent-foreground"
              }
              asChild
            >
              <a 
                href="https://www.facebook.com/p/mr__ink__tattoo-100071387660308/" 
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
              className={isPricingPage 
                ? "hover:bg-golden-foreground hover:text-golden" 
                : "hover:bg-accent hover:text-accent-foreground"
              }
              asChild
            >
              <a 
                href="https://www.instagram.com/mr__ink__tattoo/?hl=de" 
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
        <div className={`mt-6 pt-6 border-t text-center text-sm ${
          isPricingPage 
            ? "border-golden-foreground/20 text-golden-foreground/70" 
            : "border-border text-muted-foreground"
        }`}>
          <p>© 2026 Mr. Ink Tattoo. {t('footer.rights')}</p>
          <p className="mt-2 text-xs opacity-70">
            Design & Development by Cenk Korkmaz & Philipp Schoenborn
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;