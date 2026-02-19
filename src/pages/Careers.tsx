import { Layout } from '@/components/layout/Layout';
import { Briefcase, MapPin, Clock, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble, FloatingElement, Sparkle } from '@/components/decorative/Scribbles';

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Part-time, Contract
  description: string;
  requirements: string[];
  benefits: string[];
  salaryRange?: string;
  deadline?: string;
  createdAt: string;
}

// Get jobs from localStorage
export const getJobPostings = (): JobPosting[] => {
  const stored = localStorage.getItem('rpbg-job-postings');
  if (stored) {
    return JSON.parse(stored);
  }
  // Default sample jobs
  const defaultJobs: JobPosting[] = [
    {
      id: '1',
      title: 'IT Support Specialist',
      department: 'Technical Services',
      location: 'Paramaribo, Suriname',
      type: 'Full-time',
      description: 'We are looking for an IT Support Specialist to join our Managed IT Services team. You will be responsible for providing technical support to our clients.',
      requirements: [
        'Bachelor\'s degree in IT or related field',
        '2+ years of IT support experience',
        'Strong knowledge of Windows and Linux systems',
        'Excellent communication skills',
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Professional development opportunities',
        'Flexible working hours',
      ],
      salaryRange: 'SRD 8,000 - 12,000',
      deadline: '2025-03-31',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Network Engineer',
      department: 'Internet Services',
      location: 'Paramaribo, Suriname',
      type: 'Full-time',
      description: 'Join our Internet Services division as a Network Engineer. You will design, implement, and maintain network infrastructure for our clients.',
      requirements: [
        'CCNA or equivalent certification',
        '3+ years of networking experience',
        'Experience with Cisco, MikroTik, or similar equipment',
        'Strong problem-solving skills',
      ],
      benefits: [
        'Competitive salary',
        'Training and certifications',
        'Health insurance',
        'Career growth opportunities',
      ],
      salaryRange: 'SRD 10,000 - 15,000',
      deadline: '2025-04-15',
      createdAt: new Date().toISOString(),
    },
  ];
  localStorage.setItem('rpbg-job-postings', JSON.stringify(defaultJobs));
  return defaultJobs;
};

const Careers = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);

  useEffect(() => {
    setJobs(getJobPostings());
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <PageDecorations variant="default" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Join Our Team
            </span>
            <div className="relative inline-block">
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
                Careers at RPBG
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mt-4">
              Be part of a team that's shaping the future of IT in Suriname. 
              We're always looking for talented individuals who share our passion for technology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 border-b border-border relative overflow-hidden">
        <FloatingElement className="top-4 right-20 hidden lg:block">
          <Sparkle className="w-6 h-6" />
        </FloatingElement>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <Users className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold mb-2">Great Team</h3>
              <p className="text-sm text-muted-foreground">Work with passionate professionals</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <Briefcase className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold mb-2">Growth</h3>
              <p className="text-sm text-muted-foreground">Career development opportunities</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <Clock className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold mb-2">Flexibility</h3>
              <p className="text-sm text-muted-foreground">Work-life balance matters</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <MapPin className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Modern office in Paramaribo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 relative overflow-hidden">
        <SectionDecorations position="both" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="relative inline-block mb-12">
            <h2 className="font-heading text-3xl font-bold">Open Positions</h2>
          </div>
          
          {jobs.length === 0 ? (
            <div className="text-center py-16 bg-muted/30 rounded-2xl">
              <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">No Open Positions</h3>
              <p className="text-muted-foreground">
                Check back later for new opportunities, or send your CV to{' '}
                <a href="mailto:careers@rpbg.net" className="text-primary hover:underline">
                  careers@rpbg.net
                </a>
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job) => (
                <Link
                  key={job.id}
                  to={`/careers/${job.id}`}
                  className="block bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all group relative"
                >
                  {/* Hover scribble */}
                  <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Scribble variant="star" color="primary" size="sm" />
                  </div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        {job.salaryRange && (
                          <span className="flex items-center gap-1">
                            💰 {job.salaryRange}
                          </span>
                        )}
                        {job.deadline && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            Deadline: {new Date(job.deadline).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button className="hugo-cta group-hover:bg-primary/90">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
            Don't See a Fit?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We're always interested in hearing from talented individuals. 
            Send us your CV and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@rpbg.net"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-semibold hover:bg-background/90 transition-colors"
          >
            Send Your CV
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
