import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to navigate India's telecom regulatory landscape? Get in touch with our team of experts.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-3 bg-blue-light rounded-full mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">
                  televisorconnect@gmail.com
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-3 bg-blue-light rounded-full mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">
                  +91 9250017568
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-3 bg-blue-light rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">
                  India
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-3 bg-blue-light rounded-full mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Contact Person</h3>
                <p className="text-muted-foreground text-sm">
                  Deepak Arya
                </p>
              </Card>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
