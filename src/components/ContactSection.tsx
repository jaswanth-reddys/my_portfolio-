import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jaswanthreddy2028116@gmail.com",
      href: "mailto:jaswanthreddy2028116@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9440993988",
      href: "tel:+919440993988",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Raichur, Karnataka",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background accents */}
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute right-1/4 top-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get In Touch</p>
          <h2 className="section-heading">Let's Work Together</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              I'm currently looking for new opportunities in Software Engineering,
              Data Science, or Machine Learning. Whether you have a question or just
              want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 glass rounded-xl p-4 card-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass rounded-xl p-4 flex items-center justify-center gap-3 hover:border-primary/50 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass rounded-xl p-4 flex items-center justify-center gap-3 hover:border-primary/50 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-primary" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Hi, I'd like to talk about..."
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Send size={18} />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
