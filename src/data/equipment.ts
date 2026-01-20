export interface Equipment {
  id: string;
  name: string;
  category: string;
  rentPerDay: number;
  owner: string;
  status: 'available' | 'rented' | 'maintenance';
  description: string;
  image: string;
  rating: number;
  reviews: number;
  location: string;
}

export const categories = [
  'Tractors',
  'Harvesters',
  'Seeders',
  'Ploughs',
  'Irrigation Systems',
  'Sprayers',
  'Tillers',
  'Balers',
] as const;

const ownerNames = [
  'Rajesh Farms', 'Kumar Agriculture', 'Singh Enterprises', 'Patel Agro',
  'Sharma Farming', 'Gupta Agriculture', 'Verma Farms', 'Yadav Agro',
  'Reddy Enterprises', 'Joshi Farming'
];

const locations = [
  'Punjab', 'Haryana', 'Maharashtra', 'Gujarat', 'Madhya Pradesh',
  'Uttar Pradesh', 'Rajasthan', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh'
];

const tractorNames = [
  'Mahindra 575 DI', 'John Deere 5310', 'Sonalika DI 60', 'Massey Ferguson 1035',
  'TAFE 45 DI', 'Eicher 485', 'Kubota MU4501', 'New Holland 3600',
  'Swaraj 744 FE', 'Farmtrac 60'
];

const harvesterNames = [
  'Combine Harvester Pro', 'Multi-Crop Harvester', 'Self-Propelled Harvester',
  'Mini Harvester', 'Track Harvester', 'Rice Harvester'
];

const seederNames = [
  'Pneumatic Seed Drill', 'Zero Till Seed Drill', 'Multi-Crop Planter',
  'Precision Seeder', 'Rotary Seeder', 'Broadcast Seeder'
];

const ploughNames = [
  'MB Plough Heavy Duty', 'Disc Plough 3-Furrow', 'Chisel Plough',
  'Reversible Plough', 'Mould Board Plough', 'Subsoiler'
];

const irrigationNames = [
  'Drip Irrigation System', 'Sprinkler System', 'Center Pivot System',
  'Submersible Pump Set', 'Diesel Pump Set', 'Solar Pump System'
];

const sprayerNames = [
  'Tractor Mounted Sprayer', 'Boom Sprayer 500L', 'Orchard Sprayer',
  'Battery Operated Sprayer', 'Mist Blower', 'Drone Sprayer'
];

const tillerNames = [
  'Power Tiller 12HP', 'Rotavator 5ft', 'Cultivator Heavy Duty',
  'Mini Tiller', 'Garden Tiller', 'Walk Behind Tiller'
];

const balerNames = [
  'Round Baler', 'Square Baler', 'Mini Round Baler',
  'Silage Baler', 'Hay Baler', 'Straw Baler'
];

const getEquipmentByCategory = (category: string): string[] => {
  switch (category) {
    case 'Tractors': return tractorNames;
    case 'Harvesters': return harvesterNames;
    case 'Seeders': return seederNames;
    case 'Ploughs': return ploughNames;
    case 'Irrigation Systems': return irrigationNames;
    case 'Sprayers': return sprayerNames;
    case 'Tillers': return tillerNames;
    case 'Balers': return balerNames;
    default: return tractorNames;
  }
};

const getRentRange = (category: string): [number, number] => {
  switch (category) {
    case 'Tractors': return [1500, 4000];
    case 'Harvesters': return [5000, 15000];
    case 'Seeders': return [800, 2500];
    case 'Ploughs': return [500, 1500];
    case 'Irrigation Systems': return [1000, 5000];
    case 'Sprayers': return [400, 2000];
    case 'Tillers': return [600, 1800];
    case 'Balers': return [2000, 6000];
    default: return [1000, 3000];
  }
};

const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateEquipment = (): Equipment[] => {
  const equipment: Equipment[] = [];
  let id = 1;

  categories.forEach(category => {
    const names = getEquipmentByCategory(category);
    const [minRent, maxRent] = getRentRange(category);
    const itemsPerCategory = Math.ceil(100 / categories.length);

    for (let i = 0; i < itemsPerCategory && equipment.length < 100; i++) {
      const name = names[i % names.length];
      const variant = i >= names.length ? ` - Model ${Math.floor(i / names.length) + 1}` : '';
      
      equipment.push({
        id: `EQ${String(id).padStart(4, '0')}`,
        name: `${name}${variant}`,
        category,
        rentPerDay: getRandomNumber(minRent, maxRent),
        owner: getRandomElement(ownerNames),
        status: Math.random() > 0.2 ? 'available' : Math.random() > 0.5 ? 'rented' : 'maintenance',
        description: `High-quality ${category.toLowerCase().slice(0, -1)} available for rent. Well-maintained and ready for immediate use. Perfect for ${category === 'Tractors' ? 'all farming operations' : category.toLowerCase()} needs.`,
        image: `/placeholder.svg`,
        rating: Number((3.5 + Math.random() * 1.5).toFixed(1)),
        reviews: getRandomNumber(5, 150),
        location: getRandomElement(locations),
      });
      id++;
    }
  });

  return equipment;
};

export const equipmentData = generateEquipment();

export const featuredEquipment = equipmentData.filter(eq => eq.status === 'available').slice(0, 6);
