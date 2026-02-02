const partners = [
  'Veeam', 'XCally', 'Yealink', 'Yeastar', 'Zoiper', 
  'APC', 'Cisco', 'Computech', 'Dell', 'Exact',
  'Fingertec', 'Fortinet', 'Google Cloud', 'HRMS Plus', 
  'Lenovo', 'Microsoft', 'Nakivo', 'Odoo', 'Sangoma'
];

export const PartnersSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl text-foreground mb-4">
            Our    Partnerships
          </h2>
          
          {/* Dot Separator */}
          <div className="dot-separator mt-6">
            <div className="dot-separator-dots">
              <span /><span /><span />
            </div>
          </div>
        </div>
        
        {/* Marquee Container */}
        <div className="marquee-container py-8">
          <div className="marquee-content">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-card px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
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
