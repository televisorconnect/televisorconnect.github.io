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
  {
    icon: FileText,
    title: "Investor Due-Diligence",
    description: "Critical analysis of telecommunications policy and competitive landscape. Comprehensive insights on industry dynamics, regulatory policies, and ease of doing business to support informed investment decisions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="pt-32 pb-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Expert regulatory consulting for India's evolving telecommunications framework.
          </p>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4 text-left">
            <p>
              With the advent of The Telecommunications Act, 2023, and the onset of authorisation regime, the licensing and policy scenario in the country has undergone a major overhaul. The earlier prevalent licensing regime would transition to rule based regime where in authorisation has been made simpler and terms and conditions will be provided in rules. The scope of earlier licenses has also undergone changes.
            </p>
            <p className="font-semibold">We offer our services for the following:</p>
            <ul className="list-decimal list-inside space-y-2 pl-4">
              <li>In order to understand the regime as per business requirements and suggest the optimal authorisation required in line with scope of services.</li>
              <li>And manage the life cycle of authorisation regime, right from seeking approval to compliance management, license fee payment etc.</li>
              <li>Represent policy level and operational issues at appropriate level.</li>
              <li>Security audit and license inspection support</li>
              <li>Compliance trackers to manage the compliances of rules on proactive basis</li>
              <li>Support in statutory reporting</li>
            </ul>
          </div>
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
