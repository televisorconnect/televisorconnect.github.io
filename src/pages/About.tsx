import Header from "@/components/Header";
import Expertise from "@/components/Expertise";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
                About Televisor Connect
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A specialized consulting firm focusing on telecom regulatory, policy, licensing, 
                and compliance matters in India's evolving telecommunications landscape.
              </p>
            </div>
          </div>
        </section>
        
        <Expertise />
        
        {/* Mission Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At TeleVisor Connect, we believe that regulatory compliance should be a strategic enabler, 
                not a burden. Our mission is to help clients achieve seamless regulatory alignment and 
                operational success in India's telecommunications and ICT ecosystem.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We provide policy, advisory, and liaison solutions for authorizations, regulatory approvals, 
                and compliance management. As India transitions to the Telecommunications Act, 2023 and an 
                authorization-based regime, we help businesses navigate the changing landscape.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to supporting MSMEs, SMEs, application service providers, and start-ups, 
                helping new entrants deploy telecom resources and digital platforms aligned with the Digital 
                India vision. We act as a "Connect" between your company and the licensor/regulator, without 
                the need to maintain a separate regulatory department.
              </p>
            </div>
          </div>
        </section>
        
        {/* Industries Served Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 text-center">
                Industries Served
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                We provide specialized regulatory and compliance solutions across the telecommunications ecosystem
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "ISPs",
                  "NLD and ILD Operators",
                  "IP-1 Providers",
                  "FTTH Operators",
                  "CPaaS, UCaaS and NCaaS Players",
                  "International Carriers",
                  "OSPs",
                  "IoT/M2M Companies",
                  "Tower Providers",
                  "Fibre Providers",
                  "Digital Communication Infrastructure Providers"
                ].map((industry, index) => (
                  <div
                    key={index}
                    className="bg-muted p-5 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                  >
                    <p className="text-foreground font-medium text-center">{industry}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <Clients />
        
        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how our expertise can help transform your telecommunications infrastructure
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg">
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
