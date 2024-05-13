import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

function BarChartBox({ title, color, dataKey, chartData, unit }) {
  const renderTooltip = (props) => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const displayValue = unit === "profit" ? `₹${value}` : value;
      return (
        <div className="custom-tooltip">
          <p>{displayValue}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="barChartBox w-full h-full">
      <h1 className="text-xl mb-4">{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <Tooltip
              content={renderTooltip}
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartBox;
