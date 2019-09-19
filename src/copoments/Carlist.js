import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const Carlist = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    fetch("https://carstockrest.herokuapp.com/cars")
      .then(response => response.json())
      .then(data => setCars(data._embedded.cars));
  };

  const columns = [
    { header: "Brand", accessor: "brand" },
    { header: "Model", accessor: "model" },
    { header: "Color", accessor: "color" },
    { header: "Fuel", accessor: "fuel" },
    { header: "Price (€)", accessor: "price" },
    { header: "Year ", accessor: "year" }
  ];
  return (
    <div>
      <ReactTable filterable={true} data={cars} columns={columns} />
    </div>
  );
};

export default Carlist;
