import React, { Component } from 'react'
import employees from "../utils/db.json"
import Filter from './Filter'
import Table from './Table'

export default class Wrapper extends Component {
    render() {
        return (
            <div>
                <Filter/>
                <Table employees={employees}/>
            </div>
        )
    }
}
