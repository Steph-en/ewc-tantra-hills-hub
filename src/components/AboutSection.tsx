
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Church, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <>
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-accent">Empowerment Worship Centre</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A place of transformation, empowerment and divine encounter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tantra Hills Campus</h3>
            <p className="mb-6 text-muted-foreground">
              Empowerment Worship Centre's Tantra Hills Campus is the newest addition 
              to our growing family of worship centers. Led by Pastor Desmond Larbi, 
              this campus carries the vision of Prophet Gideon Danso to transform lives 
              through the power of God's word.
            </p>
            
            <p className="mb-6 text-muted-foreground">
              Our mission is to create an atmosphere where people can experience God's 
              presence, develop their spiritual gifts, and be equipped to make a difference 
              in their communities.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Church className="h-5 w-5 text-accent mr-3" />
                <span>A place of worship and spiritual growth</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-accent mr-3" />
                <span>A loving and supportive community</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-accent mr-3" />
                <span>Regular events and programs for all ages</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-accent mr-3" />
                <span>Strategically located to serve the Tantra Hills community</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/EWC/p30lnk8czjdods39b0lb" 
                  alt="Church worship"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden row-span-2">
              <CardContent className="p-0">
                <img 
                  src="https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/EWC/f8cv7clli3p6xvbzz6cp" 
                  alt="Church community"
                  className="h-[390px] w-full object-cover"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://res.cloudinary.com/degd6ahfu/image/upload/v1750172864/CMPL1941_idywcd.jpg" 
                  alt="Worship service"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
