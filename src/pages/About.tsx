import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Globe, Users, TrendingUp } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2014", event: "Company Founded", description: "Started with a vision to simplify IT" },
    { year: "2016", event: "Global Expansion", description: "Opened offices in 3 countries" },
    { year: "2018", event: "100+ Clients", description: "Reached our first major milestone" },
    { year: "2020", event: "Cloud Excellence", description: "Became certified partners with AWS, Azure" },
    { year: "2022", event: "500+ Projects", description: "Successfully delivered across industries" },
    { year: "2024", event: "Innovation Leader", description: "Recognized as industry innovator" },
  ];

  const leadership = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "20+ years in enterprise technology",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Former architect at leading tech companies",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Innovation",
      description: "Pioneer in AI and machine learning solutions",
    },
    {
      name: "David Kumar",
      role: "VP of Operations",
      description: "Expert in scaling global IT operations",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  About Helios Digital
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Your trusted partner in digital transformation since 2014
              </p>
            </div>
          </div>
        </section>

        <AboutSection />

        {/* Company Journey */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />
                
                {/* Milestones */}
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="flex gap-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                          {milestone.year.slice(2)}
                        </div>
                        {/* Connection dot */}
                        <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <Card className="flex-1 p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                        <h3 className="font-semibold text-lg mb-1">{milestone.event}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {leadership.map((leader) => (
                <Card key={leader.name} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{leader.name}</h3>
                  <p className="text-sm text-primary mb-2">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <Card className="p-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <Globe className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">6</div>
                  <p className="text-muted-foreground">Global Offices</p>
                </div>
                <div>
                  <Users className="w-12 h-12 mx-auto mb-3 text-secondary" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">20+</div>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <Award className="w-12 h-12 mx-auto mb-3 text-accent" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">15+</div>
                  <p className="text-muted-foreground">Industry Awards</p>
                </div>
                <div>
                  <TrendingUp className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">98%</div>
                  <p className="text-muted-foreground">Client Retention</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Helios Digital for their technology needs
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-6 shadow-glow"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;