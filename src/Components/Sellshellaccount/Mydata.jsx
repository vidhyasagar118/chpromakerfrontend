import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import "./Mydata.css";

const Mydata = (props) => {
  const location = useLocation();
  const { shopname } = location.state || {};

  const [activeTab, setActiveTab] = useState("cloths");

  const clothsData = [
    { id: 1, name: "T-Shirt", type: "Cotton", num: 50 },
    { id: 2, name: "Jeans", type: "Denim", num: 30 },
    { id: 3, name: "Jacket", type: "Leather", num: 15 },
  ];

  const toysData = [
    { id: 1, name: "Teddy Bear", type: "Soft Toy", num: 20 },
    { id: 2, name: "Car", type: "Plastic", num: 40 },
    { id: 3, name: "Doll", type: "Barbie", num: 25 },
  ];

  const shoesData = [
    { id: 1, name: "Sneakers", type: "Casual", num: 60 },
    { id: 2, name: "Boots", type: "Leather", num: 25 },
    { id: 3, name: "Sandals", type: "Open", num: 40 },
  ];

  const electricalData = [
    { id: 1, name: "Bulb", type: "LED", num: 100 },
    { id: 2, name: "Fan", type: "Ceiling", num: 15 },
    { id: 3, name: "Iron", type: "Press", num: 20 },
  ];

  const renderTable = (data) => (
    <table className="datatable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.num}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className='Mydata'>
      <h1>{shopname || "No shop name provided"}</h1>
      
      <div className='mainMydatadiv'>
        <div className='mydataoptiondiv'>
          <ul>
            <li>
              <NavLink 
                to="#" 
                className={activeTab === "cloths" ? "active" : ""}
                onClick={() => setActiveTab("cloths")}
              >
                Cloths
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="#" 
                className={activeTab === "toys" ? "active" : ""}
                onClick={() => setActiveTab("toys")}
              >
                Toys
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="#" 
                className={activeTab === "shoes" ? "active" : ""}
                onClick={() => setActiveTab("shoes")}
              >
                Shoes
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="#" 
                className={activeTab === "electricalthing" ? "active" : ""}
                onClick={() => setActiveTab("electricalthing")}
              >
                Other
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='tabContent'>
          {activeTab === "cloths" && renderTable(clothsData)}
          {activeTab === "toys" && renderTable(toysData)}
          {activeTab === "shoes" && renderTable(shoesData)}
          {activeTab === "electricalthing" && renderTable(electricalData)}
        </div>
      </div>
    </div>
  );
};

export default Mydata;
