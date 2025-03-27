import { useState } from "react";

const museums = [
  { name: "ARoS Aarhus Art Museum", price: 150, type: "Art" },
  { name: "Moesgaard Museum", price: 160, type: "History" },
  { name: "Den Gamle By (Old Town)", price: 145, type: "History" },
  { name: "Steno Museum", price: 80, type: "Science" },
  { name: "Natural History Museum Aarhus", price: 95, type: "Nature" },
  { name: "Kunsthal Aarhus", price: 75, type: "Art" },
  { name: "Viking Museum", price: 50, type: "History" },
  { name: "Women's Museum", price: 65, type: "Culture" },
  { name: "Godsbanen", price: 0, type: "Art" },
  { name: "Dokk1", price: 0, type: "Library" },
  { name: "Aarhus Botanical Gardens", price: 0, type: "Nature" },
  { name: "Museum Ovartaci", price: 90, type: "Art" },
  { name: "Marselisborg Palace Park", price: 0, type: "Royal" },
  { name: "KØN Gender Museum Denmark", price: 70, type: "Culture" },
  { name: "Tivoli Friheden", price: 145, type: "Amusement" }
];

export default function RecommendationPage() {
  const [maxPrice, setMaxPrice] = useState(200);
  const [selectedType, setSelectedType] = useState("");

  const filteredMuseums = museums.filter(
    (museum) =>
      museum.price <= maxPrice &&
      (selectedType === "" || museum.type === selectedType)
  );

  return (
    <div className="container mx-auto px-4 py-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Recommended Museums in Aarhus
      </h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <label className="text-gray-700 font-medium">Max Price (DKK):</label>
          <input
            type="range"
            min="0"
            max="200"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-48 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-gray-700 font-semibold">{maxPrice} DKK</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <label className="text-gray-700 font-medium">Category:</label>
          <select 
            onChange={(e) => setSelectedType(e.target.value)}
            className="form-select block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">All</option>
            <option value="Art">Art</option>
            <option value="History">History</option>
            <option value="Science">Science</option>
            <option value="Nature">Nature</option>
            <option value="Culture">Culture</option>
            <option value="Royal">Royal</option>
            <option value="Library">Library</option>
            <option value="Amusement">Amusement</option>
          </select>
        </div>
      </div>

      {filteredMuseums.length > 0 ? (
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMuseums.map((museum, index) => (
            <li 
              key={index} 
              className="bg-blue-50 p-4 rounded-lg shadow-sm hover:bg-blue-100 transition-colors"
            >
              <div className="flex justify-between items-center">
                <strong className="text-lg font-semibold text-gray-800">
                  {museum.name}
                </strong>
                <span className="text-sm text-blue-600 font-medium">
                  {museum.price} DKK
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Category: {museum.type}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500 py-6">
          No museums match your current filters.
        </div>
      )}
    </div>
  );
}