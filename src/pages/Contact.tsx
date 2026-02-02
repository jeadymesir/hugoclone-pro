import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { MapPin, Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="page-hero pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Contact    US
          </h1>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl shadow-lg p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors"
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
                    className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors"
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
                    className="w-full px-4 py-3 border-b-2 border-border bg-transparent focus:border-primary outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Your message (optional)
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg bg-transparent focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Tell us more about your project..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  SUBMIT
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-muted/50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground">Verlengde Gemenelandsweg 151</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Email us</h3>
                    <a href="mailto:info@rpbg.net" className="text-primary hover:underline">
                      info@rpbg.net
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Call us</h3>
                    <a href="tel:+597433932" className="text-primary hover:underline">
                      +597 433932
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">WhatsApp</h3>
                    <a href="https://wa.me/597433932" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      +597 433932
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
