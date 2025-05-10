import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PieChartWidget = ({ title, data, dataKeyX, dataKeyY, isDarkMode }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6699'];

  // Define colors based on dark mode
  const strokeColor = isDarkMode ? '#ccc' : '#333';
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-100';
  const innerBgColor = isDarkMode ? 'bg-gray-700' : 'bg-white/80'; // Slightly different background inside the box
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const borderColor = isDarkMode ? 'border-white/20' : 'border-gray-300';

  // Tooltip style for dark mode
  const tooltipStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
    border: isDarkMode ? '1px solid #444' : '1px solid #ddd',
  };

  // Legend style for dark mode
  const legendStyle = {
    color: isDarkMode ? '#ccc' : '#333',
  };

  return (
    <div className={`${bgColor} ${borderColor} p-6 rounded-lg shadow-md border`}>
      <h2 className={`text-xl font-semibold mb-4 ${textColor}`}>{title}</h2>
      <div className={`${innerBgColor} p-4 rounded-lg`}>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey={dataKeyY}
              nameKey={dataKeyX}
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={legendStyle} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartWidget;
