export type FishCategory = 
  | 'all'
  | 'red-sea'
  | 'fresh'
  | 'frozen'
  | 'crustaceans'
  | 'fillet';

export interface FishProduct {
  id: string;
  name: string;
  localArabicName?: string;
  scientificName?: string;
  category: ('red-sea' | 'fresh' | 'frozen' | 'crustaceans' | 'fillet')[];
  desc: string;
  flavor: string;
  texture: string;
  cookingMethods: string[];
  wildOrFarmed: 'Wild-Caught' | 'Aquaculture' | 'Wild & Farmed';
  image: string;
  origin: string;
  featured?: boolean;
  averageWeight?: string;
  seasonality?: string;
}

export interface QuoteRequest {
  fullName: string;
  companyName: string;
  businessType: 'Restaurant' | 'Hotel' | 'Catering' | 'Supermarket' | 'Wholesale Trader' | 'Home / Individual';
  email: string;
  phone: string;
  city: string;
  selectedFish: string[];
  volumeKg: number;
  frequency: 'One-time' | 'Weekly' | 'Bi-weekly' | 'Monthly Contract';
  specialRequirements: string;
}
