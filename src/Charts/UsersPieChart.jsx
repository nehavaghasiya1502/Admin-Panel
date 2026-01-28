import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from "recharts";

const UsersPieChart = ({ users, isDark }) => {
  const cityCount = {};
  users.forEach(u => {
    cityCount[u.address.city] = (cityCount[u.address.city] || 0) + 1;
  });

  const data = Object.keys(cityCount).map(city => ({
    name: city,
    value: cityCount[city]
  }));

  const colors = isDark
    ? ["#22c55e", "#38bdf8", "#a78bfa", "#f472b6", "#facc15"]
    : ["#15803d", "#0369a1", "#6d28d9", "#be185d", "#ca8a04"];

  return (
    <>
      <h3 style={{ color: isDark ? "#f8fafc" : "#020617" }}>
        Users by City
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={110}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive
          >
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default UsersPieChart;
