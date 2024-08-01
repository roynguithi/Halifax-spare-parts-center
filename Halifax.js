import React, { useState, useEffect } from 'react';
import './Halifax.css';
import SparePartsList from './SparePartsList';

function App() {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/spareParts')
      .then(response => response.json())
      .then(data => {
        setParts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="Halifax">Loading...</div>;
  }

  if (error) {
    return <div className="Halifax">Error: {error.message}</div>;
  }

  return (
    <div className="Halifax">
      <header className="Halifax-header">
        <h1>Halifax Spare Parts Center</h1>
      </header>
      <main>
        {parts.length > 0 ? (
          <SparePartsList parts={parts} />
        ) : (
          <p>No spare parts available.</p>
        )}
      </main>
    </div>
  );
}

export default Halifax;