import { Layout } from '@/components/layout/Layout';
import { ArrowRight, Monitor, Users, Wrench, ChevronDown } from 'lucide-react';
import { PageDecorations, SectionDecorations } from '@/components/decorative/PageDecorations';
import { Scribble, FloatingElement, Sparkle } from '@/components/decorative/Scribbles';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

interface TrainingLevel {
  name: string;
  price: string;
  description: string;
}

interface TrainingItem {
  name: string;
  levels?: TrainingLevel[];
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
      {
        name: 'MS Project',
        levels: [
          { name: 'Basic', price: '$75,-', description: 'Introduction to project planning, task creation, timelines, and basic resource assignment.' },
          { name: 'Intermediate', price: '$100,-', description: 'Advanced scheduling, resource leveling, tracking progress, and generating detailed reports.' },
        ],
      },
      {
        name: 'MS Word',
        levels: [
          { name: 'Basic', price: '$35,-', description: 'Document creation, text formatting, page layout, and basic templates.' },
          { name: 'Intermediate', price: '$45,-', description: 'Styles, table of contents, mail merge, headers/footers, and collaboration tools.' },
          { name: 'Advanced', price: '$50,-', description: 'Macros, advanced formatting, forms, document automation, and master documents.' },
        ],
      },
      {
        name: 'MS Excel',
        levels: [
          { name: 'Basic', price: '$35,-', description: 'Spreadsheet basics, formulas, sorting, filtering, and simple charts.' },
          { name: 'Intermediate', price: '$45,-', description: 'Pivot tables, VLOOKUP, conditional formatting, data validation, and advanced charts.' },
          { name: 'Advanced', price: '$50,-', description: 'Macros, VBA, Power Query, complex formulas, dashboards, and data analysis.' },
        ],
      },
      {
        name: 'MS PowerPoint',
        levels: [
          { name: 'Basic', price: '$35,-', description: 'Slide creation, text and image formatting, basic transitions, and templates.' },
          { name: 'Intermediate', price: '$45,-', description: 'Custom animations, master slides, multimedia integration, and presenter tools.' },
          { name: 'Advanced', price: '$50,-', description: 'Interactive presentations, advanced animations, design principles, and branding consistency.' },
        ],
      },
      {
        name: 'MS Outlook',
        levels: [
          { name: 'Basic', price: '$35,-', description: 'Email management, contacts, calendar basics, and task lists.' },
          { name: 'Intermediate', price: '$45,-', description: 'Rules, shared calendars, delegation, categories, and search folders.' },
          { name: 'Advanced', price: '$50,-', description: 'Automation, advanced calendar management, integration with Teams, and archiving strategies.' },
        ],
      },
      {
        name: 'MS Power BI',
        levels: [
          { name: 'Basic', price: '$90,-', description: 'Data import, basic visualizations, simple dashboards, and report sharing.' },
          { name: 'Intermediate', price: '$120,-', description: 'DAX formulas, data modeling, relationships, and interactive reports.' },
          { name: 'Advanced', price: '$150,-', description: 'Advanced DAX, Row-Level Security, API integration, and enterprise deployment.' },
        ],
      },
    ],
  },
  {
    title: 'Technical & ICT',
    icon: '🖥️',
    trainings: [
      { name: 'AutoCAD 2D', levels: [{ name: 'Standard', price: '$100,-', description: '2D drafting fundamentals, drawing tools, layers, dimensioning, and plotting.' }] },
      { name: 'AutoCAD 2D+', levels: [{ name: 'Standard', price: '$115,-', description: 'Advanced 2D techniques, blocks, external references, and annotation scaling.' }] },
      { name: 'AutoCAD 3D', levels: [{ name: 'Standard', price: '$125,-', description: '3D modeling basics, solid and surface modeling, rendering, and visualization.' }] },
      { name: 'AutoCAD 3D Plant', levels: [{ name: 'Standard', price: '$125,-', description: 'Plant design, piping, equipment modeling, and isometric drawings.' }] },
      { name: 'Network Management & Security', levels: [{ name: 'Standard', price: '$150,-', description: 'Network architecture, monitoring, troubleshooting, firewalls, and security protocols.' }] },
      { name: 'A+ PC Technician', levels: [{ name: 'Standard', price: '$125,-', description: 'Hardware/software troubleshooting, OS installation, networking basics, and security.' }] },
      { name: 'A+ PC Technician for Youth', levels: [{ name: 'Standard', price: '$65,-', description: 'Introduction to computer hardware, basic repairs, and operating system fundamentals for young learners.' }] },
      { name: 'Cybersecurity (Level 1/2/3)', contact: true },
      { name: 'ISO27001 (Level 1/2/3)', contact: true },
    ],
  },
  {
    title: 'Operating Systems',
    icon: '⚙️',
    trainings: [
      { name: 'Computer Skills', levels: [{ name: 'Standard', price: '$35,-', description: 'Computer basics, file management, internet usage, and essential software skills.' }] },
    ],
  },
  {
    title: 'Graphic Design',
    icon: '🎨',
    trainings: [
      {
        name: 'Adobe Photoshop',
        levels: [
          { name: 'Basic', price: '$70,-', description: 'Interface overview, basic editing, cropping, layers, and simple retouching.' },
          { name: 'Intermediate', price: '$100,-', description: 'Advanced layer techniques, masks, filters, color correction, and compositing.' },
          { name: 'Advanced', price: '$120,-', description: 'Professional retouching, actions, 3D effects, advanced compositing, and workflow optimization.' },
        ],
      },
      {
        name: 'Adobe Premiere Pro',
        levels: [
          { name: 'Basic', price: '$70,-', description: 'Video import, timeline editing, basic cuts, transitions, and audio adjustment.' },
          { name: 'Intermediate', price: '$100,-', description: 'Color grading, multi-camera editing, effects, titles, and export optimization.' },
        ],
      },
      {
        name: 'Adobe Illustrator',
        levels: [
          { name: 'Basic', price: '$70,-', description: 'Vector basics, shapes, pen tool, text, and simple illustrations.' },
          { name: 'Intermediate', price: '$100,-', description: 'Advanced paths, gradients, patterns, logo design, and print-ready output.' },
        ],
      },
      {
        name: 'Webdesign',
        levels: [
          { name: 'Basic', price: '$70,-', description: 'HTML & CSS fundamentals, page structure, responsive basics, and simple layouts.' },
          { name: 'Intermediate', price: '$100,-', description: 'JavaScript interaction, frameworks, UX principles, and deployment.' },
        ],
      },
      { name: 'Basic Graphic Design', levels: [{ name: 'Standard', price: '$120,-', description: 'Design principles, color theory, typography, composition, and portfolio building.' }] },
    ],
  },
  {
    title: 'Professional Skills',
    icon: '📈',
    trainings: [
      { name: 'Customer Service Excellence', levels: [{ name: 'Standard', price: '$120,-', description: 'Communication skills, handling complaints, building rapport, and exceeding customer expectations.' }] },
      { name: 'Time Management', levels: [{ name: 'Standard', price: '$120,-', description: 'Prioritization techniques, goal setting, productivity tools, and eliminating distractions.' }] },
      { name: 'Project Management', levels: [{ name: 'Standard', price: '$120,-', description: 'Planning, execution, monitoring, risk management, and stakeholder communication.' }] },
      { name: 'Effective Communication', levels: [{ name: 'Standard', price: '$120,-', description: 'Verbal and written skills, active listening, presentation techniques, and conflict resolution.' }] },
      { name: 'Leadership', levels: [{ name: 'Standard', price: '$120,-', description: 'Leadership styles, team motivation, decision making, delegation, and strategic thinking.' }] },
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
            <AnimatedSection animation="fade-up">
              <div className="flex justify-center mb-6">
                <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground">
                  Training
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="relative inline-block">
                <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
                  Trainings    Designed    For    YOUR    Success
                </h1>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl text-primary-foreground/80 mb-4 mt-4">
                The greatest investment a company can make is in its people.
              </p>
              <p className="text-primary-foreground/70">
                Generic training programs often miss the mark, delivering outdated content that doesn't align with your specific challenges or strategic goals. RPBG's Tailor-Made Training Solutions change that. We don't just teach theory—we immerse your team in practical, relevant, and engaging courses, covering everything from complex ICT infrastructure and security to vital non-ICT leadership and soft skills.
              </p>
            </AnimatedSection>
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
                <AnimatedSection animation={isEven ? 'fade-right' : 'fade-left'} className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center hugo-float relative">
                    <Icon className="w-32 h-32 text-primary" />
                    <div className="absolute -top-4 -right-4">
                      <Scribble variant="star" color="primary" size="sm" className="opacity-40" />
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation={isEven ? 'fade-left' : 'fade-right'} delay={100} className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative inline-block mb-6">
                    <h2 className="hugo-subtitle text-2xl md:text-3xl text-foreground">
                      {format.title}
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {format.description}
                  </p>
                  
                  <p className="text-foreground font-semibold">
                    {format.highlight}
                  </p>
                </AnimatedSection>
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
          <AnimatedSection animation="fade-up">
            <h2 className="hugo-subtitle text-2xl md:text-3xl text-foreground mb-4">
              Invest in targeted knowledge today and build the skilled, confident workforce your future demands.
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Training Categories - Nested Accordion */}
      <section className="py-24 bg-background relative overflow-hidden">
        <SectionDecorations position="both" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <div className="relative inline-block">
                <h2 className="hugo-subtitle text-3xl md:text-4xl text-foreground">
                  Training    Catalog    &    Pricing
                </h2>
              </div>
            </div>
          </AnimatedSection>

          <Accordion type="multiple" className="space-y-4">
            {trainingCategories.map((category, catIdx) => (
              <AnimatedSection key={catIdx} animation={catIdx % 2 === 0 ? 'fade-right' : 'fade-left'} delay={catIdx * 50}>
                <AccordionItem value={`cat-${catIdx}`} className="border-none">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                    <AccordionTrigger className="hover:no-underline px-8 py-6">
                      <div className="flex items-center gap-4 w-full">
                        <span className="text-3xl w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl">
                          {category.icon}
                        </span>
                        <h3 className="font-heading font-bold text-lg text-foreground text-left">
                          {category.title}
                        </h3>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-0 pb-0">
                      <div className="border-t border-border">
                        <Accordion type="multiple" className="divide-y divide-border/50">
                          {category.trainings.map((training, tIdx) => (
                            training.contact ? (
                              <div key={tIdx} className="flex items-center justify-between px-8 py-4 hover:bg-muted/20 transition-colors">
                                <span className="font-medium text-foreground">{training.name}</span>
                                <span className="text-primary font-semibold text-sm">Contact our team</span>
                              </div>
                            ) : (
                              <AccordionItem key={tIdx} value={`training-${catIdx}-${tIdx}`} className="border-none">
                                <AccordionTrigger className="hover:no-underline px-8 py-4 hover:bg-muted/20">
                                  <div className="flex items-center justify-between w-full pr-2">
                                    <span className="font-medium text-foreground">{training.name}</span>
                                    {training.levels && training.levels.length === 1 ? (
                                      <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold px-4 py-1 rounded-full text-sm mr-2">
                                        {training.levels[0].price}
                                      </span>
                                    ) : (
                                      <span className="text-muted-foreground text-sm mr-2">
                                        {training.levels?.length} levels
                                      </span>
                                    )}
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 sm:px-8 pb-4">
                                  <table className="w-full border-collapse">
                                    <thead>
                                      <tr className="border-b border-border">
                                        <th className="text-left py-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-[100px]">Level</th>
                                        <th className="text-left py-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-[90px]">Price</th>
                                        <th className="text-left py-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">What you'll learn</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {training.levels?.map((level, lIdx) => (
                                        <tr key={lIdx} className="border-b border-border/30 last:border-none">
                                          <td className="py-3 px-3">
                                            <span className="bg-primary/10 text-primary font-semibold px-3 py-0.5 rounded-full text-xs">
                                              {level.name}
                                            </span>
                                          </td>
                                          <td className="py-3 px-3">
                                            <span className="text-green-600 dark:text-green-400 font-bold text-sm">{level.price}</span>
                                          </td>
                                          <td className="py-3 px-3 text-muted-foreground text-sm leading-relaxed">
                                            {level.description}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </AccordionContent>
                              </AccordionItem>
                            )
                          ))}
                        </Accordion>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <PageDecorations variant="primary" />
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <AnimatedSection animation="fade-up">
            <h2 className="hugo-subtitle text-3xl md:text-4xl mb-6">
              Have    specific    training    needs?
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto">
              Contact us to discuss a customized training program for your team.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScdQXB7FhUSe2ZlvriM4iqRbEPgUA_tO2_VmsGWrnZDZ0Dwcw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="hugo-cta bg-background text-foreground hover:bg-background/90"
            >
              Request Training
              <ArrowRight className="w-5 h-5 hugo-arrow" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Trainings;
