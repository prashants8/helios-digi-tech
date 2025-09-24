import { Card } from "@/components/ui/card";
import { Shield, Zap, Target, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Enterprise-grade security and compliance for all our solutions",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technologies to keep you ahead of the competition",
    },
    {
      icon: Target,
      title: "Efficiency",
      description: "Streamlined processes that maximize productivity and ROI",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Your success is our success - we grow together",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Helios Digital
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Simplifying technology for startups, SMEs, and enterprises worldwide
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Helios Digital Technology, we're committed to transforming businesses through innovative IT solutions. 
                We believe that technology should empower, not complicate. Our mission is to provide scalable, 
                cost-effective solutions that drive growth, enhance efficiency, and create lasting value for our clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From startups taking their first digital steps to enterprises optimizing complex infrastructures, 
                we're here to simplify your technology journey and accelerate your success.
              </p>
            </div>
          </Card>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-lg">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-muted-foreground mt-2">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-muted-foreground mt-2">Tech Experts</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-muted-foreground mt-2">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;