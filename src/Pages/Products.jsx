import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <h2 className="page-title">Products</h2>
      <div className="grid">
        {products.map(p => (
          <div className="card" key={p.id}>
            <img src={p.image} alt="" />
            <h3>{p.title.slice(0, 40)}...</h3>
            <p>₹ {p.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
