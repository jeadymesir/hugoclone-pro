import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const blogPosts = [
  {
    badge: 'Case Study',
    date: 'January 2026',
    category: 'Managed IT',
    title: 'Digital Transformation Success Story',
    path: '/about/testimonials',
  },
  {
    badge: 'Industry Insight',
    date: 'December 2025',
    category: 'Consultancy',
    title: 'Transforming Business Operations with ICT',
    path: '/services/consultancy',
  },
];

export const BlogSection = () => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-16">
            <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground">
              See    what's    new    and    what's    next.
            </h2>
            <p className="text-muted-foreground mt-4">
              Thought leadership and actionable insights to help you grow faster.
            </p>
          </div>
        </AnimatedSection>
        
        {/* Blog posts */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <Link
                to={post.path}
                className="hugo-article-card group flex h-full"
              >
                {/* Left badge column */}
                <div className="w-24 flex-shrink-0 bg-primary/5 flex items-center justify-center p-4">
                  <span className="hugo-tag text-xs text-center">{post.badge}</span>
                </div>
                
                {/* Content */}
                <div className="p-8 flex-1">
                  <div className="text-xs text-muted-foreground mb-2">
                    {post.date}
                  </div>
                  <div className="text-xs text-primary mb-4">
                    {post.category}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-4 text-sm text-primary">
                    Read More
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
