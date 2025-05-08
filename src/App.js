// App.js
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Hello, Tailwind CSS!</h1>
        <p className="text-gray-700 text-lg">
          Your React app is now styled with Tailwind CSS.
        </p>
        <p className ="text-green-400">
          This is a custom color from your Tailwind configuration.
        </p>
        <p className='text-yellow-400'>
          This is another custom color from your Tailwind configuration.
        </p>
      </div>
    </div>
  );
}

export default App;
