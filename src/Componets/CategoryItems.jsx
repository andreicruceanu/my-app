import React from "react";
import "./CategoryItems.css";

function CategoryItems(props) {
  const { image, name, price, currency } = props;

  return (
    <div className="CategoryItems px-4 py-4">
      <div className="container-img">
        <img src={image} alt="imagineProdus" />
      </div>
      <p>{name}</p>
      <p>
        {price} <span>{currency}</span>
      </p>
      <button type="button" className="btn btn-outline-secondary">
        Secondary
      </button>
    </div>
  );
}

export default CategoryItems;
