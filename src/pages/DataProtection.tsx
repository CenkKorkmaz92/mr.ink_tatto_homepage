import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const DataProtection = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-accent" style={isPricingStyle ? { color: '#282c34' } : {}}>Data Protection Policy</h1>
          
          <div className={`space-y-8 ${isPricingStyle ? '' : 'text-muted-foreground'}`} style={isPricingStyle ? { color: '#282c34' } : {}}>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">1. Data Protection Overview</h2>
              <p>
                The following information provides an overview of what happens to your 
                personal data when you visit our website. Personal data is any data that 
                can be used to personally identify you. This privacy policy complies with 
                the EU General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">2. Data Controller</h2>
              <div className="space-y-2">
                <p><strong>Responsible party:</strong> Max Riss</p>
                <p><strong>Address:</strong> Neuffener Str. 66, 72622 Nürtingen, Germany</p>
                <p><strong>Phone:</strong> 01573 3360210</p>
                <p><strong>Email:</strong> mr.ink.nt@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">3. Data Collection on Our Website</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">Contact Forms</h3>
                  <p>
                    When you submit our contact form, we collect your name, surname, 
                    and message content. This data is used solely to respond to your 
                    inquiry and is stored securely.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">Cookies</h3>
                  <p>
                    Our website uses cookies to improve user experience. These are small 
                    text files stored on your device. You can configure your browser to 
                    refuse cookies or to alert you when cookies are being sent.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">Server Log Files</h3>
                  <p>
                    Our hosting provider automatically collects information in server 
                    log files, including your browser type, operating system, referrer 
                    URL, IP address, date and time of access.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">4. Your Rights under GDPR</h2>
              <div className="space-y-2">
                <p><strong>Right to Information (Art. 15 GDPR):</strong> You have the right to receive information about your stored personal data.</p>
                <p><strong>Right to Correction (Art. 16 GDPR):</strong> You have the right to correct inaccurate personal data.</p>
                <p><strong>Right to Deletion (Art. 17 GDPR):</strong> You have the right to request deletion of your personal data.</p>
                <p><strong>Right to Data Portability (Art. 20 GDPR):</strong> You have the right to receive your data in a structured, commonly used format.</p>
                <p><strong>Right to Object (Art. 21 GDPR):</strong> You have the right to object to data processing for direct marketing purposes.</p>
                <p><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with a supervisory authority (Landesdatenschutzbeauftragte/r Baden-Württemberg).</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">5. Data Retention</h2>
              <p>
                We store your personal data only as long as necessary for the purposes 
                for which it was collected or as required by law. Contact form submissions 
                are typically deleted after 2 years unless ongoing communication requires 
                longer retention.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">6. Third-Party Services</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">Google Maps</h3>
                  <p>
                    Our website uses Google Maps to display our location. When you interact 
                    with the map, data may be transmitted to Google. Please refer to Google's 
                    privacy policy for more information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">Social Media</h3>
                  <p>
                    Our website contains links to Facebook and Instagram. These links do not 
                    automatically transfer data, but clicking them will redirect you to these 
                    platforms where their privacy policies apply.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">7. Data Security</h2>
              <p>
                We use appropriate technical and organizational measures to protect your 
                personal data against unauthorized access, alteration, disclosure, or 
                destruction. Our website uses SSL/TLS encryption for secure data transmission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. The current version 
                is always available on this page. We encourage you to review this policy 
                periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">9. Contact</h2>
              <p>
                If you have any questions about this privacy policy or your personal data, 
                please contact us at mr.ink.nt@gmail.com or use the contact information 
                provided in section 2.
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

export default DataProtection;