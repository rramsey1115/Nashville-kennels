import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
    const [allEmployees, setAllEmployees] = useState([]);
    const [employee, setEmployee] = useState({});

    const getAllEmployees = () => {
        return fetch("http://localhost:8088/employees?_embed=location")
            .then(res => res.json())
            .then(setAllEmployees)
    }

    const getEmployee = (id) => {
        return fetch(`http://localhost:8088/employees/${id}`)
        .then(res => res.json()).then(setEmployee)
    }

    const addEmployee = (employeeObj) => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
            .then(getAllEmployees)
    }

    return (
        <EmployeeContext.Provider value={{
            allEmployees, getAllEmployees, addEmployee, employee, getEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )

}