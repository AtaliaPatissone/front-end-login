import React from 'react';
import { Header } from '../components/header';

const Home = () => {
  return (
    <>
      <Header /> 
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Grand Home</h1>
        <p className="text-lg text-gray-600">Welcome to Data Storage Challenge</p>
      </div>
    </div>
      
    
    </>
  );
};

export default Home; 