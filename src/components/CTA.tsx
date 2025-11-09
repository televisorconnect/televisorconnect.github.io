import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Transform Your Telecommunications?
          </h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Let's discuss how we can help optimize your infrastructure and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 space-y-2">
            <p className="opacity-75">
              <Mail className="inline h-4 w-4 mr-2" />
              contact@televisorconnect.com
            </p>
            <p className="opacity-75">
              <Phone className="inline h-4 w-4 mr-2" />
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
