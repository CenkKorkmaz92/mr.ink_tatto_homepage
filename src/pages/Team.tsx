import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import artistMain from "@/assets/artist-main.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Master Artist & Owner",
    image: artistMain,
    description: "With over 15 years of experience, Alex specializes in realistic portraits and custom artwork. As the founder of our studio, Alex maintains the highest standards of artistry and professionalism. Known for attention to detail and innovative techniques, Alex has won multiple awards in tattoo conventions worldwide."
  },
  {
    id: 2,
    name: "Maya Chen",
    role: "Co-Artist",
    image: artistMain,
    description: "Maya brings a unique blend of traditional and modern styles to the studio. With 8 years of experience, she specializes in delicate linework, watercolor techniques, and botanical designs. Her gentle approach and artistic vision make her perfect for clients seeking elegant and meaningful tattoos."
  },
  {
    id: 3,
    name: "Jordan Blake",
    role: "Co-Artist", 
    image: artistMain,
    description: "Jordan is our specialist in bold, geometric designs and blackwork. With 6 years in the industry, Jordan pushes the boundaries of traditional tattooing with innovative patterns and striking compositions. Known for creating powerful, statement pieces that stand the test of time."
  }
];

const Team = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate artists dedicated to creating exceptional tattoo experiences
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
                    <p className="text-xl text-accent font-semibold mb-4">{member.role}</p>
                  </div>
                  
                  <Separator className="bg-accent" />
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {member.description}
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