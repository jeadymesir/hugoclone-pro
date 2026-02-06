import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { LoadingScreen } from '@/components/LoadingScreen';
import { HeroSection } from '@/components/home/HeroSection';
import { ArticlesSection } from '@/components/home/ArticlesSection';
import { SuccessSection, DeserveBetterSection } from '@/components/home/SuccessSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { CertificatesSection } from '@/components/home/CertificatesSection';
import { ClientLogosSection } from '@/components/home/ClientLogosSection';
import { StepsSection } from '@/components/home/StepsSection';
import { SeasonalSection } from '@/components/home/SeasonalSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { BlogSection } from '@/components/home/BlogSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      <Layout>
        <HeroSection />
        <ArticlesSection />
        <ClientLogosSection />
        <SuccessSection />
        <DeserveBetterSection />
        <TestimonialsSection />
        <ServicesSection />
        <CertificatesSection />
        <StepsSection />
        <SeasonalSection />
        <ReviewsSection />
        <BlogSection />
      </Layout>
    </>
  );
};

export default Index;
