
import React, { useState, useContext } from 'react';
import { MarketListing } from '../../types';
import Card from '../Card';
import { mockMarketListings } from '../../services/mockDataService';
import { AppContext } from '../../AppContext';
import { TEXTS } from '../../constants';
import { ShoppingCartIcon, PlusCircleIcon, TagIcon } from '../Icons'; // Assuming Icons.tsx exists

const MarketListItem: React.FC<{ listing: MarketListing }> = ({ listing }) => (
  <Card className="mb-4 hover:shadow-xl transition-shadow duration-300">
    <div className="flex flex-col sm:flex-row gap-4">
      <img 
        src={listing.imageUrl || `https://picsum.photos/seed/${listing.id}/200/150`} 
        alt={listing.cropName} 
        className="w-full sm:w-1/3 h-40 sm:h-auto object-cover rounded-lg"
      />
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-primary dark:text-green-400">{listing.cropName}</h3>
        <p className="text-gray-600 dark:text-gray-400"><TagIcon className="w-4 h-4 inline mr-1" /> {listing.quantity} at {listing.price}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">Seller: {listing.sellerName}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">Location: {listing.location}</p>
        {listing.contact && <p className="text-sm text-blue-500 dark:text-blue-400">Contact: {listing.contact}</p>}
        <span className={`mt-2 inline-block px-2 py-1 text-xs font-semibold rounded-full ${listing.type === 'sell' ? 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100' : 'bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100'}`}>
          {listing.type === 'sell' ? 'For Sale' : 'Looking to Buy'}
        </span>
      </div>
    </div>
  </Card>
);

const MarketLinkPage: React.FC = () => {
  const [listings, setListings] = useState<MarketListing[]>(mockMarketListings);
  const [showForm, setShowForm] = useState(false);
  const [newListing, setNewListing] = useState<Omit<MarketListing, 'id'>>({
    cropName: '', quantity: '', price: '', sellerName: 'Current Farmer (You)', location: '', type: 'sell', imageUrl: 'https://picsum.photos/seed/new/200/150'
  });

  const context = useContext(AppContext);
  const lang = context?.language || 'en';
  const texts = TEXTS[lang];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewListing(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const listingToAdd: MarketListing = { ...newListing, id: Date.now().toString() };
    setListings(prev => [listingToAdd, ...prev]);
    setShowForm(false);
    setNewListing({ cropName: '', quantity: '', price: '', sellerName: 'Current Farmer (You)', location: '', type: 'sell', imageUrl: 'https://picsum.photos/seed/new/200/150' });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{texts.marketLinkTitle}</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center transition-colors"
        >
          <PlusCircleIcon className="w-5 h-5 mr-2" /> {showForm ? 'Cancel' : 'List Your Produce'}
        </button>
      </div>

      {showForm && (
        <Card title="Add New Listing" className="bg-gray-50 dark:bg-gray-800">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="cropName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Crop Name</label>
              <input type="text" name="cropName" id="cropName" value={newListing.cropName} onChange={handleInputChange} required className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-gray-200" />
            </div>
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Quantity (e.g., 50kg)</label>
              <input type="text" name="quantity" id="quantity" value={newListing.quantity} onChange={handleInputChange} required className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-gray-200" />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price (e.g., ₹20/kg)</label>
              <input type="text" name="price" id="price" value={newListing.price} onChange={handleInputChange} required className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-gray-200" />
            </div>
             <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
              <input type="text" name="location" id="location" value={newListing.location} onChange={handleInputChange} required className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-gray-200" />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Listing Type</label>
              <select name="type" id="type" value={newListing.type} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-gray-200">
                <option value="sell">For Sale</option>
                <option value="buy">Looking to Buy</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-accent hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors">Add Listing</button>
          </form>
        </Card>
      )}

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200 flex items-center">
            <ShoppingCartIcon className="w-7 h-7 mr-2 text-primary dark:text-green-400" />
            Current Market Listings
        </h2>
        {listings.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No listings available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listings.map(listing => <MarketListItem key={listing.id} listing={listing} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketLinkPage;
    