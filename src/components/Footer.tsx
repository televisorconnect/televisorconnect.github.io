import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-semibold text-xl text-navy mb-4">
              TeleVisor Connect
            </h3>
            <p className="text-muted-foreground">
              Expert regulatory consulting for India's telecom and ICT ecosystem.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Televisor Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
