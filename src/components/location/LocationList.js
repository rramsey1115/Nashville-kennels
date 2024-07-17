import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
    const { allLocations, getAllLocations } = useContext(LocationContext)

    useEffect(() => {
        getAllLocations()
    }, [])

    return (<article className="locations">
        <h2>List of Locations</h2>
        {allLocations?.map(location => {
            return (
                <div className="location" id={`location--${location.id}`}>
                    <div className="location__name">
                        Location: {location.name}
                    </div>
                    <div className="location__address">
                        Address: {location.address}
                    </div>
                </div>
            )
        })}
    </article>)
}