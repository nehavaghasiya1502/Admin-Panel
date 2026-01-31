import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const filteredProducts = products.filter(p => {
    const matchCategory =
      selectedCategory === "all" || p.category === selectedCategory;

    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
      <div className="page-animate">
      <h2 className="page-title">Products</h2>

      {/* 🔍 TOP BAR */}
      <div className="product-topbar">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category-tabs">
          <button
            className={selectedCategory === "all" ? "active" : ""}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>

          {categories.map((cat, i) => (
            <button
              key={i}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 🛒 PRODUCTS */}
      <div className="grid">
        {filteredProducts.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title.slice(0, 45)}...</h3>
            <p>₹ {p.price}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Products;
