import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Database, Users, Cpu, Fingerprint, Globe, MonitorSmartphone, Code, Package } from 'lucide-react';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble } from '@/components/decorative/Scribbles';

const solutions = [
  {
    icon: Database,
    title: 'ODOO',
    description: "In today's world, it is essential to manage business processes as efficiently as possible while simultaneously keeping pace with ever changing customer and business needs. With Odoo (an open source ERP solution), RPBG (as an official partner) is able to help businesses streamline their operations, enhance efficiency and drive growth.",
    items: ['ERP solution tailored to your needs (via RPBG expertise)', 'Suitable for any business sector', 'Transparency of data and changes', 'Possibility for various integrations'],
  },
  {
    icon: Users,
    title: 'HRMS+',
    description: "HRMSPlus is the perfect solution for your HR process & Payroll administration management, optimization and automation. With almost 30 years of experience and continuous improvement and innovation, HRMSPlus meets the requirements and needs of every organization based in Suriname.",
    items: ['Developed in-house by RPBG', 'HR process automation', 'In accordance with Suriname Wage Tax regulations', 'Always up to date'],
  },
  {
    icon: Cpu,
    title: 'EXACT',
    description: "RPBG has been a reseller of Exact software in Suriname for over 25 years and has a proven track record of successful implementations ranging from small to large businesses in Suriname. RPBG offers its services backed by Exact-trained consultants who provide support for financial, logistical and any other necessary processes. RPBG assists with everything ranging from process descriptions to software implementation and provides best after sales support.",
    subtitle: "What is Exact?",
    subtitleDescription: "It is a licensed and cloud based ERP solution that is usually chosen by bigger organizations, due to higher recurring licensing costs.",
    items: [],
  },
  {
    icon: Fingerprint,
    title: 'FINGERTEC',
    description: "Automate your time and attendance for efficiency and connect to our existing solutions! Biometric identification systems are becoming a common trend in today's office automation. This solution is beneficial for workforce management because it reduces the inaccuracies caused by an improper administration.",
    detail: "FingerTec is a globally recognized brand that offers high-quality biometric time and attendance and door access hardware solutions to companies worldwide. Combined with powerful applications for PCs, web-based, and cloud-based systems, FingerTec offers solutions that go beyond biometrics. RPBG is an official FingerTec dealer in Suriname and offers integrations with HR, payroll and other software solutions.",
    items: [],
  },
  {
    icon: MonitorSmartphone,
    title: 'EMPLOYEE PORTAL',
    description: "Employee portal is a solution designed to make your HR Department or human resource management easier, more efficient and more productive, while at the same time integrating with other processes crucial for managing your business efficiently.",
    items: ['Employees can manage their own data/requests', 'Streamlined HR processes', 'Submission and management of leave requests', 'Claims requests/approvals and processing', 'Performance reviews', 'Possibility to integrate with HRMSPlus and Odoo'],
  },
  {
    icon: Globe,
    title: 'MICROSOFT 365',
    description: "Chat, call, hold online meetings, and collaborate in real time, whether you're working remotely or on-site. Get a single, integrated solution, including Teams, OneDrive cloud storage, and Office apps with advanced security options.",
    items: ['Resale of Microsoft applications (also separately)', 'Setup of Microsoft 365 environment'],
  },
  {
    icon: Globe,
    title: 'GOOGLE WORKSPACE',
    description: "Google Workspace is a unified, easy-to-use workspace, it help organizations spend less time managing work and more time getting it done. Focus on what matters most and let Google handle the rest, with best-in-class AI and search technology that helps you work smarter. From your personal domain registration to workspace management, RPBG has you covered on all fronts.",
    items: [],
  },
  {
    icon: Code,
    title: 'WEBSITE DEVELOPMENT',
    description: "RPBG offers a full suite of professional web services, including domain name registration, reliable web hosting, and fully customized website development. Our responsive website designs ensure seamless adaptability across all devices—desktops, laptops, tablets, and smartphones—delivering optimal readability and user experience without the need for manual adjustments. We enhance your online visibility with search engine optimization strategies to make your website more discoverable. Additionally, RPBG provides comprehensive training for website maintenance as standard, alongside attractive maintenance contracts for businesses seeking hassle-free, expert-managed updates. Partner with RPBG to build a robust, professional online presence tailored to your needs.",
    items: ['Domain registration', 'Hosting solutions', 'Website development', 'Training for website maintenance after implementation'],
  },
  {
    icon: Package,
    title: 'HARDWARE & SOFTWARE RESELL',
    description: "Through various partnerships with international brands and organizations RPBG is able to offer competitive prices for any ICT hardware OR software needs. Ranging from licensed software to specialized hardware, RPBG can meet the needs of any organization.",
    items: [],
  },
];

const SoftwareHardware = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6">
              Solutions
            </div>
            <div className="relative inline-block">
              <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
                Software    &    Hardware    Solutions
              </h1>
              <div className="absolute -bottom-2 left-0 w-56 opacity-40">
                <Scribble variant="underline" className="stroke-primary-foreground/50" />
              </div>
            </div>
            <p className="text-xl text-primary-foreground/80 mt-4">
              RPBG delivers tailored ERP and HRM software solutions alongside proven hardware and trusted brand partnerships. Streamline operations, boost productivity, and empower your business with scalable, innovative solutions designed for success.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Solutions - Alternating Layout */}
      {solutions.map((solution, index) => {
        const Icon = solution.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section key={index} className={`py-24 ${isEven ? 'bg-background' : 'bg-muted/30'} relative overflow-hidden`}>
            <SectionDecorations position={isEven ? 'right' : 'left'} />
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center hugo-float relative">
                    <Icon className="w-32 h-32 text-primary" />
                    <div className="absolute -top-4 -right-4">
                      <Scribble variant="star" color="primary" size="sm" className="opacity-40" />
                    </div>
                  </div>
                </div>

                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative inline-block mb-6">
                    <h2 className="hugo-subtitle text-2xl md:text-3xl text-foreground">
                      {solution.title}
                    </h2>
                    <div className="absolute -bottom-2 left-0 w-24">
                      <Scribble variant="underline" color="primary" className="opacity-50" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {solution.description}
                  </p>

                  {solution.detail && (
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {solution.detail}
                    </p>
                  )}

                  {solution.subtitle && (
                    <>
                      <p className="font-semibold text-foreground mt-6 mb-2">{solution.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {solution.subtitleDescription}
                      </p>
                    </>
                  )}
                  
                  {solution.items.length > 0 && (
                    <ul className="space-y-3 mt-6">
                      {solution.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="hugo-subtitle text-3xl md:text-4xl mb-6">
            Need    a    custom    solution?
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Our team can help you find the perfect combination of software and hardware for your needs.
          </p>
          <Link to="/contact" className="hugo-cta bg-background text-foreground hover:bg-background/90">
            Get in Touch
            <ArrowRight className="w-5 h-5 hugo-arrow" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SoftwareHardware;
