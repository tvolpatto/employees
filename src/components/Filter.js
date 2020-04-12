import React from 'react'

export default function Filter(props) {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Type a name, email or department to filter"
                aria-label="Filter option" aria-describedby="basic-addon2" 
                onChange={props.handleInputChange} />          
        </div>
    )
}

