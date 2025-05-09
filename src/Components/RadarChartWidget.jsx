import React from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const RadarChartWidget = ({ title, data, isDarkMode }) => {
  const strokeColor = isDarkMode ? '#ccc' : '#333';
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white/10';
  const textColor = isDarkMode ? 'text-white' : 'text-black';

  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md border border-white/20`}>
      <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart outerRadius="80%" data={data}>
          <PolarGrid stroke={strokeColor} />
          <PolarAngleAxis dataKey="subject" stroke={strokeColor} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} stroke={strokeColor} />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#00D8FF"
            fill="#00D8FF"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartWidget;
