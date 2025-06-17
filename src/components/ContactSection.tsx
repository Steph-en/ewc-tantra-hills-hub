import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        to_name: "EWC Tantra Hills", // The recipient's name
        from_name: formData.name,
        reply_to: formData.email, // This will set the reply-to header
        from_email: formData.email,
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email <span className="text-destructive">*</span>
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="How can we help?" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button 
                className="bg-black hover:bg-black/80 text-white w-full md:w-auto"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
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
                      Tantra Hill, Accra, Ghana
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone Number</h4>
                    <p className="text-muted-foreground">+233 59 353 9507</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="text-muted-foreground">
                      ewctantrahills@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Service Times</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Sunday - Family Service</h4>
                  <p className="text-muted-foreground">9:00 AM - 11:00 AM</p>
                </div>
                <div>
                  <h4 className="font-medium">Tuesday - Community Circles</h4>
                  <p className="text-muted-foreground">6:00 PM - 8:00 PM</p>
                </div>
                <div>
                  <h4 className="font-medium">Thursday - Prophetic Service</h4>
                  <p className="text-muted-foreground">7:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/ewctantrahillscampus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-black/80 text-white p-2 rounded-full"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/ewctantrahillscampus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-black/80 text-white p-2 rounded-full"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@ewc.tantra.hills?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-black/80 text-white p-2 rounded-full"
                >
                  <FaTiktok className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
