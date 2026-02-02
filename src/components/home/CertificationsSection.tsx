const certifications = [
  'CCNA', 'Yeastar Certified Technician', 'Sangoma', 'Connectwise',
  'Odoo Certification', 'CompTIA Network+', 'CompTIA Security+', 'PBXACT'
];

export const CertificationsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl text-foreground mb-4">
            Our    Certifications
          </h2>
          
          {/* Dot Separator */}
          <div className="dot-separator mt-6">
            <div className="dot-separator-dots">
              <span /><span /><span />
            </div>
          </div>
        </div>
        
        {/* Certifications Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl px-6 py-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <span className="font-medium text-foreground">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
