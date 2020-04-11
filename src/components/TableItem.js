import React from 'react'

export default function TableItem(props) {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.department}</td>
        </tr>
    )
}
