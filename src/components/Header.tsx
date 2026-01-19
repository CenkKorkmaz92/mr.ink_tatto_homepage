import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <header className={`sticky top-0 z-50 backdrop-blur border-b ${
      isPricingPage 
        ? "bg-golden/95 supports-[backdrop-filter]:bg-golden/60 border-golden-foreground/20" 
        : "bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src={logo} 
              alt="Mr. Ink Tattoo Logo" 
              className="h-10 w-auto object-contain rounded-2xl border-[0.5px] border-yellow-500 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            <span className={`text-xl font-bold relative transition-colors ${
              isPricingPage ? "text-golden-foreground hover:text-golden-foreground" : "text-foreground hover:text-yellow-500"
            }`}>
              Mr.Ink Tattoo
              <span className={`absolute bottom-0 left-0 h-[0.5px] w-full group-hover:w-full transition-all duration-300 ${
                isPricingPage ? "bg-golden-foreground" : "bg-yellow-500"
              }`}></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
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
                    : `hover:text-yellow-500 ${
                        location.pathname === item.path
                          ? "text-accent"
                          : "text-muted-foreground"
                      }`
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  isPricingPage ? "bg-golden-foreground" : "bg-yellow-500"
                } ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className={isPricingPage ? "text-golden-foreground hover:text-golden-foreground" : ""}
                onClick={() => changeLanguage(i18n.language === 'de' ? 'en' : 'de')}
              >
                <Languages size={20} />
              </Button>
              <span className={`text-sm font-medium ${isPricingPage ? "text-golden-foreground" : "text-foreground"}`}>
                {i18n.language.toUpperCase()}
              </span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden py-4 border-t ${
            isPricingPage ? "border-golden-foreground/20" : "border-border"
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-sm font-medium transition-colors ${
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
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="pt-2 mt-2 border-t border-border">
              <button
                onClick={() => changeLanguage('de')}
                className="block py-2 text-sm font-medium w-full text-left"
              >
                Deutsch
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className="block py-2 text-sm font-medium w-full text-left"
              >
                English
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;