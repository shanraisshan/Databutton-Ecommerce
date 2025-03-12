import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, image, category }) => {
  const navigate = useNavigate();
  
  const handleViewDetails = () => {
    navigate(`/ProductDetail?id=${id}`);
  };
  return (
    <div className="group relative overflow-hidden rounded-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div 
        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-md bg-gray-200 group-hover:opacity-75"
        onClick={handleViewDetails}
      >
        <img
          src={image}
          alt={name}
          className="h-80 w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex flex-col items-start p-3">
        <h3 
          className="text-sm text-gray-700 cursor-pointer hover:text-black"
          onClick={handleViewDetails}
        >
          {name}
        </h3>

        <p className="mt-1 text-lg font-medium text-black">${price.toFixed(2)}</p>
        <div className="mt-auto w-full pt-4">
          <div className="grid grid-cols-2 gap-2 w-full">
            <button 
              className="bg-white hover:bg-gray-100 text-black border border-black py-2 px-4 rounded transition-colors duration-300"
              onClick={handleViewDetails}
            >
              View Details
            </button>
            <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
