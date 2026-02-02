import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, GraduationCap, Users, Monitor, Shield } from 'lucide-react';

const trainingCategories = [
  {
    icon: Monitor,
    title: 'Technical Training',
    description: 'Hands-on technical skills development for IT professionals.',
    items: ['Network administration', 'Cybersecurity fundamentals', 'Cloud computing', 'Database management'],
  },
  {
    icon: Shield,
    title: 'Security Awareness',
    description: 'Company-wide security awareness and best practices.',
    items: ['Phishing prevention', 'Password security', 'Data protection', 'Incident reporting'],
  },
  {
    icon: GraduationCap,
    title: 'Software Training',
    description: 'Get the most out of your business software investments.',
    items: ['ERP system training', 'Microsoft 365', 'HRMS applications', 'Custom software'],
  },
  {
    icon: Users,
    title: 'Leadership Development',
    description: 'Develop your team leaders and managers.',
    items: ['Team management', 'Project leadership', 'Communication skills', 'Change management'],
  },
];

const Trainings = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6 inline-block">
              Training
            </div>
            <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
              Tailor-Made    Trainings
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Immerse your team in engaging training courses, tailored to your own 
              requirements to tackle any operational needs of your business.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Training Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {trainingCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="font-heading font-semibold text-xl text-foreground mb-3">
                      {category.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="hugo-subtitle text-3xl md:text-4xl mb-6">
            Have    specific    training    needs?
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Contact us to discuss a customized training program for your team.
          </p>
          <Link to="/contact" className="hugo-cta bg-background text-foreground hover:bg-background/90">
            Request Training Info
            <ArrowRight className="w-5 h-5 hugo-arrow" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Trainings;
