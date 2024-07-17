import { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"

export const CustomerList = () => {
    const { allCustomers, getAllCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getAllCustomers()
    }, [])

    return (<>
        <h2>List of Customers</h2>
        {allCustomers?.map(customer => {
            return (
                <div className="customer" id={`customer--${customer.id}`}>
                    <div className="customer__name">
                        Customer: {customer.name}
                    </div>
                    <div className="customer__address">
                        Address: {customer.address}
                    </div>
                </div>
            )
        })}
    </>)
}