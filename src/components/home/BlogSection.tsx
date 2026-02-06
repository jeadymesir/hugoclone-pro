import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
const blogPosts = [{
  badge: 'Case Study',
  date: 'January 2026',
  category: 'Managed IT',
  title: 'Digital Transformation Success Story',
  path: '/about/testimonials'
}, {
  badge: 'Industry Insight',
  date: 'December 2025',
  category: 'Consultancy',
  title: 'Transforming Business Operations with ICT',
  path: '/services/consultancy'
}];
export const BlogSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="hugo-tag mb-4 block mx-auto w-fit">Latest Insights</span>
          <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground">
            Stay updated with our insights
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <Link 
                to={post.path}
                className="block p-8 bg-card rounded-2xl border border-border/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="hugo-tag">{post.badge}</span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{post.category}</p>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 mt-4 text-primary">
                  <span className="text-sm font-medium">Read more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};