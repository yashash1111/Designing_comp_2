// write product card here
import React from "react";
import ViewProductButton from "../components/button"; // Import the button component

const Productcard = () => {
  // Dummy product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const productPrice = "$99.99";

  return (
    <div className="border rounded-lg p-4 shadow-md w-64 text-center">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-bold">{productName}</h2>
      <p className="text-gray-600">{productPrice}</p>
      <div className="mt-2">
        <ViewProductButton /> {/* Using the ViewProductButton component */}
      </div>
    </div>
  );
};

export default Productcard;
