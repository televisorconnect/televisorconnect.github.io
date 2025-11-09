import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Network, Shield, Zap } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Quick Overview */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
                Why Choose Televisor Connect?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We deliver expert regulatory consulting that ensures compliance and enables growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex p-4 bg-blue-light rounded-full mb-4">
                  <Network className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-navy">
                  Deep Expertise
                </h3>
                <p className="text-muted-foreground">
                  23+ years in India's telecom regulatory and policy landscape
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 bg-blue-light rounded-full mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-navy">
                  Trusted Partner
                </h3>
                <p className="text-muted-foreground">
                  Extensive liaison experience with DoT, TRAI, and regulatory bodies
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 bg-blue-light rounded-full mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-navy">
                  Act 2023 Ready
                </h3>
                <p className="text-muted-foreground">
                  Expert guidance on Telecommunications Act, 2023 and new authorization regime
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/services">
                <Button size="lg" className="text-lg">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
