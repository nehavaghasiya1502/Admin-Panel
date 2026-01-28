import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

const ProductsBarChart = ({ products, isDark }) => {
  const categoryCount = {};
  products.forEach(p => {
    categoryCount[p.category] = (categoryCount[p.category] || 0) + 1;
  });

  const data = Object.keys(categoryCount).map(cat => ({
    name: cat,
    count: categoryCount[cat]
  }));

  return (
    <>
      <h3 style={{ color: isDark ? "#f8fafc" : "#020617" }}>
        Products by Category
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="name" stroke={isDark ? "#cbd5f5" : "#020617"} />
          <YAxis stroke={isDark ? "#cbd5f5" : "#020617"} />
          <Tooltip />
          <Bar
            dataKey="count"
            radius={[10, 10, 0, 0]}
            fill={isDark ? "#22c55e" : "#15803d"}
            isAnimationActive
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ProductsBarChart;
