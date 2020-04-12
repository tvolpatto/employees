import React from 'react'
import TableItem from './TableItem'

function showIcon(props, field){
    if (props.field=== field) {
        return props.order ==='asc'? <i class="fas fa-sort-up"></i> : <i class="fas fa-sort-down"/>;
    }
} 

export default function Table(props) {  
    return (
        <div>
          <div>
             <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" onClick={props.handleSort}>
                                Id                                
                                {showIcon(props, "id")}
                            </th>
                            <th scope="col" onClick={props.handleSort}>
                                Name
                                {showIcon(props, "name")}
                            </th>
                            <th scope="col" onClick={props.handleSort}>
                                Email
                                {showIcon(props, "email")}
                            </th>
                            <th scope="col" onClick={props.handleSort}>
                                Department
                                {showIcon(props, "department")}
                            </th>
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
