import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const events = [
  'System Upgrades',
  'Digital Transformation',
  'Security Audits',
  'Cloud Migration',
  'IT Infrastructure',
  'Network Expansion',
  'Crisis Management',
  'Business Continuity',
];

export const SeasonalSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <p className="text-lg mb-8 text-primary-foreground/80">
              From expected projects and strategic upgrades to unexpected demands, we've got your back. Access elite talent instantly, scale down seamlessly.
            </p>
            <Link to="/contact" className="hugo-cta bg-background text-foreground hover:bg-background/90">
              Speak to an expert
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Right - Event tags */}
          <div className="flex flex-wrap gap-3">
            {events.map((event, index) => (
              <span
                key={index}
                className="px-5 py-2.5 rounded-full border border-primary-foreground/30 text-sm font-medium hover:bg-primary-foreground/10 transition-colors cursor-default"
              >
                {event}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
