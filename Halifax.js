import React, { useState, useEffect } from 'react'; // Import necessary React hooks and libraries
import './Halifax.css'; // Import CSS for styling the component
import SparePartsList from './SparePartsList'; // Import the SparePartsList component to display spare parts

function App() {
  // Define state variables using the useState hook
  const [parts, setParts] = useState([]); // State to hold the spare parts data
  const [loading, setLoading] = useState(true); // State to track if data is being loaded
  const [error, setError] = useState(null); // State to track any errors during data fetch

  // useEffect hook to perform side effects, such as data fetching
  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/spareParts')
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        setParts(data); // Update the state with fetched data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        setError(error); // Update the state with any errors encountered
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []); // Empty dependency array means this effect runs once on component mount

  // Conditional rendering based on the loading and error states
  if (loading) {
    return <div className="Halifax">Loading...</div>; // Display loading message while data is being fetched
  }

  if (error) {
    return <div className="Halifax">Error: {error.message}</div>; // Display error message if an error occurs
  }

  // Main render when data is successfully fetched
  return (
    <div className="Halifax">
      <header className="Halifax-header">
        <h1>Halifax Spare Parts Center</h1> {/* Display the main heading */}
      </header>
      <main>
        {parts.length > 0 ? (
          <SparePartsList parts={parts} /> // Render SparePartsList component if there are parts
        ) : (
          <p>No spare parts available.</p> // Display message if no parts are available
        )}
      </main>
    </div>
  );
}

export default Halifax; // Export the App component as default