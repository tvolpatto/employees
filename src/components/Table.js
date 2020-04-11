import React from 'react'
import TableItem from './TableItem'

export default function Table(props) {
    return (
        <div>
          <div>
             <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.employees.map(emp =>
                           <TableItem 
                                id={emp.id}
                                name={emp.name}
                                email={emp.email}
                                department={emp.department}
                            />

                        )}

                    </tbody>
                </table> 
            </div>  
        </div>
    )
}
