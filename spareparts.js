import React from 'react'; // Import React library for creating the component
import './SparePart.css'; // Import CSS for styling the SparePart component

function SparePart({ part }) {
  // Component receives a 'part' prop, which contains details about a single spare part

  return (
    <div className="spare-part">
      {/* Conditionally render a "Sale" badge if the part's price is less than $10 */}
      {part.price < 10 && <div className="sale-badge">Sale</div>}
      <img src={part.image} alt={part.name} className="spare-part-image" />
      <h2>{part.name}</h2>
      <p>{part.description}</p>
       <p>Category: {part.category}</p>
      <p>Price: ${part.price}</p>
    </div>
  );
}

export default SparePart; // Export the SparePart component as the default export