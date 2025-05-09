import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PieChartWidget = ({ title, data, dataKeyX, dataKeyY }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6699'];

  return (
    <div className="bg-white/10 p-6 rounded-lg shadow-md border border-white/20">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} dataKey={dataKeyY} nameKey={dataKeyX} outerRadius={80} fill="#8884d8" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartWidget;
