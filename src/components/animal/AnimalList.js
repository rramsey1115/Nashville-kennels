import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { allAnimals, getAllAnimals } = useContext(AnimalContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("AnimalList: useEffect - getAnimals")
        getAllAnimals()
    }, [])

    return (
        <>
            <h2>List of Animals</h2>
            <section className="animals">
                {
                    allAnimals?.map(animal => {
                        return (
                            <div className="animal" id={`animal--${animal.id}`}>
                                <div className="animal__name">
                                    Name: {animal.name}
                                </div>
                                <div className="animal__breed">
                                    Breed: {animal.breed}
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}