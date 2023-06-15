import React from 'react'

export default function LocationDetails({ place }) {
  return (
    <div>
      <h1>{place.name}</h1>
      <p><strong>Address:</strong> Address: {place.address}</p>
      <p><strong>Phone:</strong> {place.phone}</p>
      {place.cuisine && place.cuisine.length > 0 && (
        <p><strong>Cuisine:</strong> {place.cuisine.map((cuisine) => cuisine.name).join(", ")}</p>
      )}
      <p><strong>Website:</strong> {place.website}</p>
    </div>
  );
}