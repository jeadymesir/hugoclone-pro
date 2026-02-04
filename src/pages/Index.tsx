import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { LoadingScreen } from '@/components/LoadingScreen';
import { HeroSection } from '@/components/home/HeroSection';
import { ArticlesSection } from '@/components/home/ArticlesSection';
import { PartnersSection } from '@/components/home/PartnersSection';
import { SuccessSection, DeserveBetterSection } from '@/components/home/SuccessSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TechPartnersSection } from '@/components/home/TechPartnersSection';
import { StepsSection } from '@/components/home/StepsSection';
import { SeasonalSection } from '@/components/home/SeasonalSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { BlogSection } from '@/components/home/BlogSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Check if we've already shown the loading screen this session
    const hasShownIntro = sessionStorage.getItem('rpbg-intro-shown');
    if (hasShownIntro) {
      setIsLoading(false);
      setHasLoaded(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setHasLoaded(true);
    sessionStorage.setItem('rpbg-intro-shown', 'true');
  };

  return (
    <>
      {isLoading && !hasLoaded && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      <Layout>
        <HeroSection />
        <ArticlesSection />
        <PartnersSection />
        <SuccessSection />
        <DeserveBetterSection />
        <TestimonialsSection />
        <ServicesSection />
        <TechPartnersSection />
        <StepsSection />
        <SeasonalSection />
        <ReviewsSection />
        <BlogSection />
      </Layout>
    </>
  );
};

export default Index;
