import { createContext, useState } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
    const [allCustomers, setAllCustomers] = useState([]);
    const [customer, setCustomer] = useState({});

    const getAllCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setAllCustomers)
    }

    const getCustomer = (id) => {
        return fetch(`http://localhost:8088/customers/${id}`)
            .then(res => res.json())
            .then(setCustomer)
    }

    const addCustomer = (customerObj) => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
            .then(getAllCustomers)
    }

    return (
        <CustomerContext.Provider value={{
            allCustomers, getAllCustomers, addCustomer, customer, getCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )

}