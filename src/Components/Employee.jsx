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
    <div>
    {employees.map((employee) => (
      <article key={employee.id} className="employee">
        <h3>{employee.prefix} {employee.firstName} {employee.lastName}</h3>
        <h4>{employee.title}</h4>
        <button>Show Pets</button>
        <PetList />
      </article>
    ))}
    </div>
  );
};

export default Employee;