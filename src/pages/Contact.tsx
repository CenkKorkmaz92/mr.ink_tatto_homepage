import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useTranslation();
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
      newErrors.name = t('contact.form.nameRequired');
    }
    
    if (!formData.surname.trim()) {
      newErrors.surname = t('contact.form.surnameRequired');
    }
    
    if (!formData.description.trim()) {
      newErrors.description = t('contact.form.descRequired');
    } else if (formData.description.trim().length < 10) {
      newErrors.description = t('contact.form.descMinLength');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: t('contact.form.messageSent'),
        description: t('contact.form.thankYou'),
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('contact.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">{t('contact.form.sendMessage')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">{t('contact.form.name')} *</Label>
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
                  <Label htmlFor="surname">{t('contact.form.surname')} *</Label>
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
                <Label htmlFor="description">{t('contact.form.description')} *</Label>
                <Textarea
                  id="description"
                  placeholder={t('contact.form.description')}
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  className={`min-h-32 ${errors.description ? "border-destructive" : ""}`}
                />
                {errors.description && (
                  <p className="text-destructive text-sm mt-1">{errors.description}</p>
                )}
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                {t('contact.form.send')}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">{t('contact.owner')}</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent">Max Riss</h3>
                <Separator className="bg-accent" />
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">01573 3360210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">info@mrink-studio.de</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">Neuffener Str. 66, 72622 Nürtingen</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">{t('contact.hours.title')}</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-muted-foreground">{t('contact.hours.tuesday')}</p>
                    <p className="text-muted-foreground">{t('contact.hours.saturday')}</p>
                    <p className="text-muted-foreground">{t('contact.hours.closed')}</p>
                  </div>
                </div>
              </div>
              <Separator className="my-4 bg-accent" />
              <p className="text-sm text-muted-foreground">
                {t('contact.hours.note')}
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">{t('contact.expect.title')}</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('contact.expect.consultation')}</li>
                <li>• {t('contact.expect.custom')}</li>
                <li>• {t('contact.expect.sterile')}</li>
                <li>• {t('contact.expect.aftercare')}</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t('contact.location')}</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8687519864844!2d9.327939676810485!3d48.30933677125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c5e4e8d5b7ab%3A0x7e3e8e8e8e8e8e8e!2sNeuffener%20Str.%2066%2C%2072622%20N%C3%BCrtingen!5e0!3m2!1sde!2sde!4v1"
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