import { Tractor, Users, CreditCard, MapPin, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Tractor,
    title: 'Wide Equipment Range',
    description: 'From tractors to harvesters, find everything you need for your farming operations in one place.',
  },
  {
    icon: CreditCard,
    title: 'Affordable Rentals',
    description: 'Pay only for what you use. No huge upfront costs, no maintenance headaches.',
  },
  {
    icon: MapPin,
    title: 'Local Availability',
    description: 'Find equipment available near your farm. Reduce transportation costs and time.',
  },
  {
    icon: Users,
    title: 'Verified Owners',
    description: 'All equipment owners are verified. Rent with confidence and peace of mind.',
  },
  {
    icon: Clock,
    title: 'Flexible Duration',
    description: 'Rent for a day, a week, or a season. Choose what works best for your needs.',
  },
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Safe and secure payment processing. Your money is protected at every step.',
  },
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Why Choose Agrirent
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Farm Smarter, Not Harder
          </h2>
          <p className="text-muted-foreground text-lg">
            We make it easy to access the equipment you need, when you need it, without breaking the bank.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
