import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const MENU_CLOSE_DELAY = 400;

/**
 * Main navigation header with mobile menu and language switcher
 * Features sticky positioning, backdrop blur, and responsive design
 */
const Header = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isPricingPage = location.pathname === "/pircing";

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.pircing'), path: "/pircing" },
    { name: t('nav.gallery'), path: "/gallery" },
    { name: t('nav.team'), path: "/team" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  /**
   * Handles menu close animation with delay
   * Allows smooth slide-up transition before unmounting
   */
  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, MENU_CLOSE_DELAY);
  };

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      handleMenuClose();
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur border-b shadow-[0_8px_16px_-4px_rgba(239,209,87,0.2)] ${
      isPricingPage 
        ? "bg-golden/95 supports-[backdrop-filter]:bg-golden/60 border-golden-foreground/20" 
        : "bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src={logo} 
              alt="Mr. Ink Tattoo Logo" 
              className="h-10 w-auto object-contain rounded-tl-2xl rounded-tr-none rounded-bl-none rounded-br-2xl opacity-90 hover:opacity-100 transition-all duration-300 border border-accent/30 hover:border-accent"
            />
            <span className={`text-xl font-bold px-3 py-1.5 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border transition-all duration-300 ${
              isPricingPage 
                ? "text-golden-foreground border-golden-foreground/30 hover:border-golden-foreground hover:bg-golden-foreground/10" 
                : "text-accent border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_0_8px_rgba(160,130,90,0.2)] hover:shadow-[0_0_12px_rgba(160,130,90,0.4)]"
            }`}>
              Mr.Ink Tattoo
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-colors relative group ${
                  isPricingPage
                    ? `hover:text-golden-foreground ${
                        location.pathname === item.path
                          ? "text-golden-foreground"
                          : "text-golden-foreground/70"
                      }`
                    : `hover:text-accent ${
                        location.pathname === item.path
                          ? "text-accent"
                          : "text-muted-foreground"
                      }`
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 shadow-[0_0_8px_currentColor] ${
                  isPricingPage ? "bg-golden-foreground" : "bg-accent"
                } ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`border transition-all duration-300 rounded-full ${
                  isPricingPage 
                    ? "border-golden-foreground/30 hover:border-golden-foreground hover:bg-golden-foreground/10" 
                    : "border-accent/30 hover:border-accent hover:bg-accent/10 shadow-[0_0_8px_rgba(160,130,90,0.2)] hover:shadow-[0_0_12px_rgba(160,130,90,0.4)]"
                }`}
                onClick={() => changeLanguage(i18n.language === 'de' ? 'en' : 'de')}
                title={i18n.language === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'}
              >
                <img 
                  src={i18n.language === 'de' ? '/flags/germany.webp' : '/flags/united-kingdom.webp'} 
                  alt={i18n.language === 'de' ? 'Deutsche Flagge' : 'English Flag'}
                  className="w-6 h-6 object-cover rounded-full"
                />
              </Button>
            </div>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className={`md:hidden absolute left-0 right-0 top-16 py-4 border-t backdrop-blur-md shadow-lg transition-all duration-500 ease-out ${
          isClosing ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0 animate-in slide-in-from-top'
        } ${
          isPricingPage 
            ? "bg-golden border-golden-foreground/20" 
            : "bg-background border-border"
        }`}>
          <div className="container mx-auto px-4">
            {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-2 text-base font-medium transition-colors ${
                isPricingPage
                  ? `hover:text-golden-foreground ${
                      location.pathname === item.path
                        ? "text-golden-foreground"
                        : "text-golden-foreground/70"
                    }`
                  : `hover:text-accent ${
                      location.pathname === item.path
                        ? "text-accent"
                        : "text-muted-foreground"
                    }`
              }`}
              onClick={handleMenuClose}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="pt-2 mt-2 border-t border-border flex gap-2">
            <button
              onClick={() => {
                changeLanguage('de');
                handleMenuClose();
              }}
              className={`flex items-center gap-2 py-2 px-3 text-base font-medium w-full rounded-lg border transition-all ${
                i18n.language === 'de' 
                  ? 'border-accent bg-accent/10' 
                  : 'border-accent/30 hover:border-accent hover:bg-accent/5'
              }`}
            >
              <img 
                src="/flags/germany.webp" 
                alt="Deutsche Flagge"
                className="w-5 h-5 object-cover rounded-sm"
              />
              Deutsch
            </button>
            <button
              onClick={() => {
                changeLanguage('en');
                handleMenuClose();
              }}
              className={`flex items-center gap-2 py-2 px-3 text-base font-medium w-full rounded-lg border transition-all ${
                i18n.language === 'en' 
                  ? 'border-accent bg-accent/10' 
                  : 'border-accent/30 hover:border-accent hover:bg-accent/5'
              }`}
            >
              <img 
                src="/flags/united-kingdom.webp" 
                alt="English Flag"
                className="w-5 h-5 object-cover rounded-sm"
              />
              English
            </button>
          </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;