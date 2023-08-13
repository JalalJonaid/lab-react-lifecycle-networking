import {React, useEffect, useState} from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = () => {

  const [employees, setEmployees] = useState([]);

  function getFeaturedEmployees() {
    fetch("https://one0-2-vet-api.onrender.com/api/employees")
      .then((data) => (data.json()))
      .then((json)=> {
        setEmployees(json)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getFeaturedEmployees();
  }, []);

  return (
    <article className="employee">
      <h3>Test {employees.length ? employees[0].firstName : ""}</h3>
      <h4>Staff Member Title</h4>
      <button>Show Pets</button>
      <PetList />
    </article>
  );
};

export default Employee;