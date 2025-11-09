import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive regulatory consulting services for authorizations, compliance management, 
                and strategic guidance under India's evolving telecommunications framework.
              </p>
            </div>
          </div>
        </section>
        
        <Services />
        
        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can benefit your organization
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
