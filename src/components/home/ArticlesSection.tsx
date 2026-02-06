import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const articles = [
  {
    tag: 'Case Study',
    title: 'How RPBG helped a Financial Institution Scale Their IT',
    description: 'A comprehensive IT transformation journey with measurable results.',
    path: '/about/testimonials',
  },
  {
    tag: 'Industry Insight',
    title: 'Digital Transformation in Suriname: The Next Big Thing',
    description: 'The effect of digital transformation runs deeper than many realize. Here\'s the real opportunity...',
    path: '/services/consultancy',
  },
  {
    tag: 'Success Story',
    title: '30 Years of Excellence in ICT Services',
    description: 'Celebrating three decades of partnerships and innovation in technology.',
    path: '/about',
  },
];

export const ArticlesSection = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <Link
                to={article.path}
                className="hugo-article-card group block h-full"
              >
                {/* Card Top Accent */}
                <div className="h-2 bg-primary" />
                
                <div className="p-8">
                  {/* Tag */}
                  <span className="hugo-tag mb-4 inline-block">{article.tag}</span>
                  
                  {/* Title */}
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                    {article.description}
                  </p>
                  
                  {/* Read More */}
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
