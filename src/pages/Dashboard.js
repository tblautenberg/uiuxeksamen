import React, { useState } from 'react';
import LineChartWidget from '../Components/LineChartWidget';
import PieChartWidget from '../Components/PieChartWidget';
import AreaChartWidget from '../Components/AreaChartWidget';
import BarChartWidget from '../Components/BarChartWidget';
import ComposedChartWidget from '../Components/ComposedChartWidget';
import RadarChartWidget from '../Components/RadarChartWidget';

const sampleData = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 60 },
  { name: 'Thu', value: 50 },
  { name: 'Fri', value: 80 },
];

const Dashboard = () => {
  // State to control widget visibility
  const [showLineChart, setShowLineChart] = useState(true);
  const [showPieChart, setShowPieChart] = useState(true);
  const [showAreaChart, setShowAreaChart] = useState(true);
  const [showBarChart, setShowBarChart] = useState(true);
  const [showComposedChart, setShowComposedChart] = useState(true);
  const [showRadarChart, setShowRadarChart] = useState(true);

  // State for theme toggle (dark or light)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle functions for each widget
  const toggleLineChart = () => setShowLineChart(!showLineChart);
  const togglePieChart = () => setShowPieChart(!showPieChart);
  const toggleAreaChart = () => setShowAreaChart(!showAreaChart);
  const toggleBarChart = () => setShowBarChart(!showBarChart);
  const toggleComposedChart = () => setShowComposedChart(!showComposedChart);
  const toggleRadarChart = () => setShowRadarChart(!showRadarChart);

  // Toggle theme mode (light/dark)
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-white text-black"}>
      <div className="flex p-6">
        {/* Sidebar */}
        <div className={isDarkMode ? "w-1/6 bg-gray-800 p-4 rounded-lg shadow-lg" : "w-1/6 bg-gray-100 p-4 rounded-lg shadow-lg"}>
          <h2 className={isDarkMode ? "text-xl font-bold text-center text-white mb-6" : "text-xl font-bold text-center text-black mb-6"}>Widgets</h2>
          <div className="space-y-4">
            <button 
              onClick={toggleLineChart}
              className="w-full text-left p-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white"
            >
              {showLineChart ? 'Hide' : 'Show'} Line Chart
            </button>
            <button 
              onClick={togglePieChart}
              className="w-full text-left p-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white"
            >
              {showPieChart ? 'Hide' : 'Show'} Pie Chart
            </button>
            <button 
              onClick={toggleAreaChart}
              className="w-full text-left p-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white"
            >
              {showAreaChart ? 'Hide' : 'Show'} Area Chart
            </button>
            <button 
              onClick={toggleBarChart}
              className="w-full text-left p-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white"
            >
              {showBarChart ? 'Hide' : 'Show'} Bar Chart
            </button>
            <button 
              onClick={toggleComposedChart}
              className="w-full text-left p-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white"
            >
              {showComposedChart ? 'Hide' : 'Show'} Composed Chart
            </button>
            <button 
              onClick={toggleRadarChart}
              className="w-full text-left p-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white"
            >
              {showRadarChart ? 'Hide' : 'Show'} Radar Chart
            </button>
          </div>
          {/* Theme toggle button */}
          <button 
            onClick={toggleTheme}
            className={isDarkMode ? "mt-4 w-full text-left p-2 bg-yellow-600 hover:bg-yellow-500 rounded-md text-white" : "mt-4 w-full text-left p-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white"}
          >
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-4">
          <h1 className={isDarkMode ? "text-3xl font-bold mb-4 text-white" : "text-3xl font-bold mb-4 text-black"}>Your Dashboard</h1>
          <p className={isDarkMode ? "text-gray-300 mb-4" : "text-gray-700 mb-4"}>
            Welcome, 🐷! Here you can view your performance metrics and insights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {/* Conditional rendering for Line Chart */}
            {showLineChart && (
              <LineChartWidget title="📊 Pigs total weight" data={sampleData} dataKeyX="name" dataKeyY="value" />
            )}

            {/* Conditional rendering for Pie Chart */}
            {showPieChart && (
              <PieChartWidget title="📈 KG food eaten pr/day" data={sampleData} dataKeyX="name" dataKeyY="value" />
            )}
            {showAreaChart && (
              <AreaChartWidget
                title="🌿 Sales Growth"
                data={sampleData}
                dataKeyX="name"
                dataKeyY="value"
                isDarkMode={isDarkMode}
              />
            )}
            {showBarChart && (
              <BarChartWidget
                title="📉 Sales Distribution"
                data={sampleData}
                dataKeyX="name"
                dataKeyY="value"
                isDarkMode={isDarkMode}
              />
            )}
            {showComposedChart && (
              <ComposedChartWidget
                title="📊 Monthly Comparison"
                data={sampleData}
                dataKeyX="name"
                dataKeyY="value"
                isDarkMode={isDarkMode}
              />
            )}
            {/* Conditional rendering for Radar Chart */}
            {showRadarChart && (
              <RadarChartWidget
                title="📡 Weekly Performance by Subject"
                data={sampleData}
                isDarkMode={isDarkMode}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
