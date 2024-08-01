import React from 'react';
import './SparePart.css';

function SparePart({ part }) {
  return (
    <div className="spare-part">
      {part.price < 10 && <div className="sale-badge">Sale</div>}
      <img src={part.image} alt={part.name} className="spare-part-image" />
      <h2>{part.name}</h2>
      <p>{part.description}</p>
      <p>Category: {part.category}</p>
      <p>Price: ${part.price}</p>
    </div>
  );
}

export default SparePart;