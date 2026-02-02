import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { PartnersSection } from '@/components/home/PartnersSection';
import { CertificationsSection } from '@/components/home/CertificationsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <CertificationsSection />
    </Layout>
  );
};

export default Index;
