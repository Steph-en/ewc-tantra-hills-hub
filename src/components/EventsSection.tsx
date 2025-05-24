
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

type Event = {
  title: string;
  date: string;
  time: string;
  description: string;
  isFeatured?: boolean;
  image?: string;
};

const events: Event[] = [
  {
    title: "Maiden Service",
    date: "June 2, 2024",
    time: "9:00 AM",
    description: "Join us for the historic first service at our new Tantra Hills Campus. Experience powerful worship, life-changing messages, and connect with your community.",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Midweek Service",
    date: "June 5, 2024",
    time: "6:30 PM",
    description: "Our Wednesday service focuses on Bible study and prayer, helping you grow in your faith journey.",
  },
  {
    title: "Youth Service",
    date: "June 9, 2024",
    time: "4:00 PM",
    description: "A special service designed for young adults and teenagers with contemporary worship and relevant teachings.",
  },
  {
    title: "Community Outreach",
    date: "June 15, 2024",
    time: "10:00 AM",
    description: "Join us as we reach out to the Tantra Hills community with love and practical assistance.",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming <span className="text-accent">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us for worship, fellowship, and spiritual growth
          </p>
        </div>

        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="order-2 md:order-1 p-6 md:p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4 bg-accent/10 text-accent border-accent">
                  Featured Event
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {events[0].title}
                </h3>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{events[0].date} • {events[0].time}</span>
                </div>
                <p className="mb-6">
                  {events[0].description}
                </p>
                <Button className="bg-accent hover:bg-accent/80 text-white w-fit">
                  Save the Date
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={events[0].image}
                  alt={events[0].title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.slice(1).map((event) => (
            <Card key={event.title} className="flex flex-col">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
