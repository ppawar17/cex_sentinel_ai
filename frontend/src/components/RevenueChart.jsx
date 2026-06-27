import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { time: "10:00", loss: 2 },
  { time: "10:05", loss: 8 },
  { time: "10:10", loss: 15 },
  { time: "10:15", loss: 21 }
];

function RevenueChart() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 h-96">
      <h2 className="text-white text-2xl mb-4">
        Revenue Loss Trend
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="loss"
            stroke="#ef4444"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;