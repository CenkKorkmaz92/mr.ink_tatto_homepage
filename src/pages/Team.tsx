import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import profileMrInk from "@/assets/profile_mrInk.webp";
import profileMrsInk from "@/assets/profile_mrs_ink.webp";

const teamMembers = [
  {
    id: 1,
    name: "Max Riss",
    role: "maxRole",
    image: profileMrInk,
    description: "maxBio"
  },
  {
    id: 2,
    name: "Selina 'Mrs. Steel' Riss",
    role: "selinaRole",
    image: profileMrsInk,
    description: "selinaBio"
  }
];

const Team = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('team.title')}</h1>
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
                    <h2 className="text-3xl font-bold text-foreground mb-2">{member.name}</h2>
                    <p className="text-xl text-accent font-semibold mb-4">{t(`team.${member.role}`)}</p>
                  </div>
                  
                  <Separator className="bg-accent" />
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t(`team.${member.description}`)}
                  </p>
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