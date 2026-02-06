import { Layout } from '@/components/layout/Layout';
import { ArrowRight, Monitor, Users, Wrench } from 'lucide-react';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble, FloatingElement, Sparkle } from '@/components/decorative/Scribbles';

const trainingFormats = [
  {
    icon: Monitor,
    title: 'ONLINE TRAININGS',
    description: "The world moves fast, and staying competitive demands continuous learning—but finding time for traditional classroom training can feel impossible. RPBG's Online Training Programs eliminate barriers, delivering expert-led, specialized ICT and professional development courses directly to your team, wherever they are. Designed for maximum flexibility, our digital approach helps with transforming commuting time or downtime into productive skill-building sessions. Access the relevant, practical, and engaging content you need, wherever you are.",
    highlight: "Empower your workforce with the convenience and power of RPBG",
  },
  {
    icon: Users,
    title: 'IN-PERSON TRAININGS',
    description: "While digital convenience has its merits, nothing replaces the dynamic energy and intensive focus of a dedicated, in-person training session. RPBG's Hands-On Classroom Programs offer a superior learning environment where interaction, collaboration, and immediate feedback fuel mastery. Our expert instructors lead engaging workshops, live Q&A sessions, and real-world simulations that solidify knowledge faster than any virtual module. Bring your team together to foster critical team-building, address complex challenges collaboratively, and ensure complete comprehension of essential ICT and professional skills.",
    highlight: "Step away from the screen and into a highly effective learning environment designed for immediate application and lasting results.",
  },
  {
    icon: Wrench,
    title: 'TAILOR MADE TRAININGS',
    description: "If your organization has unique challenges, workflows, and goals that demand specialized expertise then RPBG's Tailor-Made Training Solutions deliver exactly what your team needs, bypassing unnecessary modules and focusing intensely on the specific ICT skills, compliance requirements, or professional competencies critical to your bottom line. We collaborate with you to design a curriculum that speaks your language and directly solves your most pressing problems.",
    highlight: "Invest smarter, train more efficiently, and equip your employees with knowledge built precisely for your success.",
  },
];

interface TrainingItem {
  name: string;
  basic?: string;
  intermediate?: string;
  advance?: string;
  single?: string;
  contact?: boolean;
}

interface TrainingCategory {
  title: string;
  icon: string;
  trainings: TrainingItem[];
}

const trainingCategories: TrainingCategory[] = [
  {
    title: 'Microsoft Office',
    icon: '💼',
    trainings: [
      { name: 'MS Project', basic: '$75,-', intermediate: '$100,-' },
      { name: 'MS Word', basic: '$35,-', intermediate: '$45,-', advance: '$50,-' },
      { name: 'MS Excel', basic: '$35,-', intermediate: '$45,-', advance: '$50,-' },
      { name: 'MS PowerPoint', basic: '$35,-', intermediate: '$45,-', advance: '$50,-' },
      { name: 'MS Outlook', basic: '$35,-', intermediate: '$45,-', advance: '$50,-' },
      { name: 'MS Power BI', basic: '$90,-', intermediate: '$120,-', advance: '$150,-' },
    ],
  },
  {
    title: 'Technical & ICT',
    icon: '🖥️',
    trainings: [
      { name: 'AutoCAD 2D', single: '$100,-' },
      { name: 'AutoCAD 2D+', single: '$115,-' },
      { name: 'AutoCAD 3D', single: '$125,-' },
      { name: 'AutoCAD 3D Plant', single: '$125,-' },
      { name: 'Network Management & Security', single: '$150,-' },
      { name: 'A+ PC Technician', single: '$125,-' },
      { name: 'A+ PC Technician for Youth', single: '$65,-' },
      { name: 'Cybersecurity (Level 1/2/3)', contact: true },
      { name: 'ISO27001 (Level 1/2/3)', contact: true },
    ],
  },
  {
    title: 'Operating Systems',
    icon: '⚙️',
    trainings: [
      { name: 'Computer Skills', single: '$35,-' },
    ],
  },
  {
    title: 'Graphic Design',
    icon: '🎨',
    trainings: [
      { name: 'Adobe Photoshop', basic: '$70,-', intermediate: '$100,-', advance: '$120,-' },
      { name: 'Adobe Premiere Pro', basic: '$70,-', intermediate: '$100,-' },
      { name: 'Adobe Illustrator', basic: '$70,-', intermediate: '$100,-' },
      { name: 'Webdesign', basic: '$70,-', intermediate: '$100,-' },
      { name: 'Basic Graphic Design', single: '$120,-' },
    ],
  },
  {
    title: 'Professional Skills',
    icon: '📈',
    trainings: [
      { name: 'Customer Service Excellence', single: '$120,-' },
      { name: 'Time Management', single: '$120,-' },
      { name: 'Project Management', single: '$120,-' },
      { name: 'Effective Communication', single: '$120,-' },
      { name: 'Leadership', single: '$120,-' },
    ],
  },
];

const Trainings = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6 inline-block">
              Training
            </div>
            <div className="relative inline-block">
              <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
                Trainings    Designed    For    YOUR    Success
              </h1>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-56 opacity-40">
                <Scribble variant="underline" className="stroke-primary-foreground/50" />
              </div>
            </div>
            <p className="text-xl text-primary-foreground/80 mb-4 mt-4">
              The greatest investment a company can make is in its people.
            </p>
            <p className="text-primary-foreground/70">
              Generic training programs often miss the mark, delivering outdated content that doesn't align with your specific challenges or strategic goals. RPBG's Tailor-Made Training Solutions change that. We don't just teach theory—we immerse your team in practical, relevant, and engaging courses, covering everything from complex ICT infrastructure and security to vital non-ICT leadership and soft skills.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
      </section>

      {/* Training Formats */}
      {trainingFormats.map((format, index) => {
        const Icon = format.icon;
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
                      {format.title}
                    </h2>
                    <div className="absolute -bottom-2 left-0 w-32">
                      <Scribble variant="underline" color="primary" className="opacity-50" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {format.description}
                  </p>
                  
                  <p className="text-foreground font-semibold">
                    {format.highlight}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Training Catalog CTA */}
      <section className="py-16 bg-primary/10 relative overflow-hidden">
        <FloatingElement className="top-4 right-20 hidden lg:block">
          <Sparkle className="w-6 h-6" />
        </FloatingElement>
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="hugo-subtitle text-2xl md:text-3xl text-foreground mb-4">
            Invest in targeted knowledge today and build the skilled, confident workforce your future demands.
          </h2>
        </div>
      </section>

      {/* Training Categories - Redesigned */}
      <section className="py-24 bg-background relative overflow-hidden">
        <SectionDecorations position="both" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground">
                Training    Catalog    &    Pricing
              </h2>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48">
                <Scribble variant="underline" color="primary" />
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {trainingCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group relative">
                {/* Hover scribble */}
                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Scribble variant="star" color="primary" size="sm" />
                </div>
                
                {/* Category Header */}
                <div className="bg-primary/5 px-8 py-5 border-b border-border">
                  <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    {category.title}
                  </h3>
                </div>
                
                {/* Pricing Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left py-4 px-8 font-semibold text-foreground">Training</th>
                        <th className="text-center py-4 px-4 font-semibold text-foreground min-w-[100px]">Basic</th>
                        <th className="text-center py-4 px-4 font-semibold text-foreground min-w-[100px]">Intermediate</th>
                        <th className="text-center py-4 px-4 font-semibold text-foreground min-w-[100px]">Advanced</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.trainings.map((training, i) => (
                        <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                          <td className="py-4 px-8 font-medium text-foreground">{training.name}</td>
                          {training.contact ? (
                            <td colSpan={3} className="py-4 px-4 text-center">
                              <span className="text-primary font-semibold">Contact our team</span>
                            </td>
                          ) : training.single ? (
                            <td colSpan={3} className="py-4 px-4 text-center">
                              <span className="bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full">
                                {training.single}
                              </span>
                            </td>
                          ) : (
                            <>
                              <td className="py-4 px-4 text-center">
                                {training.basic ? (
                                  <span className="bg-secondary text-secondary-foreground font-semibold px-3 py-1 rounded-full text-sm">
                                    {training.basic}
                                  </span>
                                ) : (
                                  <span className="text-muted-foreground">—</span>
                                )}
                              </td>
                              <td className="py-4 px-4 text-center">
                                {training.intermediate ? (
                                  <span className="bg-accent text-accent-foreground font-semibold px-3 py-1 rounded-full text-sm">
                                    {training.intermediate}
                                  </span>
                                ) : (
                                  <span className="text-muted-foreground">—</span>
                                )}
                              </td>
                              <td className="py-4 px-4 text-center">
                                {training.advance ? (
                                  <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">
                                    {training.advance}
                                  </span>
                                ) : (
                                  <span className="text-muted-foreground">—</span>
                                )}
                              </td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="hugo-subtitle text-3xl md:text-4xl mb-6">
            Have    specific    training    needs?
          </h2>
          <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Contact us to discuss a customized training program for your team.
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScdQXB7FhUSe2ZlvriM4iqRbEPgUA_tO2_VmsGWrnZDZ0Dwcw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="hugo-cta bg-background text-foreground hover:bg-background/90"
          >
            Request Training
            <ArrowRight className="w-5 h-5 hugo-arrow" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Trainings;
