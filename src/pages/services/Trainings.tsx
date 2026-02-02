import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Check, GraduationCap, Users, Monitor, Shield } from 'lucide-react';

const trainingCategories = [
  {
    id: 'technical',
    icon: Monitor,
    title: 'Technical Training',
    description: 'Hands-on technical skills development for IT professionals.',
    items: [
      'Network administration',
      'Cybersecurity fundamentals',
      'Cloud computing',
      'Database management',
    ],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security Awareness',
    description: 'Company-wide security awareness and best practices.',
    items: [
      'Phishing prevention',
      'Password security',
      'Data protection',
      'Incident reporting',
    ],
  },
  {
    id: 'software',
    icon: GraduationCap,
    title: 'Software Training',
    description: 'Get the most out of your business software investments.',
    items: [
      'ERP system training',
      'Microsoft 365',
      'HRMS applications',
      'Custom software',
    ],
  },
  {
    id: 'leadership',
    icon: Users,
    title: 'Leadership Development',
    description: 'Develop your team leaders and managers.',
    items: [
      'Team management',
      'Project leadership',
      'Communication skills',
      'Change management',
    ],
  },
];

const Trainings = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="page-hero pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Tailor-Made    Trainings
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Immerse your team in engaging training courses, tailored to your own 
            requirements to tackle any operational needs of your business.
          </p>
          
          {/* Dot Separator */}
          <div className="dot-separator mt-8">
            <div className="dot-separator-dots">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {trainingCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="service-card">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
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
                              <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-success" />
                              </div>
                              <span className="text-foreground text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Have specific training needs? Contact us to discuss a customized program.
            </p>
            <Link to="/contact" className="btn-cta inline-block">
              Request Training Information
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainings;
