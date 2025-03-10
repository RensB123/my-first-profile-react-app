import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to My Profile App</h1>
      <p className="text-gray-600">
        A simple React application built with Tailwind CSS.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Get Started
      </button>
    </div>
  );
};

export default HomePage; 