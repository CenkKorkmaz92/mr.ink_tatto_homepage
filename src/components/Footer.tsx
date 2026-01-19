import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const isPricingPage = location.pathname === "/pricing" || location.pathname === "/price-gallery";

  return (
    <footer className={`border-t ${
      isPricingPage 
        ? "bg-golden-foreground/10 border-golden-foreground/20" 
        : "bg-primary border-border"
    }`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
              isPricingPage 
                ? "bg-golden-foreground text-golden" 
                : "bg-accent text-accent-foreground"
            }`}>
              TS
            </div>
            <span className={`text-lg font-bold ${
              isPricingPage ? "text-golden-foreground" : "text-primary-foreground"
            }`}>Tattoo Studio</span>
          </div>

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
              Imprint
            </Link>
            <Link 
              to="/data-protection" 
              className={`transition-colors ${
                isPricingPage 
                  ? "text-golden-foreground/70 hover:text-golden-foreground" 
                  : "text-muted-foreground hover:text-accent"
              }`}
            >
              Data Protection
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
            >
              <Facebook size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={isPricingPage 
                ? "hover:bg-golden-foreground hover:text-golden" 
                : "hover:bg-accent hover:text-accent-foreground"
              }
            >
              <Instagram size={20} />
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-6 pt-6 border-t text-center text-sm ${
          isPricingPage 
            ? "border-golden-foreground/20 text-golden-foreground/70" 
            : "border-border text-muted-foreground"
        }`}>
          © 2024 Tattoo Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;