// src/components/Card.jsx
import { Link } from "react-router-dom";

const Card = ({ shoe }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={shoe.image}
          alt={shoe.name}
          className="h-40 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{shoe.name}</h2>
        <p className="text-lg font-semibold">${shoe.price}</p>
        <div className="card-actions justify-end">
          <Link to={`/product/${shoe.id}`} className="btn btn-secondary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
