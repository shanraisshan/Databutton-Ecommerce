import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Will implement search functionality in future tasks
    console.log("Searching for:", searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}> 
            <h1 className="text-2xl font-bold">ThreadCraft</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8"> 
            <a href="#" className="text-gray-700 hover:text-black font-medium">Men</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">Women</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">New Arrivals</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">Sale</a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-grow max-w-md mx-4"> 
            <form onSubmit={handleSearch} className="relative"> 
              <input
                type="text"
                placeholder="Search for t-shirts..."
                className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 border border-transparent rounded-md focus:outline-none focus:border-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="w-4 h-4 text-gray-400" />
              </div> 
            </form>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-700 hover:text-black p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={() => console.log("Login/Profile clicked")}
            >
              <User className="w-6 h-6" />
            </button>
            <button 
              className="text-gray-700 hover:text-black p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 relative"
              onClick={() => console.log("Cart clicked")}
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button 
              className="md:hidden text-gray-700 hover:text-black p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for t-shirts..."
              className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 border border-transparent rounded-md focus:outline-none focus:border-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3"> 
              <Search className="w-4 h-4 text-gray-400" />
            </div>
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-black font-medium px-2 py-1">Men</a>
              <a href="#" className="text-gray-700 hover:text-black font-medium px-2 py-1">Women</a>
              <a href="#" className="text-gray-700 hover:text-black font-medium px-2 py-1">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-black font-medium px-2 py-1">Sale</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
