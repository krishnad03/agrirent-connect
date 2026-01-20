import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Farmer First',
    description: 'Every decision we make starts with one question: How does this help farmers?',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'We believe in the power of community. Farmers helping farmers succeed.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Every piece of equipment on our platform meets strict quality standards.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'We constantly evolve to serve the agricultural community better.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Empowering Farmers with Technology
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Agrirent bridges the gap between farmers who need equipment and those who have it. 
                We're building a future where every farmer has access to modern farming tools.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-card rounded-2xl p-10 shadow-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To make modern farming equipment accessible and affordable for every farmer in India. 
                  We believe that access to the right tools shouldn't be limited by capital constraints. 
                  By creating a trusted platform for equipment rental, we're helping farmers increase 
                  their productivity while reducing costs.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card rounded-2xl p-10 shadow-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To build a technology-enabled agricultural ecosystem where equipment sharing 
                  becomes the norm, not the exception. We envision a future where farmers across 
                  India can access any equipment they need, when they need it, at a fraction of 
                  the ownership cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Born from the Fields
              </h2>
              <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
                <p>
                  Agrirent was founded with a simple observation: millions of farmers need 
                  equipment they can't afford to buy, while millions of equipment owners have 
                  machinery sitting idle for most of the year.
                </p>
                <p>
                  We saw an opportunity to connect these two groups, creating value for both. 
                  Farmers get access to equipment at a fraction of the ownership cost, and 
                  equipment owners earn from their idle assets.
                </p>
                <p>
                  Today, Agrirent serves thousands of farmers across India, helping them 
                  improve their productivity and profitability. We're proud to be part of 
                  India's agricultural transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                What We Stand For
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="text-center p-8 rounded-2xl bg-card shadow-card border border-border hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-2">
              Reach out to Krishna Dubey
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-primary-foreground/70">
              <a href="mailto:dubeyk7649@gmail.com" className="hover:text-primary-foreground transition-colors">
                dubeyk7649@gmail.com
              </a>
              <span className="hidden md:inline">•</span>
              <a href="tel:+919131809606" className="hover:text-primary-foreground transition-colors">
                +91-9131809606
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
