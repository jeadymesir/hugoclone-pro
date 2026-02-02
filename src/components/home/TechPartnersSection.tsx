const techPartners = [
  'Cisco', 'Fortinet', 'Microsoft', 'Google Cloud', 
  'Dell', 'Lenovo', 'Veeam', 'Odoo'
];

export const TechPartnersSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground mb-4">
            We    integrate    seamlessly    with    technology    built    for    scale.
          </h2>
        </div>
        
        {/* Tech logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {techPartners.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <span className="font-heading font-semibold text-muted-foreground text-sm">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
