import React, { Component } from 'react'
import employees from "../utils/db.json"
import Filter from './Filter'
import Table from './Table'

function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
}

export default class Wrapper extends Component {
    state = {
        empToRender : employees,
        order : 'asc',
        field : "id" 
    };

    componentDidMount() {
        this.setState(this.state);
    }

    handleSortClick = event => {
        const field = event.target.innerText.toLowerCase();
        const  order =  this.state.order ==='asc' ? 'desc' : 'asc';
        const sortedList = this.state.empToRender.sort(compareValues(field, order));
        this.setState({
            empToRender : sortedList,
            order : order,
            field : field
        });
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
            <div className="container mt-4 mx-auto">
                <h1 className="pt-2 pb-2 text-center">Employee directory</h1>
                <Filter handleInputChange={this.handleInputChange}/>
                <Table 
                    employees={this.state.empToRender} 
                    handleSort={this.handleSortClick}
                    order={this.state.order}
                    field={this.state.field}
                />
            </div>
        )
    }
}
