import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ChartBox = ({ color, title, dataKey, number, percentage, chartData }) => {
  return (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className={`text-lg ${color}`} />
            <span className="text-base xxl:text-lg">{title}</span>
          </div>
          <h1 className="text-2xl xxl:text-3xl">{number}</h1>
          <Link to="/" className={`text-base ${color}`}>
            View all
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col items-end">
          <span
            className={`font-bold text-2xl ${
              percentage < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {percentage}%
          </span>
          <span className="text-base">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
