import React, { Component } from 'react'
import employees from "../utils/db.json"

export default class Wrapper extends Component {
    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Name or Department" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
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
