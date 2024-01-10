import React, { Fragment, useState } from "react";
import MedicineList from "../MedicineList/MedicineList";
import classes from "./MedicineForm.module.css";

const MedicineForm = () => {
  const [initialName, setInitialName] = useState("");
  const [initialPrice, setInitialPrice] = useState("");
  const [initialDesc, setInitialDesc] = useState("");
  const [medicines, setMedicines] = useState([]);

  const nameChangeHandler = (event) => {
    setInitialName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setInitialPrice(event.target.value);
  };

  const descChangeHandler = (event) => {
    setInitialDesc(event.target.value);
  };

  const addMedicineHandler = () => {
    const newMedicine = {
      name: initialName,
      price: initialPrice,
      description: initialDesc,
    };

    setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);

    setInitialName("");
    setInitialPrice("");
    setInitialDesc("");
  };

  return (
    <Fragment>
      <form className={classes.myform}>
        <label htmlFor="MedicineName">Medicine Name</label>
        <input onChange={nameChangeHandler} type="text" value={initialName} />

        <label htmlFor="Price">Price</label>
        <input
          onChange={priceChangeHandler}
          type="number"
          value={initialPrice}
        />

        <label htmlFor="Description">Description</label>
        <input onChange={descChangeHandler} type="text" value={initialDesc} />

        <button type="button" onClick={addMedicineHandler}>
          Add the medicine
        </button>
      </form>

      <MedicineList medicines={medicines} />
    </Fragment>
  );
};

export default MedicineForm;
