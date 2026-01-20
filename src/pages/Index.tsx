import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Benefits from '@/components/home/Benefits';
import FeaturedEquipment from '@/components/home/FeaturedEquipment';
import HowItWorks from '@/components/home/HowItWorks';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <FeaturedEquipment />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
