import React, { Component } from 'react'
import employees from "../utils/db.json"
import Filter from './Filter'

export default class Wrapper extends Component {
    render() {
        return (
            <div>
                <Filter/>
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
                        {employees.map(emp =>
                            <tr>
                                <th scope="row">{emp.id}</th>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.department}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}
