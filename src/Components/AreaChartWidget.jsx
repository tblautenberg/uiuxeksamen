import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const AreaChartWidget = ({ title, data, dataKeyX, dataKeyY, isDarkMode }) => {
  const strokeColor = isDarkMode ? '#ccc' : '#333';
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-100';
  const innerBgColor = isDarkMode ? 'bg-gray-700' : 'bg-white/80'; // Slightly different background inside the box
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const borderColor = isDarkMode ? 'border-white/20' : 'border-gray-300';

  return (
    <div className={`${bgColor} ${borderColor} p-6 rounded-lg shadow-md border`}>
      <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>{title}</h3>
      <div className={`${innerBgColor} p-4 rounded-lg`}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={strokeColor} />
            <XAxis dataKey={dataKeyX} stroke={strokeColor} />
            <YAxis stroke={strokeColor} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={dataKeyY}
              stroke="#00D8FF"
              fill="#00D8FF"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartWidget;
