import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { LoadingScreen } from '@/components/LoadingScreen';
import { HeroSection } from '@/components/home/HeroSection';
import { ArticlesSection } from '@/components/home/ArticlesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { CertificatesSection } from '@/components/home/CertificatesSection';
import { ClientLogosSection } from '@/components/home/ClientLogosSection';
import { StepsSection } from '@/components/home/StepsSection';
import { SeasonalSection } from '@/components/home/SeasonalSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';

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
        <TestimonialsSection />
        <ServicesSection />
        <CertificatesSection />
        <StepsSection />
        <SeasonalSection />
        <ReviewsSection />
      </Layout>
    </>
  );
};

export default Index;
