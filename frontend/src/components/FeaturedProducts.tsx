import React from "react";
import { ProductCard } from "components/ProductCard";
import { featuredProducts } from "utils/productData";

export const FeaturedProducts = () => {

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured T-Shirts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Our most popular designs, selected just for you.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0]}
              category={product.category}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => console.log("View All Products clicked")}
            className="inline-block rounded-md bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};
