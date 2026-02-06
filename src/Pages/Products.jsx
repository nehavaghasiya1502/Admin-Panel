import { useEffect, useState, useContext } from "react";
import "./Products.css";
import { Pagination, Box } from "@mui/material";
import { ThemeContext } from "../Context/ThemeContext";

const Products = ({
  products,
  setProducts,
  setActivePage,
  setEditProduct,
}) => {
  const { theme } = useContext(ThemeContext);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  /* FETCH CATEGORIES */
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => setCategories([]));
  }, []);

  /* FILTER PRODUCTS */
  const filteredProducts = products.filter((p) => {
    const catOk =
      selectedCategory === "all" || p.category === selectedCategory;
    const searchOk = p.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return catOk && searchOk;
  });

  /* PAGINATION */
  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filteredProducts.slice(
    start,
    start + ITEMS_PER_PAGE
  );

  /* DELETE */
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="products-page page-animate">
      {/* HEADER */}
      <div className="products-header">
        <h2 className="page-title">Products</h2>

        <button
          className="add-product-btn"
          onClick={() => {
            setEditProduct(null);
            setActivePage("add-product");
          }}
        >
          + Add Product
        </button>
      </div>

      {/* SEARCH + CATEGORY */}
      <div className="product-topbar">
        <input
          placeholder="Search product..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <div className="category-tabs">
          <button
            className={selectedCategory === "all" ? "active" : ""}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* TABLE */}
      <table className="products-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
  {paginated.map((p) => {
    const stock = Number(p.stock ?? 0);

    return (
      <tr key={p.id}>
        <td data-label="Image">
          <img src={p.image} alt={p.title} />
        </td>

        <td data-label="Title">{p.title}</td>

        <td data-label="Price">₹ {p.price}</td>

        <td data-label="Stock" className="stock-cell">
          <span
            className={`stock-dot ${stock <= 4 ? "low" : "ok"}`}
          ></span>
          {stock}
        </td>

        <td data-label="Category">{p.category}</td>

        <td data-label="Action">
          <div className="action-btns">
            <button
              className="edit-btn"
              onClick={() => {
                setEditProduct(p);
                setActivePage("add-product");
              }}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteProduct(p.id)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  })}
</tbody>

      </table>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, v) => setCurrentPage(v)}
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                color:
                  theme === "dark" ? "#e5e7eb" : "#020617",
              },
              "& .Mui-selected": {
                background:
                  "linear-gradient(135deg,#3b82f6,#06b6d4)",
                color: "#fff",
              },
            }}
          />
        </Box>
      )}
    </div>
  );
};

export default Products;
