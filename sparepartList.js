import React from 'react'; // Import React library
import SparePart from './SparePart'; // Import the SparePart component to render individual spare parts
import './SparePartsList.css'; // Import CSS for styling the SparePartsList component

function SparePartsList({ parts }) {
  // Component receives a 'parts' prop, which is an array of spare parts

  return (
    <div className="spare-parts-list">
      {/* Map over the array of parts and render a SparePart component for each */}
      {parts.map(part => (
        <SparePart key={part.id} part={part} /> // Pass each part to the SparePart component with a unique key
      ))}
    </div>
  );
}

export default SparePartsList; // Export the SparePartsList component as default