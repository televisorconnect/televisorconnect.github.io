const stats = [
  { number: "23+", label: "Years Experience" },
  { number: "DoT", label: "Liaison Expertise" },
  { number: "TRAI", label: "Regulatory Focus" },
  { number: "MSMEs", label: "Supporting Growth" },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              Key Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 23 years of experience in India's telecom sector, we bring a historical perspective on legal, regulatory and policy regime and its evolution.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Rich and diversified experience in leading organisations including Reliance Communications, Viom Networks, Bharti Airtel, and Tata Communications.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground">Extensive liaison experience with DoT, TRAI, BSNL, CDOT, TEC and DoT field units</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground">Strong understanding of Telecommunications Act, 2023 and authorization rules</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground">Proven track record in handling complex regulatory mandates</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground">Industry experts available for license fee assessment and deduction verification</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-muted p-8 rounded-lg text-center hover:bg-blue-light transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
