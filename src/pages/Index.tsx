import { Layout } from '@/components/layout/Layout';
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
  return (
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
  );
};

export default Index;
