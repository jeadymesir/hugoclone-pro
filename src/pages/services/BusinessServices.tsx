import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Calculator, Wallet } from 'lucide-react';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble } from '@/components/decorative/Scribbles';

const sections = [
  {
    id: 'financial',
    icon: Calculator,
    title: 'Financial Outsourcing',
    description: "Modern business demands more than just data entry; it requires financial clarity. Through our acquired expertise from Computech, RPBG offers full-service financial administration that combines deep local knowledge of Surinamese tax laws with modern, cloud-based efficiency. We don't just record history; we give you the data to shape your future.",
    items: [
      'Daily Financial Processing: We handle the tedious input of purchase invoices, sales invoices, and bank mutations so your team doesn\'t have to.',
      'Tax Compliance & Filing: Never miss a deadline. We prepare and file your turnover tax (BTW) and other statutory declarations with precision.',
      'Accounts Payable & Receivable Management: We track who owes you money and who you owe, ensuring healthy cash flow.',
      'Monthly Reporting: Don\'t wait until the end of the year to know if you made a profit. We provide monthly P&L and Balance Sheet snapshots.',
      'The RPBG Advantage: Unlike traditional accounting firms that rely on paper and spreadsheets, we leverage our proprietary ERP solutions. This means your financial data is secure, accessible, and processed faster than ever.',
    ],
  },
  {
    id: 'payroll',
    icon: Wallet,
    title: 'Payroll Outsourcing',
    description: "Payroll is the most critical monthly task for employee satisfaction, but also the riskiest for business compliance. One calculation error can lead to fines or unhappy staff. RPBG delivers payroll administration 100% Compliant & 100% Confidential. On Time, Every Time.",
    items: [
      'Complete Salary Processing: accurate calculation of gross-to-net wages, including overtime, bonuses, and allowances.',
      'Statutory Deductions Management: Precise handling of AOV, wage tax (Loonbelasting), and medical insurance deductions in accordance with Surinamese legislation.',
      'Digital Payslips: We generate and prepare professional payslips based on your organizational needs and requirements.',
      'Confidentiality Guaranteed: Payroll data is sensitive. As an MSP and Security-focused company, we apply the same rigorous data protection standards to your payroll files as we do to your IT infrastructure.',
    ],
  },
];

const BusinessServices = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground">
                Business Services
              </div>
            </div>
            <div className="relative inline-block">
              <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
                Managed    Business    Services
              </h1>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-56 opacity-40">
                <Scribble variant="underline" className="stroke-primary-foreground/50" />
              </div>
            </div>
            <p className="text-xl text-primary-foreground/90 font-medium mb-4 mt-4">
              We handle your critical operations—so you can focus on what moves your business forward.
            </p>
            <p className="text-primary-foreground/70">
              RPBG's Managed Business Services take the weight of financial administration and payroll processing off your shoulders—applying the same rigor we bring to cybersecurity and IT infrastructure to your most sensitive business operations.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Service Sections */}
      {sections.map((section, index) => {
        const Icon = section.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section key={section.id} className={`py-24 ${isEven ? 'bg-background' : 'bg-muted/30'} relative overflow-hidden`}>
            <SectionDecorations position={isEven ? 'right' : 'left'} />
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className={`grid lg:grid-cols-2 gap-16 items-start`}>
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center hugo-float sticky top-32 relative">
                    <Icon className="w-32 h-32 text-primary" />
                    <div className="absolute -top-4 -right-4">
                      <Scribble variant="star" color="primary" size="sm" className="opacity-40" />
                    </div>
                  </div>
                </div>

                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative inline-block mb-6">
                    <h2 className="hugo-subtitle text-2xl md:text-3xl text-foreground">
                      {section.title}
                    </h2>
                    <div className="absolute -bottom-2 left-0 w-32">
                      <Scribble variant="underline" color="primary" className="opacity-50" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {section.description}
                  </p>
                  
                  <p className="text-sm font-semibold text-foreground mb-4">What we deliver:</p>
                  
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="hugo-subtitle text-3xl md:text-4xl mb-6">
            Focus    on    what    matters    most.
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Let us handle the administrative burden while you grow your business.
          </p>
          <Link to="/contact" className="hugo-cta bg-background text-foreground hover:bg-background/90">
            Learn More
            <ArrowRight className="w-5 h-5 hugo-arrow" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessServices;
