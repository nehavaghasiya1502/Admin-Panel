import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./AddProduct.css";

const AddProduct = ({
  setActivePage,
  onAddProduct,
  onUpdateProduct,
  editProduct
}) => {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });

  useEffect(() => {
    if (editProduct) {
      setFormData(editProduct);
    } else {
      setFormData({
        title: "",
        price: "",
        category: "",
        image: "",
        stock: "",
      });
    }
  }, [editProduct]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.price) {
      alert("Title & Price required");
      return;
    }

    if (editProduct) {
      onUpdateProduct(formData);
    } else {
      onAddProduct({
        title: formData.title,
        price: formData.price,
        category: formData.category || "others",
        image:
          formData.image ||
          "https://via.placeholder.com/50",
        stock: formData.stock || 0,
      });
    }

    // back to products page
    setActivePage("products");
  };

  return (
    <div className="page-animate">
      <div className={`add-product-page ${theme}`}>
        <div className="add-header">
          <h2>{editProduct ? "Edit Product" : "Add New Product"}</h2>
        </div>

        <div className="add-card">
          <div className="form-group">
            <label>Product Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="₹ Price"
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Jewelery">Jewelery</option>
              <option value="Men's Clothing">Men's Clothing</option>
              <option value="Women's Clothing">Women's Clothing</option>
            </select>

          </div>

          <div className="form-group">
            <label>Stock</label>
            <input
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Stock quantity"
            />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste image URL"
            />
          </div>

          {formData.image && (
            <div className="image-preview">
              <img src={formData.image} alt="preview" />
            </div>
          )}

          <button className="submit-btn" onClick={handleSubmit}>
            {editProduct ? "Update Product" : "Add Product"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
