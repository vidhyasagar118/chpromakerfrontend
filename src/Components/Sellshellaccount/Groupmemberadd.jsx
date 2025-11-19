import React from "react";

const Groupmemberadd = ({ value, onChange, onAdd }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <input 
        type="text" 
        placeholder="Enter Member Name"
        value={value}
        onChange={onChange}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default Groupmemberadd;
