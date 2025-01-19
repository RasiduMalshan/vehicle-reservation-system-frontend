import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Car Booking System</h1>
            <p className="text-lg text-gray-600 mb-6">Easily book cars with just a few clicks!</p>
            <a href="/login" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Get Started</a>
        </div>
    );
};

export default HomePage;
