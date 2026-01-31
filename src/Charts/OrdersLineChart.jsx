import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const OrdersLineChart = ({ orders, isDark }) => {
  const data = orders.map((o, i) => ({
    name: `Order ${i + 1}`,
    items: o.products.length
  }));

  return (
    <div className="fade-card page-animate">

      <h3 style={{ color: isDark ? "#f8fafc" : "#020617" }}>
        Orders Activity
      </h3>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="name" stroke={isDark ? "#cbd5f5" : "#020617"} />
          <YAxis stroke={isDark ? "#cbd5f5" : "#020617"} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="items"
            stroke={isDark ? "#38bdf8" : "#2563eb"}
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
            isAnimationActive
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default OrdersLineChart;
