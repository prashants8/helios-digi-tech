import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { 
  Monitor, 
  Headphones, 
  Users, 
  Network, 
  Globe, 
  Palette, 
  Smartphone, 
  TestTube, 
  BarChart3, 
  UserCheck,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "it-consulting",
    title: "IT Consulting",
    description: "Strategic technology guidance to align IT with your business goals",
    icon: Monitor,
    color: "from-primary to-accent",
  },
  {
    id: "technical-support",
    title: "Technical Support",
    description: "24/7 expert support to keep your systems running smoothly",
    icon: Headphones,
    color: "from-secondary to-primary",
  },
  {
    id: "hr-outsourcing",
    title: "HR Outsourcing",
    description: "Streamline your HR operations with our comprehensive solutions",
    icon: Users,
    color: "from-accent to-primary",
  },
  {
    id: "network-support",
    title: "Network Support",
    description: "Secure and optimize your network infrastructure",
    icon: Network,
    color: "from-primary to-secondary",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies",
    icon: Globe,
    color: "from-secondary to-accent",
  },
  {
    id: "web-design",
    title: "Web Design",
    description: "Beautiful, user-centric designs that drive engagement",
    icon: Palette,
    color: "from-accent to-secondary",
  },
  {
    id: "app-development",
    title: "Application Development",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone,
    color: "from-primary to-accent",
  },
  {
    id: "software-testing",
    title: "Software Testing",
    description: "Comprehensive QA and testing services for reliable software",
    icon: TestTube,
    color: "from-secondary to-primary",
  },
  {
    id: "business-analytics",
    title: "Business Analytics",
    description: "Data-driven insights to power informed decisions",
    icon: BarChart3,
    color: "from-accent to-primary",
  },
  {
    id: "virtual-assistance",
    title: "Virtual Assistance",
    description: "Professional remote support for your business operations",
    icon: UserCheck,
    color: "from-primary to-secondary",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group"
              >
                <Card 
                  className="relative h-full p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;