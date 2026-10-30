export interface CoffeeVendor {
  id: string;
  name: string;
  pricePerCup: number;
  minCups: number;
}

export const coffeeVendors: CoffeeVendor[] = [
  { id: 'c1', name: 'Kopi Kenangan Mantan Package', pricePerCup: 15000, minCups: 200 },
  { id: 'c2', name: 'Janji Jiwa Wedding Bar', pricePerCup: 18000, minCups: 150 },
  { id: 'c3', name: 'Artisan Espresso Station', pricePerCup: 25000, minCups: 100 },
];
