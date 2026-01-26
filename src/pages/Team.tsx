import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import profileMrInk from "@/assets/profile_mrInk.webp";
import profileMrsSteel from "@/assets/mrs_steel_profile.webp";

const teamMembers = [
  {
    id: 1,
    name: "Max",
    role: "maxRole",
    image: profileMrInk,
    description: "maxBio",
    phone: "01573 3360210",
    email: "mr.ink.nt@gmail.com"
  },
  {
    id: 2,
    name: "Selina",
    role: "selinaRole",
    image: profileMrsSteel,
    description: "selinaBio",
    phone: "0157 52047349",
    email: "mrs.steel.111@gmail.com"
  }
];

const Team = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">{t('team.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <Card key={member.id} className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Artist Image */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-[4/5] overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Artist Info */}
                <div className={`flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-bold text-accent mb-2">{member.name}</h2>
                    <p className="text-xl text-accent font-semibold mb-4">{t(`team.${member.role}`)}</p>
                  </div>
                  
                  <Separator className="bg-accent" />
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t(`team.${member.description}`)}
                  </p>
                  
                  <div className="pt-4 space-y-2">
                    <p className="text-base font-semibold text-accent">Kontakt:</p>
                    <p className="text-base text-muted-foreground">
                      <strong>Telefon:</strong> {member.phone}
                    </p>
                    <p className="text-base text-muted-foreground">
                      <strong>E-Mail:</strong> {member.email}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;