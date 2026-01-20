import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Mail, Phone, MessageCircle, HelpCircle, UserPlus, Tractor, CreditCard, Shield } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const faqs = [
  {
    question: 'How do I rent equipment on Agrirent?',
    answer: 'Simply create a renter account, browse our equipment catalog, select the equipment you need, choose your rental dates, and submit a request. The equipment owner will review and approve your request, after which you can proceed with payment.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including UPI, credit/debit cards, net banking, and wallet payments. All transactions are secured and processed through our trusted payment partners.',
  },
  {
    question: 'How do I list my equipment for rent?',
    answer: 'Create an owner account, go to your dashboard, and click "Add Equipment". Fill in the details including equipment type, daily rental rate, availability, and upload photos. Once submitted, our team will verify your listing.',
  },
  {
    question: 'What if the equipment gets damaged during rental?',
    answer: 'All rentals are covered by our protection policy. We recommend inspecting equipment before and after rental. In case of damage, document it with photos and contact our support team immediately.',
  },
  {
    question: 'Can I cancel my booking?',
    answer: 'Yes, you can cancel your booking up to 24 hours before the rental start date for a full refund. Cancellations made within 24 hours may be subject to a cancellation fee.',
  },
  {
    question: 'How are equipment owners verified?',
    answer: 'All equipment owners go through a verification process that includes ID verification, address proof, and equipment documentation. We also verify equipment ownership documents.',
  },
];

const rentalSteps = [
  {
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up as a renter with your basic details and complete verification.',
  },
  {
    icon: Tractor,
    title: 'Browse & Select',
    description: 'Search equipment by category, location, and availability. View details and reviews.',
  },
  {
    icon: CreditCard,
    title: 'Book & Pay',
    description: 'Choose rental dates, submit request, and pay securely once approved.',
  },
  {
    icon: Shield,
    title: 'Use & Return',
    description: 'Pick up equipment, use it for your farming needs, and return on time.',
  },
];

const Help = () => {
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
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Help Center
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              Find answers to common questions, learn how to use Agrirent, or get in touch with our support team.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-primary" />
              Rental Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rentalSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Still Need Help?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg">
                    <MessageCircle className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="lg:pl-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:dubeyk7649@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        dubeyk7649@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+919131809606" className="text-muted-foreground hover:text-primary transition-colors">
                        +91-9131809606
                      </a>
                    </div>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-6 mt-8">
                    <h3 className="font-semibold text-foreground mb-2">Support Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Saturday: 9:00 AM - 6:00 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
