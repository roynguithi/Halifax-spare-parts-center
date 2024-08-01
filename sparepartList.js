import React from 'react';
import SparePart from './SparePart';
import './SparePartsList.css';

function SparePartsList({ parts }) {
  return (
    <div className="spare-parts-list">
      {parts.map(part => (
        <SparePart key={part.id} part={part} />
      ))}
    </div>
  );
}

export default SparePartsList;