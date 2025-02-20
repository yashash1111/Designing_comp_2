import React from "react";
import Productcard from "./components/productcard";



function App() {
  const cards = Array.from({ length: 10 }); // Creating an array for 10 product cards
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-4 gap-4">
        {cards.map((_, index) => (
          <Productcard key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
