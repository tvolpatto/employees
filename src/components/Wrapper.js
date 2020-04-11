import React, { Component } from 'react'
import employees from "../utils/db.json"
import Filter from './Filter'
import Table from './Table'



export default class Wrapper extends Component {
    state = {
        empToRender : employees
    };

    componentDidMount() {
        this.setState(this.state);
    }

    handleClick = event => {
        console.log(event.target)
    }

    handleInputChange = event => {
        const value = event.target.value.toLowerCase();
        const filteredList = employees.filter(emp => {
            if (emp.name.toLowerCase().includes(value) 
                || emp.department.toLowerCase().includes(value)
                || emp.email.toLowerCase().includes(value)) {
                return emp;
            }
        });
       this.setState({empToRender : filteredList})

    }

    render() {
        return (
            <div>
                <Filter handleInputChange={this.handleInputChange}/>
                <Table employees={this.state.empToRender} handleClick={this.handleClick}/>
            </div>
        )
    }
}
