import React from "react"
import { LocationList } from "./location/LocationList.js"
import "./kennels.css"
import { AnimalList } from "./animal/AnimalList.js"
import { AnimalProvider } from "./animal/AnimalProvider.js"
import { LocationProvider } from "./location/LocationProvider.js"
import { CustomerProvider } from "./customer/CustomerProvider.js"
import { CustomerList } from "./customer/CustomerList.js"
import { EmployeeProvider } from "./employee/EmployeeProvider.js"
import { EmployeeList } from "./employee/EmployeeList.js"

export const Kennels = () => (
    <>
        <h2>Nashville Kennels</h2>
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        <CustomerProvider>
            <CustomerList/>
        </CustomerProvider>
        <EmployeeProvider>
            <EmployeeList/>
        </EmployeeProvider>
    </>
)