import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Imprint = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from || '/';
  const isPricingStyle = fromPage === '/pircing';

  const handleClose = () => {
    navigate(fromPage);
  };

  return (
    <div className={`min-h-screen py-16 ${isPricingStyle ? 'bg-golden text-golden-foreground' : ''}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-end mb-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleClose}
            className={isPricingStyle ? 'text-golden-foreground hover:bg-golden-foreground/10' : 'hover:bg-accent/10'}
          >
            <X size={24} />
          </Button>
        </div>
        <Card className={`p-8 ${isPricingStyle ? 'bg-golden-card' : ''}`}>
          <h1 className="text-4xl font-bold mb-8 text-accent" style={isPricingStyle ? { color: '#282c34' } : {}}>Imprint</h1>
          
          <div className={`space-y-8 ${isPricingStyle ? '' : 'text-muted-foreground'}`} style={isPricingStyle ? { color: '#282c34' } : {}}>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent" style={isPricingStyle ? { color: '#282c34' } : {}}>Business Information</h2>
              <div className="space-y-2">
                <p><strong>Company:</strong> Mr. Ink Tattoo</p>
                <p><strong>Owner:</strong> Max Riss</p>
                <p><strong>Address:</strong> Neuffener Str. 66<br />72622 Nürtingen, Germany</p>
                <p><strong>Phone:</strong> 01573 3360210</p>
                <p><strong>Email:</strong> mr.ink.nt@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent" style={isPricingStyle ? { color: '#282c34' } : {}}>Business Registration</h2>
              <div className="space-y-2">
                <p><strong>Trade Registry:</strong> HRB 123456</p>
                <p><strong>Registration Court:</strong> Amtsgericht Stuttgart</p>
                <p><strong>VAT ID:</strong> DE123456789</p>
                <p><strong>Tax Number:</strong> 12/345/67890</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent" style={isPricingStyle ? { color: '#282c34' } : {}}>Professional Licensing</h2>
              <div className="space-y-2">
                <p><strong>Health Department License:</strong> HD-2026-001</p>
                <p><strong>Professional Tattoo Artist Certification:</strong> Certified by German Tattoo Association</p>
                <p><strong>Hygiene Certificate:</strong> Updated annually according to § 6 Tätowiermittelverordnung (TätMV)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent" style={isPricingStyle ? { color: '#282c34' } : {}}>Responsible for Content</h2>
              <p>
                Max Riss is responsible for all content on this website according to 
                § 18 Abs. 2 MStV (Medienstaatsvertrag) and § 5 TMG (Telemediengesetz).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent" style={isPricingStyle ? { color: '#282c34' } : {}}>Disclaimer</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent" style={isPricingStyle ? { color: '#282c34' } : {}}>Liability for Content</h3>
                  <p>
                    As a service provider, we are responsible for our own content on these pages according to § 7 Abs. 1 TMG. 
                    The content of our pages has been created with the utmost care. However, 
                    we cannot guarantee the content’s accuracy, completeness, or topicality.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent" style={isPricingStyle ? { color: '#282c34' } : {}}>Liability for Links</h3>
                  <p>
                    Our website contains links to external third-party websites over whose content we have no control. 
                    Therefore, we cannot assume any liability for this external content. According to §§ 8 to 10 TMG, 
                    we are not obligated to monitor transmitted or stored third-party information.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent" style={isPricingStyle ? { color: '#282c34' } : {}}>Copyright</h2>
              <p>
                The content and works on these pages created by the site operators are 
                subject to German copyright law. Duplication, processing, distribution, 
                and any form of commercialization of such material beyond the scope of 
                copyright law shall require the prior written consent of its respective 
                author or creator.
              </p>
            </section>

            <section className="pt-8 border-t border-border">
              <p className="text-base">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Imprint;