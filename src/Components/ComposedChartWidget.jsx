import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ComposedChartWidget = ({ title, data, dataKeyX, dataKeyY }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey={dataKeyX} stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey={dataKeyY} fill="#00D8FF" />
          <Line type="monotone" dataKey={dataKeyY} stroke="#ff7300" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComposedChartWidget;
