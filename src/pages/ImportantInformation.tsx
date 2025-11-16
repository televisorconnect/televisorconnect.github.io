import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";

const circulars = [
  {
    id: 1,
    title: "Draft Telecommunications (Migration) Rules, 2025",
    date: "September 19, 2025",
    source: "DoT",
    summary: "These draft rules outline the migration framework from the existing licensing regime to the new authorization regime under the Telecommunications Act, 2023. The rules provide guidelines for licensees to transition to relevant authorizations based on their business requirements.",
    pdfUrl: "/circulars/Draft_Migration_rules_Sep_25.pdf"
  },
  {
    id: 2,
    title: "Draft Telecommunications (Authorisation for Captive Telecommunication Service) Rules, 2025",
    date: "September 10, 2025",
    source: "DoT",
    summary: "Establishes the framework for captive telecommunication services authorization under the Telecommunications Act, 2023. Defines terms, conditions, and procedures for entities seeking to operate captive networks for internal organizational use.",
    pdfUrl: "/circulars/Captive_Telecommunication_Service.pdf"
  },
  {
    id: 3,
    title: "Draft Telecommunications (Authorisation for Provision of Main Telecommunication Services) Rules, 2025",
    date: "September 6, 2025",
    source: "DoT",
    summary: "Provides comprehensive rules for authorization to provide main telecommunication services including voice, data, and internet services. Covers licensing requirements, fees, compliance obligations, and operational guidelines for telecommunication service providers.",
    pdfUrl: "/circulars/Main_Telecommunication_Services.pdf"
  },
  {
    id: 4,
    title: "Draft Telecommunications (Authorisation for Provision of Miscellaneous Telecommunication Services) Rules, 2025",
    date: "September 9, 2025",
    source: "DoT",
    summary: "Defines authorization framework for miscellaneous telecommunication services that fall outside the main service categories. Includes provisions for various specialized telecommunication services and their regulatory requirements.",
    pdfUrl: "/circulars/Miscellaneous_Telecommunication_Services.pdf"
  },
  {
    id: 5,
    title: "Draft Telecommunications (Authorisation for Telecommunication Network) Rules, 2025",
    date: "September 2025",
    source: "DoT",
    summary: "Establishes comprehensive rules for authorization to establish, operate, maintain or expand telecommunication networks. Covers network infrastructure requirements, technical standards, security obligations, and operational guidelines under the new telecommunications framework.",
    pdfUrl: "/circulars/Telecommunication_Network_Rules_2025.pdf"
  }
];

const ImportantInformation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
                Important Information
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Latest updates and circulars from DoT, TRAI, MeITY, and TEC regarding telecommunications regulations and policies.
              </p>
            </div>
          </div>
        </section>

        {/* Circulars Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-6">
              {circulars.map((circular) => (
                <Card key={circular.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium text-primary">{circular.source}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{circular.date}</span>
                        </div>
                        <CardTitle className="text-2xl font-serif mb-2">{circular.title}</CardTitle>
                      </div>
                      <a
                        href={circular.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors shrink-0"
                      >
                        <span className="text-sm font-medium">View PDF</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {circular.summary}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ImportantInformation;
