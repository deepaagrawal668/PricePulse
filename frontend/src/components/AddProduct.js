import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category, url }),
    }).then(() => {
      alert("Product added!");
      setName(""); setCategory(""); setUrl("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
