import React from "react"
import { LocationList } from "./location/LocationList.js"
import "./kennels.css"
import { AnimalList } from "./animal/AnimalList.js"
import { AnimalProvider } from "./animal/AnimalProvider.js"

export const Kennels = () => (
    <>
        <h2>Nashville Kennels</h2>
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>
        <LocationList />
    </>
)