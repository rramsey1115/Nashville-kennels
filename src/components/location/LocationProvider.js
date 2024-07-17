import { createContext, useState } from "react";

export const LocationContext = createContext();

export const LocationProvider = (props) => {
    const [allLocations, setAllLocations] = useState([]);
    const [location, setLocation] = useState({});

    const getAllLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(setAllLocations)
    }

    const getLocation = (id) => {
        return fetch(`http://localhost:8088/locations/${id}`)
        .then(res => res.json()).then(setLocation)
    }

    const addLocation = (locationObj) => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
            .then(getAllLocations)
    }

    return (
        <LocationContext.Provider value={{
            allLocations, getAllLocations, addLocation, location, getLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )

}