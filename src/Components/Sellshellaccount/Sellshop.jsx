import React from 'react';
import './Sellshop.css';

const Sellshop = () => {
  const products = [
    { name: "Laptop", id: "P001", price: 75000, count: 10 },
    { name: "Mobile", id: "P002", price: 25000, count: 20 },
    { name: "Headphones", id: "P003", price: 3000, count: 50 },
    { name: "Keyboard", id: "P004", price: 1500, count: 15 }
  ];

  return (
    <div className="Sellshop">
      <h2>Sell Shop Products</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Product ID</th>
            <th>Product Price</th>
            <th>Product Count</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>₹{item.price}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sellshop;
