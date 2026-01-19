import { Card } from "@/components/ui/card";

const Imprint = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="p-8">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Imprint</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Business Information</h2>
              <div className="space-y-2">
                <p><strong>Company:</strong> Tattoo Studio Professional Art</p>
                <p><strong>Owner:</strong> Alex Rivera</p>
                <p><strong>Address:</strong> 123 Artist Street<br />Creative District<br />10117 Berlin, Germany</p>
                <p><strong>Phone:</strong> +49 30 123 456 789</p>
                <p><strong>Email:</strong> info@tattoo-studio.com</p>
                <p><strong>Website:</strong> www.tattoo-studio.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Business Registration</h2>
              <div className="space-y-2">
                <p><strong>Trade Registry:</strong> HRB 123456</p>
                <p><strong>Registration Court:</strong> Amtsgericht Berlin-Charlottenburg</p>
                <p><strong>VAT ID:</strong> DE123456789</p>
                <p><strong>Tax Number:</strong> 12/345/67890</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Professional Licensing</h2>
              <div className="space-y-2">
                <p><strong>Health Department License:</strong> HD-2024-001</p>
                <p><strong>Professional Tattoo Artist Certification:</strong> Certified by German Tattoo Association</p>
                <p><strong>Hygiene Certificate:</strong> Updated annually according to local health regulations</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Responsible for Content</h2>
              <p>
                Alex Rivera is responsible for all content on this website according to 
                § 55 Abs. 2 RStV (German Interstate Broadcasting Agreement).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Disclaimer</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Liability for Content</h3>
                  <p>
                    The content of our pages has been created with the utmost care. However, 
                    we cannot guarantee the content's accuracy, completeness, or topicality.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Liability for Links</h3>
                  <p>
                    Our offer includes links to external third-party websites. We have no 
                    influence on the content of these websites and cannot guarantee their accuracy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Copyright</h2>
              <p>
                The content and works on these pages created by the site operators are 
                subject to German copyright law. Duplication, processing, distribution, 
                and any form of commercialization of such material beyond the scope of 
                copyright law shall require the prior written consent of its respective 
                author or creator.
              </p>
            </section>

            <section className="pt-8 border-t border-border">
              <p className="text-sm">
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