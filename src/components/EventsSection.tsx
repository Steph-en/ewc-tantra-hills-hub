import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

type Event = {
  title: string;
  date: string;
  time: string;
  description: string;
  isFeatured?: boolean;
  image?: string;
  link?: string;
};

const events: Event[] = [
  {
    title: "Stand In The Gap",
    date: "June 26th - 28th, 2025",
    time: "6:00 PM",
    description: "The event will feature a powerful army of ministers and worship led by EWC's GLP Gideon Danso. This three-day event is designed to empower believers to stand in the gap through prayer, worship, and the Word of God.",
    isFeatured: true,
    image: "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/EWC/lbnfqhzvgow2ktfgw7zt",
  },
  {
    title: "Community Circles",
    date: "Tuesdays",
    time: "07:00 PM - 09:00 PM",
    description: "Join us for the historic first service at our new Tantra Hills Campus. Experience powerful worship, life-changing messages, and connect with your community.",
    link: "https://www.instagram.com/ewctantrahillscampus?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    title: "Prophetic Service",
    date: "Thursdays",
    time: "07:00 PM - 09:00 PM",
    description: "JOIN TEENS FROM ACROSS THE COUNTRY FOR ONE WEEK OF CELEBRATION, ADVENTURE, FUN AND IMPARTATION. ACTIVITIES INCLUDE BIBLE STUDY, PRAISE & WORSHIP, HOLY GHOST & WATER BAPTISM, PAINTBALLING, ROCK CLIMBING, BONFIRE NIGHT, CAREER TALKS, SUMMERFEST AND SO MUCH MORE.",
    link: "https://fixedsummercamp.com/",
  },
  {
    title: "Family Service",
    date: "Sunday",
    time: "09:00 AM - 11:00 AM",
    description: "The 'Heaven on Earth' conference hosted by the Empowerment Worship Centre (EWC) is a multi-day event focused on experiencing God's presence and power, often with a theme of bringing heaven's reality to earth.",
    link: "https://www.empowermentworshipcentre.org",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-accent">Amazing </span>Services
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
                  className="w-full h-50 object-cover min-h-[300px]"
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
                <Button variant="outline" className="w-full" onClick={() => window.open(event.link, '_blank')}>
                  Learn More 
                  {event.link && <ExternalLink className="w-4 h-4 ml-2" />}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
