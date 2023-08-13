import {React, useEffect, useState} from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = () => {

  const employeeIds = ["z7GIN_i", "vlJtFOU", "t3qV6bu", "xB3uGgZk", "KJ30Pcw"];

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
      {
        

      }
      <h3>{employees.length ? employees[0].firstName : ""}</h3>
      <h4>{employees.length ? employees[0].title : ""}</h4>
      <button>Show Pets</button>
      <PetList/>
    </article>
  );
};

export default Employee;