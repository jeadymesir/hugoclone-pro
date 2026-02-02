const partners = [
  'Veeam', 'XCally', 'Yealink', 'Yeastar', 'Cisco', 
  'Dell', 'Fortinet', 'Google Cloud', 'Lenovo', 'Microsoft', 
  'Nakivo', 'Odoo', 'Sangoma', 'APC', 'Exact'
];

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-8">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-widest">
          Trusted by leading organizations
        </p>
      </div>
      
      {/* Hugo-style infinite marquee */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee track */}
        <div className="overflow-hidden py-4">
          <div className="hugo-marquee">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-heading font-semibold text-muted-foreground text-lg whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
