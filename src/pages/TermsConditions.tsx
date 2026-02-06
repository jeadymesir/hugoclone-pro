import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { FileText, Download } from 'lucide-react';

const documents = [
  {
    title: 'General Terms & Conditions',
    description: 'Our general terms and conditions for the delivery of products and services.',
    file: '/documents/algemene-leveringsvoorwaarden-rpbg.pdf',
  },
  {
    title: 'Warranty Terms',
    description: 'Information about our warranty terms for products.',
    file: '/documents/garantievoorwaarden-rpbg.pdf',
  },
];

const TermsConditions = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl">
              <div className="hugo-tag mb-6">Legal</div>
              <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xl text-muted-foreground">
                Below you will find our general terms and conditions and warranty terms.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {documents.map((doc, index) => (
              <AnimatedSection key={doc.title} animation="fade-up" delay={index * 100}>
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <FileText className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{doc.title}</h3>
                  <p className="text-muted-foreground mb-6">{doc.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hugo-cta text-sm"
                    >
                      View
                      <FileText className="w-4 h-4" />
                    </a>
                    <a
                      href={doc.file}
                      download
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary text-primary hover:bg-primary/5 transition-colors text-sm font-medium"
                    >
                      Download
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
