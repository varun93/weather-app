import React from "react";

const AddCity = ({ city, addCity, handleFieldChange }) => {
  return (
    <div>
      <input onChange={handleFieldChange} value={city} placeholder="Add City" />
      <button onClick={() => addCity(city)}> Add </button>
    </div>
  );
};

export default AddCity;
