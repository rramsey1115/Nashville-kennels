import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    const [allAnimals, setAllAnimals] = useState([]);
    const [animal, setAnimal] = useState({});

    const getAllAnimals = () => {
        return fetch("http://localhost:8088/animals?_embed=location&_embed=customer")
        .then(res => res.json())
        .then(setAllAnimals)
    }

    const getAnimal = (id) => {
        return fetch(`http://localhost:8088/animals/${id}`)
        .then(res => res.json()).then(setAnimal)
    }

    const addAnimal = (animalObj) => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAllAnimals)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={{
            allAnimals, getAllAnimals, addAnimal, animal, getAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}