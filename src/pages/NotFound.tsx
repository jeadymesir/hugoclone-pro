import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from '@/components/layout/Layout';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[200px] -z-10" />
        
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="hugo-title text-9xl md:text-[12rem] text-primary/20 mb-4">404</h1>
          <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground mb-6">
            Page    Not    Found
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="hugo-cta">
            <Home className="w-5 h-5" />
            Back to Home
            <ArrowRight className="w-5 h-5 hugo-arrow" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
