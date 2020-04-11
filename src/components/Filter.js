import React from 'react'

export default function Filter(props) {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Name or Department"
                aria-label="Recipient's username" aria-describedby="basic-addon2" 
                onChange={props.handleInputChange} />          
        </div>
    )
}

