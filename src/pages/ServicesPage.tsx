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
