import { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = () => {
    const { allEmployees, getAllEmployees } = useContext(EmployeeContext);

    useEffect(() => {
        getAllEmployees()
    }, []);

    return (<>
        <h2>List of Employees</h2>
        {allEmployees?.map(employee => {
            return (
                <div className="employee" id={`employee--${employee.id}`}>
                    <div className="employee__name">
                        Employee: {employee.name}
                    </div>
                    <div className="employee__address">
                        Address: {employee.address}
                    </div>
                </div>
            )
        })}
    </>)
}