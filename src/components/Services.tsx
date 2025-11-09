import { Card } from "@/components/ui/card";
import { FileText, Users, Shield, CheckCircle, Bell, Scale } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Regulatory Compliance",
    description: "Keep track of regulatory policy developments in licensing and compliance areas. We provide compliance trackers for various licenses and authorizations.",
  },
  {
    icon: Users,
    title: "Authorization & Approvals",
    description: "Obtain and support authorizations/approvals from DoT, TRAI, TEC, and C-DOT officials. Represent your company interests as a consultant.",
  },
  {
    icon: Scale,
    title: "Policy Advisory",
    description: "Prepare draft responses for policy matters, license fee issues, and show cause notices. Expert guidance on Telecommunications Act, 2023.",
  },
  {
    icon: Bell,
    title: "Regulatory Intelligence",
    description: "Keep you apprised of new opportunities and regulatory changes. Share circulars and new licensing matters along with detailed analysis.",
  },
  {
    icon: Shield,
    title: "Security Audit Support",
    description: "ISO-27001 compliance and MBSS alignment. Handle security audits along with technical team during DoT statutory audits.",
  },
  {
    icon: CheckCircle,
    title: "License Fee Assessment",
    description: "Regulatory and policy support in license fee assessment, technical inspections, and strategy for seeking new authorizations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive regulatory consulting services for authorizations, compliance management, 
            and strategic guidance under India's evolving telecommunications framework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-card"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-blue-light rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-navy">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
