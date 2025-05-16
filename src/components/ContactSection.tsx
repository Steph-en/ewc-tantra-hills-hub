
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you and answer any questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-background p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                />
              </div>
              <Button className="bg-black hover:bg-black/80 text-white w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-muted-foreground">
                      Tantra Hills, Accra, Ghana
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone Number</h4>
                    <p className="text-muted-foreground">+233 20 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="text-muted-foreground">
                      tantrahills@empowermentworshipcenter.org
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Service Times</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Sunday Service</h4>
                  <p className="text-muted-foreground">9:00 AM - 12:00 PM</p>
                </div>
                <div>
                  <h4 className="font-medium">Wednesday Bible Study</h4>
                  <p className="text-muted-foreground">6:30 PM - 8:00 PM</p>
                </div>
                <div>
                  <h4 className="font-medium">Friday Prayers</h4>
                  <p className="text-muted-foreground">7:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-black hover:bg-black/80 text-white p-2 rounded-full"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-black hover:bg-black/80 text-white p-2 rounded-full"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-black hover:bg-black/80 text-white p-2 rounded-full"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
