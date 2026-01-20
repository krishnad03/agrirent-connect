import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, MapPin, ArrowRight, Tractor } from 'lucide-react';
import { featuredEquipment } from '@/data/equipment';

const FeaturedEquipment = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Featured Equipment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Popular Rentals Near You
            </h2>
          </div>
          <Link to="/equipment">
            <Button variant="outline" className="group">
              View All Equipment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEquipment.map((item, index) => (
            <div
              key={item.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 bg-secondary overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Tractor className="w-20 h-20 text-primary/30" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'available' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {item.status === 'available' ? 'Available' : 'Rented'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="font-medium text-foreground">{item.rating}</span>
                    <span>({item.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-primary">₹{item.rentPerDay.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">/day</span>
                  </div>
                  <Button size="sm" variant="soft">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEquipment;
