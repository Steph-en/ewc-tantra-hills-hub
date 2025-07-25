
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type Leader = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const leaders: Leader[] = [
  {
    name: "Prophet Gideon Danso",
    role: "Global Lead Pastor",
    // image: "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/EWC/ptwrfujhetbqy2suhlua",
    image: "https://images.squarespace-cdn.com/content/v1/635bb8b408cab54e825c1cdc/b79b6698-ae46-4c1a-9724-3f7b37e364dd/IMG_7297.jpg?format=750w",
    bio: "Prophet Gideon Danso is the visionary leader and founder of Empowerment Worship Centre, with a powerful ministry that has transformed countless lives across Ghana and beyond.",
  },
  {
    name: "Pastor Desmond Larbi",
    role: "Campus Lead Pastor",
    image: "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/EWC/gmxowcvuwp6sfeldgjem",
    bio: "Pastor Desmond Larbi leads the Tantra Hills Campus with dedication and passion, bringing years of ministry experience and a heart for community transformation.",
  },
];

export function LeadershipSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-accent">Leadership</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated leaders guiding our congregation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader) => (
            <Card key={leader.name} className="overflow-hidden">
              <CardContent className="p-0 flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-60 w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-semibold text-accent">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {leader.role}
                  </p>
                  <p className="text-sm">{leader.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
