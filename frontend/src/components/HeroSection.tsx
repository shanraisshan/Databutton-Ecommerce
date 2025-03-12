import React from "react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Fashion hero"
          className="h-full w-full object-cover opacity-70"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Summer Collection <br />
            <span className="block text-white">2025</span>
          </h1>
          <p className="mt-6 text-xl text-white">
            Discover our latest t-shirt designs that combine comfort with bold style.
          </p>
          <div className="mt-10 flex items-center space-x-6">
            <button
              onClick={() => console.log("Shop Now clicked")}
              className="rounded-md bg-white px-8 py-3 text-base font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Shop Now
            </button>
            <button
              onClick={() => console.log("View Collection clicked")}
              className="rounded-md border border-white px-8 py-3 text-base font-medium text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              View Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
