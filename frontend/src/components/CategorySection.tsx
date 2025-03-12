import React from "react";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, onClick }) => {
  return (
    <div 
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center bg-white bg-opacity-90 px-8 py-4 rounded-md transform transition-transform duration-300 group-hover:scale-110">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-700">Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    console.log(`${category} category clicked`);
    // Will implement navigation in future tasks
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Find the perfect t-shirt for any style or occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <CategoryCard
            title="Men's T-Shirts"
            image="https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            onClick={() => handleCategoryClick("men")}
          />
          <CategoryCard
            title="Women's T-Shirts"
            image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80"
            onClick={() => handleCategoryClick("women")}
          />
        </div>
      </div>
    </section>
  );
};
