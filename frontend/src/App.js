import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>E-Commerce Store</h1>

      {products.map(p => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          <b>{p.name}</b> - ₹{p.price}
          <button style={{ marginLeft: "10px" }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
