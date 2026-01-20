import { Search, Calendar, CreditCard, Truck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Search Equipment',
    description: 'Browse our extensive catalog of farming equipment. Filter by category, location, and availability.',
  },
  {
    icon: Calendar,
    step: '02',
    title: 'Select Dates',
    description: 'Choose your rental period. Whether it\'s a day, week, or season - we\'ve got you covered.',
  },
  {
    icon: CreditCard,
    step: '03',
    title: 'Book & Pay',
    description: 'Confirm your booking with secure payment. Get instant confirmation from the equipment owner.',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Get Farming',
    description: 'Pick up the equipment or get it delivered. Start farming smarter with modern tools.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Agrirent Works
          </h2>
          <p className="text-background/70 text-lg">
            Renting farm equipment has never been easier. Follow these simple steps to get started.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-8 h-full hover:bg-background/10 transition-colors">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-extrabold text-primary/30 group-hover:text-primary/50 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-background/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-primary items-center justify-center">
                    <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
