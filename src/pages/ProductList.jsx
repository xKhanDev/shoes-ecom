// src/pages/ProductList.jsx
import { useState } from "react";
import shoesData from "../data/shoes";
import Card from "../components/Card";

const ProductList = () => {
  const [shoes, setShoes] = useState(shoesData);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">All Shoes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shoes.map((shoe) => (
          <Card key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
