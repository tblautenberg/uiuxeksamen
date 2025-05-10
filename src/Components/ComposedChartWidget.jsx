import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const ComposedChartWidget = ({ title, data, dataKeyX, dataKeyY, isDarkMode }) => {
  const strokeColor = isDarkMode ? '#ccc' : '#333';
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-black';

  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md border border-white/20`}>
      <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={strokeColor} />
          <XAxis dataKey={dataKeyX} stroke={strokeColor} />
          <YAxis stroke={strokeColor} />
          <Tooltip />
          <Bar dataKey={dataKeyY} fill="#00D8FF" />
          <Line type="monotone" dataKey={dataKeyY} stroke="#ff7300" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComposedChartWidget;
