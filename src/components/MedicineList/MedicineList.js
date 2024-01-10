import React from "react";



const MedicineList = (props) => {
  return (
    <>
      {props.medicines.map((medicine, index) => (
        <div key={index}>
          <span>{medicine.name}</span>
          <span>{medicine.price}</span>
          <span>{medicine.description}</span>
          <span>Quantity</span>
        </div>
      ))}
    </>
  );
};

export default MedicineList;
