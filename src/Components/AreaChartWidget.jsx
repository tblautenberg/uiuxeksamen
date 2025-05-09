import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AreaChartWidget = ({ title, data, dataKeyX, dataKeyY }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey={dataKeyX} stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Area type="monotone" dataKey={dataKeyY} stroke="#00D8FF" fill="#00D8FF" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartWidget;
