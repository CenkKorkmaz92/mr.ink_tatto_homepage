import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    description: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "First name is required";
    }
    
    if (!formData.surname.trim()) {
      newErrors.surname = "Last name is required";
    }
    
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      
      setFormData({ name: "", surname: "", description: "" });
      setErrors({});
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your tattoo journey? Contact us to schedule a consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">First Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="surname">Last Name *</Label>
                  <Input
                    id="surname"
                    value={formData.surname}
                    onChange={(e) => handleChange("surname", e.target.value)}
                    className={errors.surname ? "border-destructive" : ""}
                  />
                  {errors.surname && (
                    <p className="text-destructive text-sm mt-1">{errors.surname}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Tell us about your tattoo idea, preferred style, size, placement, and any other details..."
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  className={`min-h-32 ${errors.description ? "border-destructive" : ""}`}
                />
                {errors.description && (
                  <p className="text-destructive text-sm mt-1">{errors.description}</p>
                )}
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Master Artist</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent">Alex Rivera</h3>
                <Separator className="bg-accent" />
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">+49 30 123 456 789</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">alex@tattoo-studio.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">123 Artist Street, Berlin</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Studio Hours</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-muted-foreground">Monday - Friday: 10:00 - 19:00</p>
                    <p className="text-muted-foreground">Saturday: 10:00 - 17:00</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <Separator className="my-4 bg-accent" />
              <p className="text-sm text-muted-foreground">
                Appointments are recommended. Walk-ins welcome based on availability.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">What to Expect</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Free consultation to discuss your ideas</li>
                <li>• Custom design process tailored to you</li>
                <li>• Professional, sterile environment</li>
                <li>• Aftercare instructions and support</li>
                <li>• Touch-up services included</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Find Us</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4089485306105!2d13.404954!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sen!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;