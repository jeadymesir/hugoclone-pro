import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { MapPin, Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble, FloatingElement, Sparkle } from '@/components/decorative/Scribbles';
import { AnimatedSection } from '@/components/AnimatedSection';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:info@rpbg.net?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Please send the email from your email application.",
    });
  };

  return (
    <Layout>
      {/* Hero - Hugo style */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <div className="flex justify-center mb-6">
                <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground">
                  Contact
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="relative inline-block">
                <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
                  Get    in    Touch
                </h1>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl text-primary-foreground/80 mt-4">
                Ready to start your digital transformation? We'd love to hear from you.
              </p>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background relative overflow-hidden">
        <SectionDecorations position="both" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form - Hugo clean style */}
            <AnimatedSection animation="fade-right">
              <div className="bg-card rounded-3xl shadow-xl p-8 lg:p-12 relative">
              {/* Scribble accent */}
              <div className="absolute -top-6 -left-6 hidden md:block">
                <Scribble variant="circle" color="muted" size="md" className="opacity-40" />
              </div>
              
              <h2 className="font-heading font-semibold text-2xl text-foreground mb-8">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-0 py-4 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-lg"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-0 py-4 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-lg"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-0 py-4 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors text-lg"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Your message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-4 border-2 border-border rounded-2xl bg-transparent focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Tell us more about your project..."
                  />
                </div>

                <button type="submit" className="hugo-cta w-full justify-center">
                  <Send className="w-5 h-5" />
                  SUBMIT
                </button>
              </form>
            </div>
            </AnimatedSection>

            {/* Contact Info - Hugo card style */}
            <AnimatedSection animation="fade-left" delay={100}>
              <div className="space-y-6">
                <FloatingElement className="top-0 right-0 hidden lg:block">
                  <Sparkle className="w-6 h-6" />
                </FloatingElement>
              
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Verlengde+Gemenelandsweg+151+Paramaribo+Suriname" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow group relative block"
              >
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Scribble variant="star" color="primary" size="sm" />
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground hover:text-primary transition-colors">Verlengde Gemenelandsweg 151</p>
                  </div>
                </div>
              </a>

              <div className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow group relative">
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Scribble variant="star" color="primary" size="sm" />
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Email us</h3>
                    <a href="mailto:info@rpbg.net" className="text-primary hover:underline text-lg">
                      info@rpbg.net
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow group relative">
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Scribble variant="star" color="primary" size="sm" />
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Call us</h3>
                    <a href="tel:+597433932" className="text-primary hover:underline text-lg">
                      +597 433932
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow group relative">
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Scribble variant="star" color="primary" size="sm" />
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">WhatsApp</h3>
                    <a href="https://wa.me/597433932" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-lg">
                      +597 433932
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
