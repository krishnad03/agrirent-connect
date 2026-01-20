import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Tractor, Users } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Renters */}
          <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 md:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border-[40px] border-primary-foreground" />
              <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full border-[30px] border-primary-foreground" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                <Tractor className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Looking for Equipment?
              </h3>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-md">
                Browse our wide selection of farming equipment and find the perfect tools for your next harvest.
              </p>
              <Link to="/signup/renter">
                <Button variant="heroOutline" size="lg" className="group/btn">
                  Start Renting
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* For Owners */}
          <div className="relative group overflow-hidden rounded-3xl bg-card border-2 border-border p-10 md:p-12 hover:border-primary/30 transition-colors">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border-[40px] border-foreground" />
              <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full border-[30px] border-foreground" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Have Equipment to Rent?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-md">
                Turn your idle equipment into a revenue stream. List your machinery and start earning today.
              </p>
              <Link to="/signup/owner">
                <Button size="lg" className="group/btn">
                  List Equipment
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
