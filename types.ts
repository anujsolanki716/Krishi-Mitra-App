
export interface Crop {
  id: string;
  name: string;
  image: string;
  description: string;
  plantingSeason?: string;
  harvestTime?: string;
}

export interface MarketListing {
  id: string;
  cropName: string;
  quantity: string; // e.g., "50kg", "10 quintals"
  price: string; // e.g., "₹20/kg", "₹2000/quintal"
  sellerName: string;
  location: string;
  contact?: string;
  imageUrl?: string;
  type: 'buy' | 'sell';
}

export interface GovernmentScheme {
  id:string;
  name: string;
  description: string;
  eligibility: string;
  benefits: string;
  howToApply: string;
  link?: string;
  language: 'en' | 'hi' | 'ta'; 
}

export interface ForumPost {
  id: string;
  title: string;
  author: string;
  content: string;
  timestamp: string;
  replies?: ForumReply[];
  tags?: string[];
}

export interface ForumReply {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

export interface VideoTutorial {
  id: string;
  title: string;
  description: string;
  videoUrl: string; // YouTube embed URL for example
  thumbnailUrl: string;
}

export interface LocalBusiness {
  id: string;
  name: string;
  category: string; // e.g., "Agri Inputs", "Repair Services", "Handicrafts"
  description: string;
  contact: string;
  location: string;
  imageUrl?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}
    