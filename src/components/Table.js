import React from 'react'
import TableItem from './TableItem'

export default function Table(props) {
    return (
        <div>
          <div>
             <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" onClick={props.handleSort}>Id</th>
                            <th scope="col" onClick={props.handleSort}>Name</th>
                            <th scope="col" onClick={props.handleSort}>Email</th>
                            <th scope="col" onClick={props.handleSort}>Department</th>
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
