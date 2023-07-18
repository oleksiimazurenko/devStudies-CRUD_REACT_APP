import EmployeesListItem from "../employees-list-item/employees-list-item";
import { Component } from 'react';

import './employees-list.css';


class EmployeesList extends Component {
    
    constructor(props){
        super(props);
    }

    render(){

        const { data, deleteItem, onToggleProps} = this.props;

        const elements = data.map(item =>  {
            const { id, ...itemProps } = item;

            return <EmployeesListItem key={id} 
                                    {...itemProps} 
                                    deleteItem = {() => deleteItem(id)}
                                    onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))}/>
        });
    
        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        )
    
    }
    
}

export default EmployeesList;