import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Star, MapPin, Tractor } from 'lucide-react';
import { useState } from 'react';
import { equipmentData, categories } from '@/data/equipment';

const Equipment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredEquipment = equipmentData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Browse Equipment
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              Find the perfect farming equipment for your needs. Choose from over 100 verified listings.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search equipment..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <select
                className="h-10 px-4 rounded-lg border border-input bg-background text-foreground"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                className="h-10 px-4 rounded-lg border border-input bg-background text-foreground"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="rented">Rented</option>
              </select>

              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                More Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <p className="text-muted-foreground mb-6">
              Showing {filteredEquipment.length} of {equipmentData.length} equipment
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEquipment.map((item) => (
                <div
                  key={item.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  {/* Image */}
                  <div className="relative h-40 bg-secondary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Tractor className="w-16 h-16 text-primary/20" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        item.status === 'available' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                        <span className="font-medium text-foreground">{item.rating}</span>
                        <span>({item.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div>
                        <span className="text-xl font-bold text-primary">₹{item.rentPerDay.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground">/day</span>
                      </div>
                      <Button size="sm" variant="soft">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredEquipment.length === 0 && (
              <div className="text-center py-16">
                <Tractor className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No equipment found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Equipment;
