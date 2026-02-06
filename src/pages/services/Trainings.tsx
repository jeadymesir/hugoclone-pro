import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Users, Wrench } from 'lucide-react';

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

const trainingCategories = [
  {
    title: 'Microsoft Office Trainings',
    courses: [
      { name: 'MS Project', levels: 'Basic / Intermediate', price: '$75,- / $100,-' },
      { name: 'MS Word / Excel / Powerpoint / Outlook', levels: 'Basic / Intermediate / Advance', price: '$35,- / $45,- / $50,-' },
      { name: 'MS Power BI', levels: 'Basic / Intermediate / Advance', price: '$90,- / $120,- / $150,-' },
    ],
  },
  {
    title: 'Technical & ICT Trainings',
    courses: [
      { name: 'AutoCAD 2D', price: '$100,-' },
      { name: 'AutoCAD 2D+', price: '$115,-' },
      { name: 'AutoCAD 3D', price: '$125,-' },
      { name: 'AutoCAD 3D Plant', price: '$125,-' },
      { name: 'Network management & security', price: '$150,-' },
      { name: 'A+ PC Technician', price: '$125,-' },
      { name: 'A+ PC Technician for Youth', price: '$65,-' },
      { name: 'Cybersecurity (level 1 / 2 / 3)', price: 'Contact our team' },
      { name: 'ISO27001 (level 1 / 2 / 3)', price: 'Contact our team' },
    ],
  },
  {
    title: 'Operating System Training',
    courses: [
      { name: 'Computer Skills', price: '$35,-' },
    ],
  },
  {
    title: 'Graphic Design Trainings',
    courses: [
      { name: 'Adobe Photoshop', levels: 'Basic / Intermediate / Advance', price: '$70,- / $100,- / $120,-' },
      { name: 'Adobe Premiere Pro', levels: 'Basic / Intermediate', price: '$70,- / $100,-' },
      { name: 'Adobe Illustrator', levels: 'Basic / Intermediate', price: '$70,- / $100,-' },
      { name: 'Webdesign', levels: 'Basic / Intermediate', price: '$70,- / $100,-' },
      { name: 'Basic Graphic Design', price: '$120,-' },
    ],
  },
  {
    title: 'Non-ICT Trainings',
    courses: [
      { name: 'Customer Service excellence', price: '$120,-' },
      { name: 'Time management', price: '$120,-' },
      { name: 'Project management', price: '$120,-' },
      { name: 'Effective communication', price: '$120,-' },
      { name: 'Leadership', price: '$120,-' },
    ],
  },
];

const Trainings = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="hugo-tag bg-primary-foreground/20 text-primary-foreground mb-6 inline-block">
              Training
            </div>
            <h1 className="hugo-title text-4xl md:text-5xl lg:text-6xl mb-6">
              Trainings    Designed    For    YOUR    Success
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-4">
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
          <section key={index} className={`py-24 ${isEven ? 'bg-background' : 'bg-muted/30'}`}>
            <div className="container mx-auto px-6 lg:px-12">
              <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center hugo-float">
                    <Icon className="w-32 h-32 text-primary" />
                  </div>
                </div>

                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <h2 className="hugo-subtitle text-2xl md:text-3xl text-foreground mb-6">
                    {format.title}
                  </h2>
                  
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
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="hugo-subtitle text-2xl md:text-3xl text-foreground mb-4">
            Invest in targeted knowledge today and build the skilled, confident workforce your future demands.
          </h2>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-6 pb-4 border-b border-border">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.courses.map((course, i) => (
                    <div key={i} className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <p className="text-foreground font-medium text-sm">{course.name}</p>
                        {course.levels && (
                          <p className="text-muted-foreground text-xs mt-1">{course.levels}</p>
                        )}
                      </div>
                      <p className="text-primary font-semibold text-sm whitespace-nowrap">{course.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
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
