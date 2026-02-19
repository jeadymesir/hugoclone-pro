import { Layout } from '@/components/layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, CheckCircle, Send, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import { JobPosting, getJobPostings } from './Careers';
import { useToast } from '@/hooks/use-toast';
import { SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble } from '@/components/decorative/Scribbles';

const CareerDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [job, setJob] = useState<JobPosting | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [motivationFile, setMotivationFile] = useState<File | null>(null);

  useEffect(() => {
    const jobs = getJobPostings();
    const found = jobs.find((j) => j.id === id);
    if (found) {
      setJob(found);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!job) return;

    // Create mailto link with application data
    const subject = encodeURIComponent(`Application for ${job.title}`);
    const body = encodeURIComponent(
      `Job Application\n\n` +
      `Position: ${job.title}\n` +
      `Department: ${job.department}\n\n` +
      `Applicant Information:\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `---\n` +
      `IMPORTANT: Please attach the following files to this email:\n` +
      `- CV/Resume: ${cvFile?.name || 'Not selected'}\n` +
      `- Motivation Letter: ${motivationFile?.name || 'Not selected'}`
    );

    window.location.href = `mailto:careers@rpbg.net?subject=${subject}&body=${body}`;
    
    toast({
      title: 'Application Started',
      description: 'Your email client will open. Please attach your CV and motivation letter before sending.',
    });
  };

  if (!job) {
    return (
      <Layout>
        <div className="container mx-auto px-6 lg:px-12 py-32 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-8">This position may have been filled or removed.</p>
          <Link to="/careers">
            <Button>View All Positions</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Button */}
      <div className="container mx-auto px-6 lg:px-12 pt-8">
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Careers
        </Link>
      </div>

      {/* Job Header */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        <SectionDecorations position="right" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                {job.department}
              </span>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                {job.type}
              </span>
            </div>
            <div className="relative inline-block mb-6">
              <h1 className="font-heading text-4xl lg:text-5xl font-bold">{job.title}</h1>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mt-4">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {job.location}
              </span>
              {job.salaryRange && (
                <span className="flex items-center gap-2">
                  💰 {job.salaryRange}
                </span>
              )}
              {job.deadline && (
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Apply by {new Date(job.deadline).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="pb-20 relative overflow-hidden">
        <SectionDecorations position="left" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <div className="relative inline-block mb-4">
                  <h2 className="font-heading text-2xl font-bold">About the Role</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </div>

              {/* Requirements */}
              <div>
                <div className="relative inline-block mb-4">
                  <h2 className="font-heading text-2xl font-bold">Requirements</h2>
                </div>
                <ul className="space-y-3">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <div className="relative inline-block mb-4">
                  <h2 className="font-heading text-2xl font-bold">What We Offer</h2>
                </div>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border sticky top-28 relative">
                {/* Scribble accent */}
                <div className="absolute -top-4 -right-4 hidden md:block">
                  <Scribble variant="circle" color="muted" size="sm" className="opacity-40" />
                </div>
                
                <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Apply Now
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cv">CV / Resume (PDF) *</Label>
                    <div className="mt-1 relative">
                      <input
                        id="cv"
                        type="file"
                        accept=".pdf"
                        required
                        onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                        className="hidden"
                      />
                      <label
                        htmlFor="cv"
                        className="flex items-center gap-2 w-full px-3 py-2 border border-input rounded-md bg-background text-sm cursor-pointer hover:bg-muted transition-colors"
                      >
                        <Upload className="w-4 h-4 text-muted-foreground" />
                        <span className={cvFile ? 'text-foreground' : 'text-muted-foreground'}>
                          {cvFile ? cvFile.name : 'Select PDF file...'}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="motivation">Motivation Letter (PDF) *</Label>
                    <div className="mt-1 relative">
                      <input
                        id="motivation"
                        type="file"
                        accept=".pdf"
                        required
                        onChange={(e) => setMotivationFile(e.target.files?.[0] || null)}
                        className="hidden"
                      />
                      <label
                        htmlFor="motivation"
                        className="flex items-center gap-2 w-full px-3 py-2 border border-input rounded-md bg-background text-sm cursor-pointer hover:bg-muted transition-colors"
                      >
                        <Upload className="w-4 h-4 text-muted-foreground" />
                        <span className={motivationFile ? 'text-foreground' : 'text-muted-foreground'}>
                          {motivationFile ? motivationFile.name : 'Select PDF file...'}
                        </span>
                      </label>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    * Your email client will open. Please attach your CV and motivation letter before sending.
                  </p>
                  <Button type="submit" className="w-full hugo-cta">
                    Submit Application
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerDetail;
