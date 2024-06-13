import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CityPage.css';

const CityPage = () => {
  const { city, state } = useParams();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/restaurants');
        const data = await response.json();
        const filteredRestaurants = data.filter(
          (restaurant) =>
            restaurant.city.toLowerCase() === city.toLowerCase() &&
            restaurant.state.toLowerCase() === state.toLowerCase()
        );
        setRestaurants(filteredRestaurants);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, [city, state]);

  return (
    <div>
      <h1>Restaurants in {city}, {state.toUpperCase()}</h1>
      {restaurants.length > 0 ? (
        <ul>
          {restaurants.map((restaurant, index) => (
            <li key={index} className="restaurant-card">
              <h2>{restaurant.name}</h2>
              <p>{restaurant.address}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No restaurants found in this area.</p>
      )}
    </div>
  );
};

export default CityPage;