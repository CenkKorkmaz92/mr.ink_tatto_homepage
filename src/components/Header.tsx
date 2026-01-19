import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isPricingPage = location.pathname === "/pricing" || location.pathname === "/price-gallery";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Pricing", path: "/pricing" },
    { name: "Gallery", path: "/gallery" },
    { name: "Price Gallery", path: "/price-gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 backdrop-blur border-b ${
      isPricingPage 
        ? "bg-golden/95 supports-[backdrop-filter]:bg-golden/60 border-golden-foreground/20" 
        : "bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
              isPricingPage 
                ? "bg-golden-foreground text-golden" 
                : "bg-accent text-accent-foreground"
            }`}>
              TS
            </div>
            <span className={`text-xl font-bold ${
              isPricingPage ? "text-golden-foreground" : "text-foreground"
            }`}>Tattoo Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
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
              </Link>
            ))}
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
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;