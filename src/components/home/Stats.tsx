const stats = [
  { value: '10,000+', label: 'Happy Farmers' },
  { value: '500+', label: 'Equipment Listed' },
  { value: '₹2Cr+', label: 'Savings Generated' },
  { value: '15+', label: 'States Covered' },
];

const Stats = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/70 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
