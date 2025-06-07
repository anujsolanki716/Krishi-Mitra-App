
import { Crop, MarketListing, GovernmentScheme, ForumPost, VideoTutorial, LocalBusiness } from '../types';

export const mockCrops: Crop[] = [
  { id: '1', name: 'Rice (धान)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Mature_Rice_%28India%29_by_Augustus_Binu.jpg/330px-Mature_Rice_%28India%29_by_Augustus_Binu.jpg', description: 'Staple food crop, requires significant water.', plantingSeason: 'Kharif (June-July)', harvestTime: 'October-November' },
  { id: '2', name: 'Wheat (गेहूँ)', image: 'https://media.istockphoto.com/id/177537480/photo/gold-wheat-field-and-blue-sky.jpg?s=612x612&w=0&k=20&c=CAxLzTeCt4qBn7fifuoOh70ycoHr9w7FyeNVzkde_IM=', description: 'Major winter cereal crop.', plantingSeason: 'Rabi (October-December)', harvestTime: 'February-April' },
  { id: '3', name: 'Maize (मक्का)', image: 'https://www.shutterstock.com/image-photo/fresh-corn-cobs-dry-seeds-260nw-1784181305.jpg', description: 'Versatile crop used for food and feed.', plantingSeason: 'Kharif / Spring', harvestTime: 'Varies' },
  { id: '4', name: 'Cotton (कपास)', image: 'https://t4.ftcdn.net/jpg/06/84/31/79/360_F_684317966_Pn9qU1DEfW5zpwoj25znJ1i0VdaOM2Px.jpg', description: 'Important fiber crop.', plantingSeason: 'Kharif (April-May)', harvestTime: 'October-December' },
];

export const mockMarketListings: MarketListing[] = [
  { id: 'm1', cropName: 'Organic Tomatoes', quantity: '100kg', price: '₹30/kg', sellerName: 'Naneen Solanki', location: 'Chandigarh', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAQBnuCIIdX38FyG9Ey2wjeGlf0pU_gx3vw&s', type: 'sell' },
  { id: 'm2', cropName: 'Basmati Rice', quantity: '5 Quintals', price: '₹7000/quintal', sellerName: 'Anuj Farm', location: 'Kapna, Jhajhar', imageUrl: 'https://media.istockphoto.com/id/519309790/photo/pile-of-raw-basmati-rice-with-a-spoon.jpg?s=612x612&w=0&k=20&c=A9A87HykypkOo5qLMQm6bZjBQn83NE1NHMppw8-6Tnc=', type: 'sell' },
  { id: 'm3', cropName: 'Fresh Mangoes (Alphonso)', quantity: '200 kg', price: 'Market Rate', sellerName: 'Solanki Junction', location: 'Near Jewar Airport Kapna', imageUrl: 'https://media.istockphoto.com/id/1152750103/photo/sliced-alphonso-mangoes.jpg?s=612x612&w=0&k=20&c=hEnXEjJC0WPVA7OzTIVY_DMeexjSAX_Dk5RCEgOX_S8=', type: 'buy' },
];

export const mockGovernmentSchemes: GovernmentScheme[] = [
  { 
    id: 's1', 
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)', 
    description: 'Crop insurance scheme to provide financial support to farmers suffering crop loss/damage arising out of unforeseen events.',
    eligibility: 'All farmers including sharecroppers and tenant farmers growing notified crops in the notified areas are eligible for coverage.',
    benefits: 'Insurance coverage against crop failure, subsidized premium rates.',
    howToApply: 'Contact nearest bank, CSC, or insurance company. Online application via national crop insurance portal.',
    link: 'https://pmfby.gov.in/',
    language: 'en'
  },
  { 
    id: 's2', 
    name: 'PM-Kisan Samman Nidhi', 
    description: 'Direct income support of ₹6,000 per year to all landholding farmer families.',
    eligibility: 'All landholding eligible farmer families (subject to certain exclusion criteria).',
    benefits: '₹2,000 every four months directly into bank accounts.',
    howToApply: 'Register through PM-KISAN portal or local agriculture office.',
    link: 'https://pmkisan.gov.in/',
    language: 'en'
  },
   { 
    id: 's1hi', 
    name: 'प्रधानमंत्री फसल बीमा योजना (पीएमएफबीवाई)', 
    description: 'अप्रत्याशित घटनाओं से होने वाली फसल हानि/क्षति से पीड़ित किसानों को वित्तीय सहायता प्रदान करने के लिए फसल बीमा योजना।',
    eligibility: 'अधिसूचित क्षेत्रों में अधिसूचित फसलें उगाने वाले सभी किसान, जिनमें बटाईदार और किरायेदार किसान भी शामिल हैं, कवरेज के लिए पात्र हैं।',
    benefits: 'फसल विफलता के खिलाफ बीमा कवरेज, रियायती प्रीमियम दरें।',
    howToApply: 'निकटतम बैंक, सीएससी, या बीमा कंपनी से संपर्क करें। राष्ट्रीय फसल बीमा पोर्टल के माध्यम से ऑनलाइन आवेदन करें।',
    link: 'https://pmfby.gov.in/',
    language: 'hi'
  },
  { 
    id: 's2hi', 
    name: 'पीएम-किसान सम्मान निधि', 
    description: 'सभी भूमिधारक किसान परिवारों को प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता।',
    eligibility: 'सभी भूमिधारक पात्र किसान परिवार (कुछ बहिष्करण मानदंडों के अधीन)।',
    benefits: 'हर चार महीने में ₹2,000 सीधे बैंक खातों में।',
    howToApply: 'पीएम-किसान पोर्टल या स्थानीय कृषि कार्यालय के माध्यम से पंजीकरण करें।',
    link: 'https://pmkisan.gov.in/',
    language: 'hi'
  },
  // { 
  //   id: 's1ta', 
  //   name: 'பிரதம மந்திரி ஃபசல் பீமா யோஜனா (PMFBY)', 
  //   description: 'எதிர்பாராத நிகழ்வுகளால் பயிர் இழப்பு/சேதம் அடையும் விவசாயிகளுக்கு நிதி உதவி வழங்கும் பயிர் காப்பீட்டுத் திட்டம்.',
  //   eligibility: 'அறிவிக்கப்பட்ட பகுதிகளில் அறிவிக்கப்பட்ட பயிர்களை பயிரிடும் அனைத்து விவசாயிகளும், குத்தகைதாரர்கள் மற்றும் பங்குதாரர்கள் உட்பட, காப்பீட்டிற்கு தகுதியானவர்கள்.',
  //   benefits: 'பயிர் தோல்விக்கு எதிரான காப்பீட்டுத் தொகை, மானிய விலையில் பிரீமியம்.',
  //   howToApply: 'அருகிலுள்ள வங்கி, CSC, அல்லது காப்பீட்டு நிறுவனத்தைத் தொடர்பு கொள்ளவும். தேசிய பயிர் காப்பீட்டு போர்டல் மூலம் ஆன்லைனில் விண்ணப்பிக்கவும்.',
  //   link: 'https://pmfby.gov.in/',
  //   language: 'ta'
  // },
];


export const mockForumPosts: ForumPost[] = [
  { id: 'f1', title: 'Best practices for organic tomato farming?', author: 'Farmer Gita', content: 'I am planning to start organic tomato farming. Can anyone share some tips on soil preparation and pest control without chemicals?', timestamp: '2 days ago', tags: ['organic', 'tomato', 'pest control'] },
  { id: 'f2', title: 'Success Story: Drip Irrigation increased my yield!', author: 'Ravi Kumar', content: 'Just wanted to share that installing drip irrigation for my vegetable farm has saved water and boosted my yield by almost 30%. Highly recommend!', timestamp: '5 days ago', tags: ['drip irrigation', 'success story', 'vegetables'] },
];

export const mockVideoTutorials: VideoTutorial[] = [
  { id: 'v1', title: 'How to Make Vermicompost at Home', description: 'Step-by-step guide to creating nutrient-rich vermicompost for your farm.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl: 'https://picsum.photos/seed/vermicompost/300/150' },
  { id: 'v2', title: 'Identifying Common Crop Diseases', description: 'Learn to identify early signs of common diseases in major crops like rice and wheat.', videoUrl: 'https://www.youtube.com/embed/oHg5SJYRHA0', thumbnailUrl: 'https://picsum.photos/seed/cropdisease/300/150' },
];

export const mockLocalBusinesses: LocalBusiness[] = [
  { id: 'b1', name: 'Vipin Agriculture Store', category: 'Agriculture Inputs Store', description: 'Sells quality seeds, fertilizers, and pesticides.', contact: '7500421643', location: 'Village - Kapna, Jahangirpur Road Kapna', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AfX-KG53tyyxdTO1OMghkyKYwEq8ca6qxw&s' },
  { id: 'b2', name: 'Jyoti Self Help Group - Handicrafts', category: 'Handicrafts', description: 'Beautiful handmade items by local women artisans.', contact: 'shgjyoti@email.com', location: 'Village Community Hall', imageUrl: 'https://st3.depositphotos.com/33041278/36030/i/450/depositphotos_360304132-stock-photo-faridabad-haryana-india-february-2020.jpg' },
  { id: 'b3', name: 'Saddam Ali Khan Farm Equipment Repair', category: 'Repair Services', description: 'Expert repair for tractors, pumps, and other farm machinery.', contact: '7668766264', location: 'Kapna, Jhajhar', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/9/CE/RU/ST/115179424/agriculture-machinery-repair-service-500x500.jpg' },
];
    