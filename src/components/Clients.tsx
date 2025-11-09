const clients = [
  "Infobip",
  "Aevias Consulting",
  "Digital Infrastructure Providers Association (DIPA)",
  "Virtual Network Operators Association of India (VNOAI)",
  "Third Bridge",
  "Nularity",
];

const Clients = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Our Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations in India's telecommunications ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-muted p-6 rounded-lg text-center hover:bg-blue-light transition-colors duration-300 flex items-center justify-center min-h-[100px]"
            >
              <p className="text-foreground font-medium">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
